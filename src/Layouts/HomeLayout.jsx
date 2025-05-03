import React from "react";
import Header from "../Components/Header/Header";
import LatestNews from "../Components/LatestNews/LatestNews";
import NavBar from "../Components/NavBar/NavBar";
import LeftSide from "../HomeLayout/Asidebar/LeftSide";
import RightSide from "../HomeLayout/RightSide/RightSide";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto py-3">
          <LatestNews></LatestNews>
        </section>

        <section className="w-11/12 mx-auto py-3">
          <NavBar></NavBar>
        </section>
      </header>

      <main className="w-11/12 mx-auto grid grid-cols-12 gap-4 mt-4 ">
        <aside className="col-span-3">
          <LeftSide></LeftSide>
        </aside>

        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>

        <aside className="col-span-3">
          <RightSide></RightSide>
        </aside>
      </main>

      <footer></footer>
    </div>
  );
};

export default HomeLayout;
