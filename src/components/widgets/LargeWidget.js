import "./largewidget.css"
import { useEffect, useState } from "react"
import { userRequest } from "../../request"

function LargeWidget() {
  const [orders, setOrders] = useState([])
  const Button = ({ type }) => <button className={"widgetLgButton " + type}>{type}</button>

  useEffect(() => {
    async function getOrders() {
      try {
        const response = await userRequest.get("orders")
        setOrders(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    getOrders()
  }, [])

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <thead>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.createdAt} className="widgetLgTr">
              <td className="widgetLgUser">
                <span className="widgetLgName">{order.userId}</span>
              </td>
              <td className="widgetLgDate">{order.createdAt}</td>
              <td className="widgetLgAmount">$ {order.amount}</td>
              <td className="widgetLgStatus">
                <Button type={order.status} />
              </td>
            </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
export default LargeWidget