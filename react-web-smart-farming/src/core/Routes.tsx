import { FC, useContext } from "react";
import { BrowserRouter, Route, Routes as RoutesGroup } from "react-router-dom";
import { CoreContext } from "./context";

type Props = {}

export const Routes: FC<Props> = () => {

  const { pages } = useContext(CoreContext);

  return (
    <RoutesGroup>
      {/*<Route path="/" element={<>Home</>} />*/}
      {pages.map((p, i) => <Route path={p.path} element={p.component} key={i + p.path} />)}
    </RoutesGroup>
  );
}