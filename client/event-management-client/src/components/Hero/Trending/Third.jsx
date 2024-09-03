import React from 'react'
import './Third.css';
import EventCard from '../../Card/EventCard';




const TrendingColleges=()=>{
    const events=[
        {
            title:'CHITKARA HACKATHON BOOTCAMP - Any Coding Language, Free Goodies,More etc - Punjab',
            date:'Saturday,November 18, 12:00PM',
            location: 'Punjab',
            image: '/src/assets/chitkarabootcamp.svg', 
            isFree: true,
        }
       
        
    ];
    return(
        <div className="upcoming-events  Trending">
            <h1> Trending <span>Colleges</span> </h1>
            
            <div className="events-grid">
                {events.map((event)=>(
                    <EventCard key ={event.title} {...event}/>
                ))}
            </div >
            <div className="loadbutton">
            <button className="load-more">Load more...</button>
            </div>
            
        </div>
    );
};

export default TrendingColleges;