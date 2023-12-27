import { AppShell } from "@mantine/core";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <AppShell styles={{ main: { height: "100%"}}}>
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
