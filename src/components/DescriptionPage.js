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
    skillNums.push(
      <p key={prop}>{`${prop}: ${props.characterSkills[prop]}`}</p>
    );
  }
  console.log(props);
  return (
    <div>
      <p>{props.name}</p>
      <p>{`Advancement Type: ${props.advancementType}`}</p>
      <p>{`Coding Skills Type: ${props.codingSkillsType}`}</p>
      <p>{`Stereotype: ${props.stereotype}`}</p>
      <p>{`Specialty: ${props.specialty}`}</p>
      <p>Skills: </p>
      <div>{skillNums}</div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  null
)(Description);
