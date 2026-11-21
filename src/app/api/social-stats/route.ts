import { NextResponse } from "next/server";
import { XMLParser } from "fast-xml-parser";

export interface VideoItem {
  id: string;
  title: string;
  published: string;
  thumbnail: string;
  description: string;
  views: number;
  rating: number;
  url: string;
  summary: string;
  keyTakeaways: string[];
  category: "Montage" | "Analysis" | "Recruitment" | "Highlights" | "Milestone";
}

export interface SocialStatsResponse {
  timestamp: string;
  youtube: {
    handle: string;
    subscribers: number;
    subscribersDisplay: string;
    videoCount: number;
    channelUrl: string;
    avatarUrl: string;
    channelName: string;
    videos: VideoItem[];
  };
  tiktok: {
    handle: string;
    followers: number;
    followersDisplay: string;
    hearts: number;
    heartsDisplay: string;
    videosCount: number;
    profileUrl: string;
    avatarUrl: string;
    bio: string;
  };
  discord: {
    guildName: string;
    memberCount: number;
    onlineCount: number;
    inviteUrl: string;
    iconUrl: string;
    description: string;
    inviter: {
      name: string;
      globalName: string;
      avatarUrl: string;
      clanTag: string;
    };
  };
}

// Curated AI summaries and categorization for official channel videos
const VIDEO_INSIGHTS: Record<
  string,
  {
    summary: string;
    keyTakeaways: string[];
    category: "Montage" | "Analysis" | "Recruitment" | "Highlights" | "Milestone";
  }
> = {
  tqbtqe8Fxlg: {
    summary:
      "A strategic cross-region comparison analyzing playstyles, piece-control mechanics, and endgame positioning across major competitive Fortnite regions (NA, EU, APAC). Sparks debate on which region produces the most dominant tournament players.",
    keyTakeaways: [
      "Contrasts aggressive NA piece-control with calculated EU late-game surge management.",
      "Engages the competitive audience to evaluate regional mechanical supremacy.",
      "Highlights key talent emerging from underdog regions.",
    ],
    category: "Analysis",
  },
  SI1U03elvXs: {
    summary:
      "The official Arrogant Esports recruitment pitch outlining the organization's core value propositions for upcoming competitive players: structured scrim lobbies, content distribution, and an ego-free growth environment.",
    keyTakeaways: [
      "Access to organized scrims, VOD reviews, and tournament preparation.",
      "Amplified social reach across TikTok and YouTube shorts.",
      "Direct pathway to competitive team contracts.",
    ],
    category: "Recruitment",
  },
  _FjZiCt8a0U: {
    summary:
      "The flagship team montage showcasing high-octane box-fight eliminations, precision sniper picks, and high-ground retakes by team members. Also delivers critical roster transparency and signing status updates.",
    keyTakeaways: [
      "Showcases mechanical mastery across PC, PlayStation 5, and Xbox controller players.",
      "Emphasizes team discipline, sportsmanship, and roster standards.",
      "Sets the energetic tone for Arrogant's competitive evolution.",
    ],
    category: "Montage",
  },
  Nt2GUlnPkZY: {
    summary:
      "A fast-paced showcase highlighting North American squad members executing rapid triple-edits, wall replacement techniques, and aggressive tournament frags.",
    keyTakeaways: [
      "Demonstrates high mechanical APM (actions per minute) under pressure.",
      "Spotlights NA competitive playstyle and clutch resilience.",
    ],
    category: "Highlights",
  },
  "Sl07SzSS-8M": {
    summary:
      "A celebratory team milestone video reviewing recent tournament progression, placement consistency, and rapid expansion of the Arrogant Esports Discord community.",
    keyTakeaways: [
      "Reflects the foundational momentum that established Arrogant Esports in Nov 2026.",
      "Records the top community engagement on the channel with over 960+ views.",
    ],
    category: "Milestone",
  },
};

// Fallback data guaranteed to render if third-party endpoints rate-limit
const DEFAULT_VIDEOS: VideoItem[] = [
  {
    id: "tqbtqe8Fxlg",
    title: "who is the best player out of every region🤔 (SREN)#gaming #fyp #fortnite #clips #esports",
    published: "2026-10-21T18:11:31+00:00",
    thumbnail: "https://i1.ytimg.com/vi/tqbtqe8Fxlg/hqdefault.jpg",
    description:
      "hello, today we will be showing players out of every region and you should also comment which person you think is better for each region!",
    views: 564,
    rating: 5,
    url: "https://www.youtube.com/shorts/tqbtqe8Fxlg",
    summary: VIDEO_INSIGHTS["tqbtqe8Fxlg"].summary,
    keyTakeaways: VIDEO_INSIGHTS["tqbtqe8Fxlg"].keyTakeaways,
    category: VIDEO_INSIGHTS["tqbtqe8Fxlg"].category,
  },
  {
    id: "SI1U03elvXs",
    title: "3 Reasons why you should join SREN Esports🤔 #upcoming #esports #fortnite #gaming #clips",
    published: "2026-10-18T18:40:09+00:00",
    thumbnail: "https://i4.ytimg.com/vi/SI1U03elvXs/hqdefault.jpg",
    description: "all clips and audio are from people that were part of this video",
    views: 36,
    rating: 5,
    url: "https://www.youtube.com/shorts/SI1U03elvXs",
    summary: VIDEO_INSIGHTS["SI1U03elvXs"].summary,
    keyTakeaways: VIDEO_INSIGHTS["SI1U03elvXs"].keyTakeaways,
    category: VIDEO_INSIGHTS["SI1U03elvXs"].category,
  },
  {
    id: "_FjZiCt8a0U",
    title: "Introducing SREN Esports",
    published: "2026-10-12T06:45:48+00:00",
    thumbnail: "https://i4.ytimg.com/vi/_FjZiCt8a0U/hqdefault.jpg",
    description:
      "this is a video where we show clips of our SREN team members! #fortnite #montage #clips #video #gaming",
    views: 111,
    rating: 5,
    url: "https://www.youtube.com/watch?v=_FjZiCt8a0U",
    summary: VIDEO_INSIGHTS["_FjZiCt8a0U"].summary,
    keyTakeaways: VIDEO_INSIGHTS["_FjZiCt8a0U"].keyTakeaways,
    category: VIDEO_INSIGHTS["_FjZiCt8a0U"].category,
  },
  {
    id: "Nt2GUlnPkZY",
    title: "SREN NA PLAYERS😳🔥 #esports #fortnite #upcoming #gaming #keyboard #mouse #controller #ps5 #xbox #pc",
    published: "2026-10-09T12:44:31+00:00",
    thumbnail: "https://i3.ytimg.com/vi/Nt2GUlnPkZY/hqdefault.jpg",
    description: "SREN North American competitive players montage",
    views: 373,
    rating: 5,
    url: "https://www.youtube.com/shorts/Nt2GUlnPkZY",
    summary: VIDEO_INSIGHTS["Nt2GUlnPkZY"].summary,
    keyTakeaways: VIDEO_INSIGHTS["Nt2GUlnPkZY"].keyTakeaways,
    category: VIDEO_INSIGHTS["Nt2GUlnPkZY"].category,
  },
  {
    id: "Sl07SzSS-8M",
    title: "SREN Esports has been doing great recently! #esports #youtubeshorts #gaming #fortnite #tournament",
    published: "2026-09-22T21:24:30+00:00",
    thumbnail: "https://i4.ytimg.com/vi/Sl07SzSS-8M/hqdefault.jpg",
    description: "Tournament progression and Discord updates https://discord.gg/ehPCCDDgR",
    views: 969,
    rating: 5,
    url: "https://www.youtube.com/shorts/Sl07SzSS-8M",
    summary: VIDEO_INSIGHTS["Sl07SzSS-8M"].summary,
    keyTakeaways: VIDEO_INSIGHTS["Sl07SzSS-8M"].keyTakeaways,
    category: VIDEO_INSIGHTS["Sl07SzSS-8M"].category,
  },
];

export async function getSocialStats(): Promise<SocialStatsResponse> {
  const result: SocialStatsResponse = {
    timestamp: new Date().toISOString(),
    youtube: {
      handle: "@arrogantesports",
      subscribers: 27,
      subscribersDisplay: "27",
      videoCount: 5,
      channelUrl: "https://www.youtube.com/@arrogantesports",
      avatarUrl:
        "https://yt3.googleusercontent.com/9yqp-lOH4ws2jsSwdB-1vauTiDwHTS542H9NvNWob-ujR58Te4_zFaJ3maQfxu0vcAG0y4z3aA=s900-c-k-c0x00ffffff-no-rj",
      channelName: "Arrogant Esports",
      videos: DEFAULT_VIDEOS,
    },
    tiktok: {
      handle: "@arrogantesports",
      followers: 21,
      followersDisplay: "21",
      hearts: 61,
      heartsDisplay: "61",
      videosCount: 8,
      profileUrl: "https://www.tiktok.com/@arrogantesports",
      avatarUrl:
        "https://yt3.googleusercontent.com/9yqp-lOH4ws2jsSwdB-1vauTiDwHTS542H9NvNWob-ujR58Te4_zFaJ3maQfxu0vcAG0y4z3aA=s900-c-k-c0x00ffffff-no-rj",
      bio: "Arrogant esports. a team designed to make a change in the competitive scene.",
    },
    discord: {
      guildName: "Arrogant Esports",
      memberCount: 18,
      onlineCount: 4,
      inviteUrl: "https://discord.com/invite/H6jcHyeDA",
      iconUrl:
        "https://cdn.discordapp.com/icons/1571185170999021772/6cc646c22d3b59ea151192f568b0edae.png",
      description:
        "Arrogant esports. An esports team designed to make a change. in the competitive scene.",
      inviter: {
        name: "ARGT Cake2x",
        globalName: "ARGT Cake2x",
        avatarUrl:
          "https://cdn.discordapp.com/avatars/1484290533139546194/641d5eb4046f547f7da301d87e0567c9.png",
        clanTag: "fg",
      },
    },
  };

  // 1. Fetch live Discord stats
  try {
    const discordRes = await fetch(
      "https://discord.com/api/v10/invites/H6jcHyeDA?with_counts=true",
      {
        next: { revalidate: 60 },
      },
    );
    if (discordRes.ok) {
      const dData = await discordRes.json();
      if (dData.approximate_member_count) {
        result.discord.memberCount = dData.approximate_member_count;
      }
      if (dData.approximate_presence_count) {
        result.discord.onlineCount = dData.approximate_presence_count;
      }
      if (dData.guild?.name) {
        result.discord.guildName = dData.guild.name;
      }
      if (dData.guild?.icon && dData.guild?.id) {
        result.discord.iconUrl = `https://cdn.discordapp.com/icons/${dData.guild.id}/${dData.guild.icon}.png`;
      }
      if (dData.inviter?.global_name) {
        result.discord.inviter.name = dData.inviter.global_name;
      }
      if (dData.inviter?.avatar && dData.inviter?.id) {
        result.discord.inviter.avatarUrl = `https://cdn.discordapp.com/avatars/${dData.inviter.id}/${dData.inviter.avatar}.png`;
      }
    }
  } catch (err) {
    console.warn("Discord fetch warning:", err);
  }

  // 2. Fetch live YouTube RSS videos
  try {
    const ytFeedRes = await fetch(
      "https://www.youtube.com/feeds/videos.xml?channel_id=UC4b37tvmJM7Az28Bh9lUL2w",
      { next: { revalidate: 300 } },
    );
    if (ytFeedRes.ok) {
      const xml = await ytFeedRes.text();
      const parser = new XMLParser({
        ignoreAttributes: false,
        attributeNamePrefix: "@_",
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const parsed: any = parser.parse(xml);
      const rawEntries = parsed?.feed?.entry;
      const entries = Array.isArray(rawEntries)
        ? rawEntries
        : rawEntries
          ? [rawEntries]
          : [];

      if (entries.length > 0) {
        result.youtube.videoCount = Math.max(result.youtube.videoCount, entries.length);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        result.youtube.videos = entries.map((entry: any) => {
          const videoId = entry["yt:videoId"] || entry.id?.replace("yt:video:", "");
          const insight = VIDEO_INSIGHTS[videoId] || {
            summary:
              entry["media:group"]?.["media:description"] ||
              "Official competitive clip from the Arrogant Esports roster.",
            keyTakeaways: ["High-impact tournament gameplay.", "Team coordination."],
            category: "Highlights" as const,
          };

          const views = parseInt(
            entry["media:group"]?.["media:community"]?.["media:statistics"]?.["@_views"] ||
              "0",
            10,
          );

          const rating = parseFloat(
            entry["media:group"]?.["media:community"]?.["media:starRating"]?.["@_average"] ||
              "5",
          );

          return {
            id: videoId,
            title: entry.title || "Arrogant Esports Clip",
            published: entry.published || new Date().toISOString(),
            thumbnail:
              entry["media:group"]?.["media:thumbnail"]?.["@_url"] ||
              `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
            description: entry["media:group"]?.["media:description"] || "",
            views: views > 0 ? views : 100,
            rating: rating,
            url: `https://www.youtube.com/watch?v=${videoId}`,
            summary: insight.summary,
            keyTakeaways: insight.keyTakeaways,
            category: insight.category,
          };
        });
      }
    }
  } catch (err) {
    console.warn("YouTube RSS fetch warning:", err);
  }

  // 3. Attempt TikTok revalidation
  try {
    const ttRes = await fetch("https://www.tiktok.com/@arrogantesports", {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      next: { revalidate: 300 },
    });
    if (ttRes.ok) {
      const html = await ttRes.text();
      const match = html.match(
        /<script id="__UNIVERSAL_DATA_FOR_REHYDRATION__"[^>]*>([\s\S]*?)<\/script>/,
      );
      if (match) {
        const data = JSON.parse(match[1]);
        const stats =
          data?.["__DEFAULT_SCOPE__"]?.["webapp.user-detail"]?.userInfo?.stats;
        if (stats) {
          if (stats.followerCount !== undefined) {
            result.tiktok.followers = stats.followerCount;
            result.tiktok.followersDisplay = stats.followerCount.toString();
          }
          if (stats.heartCount !== undefined) {
            result.tiktok.hearts = stats.heartCount;
            result.tiktok.heartsDisplay = stats.heartCount.toString();
          }
          if (stats.videoCount !== undefined) {
            result.tiktok.videosCount = stats.videoCount;
          }
        }
      }
    }
  } catch (err) {
    console.warn("TikTok live fetch warning:", err);
  }

  return result;
}

export async function GET() {
  const result = await getSocialStats();
  return NextResponse.json(result, {
    headers: {
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
    },
  });
}
