import styled from "styled-components";
import Navbar from "../components/interface/nav/navbar";
import PageWrapper from "../components/containers/Wrappers/PageWrapper";
import ViewWrapper from "../components/containers/Wrappers/ViewWrapper";
import MainBox from "../components/containers/PageBoxes/MainBox";
import SubPageTitle from "../components/containers/PageBoxes/SubPageTitle";
import ContactForm from "../components/interface/forms/ContactForm";

// image imports:
import bclay1 from "../assets/Images/bclay1.jpg";

const ContactBackground = styled(MainBox)`
  content: url(${bclay1});
`;

const FormBox = styled(SubPageTitle)`
  padding: 1rem;
`



function Contact() {
  return (
    <>
      <PageWrapper>
        <Navbar />
        <ViewWrapper>
          {/* Background */}
          <ContactBackground />
          {/* Foreground */}
          <FormBox><ContactForm/></FormBox>
        </ViewWrapper>
      </PageWrapper>
    </>
  );
}

export default Contact;
