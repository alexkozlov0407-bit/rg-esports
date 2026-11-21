import { getSocialStats } from "@/lib/social-stats";
import { EsportsMainPage } from "@/components/esports/EsportsMainPage";

export const revalidate = 60;

export default async function Home() {
  const stats = await getSocialStats();

  return <EsportsMainPage initialData={stats} />;
}
