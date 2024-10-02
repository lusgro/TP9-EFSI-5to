'use client'
import EventDetail from "@/components/EventDetail";
import useSelectedEvent from "@/hooks/useSelectedEvent";
import { useParams } from 'next/navigation'

export default function DetalleEvento() {
    const {id} = useParams()
    const event = useSelectedEvent({id})

    return (
        <>
            {
                event &&
                <EventDetail event={event}/>
            }
        </>
    );
}