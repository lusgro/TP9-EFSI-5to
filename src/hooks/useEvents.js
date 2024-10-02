import { useEffect, useState } from "react"

export default function useEvents() {
    const [ events, setEvents ] = useState()

    useEffect(() => {
        fetch("http://localhost:4000/api/event/")
            .then((res) => res.json())  
            .then((data) => setEvents(data.collection));
    }, [])

    return events
}