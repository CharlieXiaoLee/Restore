import { Container, createTheme, CssBaseline } from "@mui/material";
import Header from "./Header";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
function App() {
  const [darkMode,setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette:{
      mode: paletteType
    }
  })

  function handleThemeChange(){
    setDarkMode(!darkMode);
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <CssBaseline />
      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>
  )
}

export default App
