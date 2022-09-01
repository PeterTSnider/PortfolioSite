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
import fam_car from "../assets/Images/fam_car.jpg";

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
            </ParagBox>{" "}
            <ParagBox>
              I found an increasingly strong pull to create, and coupled with an
              interest in the seemingly endless possibilities offered by building
              with code, I began to think more seriously about where my
              aspirations could take me. In early 2022 and after careful
              consideration, I decided to take the plunge and commit full-time to
              learning software development. A sixteen-week coding bootcamp may be
              the least amount of sleep I've ever survived on, but it gave me the
              skills to build, and build on learning. I'm excited at the prospect
              of working with a team to build real, deployed apps to reach users
              worldwide. I'm hungry to keep learning and can't wait to sink my
              teeth into a codebase that I can contribute to as well as learn
              from!
            </ParagBox>
          </WordsBox>
          <ContentPic height="18rem" src={resp} />
        </ContentBox>
        <ContentBox>
          <ContentPic height="25rem" src={fam_car} />
          <WordsBox>
            <SubtitleBox>Personal Life</SubtitleBox>Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Quae, numquam odit. Inventore, iste
            optio culpa veniam distinctio perferendis, voluptas repellendus
            temporibus possimus obcaecati ut. Nam est aperiam aut ipsa eos
            dolorem mollitia consectetur vitae fugit debitis molestias officia
            error blanditiis esse veritatis quaerat perferendis earum qui
            consequuntur, dolore, velit sunt numquam! Distinctio exercitationem
            reiciendis corporis aspernatur, id, dolorum aut facere provident
            numquam, magnam modi alias asperiores facilis velit cupiditate
            accusamus blanditiis debitis atque?
          </WordsBox>
        </ContentBox>
      </PageWrapper>
    </>
  );
}

export default About;
