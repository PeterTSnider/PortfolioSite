import React, { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children?: ReactNode;
}

const SubWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 75vh;
    width: 100vw;
    transform-style: preserve-3d;
    z-index: -2;
`

const ViewWrapper: React.FC<Props> = ({children, ...props}) =>{
    return <SubWrapper {...props}>{children}</SubWrapper>;
};

export default ViewWrapper;