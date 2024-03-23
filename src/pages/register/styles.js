import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 80%;
  margin: 120px auto 0;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 350px;
`;

export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 20px;
  line-height: 44px;

  color: #fff;
`;

export const TitleLogin = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 20px;
  line-height: 44px;
`;

export const SubtitleLogin = styled.p`
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 35px;
  line-height: 25px;
`;

export const SubtitleBottomText = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
`;

export const BottomText = styled.h2`
  display: inline;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 25px;

  color: #fff;
`;

export const SpanText = styled.h2`
  display: inline;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;

  color: #e23dd7;
`;
