// Components
import CountryTable from "../components/CountryTable"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Widget from "../components/Widget"
import Chart from "../components/Chart"
import Featured from "../components/Featured"


// Data
import dataJSON from "../Source/aboutMe.json"

const Home = () => {
  const data = dataJSON
  console.log(data)
    return (
        <main className="main flex bg--default">
          <Sidebar />
          <div className="homepage home-page__container flex__item flex__item--hexa">
            <Navbar />
            <div id="identification" className="widgets__container container m-top--s">
            {/* sending the data so it can be used inside the Widget component as a prop */}
            {Object.keys(data).map((type) => (
              <Widget
                title={data[type].title}
                isNumber={data[type].isNumber}
                content={data[type].content}
                link={data[type].link}
              />
            ))}
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
