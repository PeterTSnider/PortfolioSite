import styled from "styled-components";
import Navbar from "../components/interface/nav/navbar";
import PageWrapper from "../components/containers/Wrappers/PageWrapper";
import ViewWrapper from "../components/containers/Wrappers/ViewWrapper";
import MainBox from "../components/containers/PageBoxes/MainBox";
import SubPageTitle from "../components/containers/PageBoxes/SubPageTitle";
import ExtLinkButton from "../components/interface/buttons/ExtLinkButton";

// image imports:
import vald_bbhill2 from "../assets/Images/vald_bbhill2.jpg";
import PS_Logo from "../assets/Images/PS_Logo.png";

interface Props {
  src: any;
}

const ProjectsBackground = styled(MainBox)`
  content: url(${vald_bbhill2});
`;

const ProjCard = styled.div`
  background-color: #212121;
  height: 20rem;
  width: 100rem;
  transform: translateZ(-2px);
  z-index: 1;
  margin: 7rem auto 0rem auto;
  border-radius: 2rem;
  display: flex;
  align-items: center;
`;

const ProjThumbnail = styled.img<Props>`
  height: 100px;
  border-radius: 0.5rem;
  margin: 2rem;
  justify-items: center;
`;

const ProjDescription = styled.div`
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  align-content: left;
`;
const ProjName = styled.div`
  font-size: 2rem;
  text-align: left;
  margin: 1rem;
`;

const ProjLink = styled(ExtLinkButton)`
  font-size: 1.2rem;
  padding: 1rem;
  margin: 1rem;
`;

const LinkBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

function Projects() {
  return (
    <>
      <PageWrapper>
        <Navbar />
        <ViewWrapper>
          {/* Background */}
          <ProjectsBackground />
          {/* Foreground */}
          <SubPageTitle>Projects</SubPageTitle>
          <ProjCard>
            <ProjThumbnail src={PS_Logo} />
            <ProjDescription>
              <ProjName>This Site</ProjName>
              <ProjDescription>
                In a much needed revamp of my existing personal website, I built
                a very simple website using Reactjs with styled-components. Future upgrades include a refactor of the component/page structure, implementation of a styling framework for select user interactions, and an expansion of About Me to include periodic updates.
              </ProjDescription>
              <LinkBox>
                <ProjLink>
                  <a href="https://www.petertsnider.com">Link</a>
                </ProjLink>
                <ProjLink>
                  <a href="https://www.petertsnider.com">Github Repo</a>
                </ProjLink>
              </LinkBox>
            </ProjDescription>
          </ProjCard>
        </ViewWrapper>
      </PageWrapper>
    </>
  );
}

export default Projects;
