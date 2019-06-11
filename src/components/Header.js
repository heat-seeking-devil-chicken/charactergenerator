import React from "react";
import { NavLink, Link } from "react-router-dom";

import "../styles/index.css";

import { ArrowForward, ArrowBack } from "@material-ui/icons";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

const Header = () => {
  const stepperStyle = {
    marginLeft: "-10%",
    width: "40%",
    padding: "10px"
  };
  const [activeStep, setActiveStep] = React.useState(0);

  function getSteps() {
    return ["Home", "Character", "Specialty", "Description"];
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return "Select campaign settings...";
      case 1:
        return "What is an ad group anyways?";
      case 2:
        return "This is the bit I really care about!";
      default:
        return "Unknown step";
    }
  }

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  const steps = getSteps();
  return (
    <div className="header">
      <div>
        <h1 className="headerH1">Coder Character Builder</h1>
      </div>
      <div className="headerNav">
        <NavLink
          activeClassName="is-active"
          className="navLink"
          to="/"
          exact={true}
        >
          Home
        </NavLink>
        <NavLink
          activeClassName="is-active"
          className="navLink"
          to="/character"
        >
          Character
        </NavLink>
        <NavLink
          activeClassName="is-active"
          className="navLink"
          to="/specialty"
        >
          Specialty
        </NavLink>
        <NavLink
          activeClassName="is-active"
          className="navLink"
          to="/description"
        >
          Description
        </NavLink>
      </div>

      <Stepper style={stepperStyle} activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
};

export default Header;
