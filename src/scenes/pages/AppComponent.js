import { ColorModeContext, useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "../../scenes/global/Topbar";
import Dashboard from "../../scenes/dashboard";

import Sidebar from "../../scenes/global/Sidebar";
import Team from "../../scenes/team";
import LoginPage from "../../scenes/LoginPage";
import { Outlet } from "react-router-dom";

function AppComponent() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />

            <Outlet />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default AppComponent;
