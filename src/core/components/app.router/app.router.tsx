import { Routes, Route } from "react-router-dom";
import { MenuOption } from "../app/App";
import { Suspense, lazy } from "react";
const About = lazy(
  () => import("../../../features/disneychar/about/page/about")
);
const HomePage = lazy(
  () => import("../../../features/disneychar/home/page/home")
);

export type AppRouterProps = {
  menuOptions: MenuOption[];
};

export function AppRouter({ menuOptions }: AppRouterProps) {
  return (
    <Suspense>
      <Routes>
        <Route path={"/"} element={<HomePage></HomePage>}></Route>
        <Route
          path={menuOptions[0].path}
          element={<HomePage></HomePage>}
        ></Route>
        {/* <Route path={menuOptions[1].path} element={<Characters></Characters>}></Route>
      <Route path={menuOptions[2].path} element={<Favorites></Favorites>}></Route> */}
        <Route path={menuOptions[1].path} element={<About></About>}></Route>
      </Routes>
    </Suspense>
  );
}
