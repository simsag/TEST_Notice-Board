import { getPostClick } from "../../utils/apis/post";

function Header() {
  getPostClick();
  return (
    <>
      <header className="header-ko">
        <div>
          <div id="logo">윙크챗</div>
          <div id="headerSpeechBubble">
            "윙크 챗으로 생각을 나눠보세요, 우리는 여기서 대화합니다."
          </div>
        </div>
        <div id="postButton">
          <a href="#post">게시글</a>
        </div>
      </header>
      <section id="post"></section>
    </>
  );
}

export default Header;
