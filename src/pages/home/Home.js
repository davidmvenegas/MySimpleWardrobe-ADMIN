import "./home.css"
import { useEffect, useMemo, useState } from "react"
import Chart from "../../components/chart/Chart"
import SmallWidget from "../../components/widgets/SmallWidget"
import LargeWidget from "../../components/widgets/LargeWidget"
import { userRequest } from "../../request"

function Home() {
  const [userStats, setUserStats] = useState([])
  const MONTHS = useMemo(() => ["Jan","Feb","Mar","Apr","May","Jun","Jul","Agu","Sep","Oct","Nov","Dec"],[])

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        res.data.map((item) =>
          setUserStats((prev) => [...prev, {name: MONTHS[item._id - 1], "Active User": item.total}])
        )
      } catch(error) {
        console.error(error);
      }
    }
    getStats()
  }, [MONTHS])

  return (
    <div className="home">
        <Chart data={userStats} title="User Analytics" dataKey="Active User" grid />
      <div className="homeWidgets">
        <SmallWidget />
        <LargeWidget />
      </div>
    </div>
  )
}
export default Home