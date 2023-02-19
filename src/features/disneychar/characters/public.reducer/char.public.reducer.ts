import { CharStructure } from "../models/character";
import { charPublicAction } from "./char.public.actions";
import { CharPublicAction } from "./char.public.actions.creators";

export function charPublicReducer(
  state: CharStructure[],
  action: CharPublicAction
): CharStructure[] {
  if (action.type === charPublicAction.load) {
    return action.payload;
  } else {
    return state;
  }
}
