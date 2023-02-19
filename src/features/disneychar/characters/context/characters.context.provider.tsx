import { useMemo } from "react";
import { usePrivChar } from "../hooks/use.priv.hook/use.priv.char";
import { usePublicChar } from "../hooks/use.public.hook/use.public.hook";
import { CharApiPrivateRepo } from "../services/privateapi/char.api.private.repo";
import { CharApiPublicRepo } from "../services/publicapi/char.api.public.repo";
import { CharsContext } from "./characters.context";

export function CharsContextProvider({ children }: { children: JSX.Element }) {
  const charsRepoPublic = useMemo(() => new CharApiPublicRepo(), []);
  const charsRepoPrivate = useMemo(() => new CharApiPrivateRepo(), []);
  const context = {
    remote: { ...usePublicChar(charsRepoPublic) },
    private: { ...usePrivChar(charsRepoPrivate) },
  };

  return (
    <CharsContext.Provider value={context}>{children}</CharsContext.Provider>
  );
}
