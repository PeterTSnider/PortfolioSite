import styled from "styled-components";
import Navbar from "../components/interface/nav/navbar";
import MainBox from "../components/containers/PageBoxes/MainBox";
import TitleBox from "../components/containers/PageBoxes/TitleBox";
import ContentBox from "../components/containers/PageBoxes/ContentBox";
import ImageBox from "../components/containers/PageBoxes/ImageBox";
import PageWrapper from "../components/containers/Wrappers/PageWrapper";
import ViewWrapper from "../components/containers/Wrappers/ViewWrapper";
import WordBox from "../components/containers/PageBoxes/WordsBox";
import SubtitleBox from "../components/containers/PageBoxes/SubtitleBox";

import headshot from "../assets/Images/headshot.jpg";
import leavenworth from "../assets/Images/leavenworth.jpg";

const LandingBackground = styled(MainBox)`
  content: url(${leavenworth});
`;

const PortraitBox = styled(ImageBox)`
  border-radius: 1.5rem;
`;

const Portrait = styled(ImageBox)`
  content: url(${headshot});
  height: 15rem;
  width: 15rem;
  border-radius: 2rem;
`;

const Profile = styled(WordBox)`
  color: lightgrey;
  padding: 1.5rem;
  font-size: 1.25em;
  display: flex;
  flex-direction: column;
`;

function Landing() {
  return (
    <>
      <PageWrapper>
        <Navbar />
        <ViewWrapper>
          {/* Background */}
          <LandingBackground />
          {/* Foreground */}
          <TitleBox>Software Engineer</TitleBox>
        </ViewWrapper>
        <ContentBox>
          <PortraitBox>
            <Portrait />
          </PortraitBox>
          <Profile>
            <SubtitleBox>
              An Experienced Project Manager Turned Aspiring Software Engineer
            </SubtitleBox>
            In January of 2022 I made the exciting decision to lean into my
            interest in software development and aptitude for programmatic
            thinking in order to reinvent my career as a Software Engineer. As a
            jump-start to this path, I attended the Onsite Full-Time Software
            Development course provided by Coding Dojo. I am excited to bring my
            hunger for learning, as well as my ten years of experience as a
            project manager, to take on novel problems and work with a team to
            build exciting software.
          </Profile>
        </ContentBox>
      </PageWrapper>
    </>
  );
}

export default Landing;
