import React, { useState, useEffect } from 'react'
import axios from 'axios'

function EventAPI() {
    const [events, setEvents] = useState([])

    const getEvents = async () => {
        const res = await axios.get('/api/event/getEvent')
        setEvents(res.data)
        console.log(res.data)
        console.log(events)
    }

    useEffect(() => {
        getEvents()
    }, [])

    return {
        events: [events, setEvents]
    }
}


export default EventAPI