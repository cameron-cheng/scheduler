import React from "react";
import InterviewerListItem from "components/InterviewerListItem";
import "components/InterviewerList.scss";
import PropTypes from "prop-types";

function InterviewerList(props) {
  const InteriewerList = props.interviewers.map((interviewer) => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        id={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.value}
        setInterviewerState={() => props.setInterviewerState(interviewer.id)}
      />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{InteriewerList}</ul>
    </section>
  );
}

InterviewerList.propTypes = {
  value: PropTypes.number,
  setInterviewerState: PropTypes.func.isRequired,
};

export default InterviewerList