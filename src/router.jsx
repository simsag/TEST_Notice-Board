import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "components/main";
import Board from "components/board/board_index";
import BoardContent from "components/board/board_content";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/:id" element={<BoardContent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
