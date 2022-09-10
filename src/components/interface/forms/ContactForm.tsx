import React, { useState } from "react";
import styled from "styled-components";


const FormBox = styled.form`
padding: 2rem;
`
const FormField = styled.div``
const FormLabel = styled.label``
const FormInput = styled.input``
const FormBtn = styled.button``


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
        <h4>Contact Me</h4>
        <FormField>
            <FormLabel htmlFor="name">Name:</FormLabel>
            <FormInput type="text" id="name" required/>
        </FormField>
        <FormField>
            <FormLabel htmlFor="email">Email:</FormLabel>
            <FormInput type="text" id="email" required/>
        </FormField>
        <FormField>
            <FormLabel htmlFor="message">Message:</FormLabel>
            <FormInput type="text" id="message" required/>
        </FormField>
        <FormBtn type="submit">{status}</FormBtn>    
    </FormBox>
  )
};

export default ContactForm