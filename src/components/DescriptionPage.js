import React from "react";
import { connect } from "react-redux";

const mapStateToProps = store => ({
  name: store.counterReducer.name,
  advancementType: store.counterReducer.advancementType,
  codingSkillsType: store.counterReducer.codingSkillsType,
  stereotype: store.counterReducer.stereotype,
  specialty: store.counterReducer.specialty,
  characterSkills: store.counterReducer.characterSkills
});

const Description = props => {
  const skillNums = [];

  for (const prop in props.characterSkills) {
    skillNums.push(<p key={prop}>{prop}</p>);
  }

  return (
    <div>
      <p>{props.name}</p>
      <p>{props.advancementType}</p>
      <p>{props.codingSkillsType}</p>
      <p>{props.stereotype}</p>
      <p>{props.specialty}</p>
      <div>{skillNums}</div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  null
)(Description);
