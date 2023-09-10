import styled from "@emotion/styled";

export const Title = styled.h1`
  color: ${(props) => props.color};
  font-size: 70px;
  text-align: center;
  background-color: aqua;
  padding-left: auto;
  margin: 0;
  text-decoration: line-through
`;

const HelpMe = styled.h1`
  display: flex;
  justify-content: end;
  align-items: center;
  position: top;
  text-decoration: line-through
`;
