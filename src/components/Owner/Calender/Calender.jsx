import React from "react";
import Dayz from "dayz";
// could also import the sass if you have a loader at dayz/dayz.scss
import "./dayz.scss";
import moment from "moment";

// would come from a network request in a "real" app
const dates1 = [
  moment("2020-9-15", "YYYY-MM-DD"),
  moment("2020-9-15", "YYYY-MM-DD"),
];
const range1 = moment.range(dates1);

const dates2 = [
  moment("2020-9-16", "YYYY-MM-DD"),
  moment("2020-9-16", "YYYY-MM-DD"),
];
const range2 = moment.range(dates2);

const dates3 = [
  moment("2020-9-17", "YYYY-MM-DD"),
  moment("2020-9-17", "YYYY-MM-DD"),
];
const range3 = moment.range(dates3);

const EVENTS = new Dayz.EventsCollection([
  {
    content: "A short event",
    range: range1,
  },
  {
    content: "Two Hours ~ 8-10",
    range: range2,
  },
  {
    content: "A short event",
    range: range3,
  },
]);

export default class MyComponent extends React.Component {
  render() {
    return <Dayz display="month" events={EVENTS} />;
  }
}
