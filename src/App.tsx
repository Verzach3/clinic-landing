import { AppShell } from "@mantine/core";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { FooterLinks } from "./components/FooterLinks";

function App() {
  return (
    <AppShell styles={{ main: { height: "100%" } }} >
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      {/* <AppShell.Footer zIndex={100}>
        <FooterLinks/>
      </AppShell.Footer> */}
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
