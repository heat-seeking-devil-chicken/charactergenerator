import React from "react";
import { NavLink, Link } from "react-router-dom";
import * as actions from "../actions/actions";
import { connect } from "react-redux";

import "../styles/index.css";

import { ArrowForward, ArrowBack } from "@material-ui/icons";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

const mapDispatchToProps = dispatch => ({
  homeUpdate: payload => dispatch(actions.homeUpdate(payload)),
  stereotypeUpdate: payload => dispatch(actions.stereotypeUpdate(payload)),
  specialtyUpdate: payload => dispatch(actions.specialtyUpdate(payload))
});

const mapStateToProps = store => ({
  name: store.counterReducer.name,
  advancementType: store.counterReducer.advancementType,
  codingSkillsType: store.counterReducer.codingSkillsType,
  stereotype: store.counterReducer.stereotype,
  specialty: store.counterReducer.specialty,
  characterSkills: store.counterReducer.characterSkills
});

const Header = () => {
  const [activeStep, setActiveStep] = React.useState(1);
  const [hover, setHoverState] = React.useState("false");

  function getSteps() {
    return ["Home", "Preferences", "Character", "Specialty", "Description"];
  }

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function getLinkRoute() {
    return ["/", "preferences", "/character", "/specialty", "/description"];
  }

  const steps = getSteps();
  const linkRoute = getLinkRoute();

  return (
    <div className="header">
      <h1 className="headerH1">Coder Character Builder</h1>
      <Stepper className="stepperStyle" activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepLabel>
                <NavLink
                  activeClassName="is-active"
                  className="navLink"
                  to={linkRoute[index]}
                  onClick={e => setActiveStep(index)}
                >
                  {label}
                </NavLink>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length - 1 ? (
        <Link to={"/specialty"}>
          <button className="leftButton" onClick={handleBack}>
            <ArrowBack />
          </button>
        </Link>
      ) : activeStep > 0 ? (
        <>
          <Link to={linkRoute[activeStep - 1]}>
            <button className="leftButton" onClick={handleBack}>
              <ArrowBack />
            </button>
          </Link>
          <Link to={linkRoute[activeStep + 1]}>
            <button className="rightButton" onClick={handleNext}>
              <ArrowForward />
            </button>
          </Link>
        </>
      ) : (
        <Link to={"/preferences"}>
          <button className="rightButton" onClick={handleNext}>
            <ArrowForward />
          </button>
        </Link>
      )}
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
