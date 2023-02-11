// Components
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const Cv = () => {
  return (
    <main className="main flex bg--default">
      <Sidebar />
      <div className="homepage home-page__container flex__item flex__item--hexa">
        <Navbar />
      </div>
    </main>
  )
}

export default Cv
