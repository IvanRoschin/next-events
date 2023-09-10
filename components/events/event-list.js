import EventItem from "./event-item";
import classes from "./event-list.module.css";

export default function EventList(props) {
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
