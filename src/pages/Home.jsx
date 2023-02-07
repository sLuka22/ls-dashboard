import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Widget from "../components/Widget"
import Chart from "../components/Chart"
import Featured from "../components/Featured"
import CountryTable from "../components/CountryTable"

const Home = () => {
    return (
        <main className="main flex bg--default">
          <Sidebar />
          <div className="homepage home-page__container flex__item flex__item--hexa">
            <Navbar />
            <div id="dashboard" className="widgets__container container m-top--s">
              <Widget type="user" />
              <Widget type="order" />
              <Widget type="earnings" />
              <Widget type="balance" />
            </div>
            <div id="statistics" className="charts__container container m-top--m">
              <Featured />
              <Chart />
            </div>
          <div id="country-table" className="list__container container m-top--m">
            <CountryTable />
          </div>
          </div>
        </main>
    )
}

export default Home
