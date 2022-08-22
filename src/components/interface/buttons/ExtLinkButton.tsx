import React, { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children?: ReactNode;
}

const LinkWrapper = styled.a`
  border-style: solid;
  border-radius: 0.2em;
  border-width: 0.5px;
  border-color: lightgray;
  width: fit-content;
  margin: 0.5rem 3rem;
  cursor: pointer;

  &:hover {
    border: 1px solid #888888;
    border-radius: 0.2em;
  }
`;

const ExtLinkButton: React.FC<Props> = ({ children, ...props }) => {
  return <LinkWrapper {...props}>{children}</LinkWrapper>;
};

export default ExtLinkButton;
