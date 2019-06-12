import * as types from "../constants/actionTypes";

const initialState = {
  name: "",
  advancementType: "",
  codingSkillsType: "",
  stereotype: "",
  speciality: "",
  characterSkills: {
    typingSpeed: 1,
    javascript: 1,
    sleepResistance: 1,
    googleFu: 1,
    hygiene: 1
  }
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case types.HOMEUPDATE:
      console.log(action.payload);
      // let name = action.payload.name;
      // let advancementType = action.payload.advancementType;
      // let codingSkillsType = action.payload.codingSkillsType;

      return {
        ...state,
        name: action.payload.name,
        advancementType: action.payload.advancementType,
        codingSkillsType: action.payload.codingSkillsType
      };

    case types.STEREOTYPEUPDATE:
      return {
        ...state
      };

    case types.SPECIALTYUPDATE:
      return {};

    default:
      return state;
  }
}

export default counterReducer;
