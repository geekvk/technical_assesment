import React from 'react'
import EventCard from '../components/EventCard';
import eventImage from '../images/eventImage.png';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

function EventPage() {
  return (
    <div className='event_container'>
      <div className='top_container'>
          <img src={eventImage} />
      </div>
      <div className='item_container'>
        <div className='event_title'>
          <h2>Birthday Bash</h2>
          <p>Hosted by <span>Elysia</span></p>
        </div>
        <div className='event_Card_container'>
          <EventCard 
            icon={<CalendarMonthIcon/>}
            title="18 August 6:00PM" 
            sub_title="to 19 August 1:00PM UTC +10" 
          />
          <EventCard
            icon={<LocationOnOutlinedIcon/>}
            title="Street name"
            sub_title="Suburb, State, Postcode"
          />
        </div>
      </div>
    </div>
  )
}

export default EventPage