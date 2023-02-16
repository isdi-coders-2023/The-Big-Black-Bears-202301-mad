import { CharStructure } from "../characters/models/character";
import { charActions } from "./char.actions";

interface Action {
  type: string;
  payload?: any;
}

export interface CharAction extends Action {
  payload: CharStructure | CharStructure[] | CharStructure["id"];
}

export const loadCharCreator = (payload: CharStructure[]): CharAction => {
  return {
    type: charActions.load,
    payload,
  };
};

export const createCharCreator = (payload: CharStructure) => {
  return {
    type: charActions.create,
    payload,
  };
};

export const updateCharCreator = (payload: CharStructure) => {
  return {
    type: charActions.update,
    payload,
  };
};

export const deleteCharCreator = (payload: CharStructure["id"]) => {
  return {
    type: charActions.delete,
    payload,
  };
};
