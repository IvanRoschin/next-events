import EventItem from "./EventItem";
import classes from "./EventList";
function EventList(props) {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map(({ id, title, location, image, date }) => (
        <EventItem
          key={id}
          id={id}
          title={title}
          location={location}
          image={image}
          date={date}
        />
      ))}
    </ul>
  );
}

export default EventList;
