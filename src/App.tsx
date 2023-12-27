import { AppShell } from "@mantine/core";
import Header from "./components/Header";

function App() {
  return (
    <AppShell>
      <AppShell.Header>
        <Header />
      </AppShell.Header>
    </AppShell>
  );
}

export default App;
