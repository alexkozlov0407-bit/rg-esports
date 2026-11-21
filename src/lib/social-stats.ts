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
  x: {
    handle: string;
    profileUrl: string;
    followersDisplay: string;
  };
}

const RG_DEFAULT_VIDEOS: VideoItem[] = [
  {
    id: "8ScrrimxuFY",
    title: "Recruiting D3-SSL | Republic of Golds Official",
    published: "2026-11-07T05:14:37+00:00",
    thumbnail: "https://i1.ytimg.com/vi/8ScrrimxuFY/hqdefault.jpg",
    description:
      "RG Esports is a competitive Esport org focused on competing in leagues and RLCS opens. Free coaching through our academy, teams based on your MMR (D3+), and a community discord server for RL players worldwide.",
    views: 142,
    rating: 5,
    url: "https://www.youtube.com/shorts/8ScrrimxuFY",
    summary:
      "The official Republic of Golds recruitment video detailing roster qualifications from Diamond 3 to Supersonic Legend (SSL). Outlines free academy coaching, league entries, and ticket submission process.",
    keyTakeaways: [
      "Competitive pathways for Diamond 3 through 2000+ SSL players.",
      "Dedicated Academy tier with free coaching for players under Champ.",
      "Official community league entries & RLCS open qualifiers.",
    ],
    category: "Recruitment",
  },
  {
    id: "SI1U03elvXs",
    title: "Why You Should Join RG Esports | Competitive Rocket League",
    published: "2026-11-02T18:40:09+00:00",
    thumbnail: "https://i4.ytimg.com/vi/SI1U03elvXs/hqdefault.jpg",
    description: "Explore the benefits of joining Republic of Golds Esports: organized scrims, structured coaching, and roster progression.",
    views: 310,
    rating: 5,
    url: "https://www.youtube.com/@National-IREPG",
    summary:
      "Overview of RG Esports structure: 7 MMR-tiered rosters, captained team autonomy, and the Academy development pipeline.",
    keyTakeaways: [
      "Autonomous captained lineups with management support.",
      "Clear promotion ladder via RL Tracker verification.",
      "Cross-region NA & EU competitive schedules.",
    ],
    category: "Analysis",
  },
  {
    id: "_FjZiCt8a0U",
    title: "Republic of Golds | Inaugural Roster Showcase & Clips",
    published: "2026-10-25T06:45:48+00:00",
    thumbnail: "https://i4.ytimg.com/vi/_FjZiCt8a0U/hqdefault.jpg",
    description: "Highlighting top mechanics, flip resets, and team passing plays from RG Dynasty, Ascension, and Nightshift.",
    views: 450,
    rating: 5,
    url: "https://www.youtube.com/@National-IREPG",
    summary:
      "Showcases mechanical aerial plays, ceiling pinches, and team passing sequences from RG competitive rosters.",
    keyTakeaways: [
      "Features plays from RG Ascension and RG Nightshift starters.",
      "Exemplifies competitive teamwork and communication in scrims.",
    ],
    category: "Montage",
  },
  {
    id: "Nt2GUlnPkZY",
    title: "RG European RLCS Open Preparation & Scrim Highlights",
    published: "2026-10-15T12:44:31+00:00",
    thumbnail: "https://i3.ytimg.com/vi/Nt2GUlnPkZY/hqdefault.jpg",
    description: "Building on the legacy of Top 185 EU RLCS Open finish, preparing the next generation of contenders.",
    views: 620,
    rating: 5,
    url: "https://www.youtube.com/@National-IREPG",
    summary:
      "Chronicles RG's European division preparing for tournament qualifiers and league matches with coach Jonh Magazoni.",
    keyTakeaways: [
      "Analysis of rotation speed and boost management in high-tier lobbies.",
      "Strategies developed for RLCS open brackets.",
    ],
    category: "Highlights",
  },
];

export async function getSocialStats(): Promise<SocialStatsResponse> {
  const result: SocialStatsResponse = {
    timestamp: new Date().toISOString(),
    youtube: {
      handle: "@National-IREPG",
      subscribers: 65,
      subscribersDisplay: "65+",
      videoCount: 4,
      channelUrl: "https://www.youtube.com/@National-IREPG",
      avatarUrl: "/images/branding/rg-logo.jpg",
      channelName: "RG Esports",
      videos: RG_DEFAULT_VIDEOS,
    },
    tiktok: {
      handle: "@rg.esports5",
      followers: 18,
      followersDisplay: "18+",
      hearts: 45,
      heartsDisplay: "45+",
      videosCount: 3,
      profileUrl: "https://www.tiktok.com/@rg.esports5",
      avatarUrl: "/images/branding/rg-logo.jpg",
      bio: "Official TikTok of Republic of Golds Esports (RG). Short videos, team highlights & competitive RL clips.",
    },
    discord: {
      guildName: "Republic of Golds",
      memberCount: 87,
      onlineCount: 29,
      inviteUrl: "https://discord.gg/hKGrmywnks",
      iconUrl: "/images/branding/discord-guild-icon.png",
      description:
        "RG (Republic of golds) Esports is a server dedicated to the community, and to winning. Our goal is to one day be as big as other esports servers! BASED IN THE US.",
      inviter: {
        name: "alex",
        globalName: "alex",
        avatarUrl: "/images/branding/discord-guild-icon.png",
        clanTag: "RG",
      },
    },
    x: {
      handle: "@RgEsportaq",
      profileUrl: "https://x.com/rgesportaq?s=11",
      followersDisplay: "Active",
    },
  };

  // 1. Fetch live Discord server stats using permanent invite code "hKGrmywnks"
  try {
    const discordRes = await fetch(
      "https://discord.com/api/v10/invites/hKGrmywnks?with_counts=true",
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
      if (dData.guild?.description) {
        result.discord.description = dData.guild.description;
      }
      if (dData.guild?.icon) {
        result.discord.iconUrl = `https://cdn.discordapp.com/icons/${dData.guild.id}/${dData.guild.icon}.png?size=256`;
      }
      if (dData.inviter?.global_name || dData.inviter?.username) {
        result.discord.inviter.name = dData.inviter.username;
        result.discord.inviter.globalName = dData.inviter.global_name || dData.inviter.username;
      }
    }
  } catch (err) {
    console.warn("Discord live fetch failed, using cached baseline:", err);
  }

  // 2. Fetch live YouTube RSS feed for channel UCSR2NqGKWujxJ9GwRJ3uIDw
  try {
    const ytRes = await fetch(
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCSR2NqGKWujxJ9GwRJ3uIDw",
      {
        next: { revalidate: 300 },
      },
    );
    if (ytRes.ok) {
      const xmlText = await ytRes.text();
      const parser = new XMLParser({
        ignoreAttributes: false,
        attributeNamePrefix: "@_",
      });
      const parsed = parser.parse(xmlText);
      const entries = parsed.feed?.entry;

      if (entries) {
        const rawEntries = Array.isArray(entries) ? entries : [entries];
        const parsedVideos: VideoItem[] = rawEntries.slice(0, 5).map((entry: any) => {
          const videoId = entry["yt:videoId"] || entry.id?.replace("yt:video:", "");
          const title = entry.title || entry["media:group"]?.["media:title"] || "RG Esports Video";
          const published = entry.published || new Date().toISOString();
          const thumbnail =
            entry["media:group"]?.["media:thumbnail"]?.["@_url"] ||
            `https://i1.ytimg.com/vi/${videoId}/hqdefault.jpg`;
          const description =
            entry["media:group"]?.["media:description"] || "RG Esports official content.";
          const views = parseInt(
            entry["media:group"]?.["media:community"]?.["media:statistics"]?.["@_views"] || "150",
            10,
          );

          return {
            id: videoId,
            title,
            published,
            thumbnail,
            description,
            views: isNaN(views) ? 150 : views,
            rating: 5,
            url: `https://www.youtube.com/shorts/${videoId}`,
            summary: "Official RG Esports video showcasing competitive Rocket League gameplay, recruitment details, or roster updates.",
            keyTakeaways: [
              "Direct connection to the RG Esports competitive program.",
              "Showcases roster mechanics and team communications.",
            ],
            category: "Recruitment" as const,
          };
        });

        if (parsedVideos.length > 0) {
          result.youtube.videos = [
            ...parsedVideos,
            ...RG_DEFAULT_VIDEOS.filter((v) => !parsedVideos.some((pv) => pv.id === v.id)),
          ];
          result.youtube.videoCount = Math.max(parsedVideos.length, result.youtube.videoCount);
        }
      }
    }
  } catch (err) {
    console.warn("YouTube live RSS fetch failed, using curated videos:", err);
  }

  return result;
}
