import "./home.css"
import Chart from "../../components/chart/Chart"
import Featured from "../../components/featured/Featured"
import SmallWidget from "../../components/widgets/SmallWidget"
import LargeWidget from "../../components/widgets/LargeWidget"
import { userData } from "../../dummyData"

function Home() {
  return (
    <div className="home">
      <Featured />
      <Chart data={userData} title="User Analytics" dataKey="Active User" grid />
      <div className="homeWidgets">
        <SmallWidget />
        <LargeWidget />
      </div>
    </div>
  )
}
export default Home