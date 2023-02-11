import { Link } from 'react-router-dom'

// Icons
import InfoIcon from '@mui/icons-material/Info'

const Widget = ({title, isNumber, content, link }) => {
  return (
    <div className="dynamic-widget component flex__item flex flex--apart">
      <div className="left flex flex--vertical flex--apart">
        <span className="title c--secondary f--bolder f--s">{title}</span>
        <span className={`counter ${isNumber ? 'f--xxl': 'f--l'}`}>{content}</span>
        <Link to="/cv" className="widget-link">{link}</Link>
      </div>
      <div className="right flex flex--vertical flex--apart">
        <div className="percentage flex flex--middle">
          <InfoIcon className="icon icon--s icon--blue" />
          <span className="percentage-value f--s"></span>
        </div>
        {/* {icon} */}
      </div>
    </div>
  )
}

export default Widget
