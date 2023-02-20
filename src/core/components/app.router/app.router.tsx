import { Routes, Route } from "react-router-dom";
import { MenuOption } from "../app/App";
import { Suspense, lazy } from "react";
import ErrorPage from "../../../features/disneychar/error/error";

const About = lazy(
  () => import("../../../features/disneychar/about/page/about")
);
const HomePage = lazy(
  () => import("../../../features/disneychar/home/page/home")
);
const Characters = lazy(
  () =>
    import(
      "../../../features/disneychar/characters/components/characters/characters"
    )
);

const Details = lazy(
  () =>
    import("../../../features/disneychar/characters/components/details/details")
);

export type AppRouterProps = {
  menuOptions: MenuOption[];
  routesOptions: MenuOption[];
};

export function AppRouter({ menuOptions, routesOptions }: AppRouterProps) {
  return (
    <Suspense>
      <Routes>
        <Route path={"/"} element={<HomePage></HomePage>}></Route>
        <Route
          path={menuOptions[0].path}
          element={<HomePage></HomePage>}
        ></Route>
        <Route path={menuOptions[1].path} element={<About></About>}></Route>
        <Route
          path={menuOptions[2].path}
          element={<Characters></Characters>}
        ></Route>
        <Route
          path={routesOptions[0].path}
          element={<Details></Details>}
        ></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
        {/*<Route path={menuOptions[2].path} element={<Favorites></Favorites>}></Route> */}
      </Routes>
    </Suspense>
  );
}
