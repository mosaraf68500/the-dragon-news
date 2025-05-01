import React from "react";
import Header from "../Components/Header/Header";
import LatestNews from "../Components/LatestNews/LatestNews";
import NavBar from "../Components/NavBar/NavBar";

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

      <main></main>

      <footer></footer>
    </div>
  );
};

export default HomeLayout;
