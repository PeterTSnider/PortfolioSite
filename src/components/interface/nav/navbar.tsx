import React from "react";
import styled from "styled-components";
import PS_Logo from "../../../assets/Images/PS_Logo.png";
import { Link } from "react-router-dom";

const MainBar = styled.div`
  position: sticky;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #dddddd;
  border-bottom: solid;
  border-width: 1px;
  background-color: #212121;
  width: 100vw;
  padding: 0.1rem;
  z-index: 1;
`;

const HomeLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`;

const NavLinkBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  margin-right: 1rem;
`;

const Logo = styled.div`
  background-image: url(${PS_Logo});
  background-size: contain;
  background-repeat: no-repeat;
  height: 2rem;
  width: 2rem;
  margin: .25rem 1rem;
`;

const Brand = styled.div`
  font-size: 18px;
  font-weight: 600;
  padding: 0.5rem;
  color: #dddddd;
`;

const NavLink = styled(Link)`
  font-size: 16px;
  font-weight: 600;
  margin: 0.5rem;
  padding: 0.25rem;
  color: #dddddd;
  text-decoration: none;
  cursor: pointer;

&:hover{
  border:1px solid #888888;
  border-radius: .2em;
  font-size: 1.1rem;
}
`;

const Navbar: React.FC = () => {
  return (
    <>
      <MainBar>
        <HomeLink to="/">
          <Logo />
          <Brand>Peter T. Snider</Brand>
        </HomeLink>
        <NavLinkBox>
          <NavLink to="/about">About Me</NavLink>
          <NavLink to="/creds">Education and Resume</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavLinkBox>
      </MainBar>
    </>
  );
};

export default Navbar;
