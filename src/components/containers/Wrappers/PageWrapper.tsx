import React, { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children?: ReactNode;
}

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    overflow-y: auto;
    overflow-x: hidden;
    perspective: 10px;
    background-color: #212121;
`

const PageWrapper: React.FC<Props> = ({children, ...props}) =>{
    return <Wrapper {...props}>{children}</Wrapper>;
};

export default PageWrapper;