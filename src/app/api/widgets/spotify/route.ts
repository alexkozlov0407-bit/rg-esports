import { NextResponse } from "next/server";

/**
 * GET /api/widgets/spotify
 *
 * Proxy endpoint for Spotify widget data.
 * Returns edge-cached JSON with:
 *   s-maxage=10, stale-while-revalidate=30
 *
 * TODO: Implement actual Spotify API integration with user tokens.
 */
export async function GET() {
  // Placeholder: return a mock payload until Spotify OAuth is wired up.
  const data = {
    isPlaying: false,
    track: null,
    message: "Spotify integration pending — connect your account in settings.",
  };

  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "public, s-maxage=10, stale-while-revalidate=30",
    },
  });
}
