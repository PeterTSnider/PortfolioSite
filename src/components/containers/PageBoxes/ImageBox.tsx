import styled from "styled-components";
import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const MainImageBox = styled.div`
  background-color: #212121;
  padding: 1rem;
`;

const ImageBox: React.FC<Props> = ({ children, ...props }) => {
  return <MainImageBox {...props}>{children}</MainImageBox>;
};

export default ImageBox;
