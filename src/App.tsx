import { AppShell } from "@mantine/core";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <AppShell header={{ height: 60}}>
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main style={{ paddingTop: 0}}>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
