import styled from "styled-components";
import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const MainWordBox = styled.div`
  background-color: #212121;
  padding: 0.5em 1em;
  display: flex;
  flex-direction: column;
  width: 100vw;
  font-size: 1.5em;
`;

const WordBox: React.FC<Props> = ({ children, ...props }) => {
  return <MainWordBox {...props}>{children}</MainWordBox>;
};

export default WordBox;
