import React from "react";
import styled from "@emotion/styled";

function Loading() {
  return <LoadingDiv>사람들이 가장 싫어하는 중학교는? 로딩중...</LoadingDiv>;
}
export default Loading;

const LoadingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 22px;
  color: black;
`;
