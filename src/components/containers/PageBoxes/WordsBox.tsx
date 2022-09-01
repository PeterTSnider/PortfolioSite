import styled from "styled-components";
import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const MainWordsBox = styled.div`
  background-color: #212121;
  padding: 0.5em 1em;
  display: flex;
  flex-direction: column;
  width: 100vw;
  font-size: 1.5em;
`;

const WordsBox: React.FC<Props> = ({ children, ...props }) => {
  return <MainWordsBox {...props}>{children}</MainWordsBox>;
};

export default WordsBox;
