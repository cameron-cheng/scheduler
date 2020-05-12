import React from "react";
import "components/DayListItem.scss"
import { render } from "@testing-library/react";
const  classnames = require('classnames');

export default function DayListItem(props) {
  const dayClass = classnames ({
    'day-list__item--selected': props.selected,
    'day-list__item--full': props.spots === 0,
    'day-list__item': true
  });

  const formatSpots = () => {
    if (props.spots >= 2) {
      return `${props.spots} spots remaining`;
    } else if (props.spots === 1) {
      return '1 spot remaining';
    } else if (props.spots === 0) {
      return 'no spots remaining';
    }
  }

  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}