import styled from "styled-components";
import Navbar from "../components/interface/nav/navbar";
import MainBox from "../components/containers/PageBoxes/MainBox";
import SubPageTitle from "../components/containers/PageBoxes/SubPageTitle";
import ContentBox from "../components/containers/PageBoxes/ContentBox";
import PageWrapper from "../components/containers/Wrappers/PageWrapper";
import ViewWrapper from "../components/containers/Wrappers/ViewWrapper";
import ExtLinkButton from "../components/interface/buttons/ExtLinkButton";
import SubtitleBox from "../components/containers/PageBoxes/SubtitleBox";
import WordBox from "../components/containers/PageBoxes/WordsBox";

import valdez from "../assets/Images/valdez.jpg";

const CredsBackground = styled(MainBox)`
  content: url(${valdez});
`;

const DocButton = styled(ExtLinkButton)`
  font-size: 1rem;
  padding: 1rem;
`;

const CredsContBox = styled(ContentBox)`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
`;

const DocsBox = styled(ContentBox)`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 0.25rem auto;
`;

const ButtonBox = styled(DocsBox)`
  display: flex;
  flex-direction: row;
`;

const CredsWords = styled(WordBox)`
  text-align: left;
  padding: 0.5rem 3rem;
`;

function Creds() {
  return (
    <>
      <PageWrapper>
        <Navbar />
        <ViewWrapper>
          {/* Background */}
          <CredsBackground />
          {/* Foreground */}
          <SubPageTitle>Education and Resume</SubPageTitle>
        </ViewWrapper>
        <CredsContBox>
          <DocsBox>
            <SubtitleBox>Resume and Diplomas</SubtitleBox>
            <CredsWords>
              I hold a Bachelor's of Science in Environmental Science from
              Washington State University and I attended and graduated from
              Coding Dojo's full-time onsite Software Development Bootcamp.
              Please click a link below for a Google docs link to view or
              download my resume and/or diplomas.{" "}
            </CredsWords>
          </DocsBox>
          <ButtonBox>
            <DocButton>
              <a href="https://drive.google.com/file/d/11D5NSyhE10XYd3MkZeYVLE7Z-tPupv7h/view?usp=sharing">
                Resume
              </a>
            </DocButton>
            <DocButton>
              <a href="https://drive.google.com/file/d/1nZvNYW8ERe1XG8v81so3-Y1thkcAZ6Tu/view?usp=sharing">
                WSU Diploma
              </a>
            </DocButton>
            <DocButton>
              <a href="https://drive.google.com/file/d/1kC-bVS09DZ50P5fco0GHszydsDPqdxj0/view?usp=sharing">
                Coding Dojo Diploma
              </a>
            </DocButton>
          </ButtonBox>
        </CredsContBox>
      </PageWrapper>
    </>
  );
}

export default Creds;
