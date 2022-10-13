//import Chart from "../components/Chart";
import AnalysisCards from "../components/analysis/AnalysisCards";
import Chart from "../components/analysis/Chart";
import RecentOrders from "../components/analysis/RecentOrders";
export default function Home() {
  return (
    <div className="mt-14">
      <AnalysisCards />
      <Chart />
      <RecentOrders />
    </div>
  );
}
