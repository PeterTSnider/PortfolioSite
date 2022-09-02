import styled from "styled-components";
import Navbar from "../components/interface/nav/navbar";
import MainBox from "../components/containers/PageBoxes/MainBox";
import SubPageTitle from "../components/containers/PageBoxes/SubPageTitle";
import PageWrapper from "../components/containers/Wrappers/PageWrapper";
import ViewWrapper from "../components/containers/Wrappers/ViewWrapper";
import ContentBox from "../components/containers/PageBoxes/ContentBox";
import WordsBox from "../components/containers/PageBoxes/WordsBox";
import SubtitleBox from "../components/containers/PageBoxes/SubtitleBox";
import ParagBox from "../components/containers/PageBoxes/ParagBox";

// image imports:
import summitlk1 from "../assets/Images/summitlk1.jpg";
import mas from "../assets/Images/mas.jpg";
import resp from "../assets/Images/respirator.jpg";
import us_GH from "../assets/Images/us_GH.jpg";
import gram_car from "../assets/Images/gram_car.jpg";
import jobsite from "../assets/Images/jobsite.jpg";

interface ImgProps {
  src: any;
  height: string;
}

interface LnkProps {
  href: string;
}

const AboutBackground = styled(MainBox)`
  content: url(${summitlk1});
`;

const ContentPic = styled.img<ImgProps>`
  width: ${(p) => p.width};
  height: ${(p) => p.height};
  border-radius: 1rem;
  margin: 1.5em;
`;

const Link = styled.a<LnkProps>`
  color: lightblue;
`;

function About() {
  return (
    <>
      <PageWrapper>
        <Navbar />
        <ViewWrapper>
          {/* Background */}
          <AboutBackground />
          {/* Foreground */}
          <SubPageTitle>About Me</SubPageTitle>
        </ViewWrapper>
        <ContentBox>
          <ContentPic height="25rem" src={mas} />
          <WordsBox>
            <SubtitleBox>Hello There!</SubtitleBox>
            <ParagBox>
              I'm so glad you're here to check out my portfolio and learn a bit
              about my passions and pastimes as well as professional experience.
              I'm proud to call Seattle home and love all everything about the
              Pacific Northwest. Please also have a look at my profile on{" "}
              <Link href="https://github.com/PeterTSnider">Github</Link> for
              project code repos.
            </ParagBox>
            <ParagBox>
              Also! Please stop by periodically as I'm always working on
              personal projects (maybe some games, ground-breaking social media
              apps, etc.) that I'll always share and welcome any feedback on!
            </ParagBox>
          </WordsBox>
        </ContentBox>
        <ContentBox>
          <ContentPic height="20rem" src={resp} />
          <WordsBox>
            <SubtitleBox>Professional Life</SubtitleBox>
            <ParagBox>
              Following my graduation from Washington State University in 2010
              with a BS degree in Environmental Science, I began my professional
              career with a small consulting firm in Yakima, Washington. My time
              in Yakima was with mixed feelings; the experience was invaluable
              and I worked with a great team, however the Seattle region has
              always been home and after a year in Yakima I was honored to
              accept a position with a Seattle-based firm. This small firm
              became a large firm in 2015 when we were aquired by a national
              Geotechnical and Environmental consulting firm based in Kansas.
              With the large firm came opportunity and I was able to grow my
              Industrial Hygiene career to the title of Project Manager. I was
              proud to manage projects and clients for both the public and
              private sectors. I learned to take ownership of projects from
              proposal to invoicing and close-out and work with a team to manage
              a dynamic schedule that always felt just one technician too short.
            </ParagBox>
            <ParagBox>
              With a growing desire to distance myself from the commerical
              construction industry, I also found an increasingly strong pull to
              create, and coupled with an interest in the seemingly endless
              possibilities offered by building with code, I began to think more
              seriously about where my aspirations could take me. In early 2022
              and after careful consideration, I decided to take the plunge and
              commit full-time to learning software development. A sixteen-week
              coding bootcamp may be the least amount of sleep I've ever
              survived on, but it gave me the skills to build, and build on
              learning. I'm excited at the prospect of working with a team to
              build real, deployed apps to reach users worldwide. I'm hungry to
              keep learning and can't wait to sink my teeth into a codebase that
              I can contribute to as well as learn from!
            </ParagBox>
          </WordsBox>
          <ContentPic height="15rem" src={jobsite} />
        </ContentBox>
        <ContentBox>
          <ContentPic height="25rem" src={us_GH} />
          <WordsBox>
            <SubtitleBox>Personal Life</SubtitleBox>
            <ParagBox>
              Happy to call the Ballard neighborhood of Seattle home, I live
              with my girlfriend, Shannon (Shan), and our hundred-pound lap dog,
              Chessa. Shan is a loving and brilliantly sharp RN in the
              Cardiac-ICU. When Shan isn't saving lives and I'm not at the
              keyboard, we like to get outside and on the trail for an overnight
              backpacking trip, a visit with family, a SUP splash around a local
              lake, or skiing in the winter.
            </ParagBox>
            <ParagBox>
              If we aren't out and about, we're likely cooking at home, spending
              some time with the dog, or planning our next travel adventure!
            </ParagBox>
          </WordsBox>
          <ContentPic height="20rem" src={gram_car} />
        </ContentBox>
      </PageWrapper>
    </>
  );
}

export default About;
