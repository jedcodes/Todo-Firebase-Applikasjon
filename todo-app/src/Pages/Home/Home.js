import React from "react";
import { SideBar, TodoList } from "../../Components";

const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <TodoList />
    </div>
  );
};

export default Home;
