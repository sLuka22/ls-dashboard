import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Widget from "../components/Widget"
import Chart from "../components/Chart"
import Featured from "../components/Featured"

const Home = () => {
    return (
        <main className="main flex bg--default">
          <Sidebar />
          <div className="homepage home-page__container flex__item flex__item--hexa">
            <Navbar />
            <div className="widgets__container container flex m-top--s">
              <Widget type="user" />
              <Widget type="order" />
              <Widget type="earnings" />
              <Widget type="balance" />
            </div>
            <div className="charts__container container flex m-top--m">
              <Featured />
              <Chart />
            </div>
          </div>
        </main>
    )
}

export default Home
