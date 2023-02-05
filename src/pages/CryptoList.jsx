import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import CryptoDataTable from "../components/CryptoDataTable"

const CryptoList = () => {
    return (
        <main className="main flex bg--default">
          <Sidebar />
          <div className="homepage home-page__container flex__item flex__item--hexa">
            <Navbar />
            <div className="crypto-data-table__container container flex m-top--s">
              <CryptoDataTable />
            </div>
          </div>
        </main>
    )
}

export default CryptoList
