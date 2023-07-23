import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { getPostClick } from "utils/apis/post";
import { useParams } from "react-router-dom";

function BoardContent() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getPostClick();
        for (let v of result) {
          if (id == v.id) {
            setData(v);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  console.log(data);

  // 뒤로가기 함수
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <>
      {/* <PostContent>
        <Id>{data.id}</Id>
        <Title>{data.body}</Title>
        <Name>작성자: {data.userId}</Name>
      </PostContent> */}
      <PostContent>
        <Box>
          <Head>
            <Id>{data.id}</Id>
            <Name>작성자 : {data.userId}</Name>
          </Head>
          
          <Body>{data.body}</Body>
          <BackButton onClick={handleGoBack}>뒤로가기</BackButton>
        </Box>
        
      </PostContent>
      {/* 뒤로가기 버튼 */}
      
    </>
  );
}


export default BoardContent;

const Box = styled.div`
  
  background-color: #F2F4F6;
  width: 800px;
  height: 290px;
  border-radius: 20px;
  box-shadow: 0 0 10px #c5c5c5;
`;

const Head = styled.div`
  display: flex;
`

const Name = styled.div`
  display: flex;
  width: 200px;
  font-size: 20px;
  padding: 20px;
  margin-top: 6px;
  align-items: center;
  position: relative;
  right: -600px;

`;

const PostContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  height: 100vh; /* 추가: 컨텐츠가 차지하는 높이를 화면 전체 높이로 설정 */
  position: relative;
  top: -90px;
`;

const Body = styled.div`
  font-size: 25px;
  width: 90%;
  color: black;
  padding-left: 50px;
  padding-top: 8.5px;
`;

const Id = styled.div`
  font-size: 20px;
  padding: 20px;
  font-weight: bold;
`;

const BackButton = styled.button`
  margin: 20px 0 0 43px;

  padding: 10px 20px;
  font-size: 15px;
  border: none;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  border-radius: 20px;
  &:hover {
    background-color: #45a049;
  }
`;
