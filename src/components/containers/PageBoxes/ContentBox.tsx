import styled from "styled-components";
import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const MainContBox = styled.div`
  background-color: #212121;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  width: 100vw;
`;

const ContentBox: React.FC<Props> = ({ children, ...props }) => {
  return <MainContBox {...props}>{children}</MainContBox>;
};

export default ContentBox;