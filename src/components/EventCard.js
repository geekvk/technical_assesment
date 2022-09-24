import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function EventCard({ icon, title, sub_title }) {
  return (
    <div className='event-card'>
        <div className='event_icon'>
          {icon}
        </div>
        <div className='event_description'>
          <h3>{title}</h3>
          <p>{sub_title}</p>
        </div>
        <ChevronRightIcon className='next_icon'/>
    </div>
  )
}

export default EventCard