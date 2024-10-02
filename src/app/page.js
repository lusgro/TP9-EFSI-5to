'use client'

import EventCard from "@/components/EventCard";
import useEvents from "@/hooks/useEvents";
import styles from './page.module.css'

export default function Home() {
  const events = useEvents()

  return (
    <div className={styles.events}>
      {
        events && events.map((event) => (
          <EventCard key={event.id} event={event}/>
        ))
      }
    </div>
  );
}
