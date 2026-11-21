import { NextResponse, type NextRequest } from "next/server";
import { XMLParser } from "fast-xml-parser";

/**
 * GET /api/widgets/youtube?channelId=UC...
 *
 * Zero-quota YouTube feed parser.
 * Reads the public RSS feed at youtube.com/feeds/videos.xml
 * and returns the latest videos as JSON.
 *
 * Edge cached: s-maxage=300, stale-while-revalidate=600
 */

interface FeedEntry {
  title: string;
  "yt:videoId": string;
  published: string;
  "media:group"?: {
    "media:thumbnail"?: {
      "@_url"?: string;
    };
    "media:description"?: string;
  };
}

interface YoutubeFeed {
  feed?: {
    entry?: FeedEntry | FeedEntry[];
  };
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const channelId = searchParams.get("channelId");

  if (!channelId) {
    return NextResponse.json(
      { error: "Missing channelId query parameter" },
      { status: 400 },
    );
  }

  const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${encodeURIComponent(channelId)}`;

  try {
    const res = await fetch(feedUrl, { next: { revalidate: 300 } });

    if (!res.ok) {
      return NextResponse.json(
        { error: `YouTube feed returned ${res.status}` },
        { status: 502 },
      );
    }

    const xml = await res.text();
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
    });
    const parsed: YoutubeFeed = parser.parse(xml);

    const rawEntries = parsed?.feed?.entry;
    const entries: FeedEntry[] = Array.isArray(rawEntries)
      ? rawEntries
      : rawEntries
        ? [rawEntries]
        : [];

    const videos = entries.slice(0, 6).map((entry) => ({
      id: entry["yt:videoId"],
      title: entry.title,
      published: entry.published,
      thumbnail:
        entry["media:group"]?.["media:thumbnail"]?.["@_url"] ??
        `https://i.ytimg.com/vi/${entry["yt:videoId"]}/hqdefault.jpg`,
      description: entry["media:group"]?.["media:description"] ?? "",
    }));

    return NextResponse.json({ channelId, videos }, {
      headers: {
        "Cache-Control":
          "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
