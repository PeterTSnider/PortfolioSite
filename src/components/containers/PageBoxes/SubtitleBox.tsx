import styled from "styled-components";
import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const MainSubtitleBox = styled.div`
  font-size: 2rem;
  padding: 1rem;
  padding-left: 0px;
  text-align: center;
`;

const SubtitleBox: React.FC<Props> = ({ children, ...props }) => {
  return <MainSubtitleBox {...props}>{children}</MainSubtitleBox>;
};

export default SubtitleBox;
