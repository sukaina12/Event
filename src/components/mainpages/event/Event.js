import React, { useContext, } from 'react'
import { GlobalState } from '../../../GlobalState'
import EventItem from '../utils/EventItem/EventItem'
import { Link } from 'react-router-dom'

function Event() {
    const state = useContext(GlobalState)
    const [events] = state.EventAPI.events
    console.log(state)
    console.log(events)
    return (
        <div className='events'>
            {
                events.map(event => {
                    return (
                        <div className='product-card'>
                            <img src={event.image_thumb} alt="" />
                            <div className='product-box'>
                                <div>
                                    {event.event_isFeatured === true ?
                                        <p>Event Featured</p> : null
                                    }
                                </div>
                                <h2 title={event.title}>{event.title}</h2>
                                <span>Rs.{event.event_fee}</span>
                                <br></br>
                                <p>{event.subtext}</p>
                                <div className='row_btn'>
                                    <a><Link id="btn_det" to={`detail/${event._id}`}>VIEW</Link></a>
                                    <a><Link id="btn_book" to="/">BOOK</Link></a>
                                </div>





                            </div>



                        </div>
                    )
                })
            }
        </div>
    )
}



export default Event