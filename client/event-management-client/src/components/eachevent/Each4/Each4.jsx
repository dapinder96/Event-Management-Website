import React from 'react';
import EventCard from '../../Card/EventCard';
import "./Each4.css";



const Each4=()=>{
    const events=[
        {
            title:'BestSeller Book Bootcamp - write, Market & Publish Your Book - Hyderabad',
            date:'Saturday,October 18, 12:00PM',
            location: 'Hyderabad',
            image: '/src/assets/cardimg.svg', 
            isFree: true,
        },
        {
            title:'Fitness  Bootcamp - Transform Your Belly Fat-Fit - Punjab',
            date:'Saturday,November 18, 12:00PM',
            location: 'Punjab',
            image: '/src/assets/cardimg.svg', 
            isFree: true,
        },
        {
            title:' Chitkara Ultimate  Coding Bootcamp  - java,Python - Himachal',
            date:'Saturday,November 22, 12:00PM',
            location: 'Himachal',
            image: '/src/assets/cardimg.svg', 
            isFree: false,
        },
        {
            title:'Digital Marketing  Bootcamp - Lets Change The World With Business - Delhi',
            date:'Saturday,December 24, 12:00PM',
            location: 'Delhi',
            image: '/src/assets/cardimg.svg', 
            isFree: true,
        },
        {
            title:'Chitkara Hackathon Bootcamp - C++,Java,Python - Punjab',
            date:'Saturday,November 18, 12:00PM',
            location: 'Punjab',
            image: '/src/assets/chitkarabootcamp.svg', 
            isFree: true,
        },
        {
            title:'BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow',
            date:'Saturday,March 18, 12:00PM',
            location: 'Lucknow',
            image: '/src/assets/cardimg.svg', 
            isFree: true,
        },
       
        

        
    ];
    return(
        <div className="upcoming-events  Blogs kiwi">
            <h1> Other events you may like</h1>
            
            <div className="events-grid">
                {events.map((event)=>(
                    <EventCard key ={event.title} {...event}/>
                ))}
            </div >
            {/* <div className="loadbutton">
            <button className="load-more">Load more...</button>
            </div> */}
            
        </div>
    );
};

export default Each4;