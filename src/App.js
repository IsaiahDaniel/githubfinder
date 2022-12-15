import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Home from "pages/Home";
import About from "pages/About";
import NotFound from "pages/NotFound";
import GithubProvider from "context/github/githubContext";
import AlertProvider from "context/alert/alertContext";
import Alert from "components/Alert";
import User from "pages/User";

const App = () => {
  return (
    <GithubProvider>
      <AlertProvider>
        <BrowserRouter>
          <div className="h-screen flex flex-col justify-between">
            <Navbar />
            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:loginId" element={<User />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </AlertProvider>
    </GithubProvider>
  );
};

export default App;
