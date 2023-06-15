import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./pages/global/SideBar";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";
import Login from "./pages/user/login";
import Announcements from "./pages/announcements";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [path, setPath] = useState("");

  // this is still in progress
  useEffect(() => {
    let pathName = window.location.pathname;
    let arr = pathName.toString().split("/");
    let currentPath = arr[arr.length - 1];
    setPath(currentPath);
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {path.length > 0 && <Sidebar />}
          <main className="content">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/register" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/announcements" element={<Announcements />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
