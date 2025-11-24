import { Outlet } from "react-router";
import Nav from "./components/Nav";

export const AppLayout = () => {
  return <>
    <header>
      <h1>CSS Positioning</h1>
      <Nav />
    </header>
    <main>
      <Outlet />
    </main>
  </>;
};
