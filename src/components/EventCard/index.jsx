import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card"

export default function EventCard() {
  return (
    <Card className="w-full max-w-sm group hover:scale-105 transition-transform">
      <CardContent className="p-6 grid gap-4">
        <div className="grid gap-2">
          <CardTitle className="text-xl font-semibold">Startup Pitch Night</CardTitle>
          <CardDescription className="text-muted-foreground">
            Join us for an evening of inspiring startup pitches and networking.
          </CardDescription>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <CalendarDaysIcon className="w-5 h-5" />
          <div>
            <div>Thursday, June 15th</div>
            <div>6:00 PM - 9:00 PM</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function CalendarDaysIcon(props) {
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
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}