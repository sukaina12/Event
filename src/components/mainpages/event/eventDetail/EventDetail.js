import React, { useContext, useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { GlobalState } from '../../../../GlobalState'


function EventDetail() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [events] = state.EventAPI.events
    const [detail, setDetail] = useState([])

    console.log(params)

    useEffect(() => {
        if (params) {
            events.forEach(event => {
                if (event._id === params.id) setDetail(event)
            })
        }
    }, [params, events])
    console.log(detail)

    if (detail.length === 0) return null;

    return (
        <div className='detail'>
            <img src={detail.image_thumb} alt="" />
            <div className='box-detail'>
                <div className='row'>
                    <h2>{detail.title}</h2>

                </div>
                <br></br>
                <span>Rs.{detail.event_fee}</span>
                <p>{detail.subtext}</p>
                <p>Event Date: {detail.event_date}</p>
                <p>Category: {detail.event_category}</p>
                <p>{detail.event_detail_text}</p>

            </div>
        </div>
    )
}

export default EventDetail