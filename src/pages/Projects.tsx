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
import zipfyLogo from "../assets/Images/zipfy-logo-mark.png";

interface Props {
  src: any;
}

const ProjectsBackground = styled(MainBox)`
  content: url(${vald_bbhill2});
`;

const ProjCard = styled.div`
  background-color: #212121;
  height: 20rem;
  width: 75vw;
  margin: 5rem auto 0rem auto;
  border-radius: 2rem;
  display: flex;
  align-items: center;
`;

const ProjThumbnail = styled.img<Props>`
  height: 100px;
  width: 86px;
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
`;

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
        </ViewWrapper>
        <ProjCard>
          <ProjThumbnail src={PS_Logo} />
          <ProjDescription>
            <ProjName>This Site</ProjName>
            <ProjDescription>
              In a much-needed revamp of my existing personal website, I built a
              very simple website using Reactjs with styled-components. Future
              upgrades include a refactor of the component/page structure,
              implementation of a styling framework for select user
              interactions, and an expansion of About Me to include periodic
              updates.
            </ProjDescription>
            <LinkBox>
              <ProjLink>
                <a href="https://www.petertsnider.com">Link</a>
              </ProjLink>
              <ProjLink>
                <a href="https://www.github.com/PeterTSnider/PortfolioSite">
                  Github Repo
                </a>
              </ProjLink>
            </LinkBox>
          </ProjDescription>
        </ProjCard>
        <ProjCard>
          <ProjThumbnail src={zipfyLogo} />
          <ProjDescription>
            <ProjName>Zipfy</ProjName>
            <ProjDescription>
              Zipfy is a simple web app that explores one of the most surprising
              patterns in language and data: Zipf's Law. Paste text or upload a
              CSV file, and Zipfy will analyze how closely the frequency
              distribution follows an ideal Zipf curve. It then generates a
              Zipfy Score, summary statistics, and interactive visualizations to
              help you understand the structure of your data.
            </ProjDescription>
            <LinkBox>
              <ProjLink>
                <a href="https://zipfy.dogpawsystems.com/">Link</a>
              </ProjLink>
              <ProjLink>
                <a href="https://github.com/PeterTSnider/Zipfy">Github Repo</a>
              </ProjLink>
            </LinkBox>
          </ProjDescription>
        </ProjCard>
      </PageWrapper>
    </>
  );
}

export default Projects;
