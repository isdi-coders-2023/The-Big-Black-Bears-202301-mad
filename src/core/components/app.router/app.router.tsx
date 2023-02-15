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
        <Route path={menuOptions[3].path} element={<About></About>}></Route>
        {/* <Route path={menuOptions[1].path} element={<Characters></Characters>}></Route>
      <Route path={menuOptions[2].path} element={<Favorites></Favorites>}></Route>
      <Route path={menuOptions[3].path} element={<Details></Details>}></Route>
      <Route path={menuOptions[4].path} element={<Add></Add>}></Route>
      <Route path={menuOptions[5].path} element={<Modify></Modify>}></Route>

      <Route path={menuOptions[7].path} element={<Error></Error>}></Route> */}
      </Routes>
    </Suspense>
  );
}
