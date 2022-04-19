import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Event from './event/Event'
import Login from './auth/Login'
import Register from './auth/Register'
import EventDetail from './event/eventDetail/EventDetail'

function Pages() {
    return (
        <Routes>
            <Route exact path="/detail/:id" element={<EventDetail />} />
            <Route exact path="/" element={<Event />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />

        </Routes>
    )
}

export default Pages