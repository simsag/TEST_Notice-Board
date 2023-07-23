import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { getPostClick } from "utils/apis/post";
import { Link } from "react-router-dom";
import Loading from "../common/loading";

function Board() {
  const [data, setData] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getPostClick();
        setData(result);
        setDataLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // 페이징 처리 
  const [page, setPage] = useState(1); // 상태 사용. 반응형 변수. 렌더링 자동으로 해줌.

  let contentPerPage = 10;
  let maxPage = Math.floor((data.length - 1) / contentPerPage) + 1;

  let contentStartByPage = (page - 1) * contentPerPage + 1;
  let contentEndByPage = page * contentPerPage;

  let pageData = [];

  // 페이지 필터링
  for (let i = 0; i < data.length; i++) {
    if (contentStartByPage <= i + 1 && i + 1 <= contentEndByPage) {
      pageData.push(data[i]);
    }
  }

  console.log(data);
  console.log(pageData);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
      {dataLoading ? (
        <Loading></Loading>
      ) : (
        <>
          <div>
            {pageData.map((item) => (
              <Post key={item.id}>
                <Link to={`/board/${item.id}`}>
                  <PostContent>
                    <Id>{item.id}</Id>
                    <Title>{item.title}</Title>
                    <Name>작성자: {item.userId}</Name>
                  </PostContent>
                </Link>
              </Post>
            ))}
          </div>
          <DivButton>
            {Array.from({ length: maxPage }, (_, index) => (
              <Button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                value={index + 1}
              >
                {index + 1}
              </Button>
            ))}
          </DivButton>
        </>
      )}
    </>
  );
}

export default Board;

const Button = styled.button`
  margin-right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid #88ea66;
  background-color: #dcffc0;
  &:hover {
    transform: translateY(-4px);
    background-color: #b3ff9975;
    transition: all 0.4s;
  }
`;

const DivButton = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 30px;
  gap: 10px;
`;

const Name = styled.div`
  width: 90px;
  font-size: 15px;
`;

const Post = styled.div`
  background-color: #f2f4f6;
  width: 1190px;
  height: 100px;
  border-radius: 26px;
  padding: 24px 20px 36px;
  transition: 0.2s;
  margin: 20px 0;
  &:hover {
    box-shadow: 0 0 15px #c5c5c5;
    transform: translateY(-4px);
  }
  &:last-child {
    margin-bottom: 90px;
  }
`;

const PostContent = styled.div`
  display: flex;
`;

const Title = styled.div`
  font-size: 20px;
  width: 100%;
  height: fit-content;
  color: black;
  font-weight: bold;
  padding-top: 8.5px;
`;

const Id = styled.div`
  font-size: 20px;
  padding: 10px;
  height: fit-content;
  color: black;
  font-weight: bold;
  flex-shrink: 0; /* Add this line to prevent the element from expanding */
`;
