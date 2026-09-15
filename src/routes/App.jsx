import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Createpost from "../components/Createpost";
import Cards from "../components/Cards";
import Postlits from "../components/Postlists";
import { useState } from "react";
import PostlistProvider from "../store/Post-list-store";
import { Outlet } from "react-router-dom";

const App = () => {
  const [selectedtab, setSelectedtab] = useState("");
  return (
    <PostlistProvider>
      <div className="app-container">
        <Sidebar selectedtab={selectedtab} setSelectedtab={setSelectedtab} />

        <div className="content">
          <Header />

         
<Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
    </PostlistProvider>
  );
};

export default App;
