import { CharStructure } from "../models/character";
import { charPublicAction } from "./char.public.actions";

interface Action {
  type: string;
  payload?: any;
}

export interface CharPublicAction extends Action {
  payload: CharStructure[];
}

export const loadPublicChar = (payload: CharStructure[]): CharPublicAction => {
  return {
    type: charPublicAction.load,
    payload,
  };
};

export const getPublicChar = (payload: CharStructure[]): CharPublicAction => {
  return {
    type: charPublicAction.get,
    payload,
  };
};
