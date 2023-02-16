import { CharStructure } from "../characters/models/character";
import { CharAction } from "./char.actions.creators";
import { charActions } from "./char.actions";

export function charReducer(
  state: CharStructure[],
  action: CharAction
): CharStructure[] {
  switch (action.type) {
    case charActions.load:
      return action.payload as CharStructure[];
    case charActions.create:
      return [...state, action.payload as CharStructure];
    case charActions.update:
      const payload = action.payload as CharStructure;
      return state.map((item) => (item.id === payload.id ? payload : item));
    case charActions.delete:
      const id = action.payload as CharStructure["id"];
      return state.filter((item) => item.id !== id);
    default:
      return state;
  }
}
