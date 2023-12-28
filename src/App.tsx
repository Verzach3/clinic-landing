
import { AppShell } from "@mantine/core";
import Header from "./components/Header";
import Footer from "./views/Footer";  // Asegúrate de importar el Footer aquí
import { Outlet } from "react-router-dom";

function App() {
  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main>
        <Outlet />  {/* Este componente renderiza la página actual basada en la ruta */}
        <Footer />  {/* El Footer se mostrará en todas las páginas */}
      </AppShell.Main>
    </AppShell>
  );
}

export default App;