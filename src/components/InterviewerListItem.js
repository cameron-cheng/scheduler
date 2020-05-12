import React from "react";
import "components/InterviewerListItem.scss"
const  classnames = require('classnames');

export default function InterviewerListItem(props) {
  const interviewListClass = classnames ({
    'interviewers__item': true, 
    'interviewers__item-image': props.avatar,
    'interviewers__item--selected': props.selected
  });

  return (
    <li className={interviewListClass} onClick={() => props.setInterviewer(props.name)}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.name}
    </li>
  );

}