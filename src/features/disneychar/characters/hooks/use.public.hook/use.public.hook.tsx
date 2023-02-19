import { useCallback, useReducer } from "react";
import { charReducer } from "../../reducer/char.reducer";
import { CharStructure } from "../../models/character";
import { CharApiPublicRepo } from "../../services/publicapi/char.api.public.repo";
import * as ac from "../../reducer/char.actions.creators";

export type usePublicCharStructure = ReturnType<typeof usePublicChar>;
export function usePublicChar(repo: CharApiPublicRepo) {
  const initialState: CharStructure[] = [];

  const [char, dispatch] = useReducer(charReducer, initialState);

  const handlerError = (error: Error) => {
    console.log(error.message);
  };

  const loadPublicChar = useCallback(async () => {
    try {
      const char = await repo.loadChar();
      dispatch(ac.loadCharCreator(char));
    } catch (error) {
      handlerError(error as Error);
    }
  }, [repo]);

  return {
    char,
    loadPublicChar,
  };
}
