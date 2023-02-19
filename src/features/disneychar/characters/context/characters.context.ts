import { createContext } from "react";
import { UseCharsStructure } from "../hooks/use.priv.hook/use.priv.char";
import { usePublicCharStructure } from "../hooks/use.public.hook/use.public.hook";


type ContexType = {
  remote: usePublicCharStructure;
  private: UseCharsStructure;
};
export const CharsContext = createContext({} as ContexType);
