import { useEffect, useState } from "react"

export default function useSelectedEvent({id}) {
    const [ event, setEvent ] = useState()

    useEffect(() => {
        fetch(`http://localhost:4000/api/event/${id}`)
            .then((res) => res.json())  
            .then((data) => setEvent(data));
    }, [id,event])

    return event
}