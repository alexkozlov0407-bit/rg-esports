import { NextResponse } from "next/server";
import { getSocialStats, type SocialStatsResponse, type VideoItem } from "@/lib/social-stats";

export type { SocialStatsResponse, VideoItem };

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const stats = await getSocialStats();
    return NextResponse.json(stats, {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch social stats" },
      { status: 500 }
    );
  }
}
