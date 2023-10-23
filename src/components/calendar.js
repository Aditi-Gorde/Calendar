import React, {useState} from 'react';
import CalendarDays from './calendarDays';
import '../assets/calendar.css'

function Calendar () {

    const [currentDay, setCurrentDay ] = useState(new Date());

    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
    const years = Array.from(new Array(50),( val, index) => 2050 - index);

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target);
        console.log(data.get('month'))
        console.log(data.get('year'))
        setCurrentDay(new Date(data.get('year'), data.get('month'), 1))
        console.log(new Date(data.get('year'), data.get('month'), 1))
    }

    return (
      <div className="calendar">
        <form onSubmit={handleSubmit}>
            <label>Select a Month:
                <select name="month" style={{margin:'0.5rem'}}>
                    {
                    months.map((month, index) => {
                        return <option key={`month${index}`} value={index}>{month}</option>
                    })
                    }
                </select>
            </label>
            <label> Select an Year:
                <select name="year" style={{margin:'0.5rem'}}>
                    {
                    years.map((year, index) => {
                        return <option key={`year${index}`} value={year}>{year}</option>
                    })
                    }
                </select>
            </label>
            <input type="submit" className='btn' />
        </form>
        <div className="calendar-header">
          <div className="title">
            <h2>{months[currentDay.getMonth()]} {currentDay.getFullYear()}</h2>
          </div>
        </div>
        <div className="calendar-body">
          <div className="table-header">
            {
              weekdays.map((weekday, idx) => {
                return <div className="weekday" key={idx}><p>{weekday}</p></div>
              })
            }
          </div>
          <CalendarDays day={currentDay} />
        </div>
      </div>
    )
}

export default Calendar;