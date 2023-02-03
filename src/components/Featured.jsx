// Progress bar
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

// Icons
import MoreVertIcon from '@mui/icons-material/MoreVert'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Featured = () => {
  return (
    <div className="featured component flex__item flex__item--double">
      <div className="top flex flex--midle flex--apart">
        <h2 className="title c--secondary f--s f--bolder">TOTAL REVENUE</h2>
        <MoreVertIcon className="icon icon--s icon--blue" />
      </div>
      <div className="bottom">
        <div className="featured-chart flex flex--center m-top--m">
          <CircularProgressbar
            className="circular-progress-bar"
            value={70}
            text={'70%'}
            background
            backgroundPadding={6}
            styles={{
              background: {
                fill: "#66b2ff"
              },
              text: {
                fill: "#fff"
              },
              path: {
                stroke: "#fff"
              },
              trail: { stroke: "transparent" }
            }}
          />
        </div>
        <div className="content flex flex--vertical flex--middle flex--center">
          <span className="title c--secondary f--bold f--m">Total sales made today</span>
          <span className="amount m-top--s f--xxl">345 €</span>
          <span className="description m-top--s c--secondary t--center">Previous transactions processing. Last payments may not be included.</span>
        </div>
      </div>
    </div>
  )
}

export default Featured
