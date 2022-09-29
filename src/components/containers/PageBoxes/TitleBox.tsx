import styled from "styled-components";
import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const MainTitleBox = styled.div`
  font-size: 4rem;
  border-style: solid;
  border-width: .5rem;
  padding: 2rem;
  border-radius: 0.5rem;
  z-index: -1;
  text-align: center;
  transform: translateZ(-5px) scale(1.3);
`;


const TitleBox: React.FC<Props> = ({ children, ...props }) => {
  return <MainTitleBox {...props}>{children}</MainTitleBox>;
};

export default TitleBox;
