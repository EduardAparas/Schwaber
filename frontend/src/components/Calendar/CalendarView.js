import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import esES from "date-fns/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = { es: esES };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }), // lunes
  getDay,
  locales,
});

export default function CalendarView({ events }) {
  const mappedEvents = events.map((e) => ({
    ...e,
    start: new Date(e.start),
    end: new Date(e.end),
  }));

  const handleSelectEvent = (event) => {
    alert(
      `${event.title}\n\n` +
      `Asignatura: ${event.category || "—"}\n\n` +
      `${event.description || ""}`
    );
  };

  return (
    <div style={{ height: "80vh", padding: "1rem" }}>
      <Calendar
        localizer={localizer}
        events={mappedEvents}
        startAccessor="start"
        endAccessor="end"
        titleAccessor="title"
        defaultView="month"
        views={["month", "week", "day"]}
        culture="es"
        popup
        onSelectEvent={handleSelectEvent}
      />
    </div>
  );
}