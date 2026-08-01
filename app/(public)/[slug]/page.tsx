import { Suspense } from "react";
import SattaYearlyChart from "../Components/Charts/SattaYearlyChart";
import SadarBazar from "./components/SadarBazar";
import Gwalior from "./components/Gwalior";
import DelhiBazar from "./components/DelhiBazar";
import ShriGanesh from "./components/ShriGanesh";
import Agra from "./components/Agra";
import Faridabad from "./components/Faridabad";
import Alwar from "./components/Alwar";
import Gahaziabad from "./components/Ghaziabad";
import Dwarka from "./components/Dwarka";
import Gali from "./components/Gali";
import DelhiMatka from "./components/DelhiMatka";

const componentMap: Record<string, React.ComponentType> = {
  'sadar-bazar': SadarBazar,
  'gwalior': Gwalior,
  'delhi-bazar': DelhiBazar,
  'shri-ganesh': ShriGanesh,
  'agra': Agra,
  'faridabad': Faridabad,
  'alwar': Alwar,
  'ghaziabad': Gahaziabad,
  'dwarka': Dwarka,
  'gali': Gali,
  'delhi-matka': DelhiMatka,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function page({ params }: PageProps) {
  const { slug } = await params;
  const Component = componentMap[slug.toLocaleLowerCase()];

  // If no matching component found, still show the chart
  const showContent = Component ? true : false;

  return (
    <Suspense
      fallback={
        <div className="w-full bg-white py-20 text-center font-sans">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-[#FFA500] border-t-transparent"></div>
          <p className="mt-4 text-black font-bold text-sm">Loading chart...</p>
        </div>
      }
    >
      <SattaYearlyChart />
      {Component && <Component />}
    </Suspense>
  )
}
