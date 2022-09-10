import React, { useState } from "react";
import styled from "styled-components";

const FormBox = styled.form`
  padding: 2rem;
  background-color: #212121;
  border-radius: 1rem;
`;

const FormField = styled.div`
display: flex;
flex-direction: row;
margin: 1rem;
justify-content: space-evenly;
`;

const FormLabel = styled.label`
  font-size: 2rem;
  padding: 0.3rem;
`;

const FormInput = styled.input`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111111;
  padding: 0.5rem;
  margin: 0.25rem;
  border-radius: 0.5rem;
`;

const FormInputBig = styled.textarea`
color: #111111;
font-size: 1.2rem;
font-weight: 500;
border-radius: 0.75rem;
margin: 0.25rem;
padding: 0.75rem;
`

const FormBtn = styled.button`
  color: #212121;
  font-size: 2rem;
  font-weight: 600;
  padding: 0.5rem;
  border-radius: 1rem;
  border-width: 5px;
  text-align: start;
`;

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e: string | any) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let messageDetails = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify(messageDetails),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <FormBox onSubmit={handleSubmit}>
      <h5>Contact Me</h5>
      <FormField>
        <FormLabel htmlFor="name">Name:</FormLabel>
        <FormInput type="text" id="name" required />
      </FormField>
      <FormField>
        <FormLabel htmlFor="email">Email:</FormLabel>
        <FormInput type="email" id="email" required />
      </FormField>
      <FormField>
        <FormLabel htmlFor="message">Message:</FormLabel>
        <FormInputBig id="message" required />
      </FormField>
      <FormBtn type="submit">{status}</FormBtn>
    </FormBox>
  );
};

export default ContactForm;
