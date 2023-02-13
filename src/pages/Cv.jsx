// Components
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const Cv = () => {
  return (
    <main className="main flex bg--default">
      <Sidebar />
      <div className="cv cv-page__container flex__item flex__item--hexa">
        <Navbar />
        <div className="cv__container container flex flex--vertical m-top--s">
          <div className="identification flex flex--vertical component">
            <h4 className="name f--bolder m-bottom--s">Luka Štiglic</h4>
            <span className="adress">Volavlje 48a</span>
            <span className="postal-code">1000 Ljubljana</span>
            <span className="phone-number">Telefonska številka: +386 51 898 575</span>
            <span className="e-mail">E-pošta: stigic.luka22@gmail.com</span>
            <span className="birth-day">Datum rojstva: 22.06.2000</span>
          </div>
          <div className="education component">
            <h4 className=" f--bolder m-bottom--s">Izobrazba</h4>
            <ul className="education-list">
              <li className="education-list__item">
                ERUDIO izobraževalni center, višješolski strokovni program, informatika (2020 – danes )
              </li>
              <li className="education-list__item">
                Srednja šola tehničnih strok Šiška, PTI program, tehnik računalništva (2018 – 2020 )
              </li>
              <li className="education-list__item">
                Srednja šola tehničnih strok Šiška, STI program, elektrikar (2015 – 2018 )
              </li>
            </ul>
          </div>
          <div className="competencies component">
            <h4 className=" f--bolder m-bottom--s">Delovne izkušnje</h4>
            <ul className="work-experience-list">
              <li className="work-experience-list__item">
                <h5 className="f--bolder">ENVOO d.o.o. (redna zaposlitev: junij 2022 – danes)</h5>
                <ul className="work-experience-sublist__item">
                  <li className="work-experience-sublist__item">
                    Tehnična pomoč uporabnikom (pomoč pri uporabi WordPress tem)
                  </li>
                  <li className="work-experience-sublist__item">
                    Izdelava WordPress spletnih strani (uporaba lastnih tem)
                  </li>
                  <li className="work-experience-sublist__item">
                    Izdelava spletnih strani z uporabo knjižnice React.
                  </li>
                </ul>
              </li>
              <li className="work-experience-list__item">
                <h5 className="f--bolder">ENVOO d.o.o. (praktično izobraževanje: januar 2022 – junij 2022 )</h5>
                <ul className="work-experience-sublist__item">
                  <li className="work-experience-sublist__item">
                    Tehnična pomoč uporabnikom (pomoč pri uporabi WordPress tem)
                  </li>
                  <li className="work-experience-sublist__item">
                    Izdelava WordPress spletnih strani (uporaba lastnih tem)
                  </li>
                  <li className="work-experience-sublist__item">
                    Izdelava spletnih strani z uporabo knjižnice React.
                  </li>
                </ul>
              </li>
              <li className="work-experience-list__item">
                <h5 className="f--bolder">PRO PLUS d.o.o. (februar 2021 – 2022)</h5>
                <ul className="work-experience-sublist__item">
                  <li className="work-experience-sublist__item">
                    Tehnična pomoč uporabnikom (VOYO – klicni center), občasna pomoč v IT oddelku
                  </li>
                  <li className="work-experience-sublist__item">
                    Pomoč pri snemanju televizijskih oddaj (Slovenija ima talent)
                  </li>
                </ul>
              </li>
              <li className="work-experience-list__item">
                <h5 className="f--bolder">LUTA LIVRE d.o.o. (spletna trgovina Fightshop.si) (2018 – 2022)</h5>
                <ul className="work-experience-sublist__item">
                  <li className="work-experience-sublist__item">
                    Prodaja športne opreme
                  </li>
                  <li className="work-experience-sublist__item">
                    Urejanje izdelkov in opravljanje zaloge izdelkov s pomočjo Wordpress-a.
                  </li>
                  <li className="work-experience-sublist__item">
                    Pripravljanje spletnih naročil
                  </li>
                </ul>
              </li>
              <li className="work-experience-list__item">
                <h5 className="f--bolder">ELES d.o.o. (praktično izobraževanje: marec 2017)</h5>
                <ul className="work-experience-sublist__item">
                  <li className="work-experience-sublist__item">
                    Delo v stikališču
                  </li>
                  <li className="work-experience-sublist__item">
                    Preverjanje stanja električnih daljnovodov
                  </li>
                </ul>
              </li>
              <li className="work-experience-list__item">
                <h5 className="f--bolder">Občasna fizična dela razpisana na študentskem servisu (2016 - 2021)</h5>
                <ul className="work-experience-sublist__item">
                  <li className="work-experience-sublist__item">
                    Seljenje, razkladanje ipd.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="competencies component">
            <h4 className=" f--bolder m-bottom--s">Kompetence</h4>
            <ul className="competencies-list">
              <li className="competencies-list__item">
                <h5 className="f--bolder">Jezikovno znanje:</h5>
                <ul className="competencies-sublist__item">
                  <li className="competencies-sublist__item">
                    Materni jezik: Slovenščina
                  </li>
                  <li className="competencies-sublist__item">
                    Tuji jezik: Angleščina (Certifikat B1)
                  </li>
                </ul>
              </li>
              <li className="competencies-list__item">
                <h5 className="f--bolder">Vozniško dovoljenje:</h5>
                <ul className="competencies-sublist__item">
                  <li className="competencies-sublist__item">
                    AM, B1, B, G
                  </li>
                  <li className="competencies-sublist__item">
                    Vozniško dovoljenje sem pridobil leta 2018, kar pomeni, da nimam več statusa mladega voznika. Imam svoj lasten prevoz.
                  </li>
                </ul>
              </li>
              <li className="competencies-list__item">
                <h5 className="f--bolder">Računalniške kompetence:</h5>
                <ul className="competencies-sublist__item">
                  <li className="competencies-sublist__item">
                    Dobro poznavanje programske opreme Microsoft office,
                  </li>
                  <li className="competencies-sublist__item">
                    osnovno znanje sestavljanja in popravila računalnikov,
                  </li>
                  <li className="competencies-sublist__item">
                    osnovno znanje programskega jezika Python,
                  </li>
                  <li className="competencies-sublist__item">
                    osnovno znanje in razumevanje programskega jezika PHP ter CMS sistema WordPress,
                  </li>
                  <li className="competencies-sublist__item">
                    osnovno znanje jezika MySQL za upravljanje s podatkovnimi bazami,
                  </li>
                  <li className="competencies-sublist__item">
                    znanje označevalnega jezika HTML in CSS (sass),
                  </li>
                  <li className="competencies-sublist__item">
                    znanje skriptnega jezika JavaScript ter uporaba knjižnice React.
                  </li>
                  <li className="competencies-sublist__item">
                    osnovno znanje uporabe Windows strežnika (pridobljeno pri udeležbi obveznih vaj v sklopu študija),
                  </li>
                  <li className="competencies-sublist__item">
                    poznavanje distribucije Linux (Manjaro Linux).
                  </li>
                </ul>
              </li>
              <li className="competencies-list__item">
                <h5 className="f--bolder">Komunikacijske kompetence:</h5>
                <ul className="competencies-sublist__item">
                  <li className="competencies-sublist__item">
                    Izkušnje nastopanja in predstavljanja, pridobljene skozi šolanje.
                  </li>
                  <li className="competencies-sublist__item">
                    Sposobnosti dobre komunikacije in vzdrževanje dobrih odnosov s sodelavci ter strankami, ki sem jih pridobil pri opravljanju študentskih del ter redni zaposlitvi.
                  </li>
                  <li className="competencies-sublist__item">
                    Veliko izkušenj z razumevanjem in prilagajanjem zahtevam strank, katere sem pridobil v klicnem centru (tehnična pomoč uporabnikom – VOYO) in ob prodaji športne opreme.
                  </li>
                </ul>
              </li>
              <li className="competencies-list__item">
                <h5 className="f--bolder">Aktivnosti v prostem času:</h5>
                <ul className="competencies-sublist__item">
                  <li className="competencies-sublist__item">
                    Tek in na splošno vzdrževanje kondicije, borilne veščine, vožnja z motorjem in oskrba domačih živali.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Cv
