import * as React from 'react'
import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// Progress bar
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

// Icons
import MoreVertIcon from '@mui/icons-material/MoreVert'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import CheckIcon from '@mui/icons-material/Check'

const Featured = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <div className="featured component flex__item flex__item--double">
      <Button aria-describedby={id} onClick={handleClick} className="featured--button height--max width--full">
        <div className="flex flex--vertical flex--apart height--max width--full">
          <div className="top flex flex--midle flex--apart">
            <h2 className="title c--secondary f--s f--bolder">Education</h2>
            <MoreVertIcon className="icon icon--s icon--blue" />
          </div>
          <div className="featured-chart flex flex--center m-top--s">
            <CircularProgressbar
              className="circular-progress-bar"
              value={90}
              text={'90%'}
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
          <div className="content flex flex--vertical flex--middle flex--center m-top--m">
            <span className="c--secondary f--xs t--left">Note: for a closer look at my educational background, simply click within the widget.</span>
          </div>
        </div>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography sx={{ p: 2 }}>
          <div className="content flex flex--vertical flex--start flex--center m-top--s">
            <div className="flex flex--vertical m-bottom--s">
              <span className="title c--secondary f--bolder f--m">Osnovna šola</span>
              <div className="status__wrapper flex">
                <span className="c--secondary f--bold f--m">Status: </span>
                <CheckIcon className="icon icon--s icon--blue m-left--s" />
              </div>
            </div>
            <div className="flex flex--vertical m-bottom--s">
              <span className="title c--secondary f--bolder f--m">Srednja šola</span>
              <span className="c--secondary f--bold f--m">Smer: Tehnik računalništva </span>
              <div className="status__wrapper flex">
                <span className="c--secondary f--bold f--m">Status: </span>
                <CheckIcon className="icon icon--s icon--blue m-left--s" />
              </div>
            </div>
            <div className="flex flex--vertical">
              <span className="title c--secondary f--bolder f--m">Višja šola</span>
              <span className="c--secondary f--bold f--m">Smer: Informatika </span>
              <div className="status__wrapper flex">
                <span className="c--secondary f--bold f--m">Status: Only diploma left</span>
              </div>
            </div>
          </div>
        </Typography>
      </Popover>
    </div>
  )
}

export default Featured
