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
import meSki2 from "../assets/Images/meSkiAlp.jpg";
import chessa from "../assets/Images/chessaSnow.jpg";
import jobsite from "../assets/Images/jobsite.jpg";
import PS_Logo from "../assets/Images/PS_Logo.png";
import desk from "../assets/Images/desk.jpg";

interface ImgProps {
  src: any;
  alt: string;
  height: string;
}

interface LnkProps {
  href: string;
}

const AboutBackground = styled(MainBox)`
  content: url(${summitlk1});
`;

const ContSubBox = styled(ContentBox)`
  display: flex;
  justify-content: space-evenly;
  width: 90vw;
  margin: auto;
  align-items: top;
`;

const ContentPic = styled.img<ImgProps>`
  width: ${(p) => p.width};
  height: ${(p) => p.height};
  border-radius: 1rem;
  margin: 1.5em;
`;

const PicWCap = styled.div`
  width: 30vw;
  margin: auto 2rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BigLink = styled.a<LnkProps>`
  color: lightblue;
`;

const SmlLink = styled.a<LnkProps>`
  color: #2d2dcf;
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
          <ContentPic height="25rem" src={mas} alt="me_in_munich" />
          <WordsBox>
            <SubtitleBox>Hello There!</SubtitleBox>
            <ParagBox>
              I'm so glad you're here to check out my portfolio and learn a bit
              about my passions and pastimes, as well as my professional
              experience. I'm proud to call Seattle home and love everything
              about the Pacific Northwest. Please also have a look at my profile
              on{" "}
              <BigLink href="https://www.github.com/PeterTSnider">
                Github
              </BigLink>{" "}
              for project code repos.
            </ParagBox>
            <ParagBox>
              Also! Please stop by periodically, as I'm always working on
              personal projects (games, ground-breaking social media apps,
              etc.). I welcome all feedback, of course!
            </ParagBox>
          </WordsBox>
        </ContentBox>
        <ContentBox>
          <ContentPic height="20rem" src={resp} alt="me_in_respirator" />
          <WordsBox>
            <SubtitleBox>Professional Life</SubtitleBox>
            <ParagBox>
              I graduated from Washington State University in 2010 with a BS
              degree in Environmental Science. After graduation, I began my
              professional career with a small consulting firm in Yakima,
              Washington. My work in Yakima was invaluable and I worked with a
              great team, but Seattle has always been home, and after a year in
              Yakima I was honored to accept a position with a Seattle-based
              consulting firm. This small firm grew in 2015 when it was acquired
              by a national geotechnical and environmental consulting firm based
              in Kansas. With the large firm came opportunity, and I was able to
              grow my Industrial Hygiene career to the title of Project Manager.
              I was proud to manage projects and clients for both the public and
              private sectors. I learned to take ownership of projects from
              proposal to invoicing and work with a team to manage a dynamic
              schedule that often felt just one technician too short.
            </ParagBox>
            <ParagBox>
              After ten years working alongside the commercial construction
              industry, I felt an increasingly strong pull to engineer and
              construct; though in my case what really tickled my brain was the
              seemingly endless possibilities offered by lines of code. In early
              2022, I took the plunge and committed full-time to learning
              software development. Enrollment in a sixteen-week coding bootcamp
              resulted in the least amount of sleep I've ever survived on, but
              it gave me the skills to build with code, as well as the tools and
              inspiration to continue learning. I'm excited by building real,
              deployed apps to reach users worldwide. I'm hungry to keep
              learning and can't wait to sink my teeth into a codebase that I
              can both contribute to and learn from!
            </ParagBox>
          </WordsBox>
          <ContentPic height="15rem" src={jobsite} alt="a_random_jobsite" />
        </ContentBox>
        <ContentBox>
          <ContentPic height="25rem" src={meSki2} alt="me_skiing" />
          <WordsBox>
            <SubtitleBox>Personal Life</SubtitleBox>
            <ParagBox>
              I'm happy to call the Pacific Northwest home and have lived in
              Seattle for most of my adult life. I have an amazing family that
              has been my greatest source of support through all of life's
              challenges. When I'm not at the keyboard, I like to unplug and hit
              the trail for an overnight backpacking trip, go skiing when
              there's snow in the mountains, or get in the water and do some
              stand-up paddling. I also love to travel and do my best to
              challenge my comfort zone in far-off places!
            </ParagBox>
            <ParagBox>
              By my side for all my adventures is a big cuddlebug
              Mastiff/Labrador named Chessa. She's into all the usual dog things
              (face licks, long walks to find sticks, and napping, of course),
              but mostly she's just excited to be tagging along!
            </ParagBox>
          </WordsBox>
          <ContentPic height="15rem" src={chessa} alt="my_dog" />
        </ContentBox>
        <SubtitleBox>Honorable Mentions</SubtitleBox>
        <ContentBox>
          <ContSubBox>
            <PicWCap>
              <ContentPic height="15rem" src={PS_Logo} alt="my_logo" />
              <ParagBox>
                <h4>My Logo</h4>
              </ParagBox>
              <ParagBox>
                The result of a few hours of experimentation with GIMP, I wanted
                to combine the{" "}
                <SmlLink href="https://en.wikipedia.org/wiki/Doug_flag#:~:text=The%20Doug%20flag%2C%20also%20referred,Canadian%20province%20of%20British%20Columbia%2C">
                  Doug Flag
                </SmlLink>{" "}
                with the lion rampant and shield shape as homage to my family
                heritage and identity.
              </ParagBox>
            </PicWCap>
            <PicWCap>
              <ContentPic height="20rem" src={desk} alt="my_desk" />
              <ParagBox>
                <h4>My Desk</h4>
              </ParagBox>
              <ParagBox>
                My desk started its life as a hatch door on a WWII Liberty Ship.
                The frame is a hand-built combination of black iron pipe and
                fittings. My desk is exactly what I want and need because I
                built it for myself! <br /> (Not pictured: typical clutter 😁)
              </ParagBox>
            </PicWCap>
          </ContSubBox>
        </ContentBox>
      </PageWrapper>
    </>
  );
}

export default About;
