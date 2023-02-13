// Chart import
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

// Chart data
const data = [
  {
    name: 'Day 1',
    CurrentWeekWorkoutTime: 30,
    PastWeekWorkoutTime: 60
  },
  {
    name: 'Day 2',
    CurrentWeekWorkoutTime: 45,
    PastWeekWorkoutTime: 30
  },
  {
    name: 'Day 3',
    CurrentWeekWorkoutTime: 20,
    PastWeekWorkoutTime: 80
  },
  {
    name: 'Day 4',
    CurrentWeekWorkoutTime: 60,
    PastWeekWorkoutTime: 30
  },
  {
    name: 'Day 5',
    CurrentWeekWorkoutTime: 30,
    PastWeekWorkoutTime: 45
  },
  {
    name: 'Day 6',
    CurrentWeekWorkoutTime: 30,
    PastWeekWorkoutTime: 20
  },
  {
    name: 'Day 7',
    CurrentWeekWorkoutTime: 45,
    PastWeekWorkoutTime: 60
  },
]

const Chart = () => {
  return (
    <div className="chart component flex__item flex__item--quadra flex flex--vertical">
      <div className="chart-title"><h2 className="title c--secondary f--s f--bolder">LAST TWO WEEKS (workout time in minutes)</h2></div>
      <div className="chart-responsive__container m-top--s">
        <ResponsiveContainer className={'chart'} width="100%">
          <AreaChart data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCurrentWeekWorkoutTime" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#66b2ff" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#66b2ff" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorPastWeekWorkoutTime" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#32a852" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#32a852" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke='#a6a6a6'/>
            <YAxis stroke='#a6a6a6' />
            <CartesianGrid stroke='#dddddd' strokeDasharray="3 3" />
            <Tooltip />
            <Area name='Current week workout time' type="monotone" dataKey="CurrentWeekWorkoutTime" stroke="#66b2ff" fillOpacity={1} fill="url(#colorCurrentWeekWorkoutTime)" />
            <Area name='Past week workout time' type="monotone" dataKey="PastWeekWorkoutTime" stroke="#32a852" fillOpacity={1} fill="url(#colorPastWeekWorkoutTime)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Chart
