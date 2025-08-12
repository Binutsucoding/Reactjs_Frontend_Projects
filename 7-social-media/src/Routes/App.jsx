import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "../Components/Headers";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import PostListProvider from "../Store/Post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  //This is State which stores on which thing you clicked home or create page.
  const [selectedTab, setSelectedTab] = useState("Home"); //The Active Remains Bydefault on Home

  return (
    <PostListProvider>
      <div className="app-container">
        {/* Here we send a props selectedTab for what is
       bydefault set like eg. Homem and setSelectedTab for change the 
       state when we click other thing */}
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>

        <div className="content">
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
