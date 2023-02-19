import { useCallback, useReducer } from "react";
import { ProtoCharStructure, CharStructure } from "../../models/character";
import { CharApiPrivateRepo } from "../../services/privateapi/char.api.private.repo";
import { charReducer } from "../../reducer/char.reducer";
import * as ac from "../../reducer/char.actions.creators";

export type UseCharsStructure = ReturnType<typeof usePrivChar>;

export function usePrivChar(repo: CharApiPrivateRepo) {
  const initialState: CharStructure[] = [];

  const [char, dispatch] = useReducer(charReducer, initialState);

  const handlerError = (error: Error) => {
    console.log(error.message);
  };

  const loadChar = useCallback(async () => {
    try {
      const char = await repo.loadChar();
      dispatch(ac.loadCharCreator(char));
    } catch (error) {
      handlerError(error as Error);
    }
  }, [repo]);

  const addChar = async (character: ProtoCharStructure) => {
    try {
      const finalChar = await repo.createChar(character);
      dispatch(ac.createCharCreator(finalChar));
    } catch (error) {
      handlerError(error as Error);
    }
  };

  const deleteChar = async (id: CharStructure["id"]) => {
    try {
      await repo.deleteChar(id);
      dispatch(ac.deleteCharCreator(id));
    } catch (error) {
      handlerError(error as Error);
    }
  };

  const updateChar = async (character: CharStructure) => {
    try {
      const finalChar = await repo.updateChar(character);
      dispatch(ac.updateCharCreator(finalChar));
    } catch (error) {
      handlerError(error as Error);
    }
  };

  return {
    char,
    loadChar,
    addChar,
    deleteChar,
    updateChar,
  };
}
