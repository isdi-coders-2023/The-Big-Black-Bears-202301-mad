import { useCallback, useReducer } from "react";
import { CharStructure } from "../../models/character";
import { CharApiPublicRepo } from "../../services/publicapi/char.api.public.repo";
import * as ac from "../../public.reducer/char.public.actions.creators";
import { charPublicReducer } from "../../public.reducer/char.public.reducer";

export type usePublicCharStructure = ReturnType<typeof usePublicChar>;
export function usePublicChar(repo: CharApiPublicRepo) {
  const initialState1: CharStructure[] = [];

  const [char, dispatch] = useReducer(charPublicReducer, initialState1);

  const handlerError = (error: Error) => {
    console.log(error.message);
  };

  const loadPublicChar = useCallback(
    async (page: number) => {
      try {
        const char = await repo.loadChar(page);
        dispatch(ac.loadPublicChar(char));
      } catch (error) {
        handlerError(error as Error);
      }
    },
    [repo]
  );

  return {
    char,
    loadPublicChar,
  };
}
