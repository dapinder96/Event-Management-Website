import React from 'react';
import EventCard from '../../Card/EventCard';
import './Fourth.css';




const OurBlogs=()=>{
    const events=[
        {
            title:'CHITKARA CODING  BOOTCAMP - Python,Java,C++ - Punjab',
            date:'Saturday,September 18, 12:00PM',
            location: 'Punjab',
            image: '/src/assets/chitkarabootcamp.svg', 
            isFree: true,
        }
       
        

        
    ];
    return(
        <div className="upcoming-events  Blogs">
            <h1> Our <span>Blogs</span></h1>
            
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

export default OurBlogs;