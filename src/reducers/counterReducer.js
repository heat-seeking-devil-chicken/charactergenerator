import * as types from "../constants/actionTypes";

const initialState = {
  count: 42,
  name: "",
  advancementType: "",
  codingSkillsType: "",
  stereotype: "",
  speciality: "",
  characters: []
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case types.HOMEUPDATE:
      console.log(action.payload);
      let name = action.payload.name;
      let advancementType = action.payload.advancementType;
      let codingSkillsType = action.payload.codingSkillsType;

      return {
        ...state,
        name,
        advancementType,
        codingSkillsType
      };

    case types.STEREOTYPEUPDATE:
      return {};

    case types.SPECIALTYUPDATE:
      return {};

    default:
      return state;
  }
}

export default counterReducer;
