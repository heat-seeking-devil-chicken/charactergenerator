import React from "react";
import { connect } from "react-redux";

const mapStateToProps = store => ({
  name: store.counterReducer.name,
  advancementType: store.counterReducer.advancementType,
  codingSkillsType: store.counterReducer.codingSkillsType,
  stereotype: store.counterReducer.stereotype,
  specialty: store.counterReducer.specialty
});

const Description = props => {
  // console.log(props);
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.advancementType}</p>
      <p>{props.codingSkillsType}</p>
      <p>{props.stereotype}</p>
      <p>{props.specialty}</p>
    </div>
  );
};

export default connect(
  mapStateToProps,
  null
)(Description);
