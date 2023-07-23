import "App.css";
import React from "react";
import Header from "components/common/Header";
import Board from "components/board/board_index";

function Main() {
  return (
    <>
      <div className="app-container">
        <main>
          <Header />
        </main>
      </div>
      <section className="board-section">
        <Board />
      </section>
    </>
  );
}

export default Main;
