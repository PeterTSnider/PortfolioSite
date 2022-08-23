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
  width: 60rem;
  transform: translateZ(1px) scale(0.75);
  z-index: 1;
  margin: 6rem auto;
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
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 1rem;
`;
const ProjName = styled.div`
  font-size: 2rem;
  text-align: left;
  margin-bottom: 1rem;
`;

const ProjLink = styled(ExtLinkButton)`
  margin: 1.5rem auto;
  font-size: 1.2rem;
  padding: 1rem;
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
          <ProjCard>
            <ProjThumbnail src={PS_Logo} />
            <ProjDescription>
              <ProjName>This Site</ProjName>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quod
              voluptatum dignissimos provident repudiandae officiis molestias
              minus facilis deleniti modi nostrum saepe odio quas temporibus,
              officia ipsum ratione est culpa distinctio eum, nisi alias facere
              excepturi omnis! Impedit, ad neque facilis voluptatibus, sequi
              eligendi ea eaque beatae perferendis repudiandae ipsum dolore
              temporibus blanditiis consequatur!
              <ProjLink>
                <a href="https://www.petertsnider.com">This Site</a>
              </ProjLink>
            </ProjDescription>
          </ProjCard>
        </ViewWrapper>
      </PageWrapper>
    </>
  );
}

export default Projects;
