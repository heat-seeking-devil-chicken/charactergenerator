import React from "react";
import { NavLink, Link } from "react-router-dom";

import "../styles/index.css";

import { ArrowForward, ArrowBack } from "@material-ui/icons";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

const Header = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const stepperStyle = {
    marginLeft: "-15%",
    width: "50%",
    padding: "10px"
  };

  const leftButton = {
    position: "absolute",
    top: "30%",
    left: "25%",
    padding: "7px 12px",
    border: "1px solid black"
  };

  const rightButton = {
    position: "absolute",
    top: "30%",
    right: "25%",
    padding: "7px 12px",
    border: "1px solid black"
  };

  function getSteps() {
    return ["Home", "Character", "Specialty", "Description"];
  }

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    // dispach action creator
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function getLinkRoute() {
    return ["/", "/character", "/specialty", "/description"];
  }

  const steps = getSteps();
  const linkRoute = getLinkRoute();

  return (
    <div className="header">
      <h1 className="headerH1">Coder Character Builder</h1>
      <Stepper style={stepperStyle} activeStep={activeStep}>
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
          <button style={leftButton} onClick={handleBack}>
            <ArrowBack />
          </button>
        </Link>
      ) : activeStep > 0 ? (
        <>
          <Link to={linkRoute[activeStep - 1]}>
            <button style={leftButton} onClick={handleBack}>
              <ArrowBack />
            </button>
          </Link>
          <Link to={linkRoute[activeStep + 1]}>
            <button style={rightButton} onClick={handleNext}>
              <ArrowForward />
            </button>
          </Link>
        </>
      ) : (
        <Link to={"/character"}>
          <button style={rightButton} onClick={handleNext}>
            <ArrowForward />
          </button>
        </Link>
      )}
    </div>
  );
};

export default Header;
