import styled from "styled-components";
import Navbar from "../components/interface/nav/navbar";
import MainBox from "../components/containers/PageBoxes/MainBox";
import SubPageTitle from "../components/containers/PageBoxes/SubPageTitle";
import PageWrapper from "../components/containers/Wrappers/PageWrapper";
import ViewWrapper from "../components/containers/Wrappers/ViewWrapper";
import ContentBox from "../components/containers/PageBoxes/ContentBox";
import WordsBox from "../components/containers/PageBoxes/WordsBox";
import SubtitleBox from "../components/containers/PageBoxes/SubtitleBox";

// image imports:
import summitlk1 from "../assets/Images/summitlk1.jpg";
import mas from "../assets/Images/mas.jpg";
import resp from "../assets/Images/respirator.jpg";
import fam_car from "../assets/Images/fam_car.jpg";

interface Props {
  src: any;
  height: string;
}

const AboutBackground = styled(MainBox)`
  content: url(${summitlk1});
`;

const ContentPic = styled.img<Props>`
  width: ${(p) => p.width};
  height: ${(p) => p.height};
  border-radius: 1rem;
  margin: 1.5em;
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
            <SubtitleBox>Hello There!</SubtitleBox>Lorem ipsum dolor sit, amet
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
        <ContentBox>
          <WordsBox>
            <SubtitleBox>Professional Life</SubtitleBox>Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Ipsa nobis exercitationem quidem.
            Quia animi vel at sequi ullam optio neque iusto perspiciatis ducimus
            vero. Cupiditate aut temporibus rem quidem maiores quo aliquid!
            Velit et magnam eveniet cum. Nostrum voluptatem saepe vel eum! Modi
            deleniti nihil libero eligendi placeat iure quia similique quisquam.
            In sed rerum quam eos minus, illo assumenda eligendi inventore, est
            tempora libero dolor sit vitae enim amet. Veniam blanditiis
            consectetur voluptatibus. Quas tempore quae voluptatum possimus
            expedita quaerat magnam exercitationem asperiores. Praesentium quo
            dignissimos ratione possimus similique.
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
