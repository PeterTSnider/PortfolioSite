import styled from "styled-components";
import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const MainVisBox = styled.div`
position: absolute;
height: 100%;
width: 100%;
object-fit: cover;
z-index: -1;
transform: translateZ(-10px) scale(2);
`;

const MainBox: React.FC<Props> = ({ children, ...props }) => {
  return <MainVisBox {...props}>{children}</MainVisBox>;
};

export default MainBox;
