import { ThemeProvider } from "@mui/material/styles";
import React, { useEffect } from "react";
import "./App.css";
import { theme } from "./components/utils/UIThemes";
import { Router } from "./Router";
import { BrowserRouter, useParams } from "react-router-dom";
import Footer from "./components/nav/Footer";
import { AuthProvider } from "./components/store/auth/AuthProvider";

function App() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
        <AuthProvider>
        <div className="w-full flex items-center justify-center  ">
          <div id='fade-in' className="relative flex flex-col w-full  max-w-[1440px] 2xl:items-center ">
            <Router />
            <Footer />
          </div>
        </div>
        </AuthProvider>
        </BrowserRouter> 
    </ThemeProvider>
  );
}

export default App;
