import { getSocialStats } from "@/app/api/social-stats/route";
import { EsportsMainPage } from "@/components/esports/EsportsMainPage";

export default async function Home() {
  const stats = await getSocialStats();

  return <EsportsMainPage initialData={stats} />;
}
