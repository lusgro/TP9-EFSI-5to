import React from 'react';
import { Button } from "@/components/ui/button"
import formatDate from "@/utils/formatDate"
import formatEventTime from '@/utils/formatEventTime';

function formatTags(tags) {
  if (!tags || !Array.isArray(tags)) return '';
  
  return tags.map(tag => tag.name).join(', ');
}

export default function EventDetail({event}) {

  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8 md:p-10">
      <div className="grid gap-8">
        <div>
          <h1 className="text-3xl font-bold">{event.name}</h1>
          <p className="text-muted-foreground">
            {event.description}
          </p>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <TagIcon className="w-5 h-5 text-muted-foreground" />
              <span className="text-muted-foreground">{formatTags(event.tags)}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPinIcon className="w-5 h-5 text-muted-foreground" />
              <div>
                <div className="font-medium">{event.event_location.name}</div>
                <div className="text-muted-foreground">{`${event.event_location.full_address}, ${event.event_location.location.province.full_name}`}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-muted-foreground" />
              <div>
                <div className="font-medium">{formatDate(event.start_date)}</div>
                <div className="text-muted-foreground">{formatEventTime(event.start_date, event.duration_in_minutes)}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-5 h-5 text-muted-foreground" />
              <div>
                <div className="font-medium"> {event.duration_in_minutes} minutos</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <TagIcon className="w-5 h-5 text-muted-foreground" />
              <div>
                <div className="font-medium">{event.price}</div>
              </div>
            </div>
          </div>
          <Button size="lg">Comprar Tickets</Button>
        </div>
      </div>
    </div>
  )
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}

function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function TagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  )
}