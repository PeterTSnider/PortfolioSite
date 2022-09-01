import styled from "styled-components";
import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const MainParagBox = styled.div`
  background-color: #212121;
  padding: 0.25rem;
  font-size: 1.2rem;
`;

const ParagBox: React.FC<Props> = ({ children, ...props }) => {
  return <MainParagBox {...props}>{children}</MainParagBox>;
};

export default ParagBox;
