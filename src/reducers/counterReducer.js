import * as types from "../constants/actionTypes";

const initialState = {
  name: "",
  advancementType: "Milestone",
  codingSkillsType: "Manual",
  specialty: "",
  stereotype: "",
  characterSkills: {
    typingSpeed: 10,
    javascript: 10,
    sleepResistance: 10,
    googleFu: 10,
    hygiene: 10
  },
  characters: [],
  login: false
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case types.HOMEUPDATE:
      const info = action.payload;
      return {
        ...state,
        ...info
      };
    case types.PASSVERIFICATION:
      console.log('reducer action.payload',action.payload)
      return {
        ...state,
        login: true
      };

    case types.STEREOTYPEUPDATE:
      const {
        stereotype,
        typingSpeed,
        javascript,
        sleepResistance,
        googleFu,
        hygiene
      } = action.payload;
      return {
        ...state,
        stereotype,
        characterSkills: {
          typingSpeed,
          javascript,
          sleepResistance,
          googleFu,
          hygiene
        }
      };

    case types.SPECIALTYUPDATE:
      return {
        ...state,
        specialty: action.payload.specialty
      };

    default:
      return state;
  }
}

export default counterReducer;
