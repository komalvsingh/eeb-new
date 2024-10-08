import React from "react";
import styled from "styled-components";

// Styled components
const Section = styled.section`
  padding: 20px;
  background-color: #f9f9f9;
`;

const Header = styled.h2`
  text-align: center;
  font-size: 35px;
  font-weight: 500;
  color: #1e293b;
  margin-bottom: 1rem;

  &:hover{
  text-decoration:underline;
  text-decoration-color:orange;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-left: 1.5rem;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0.4375rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 0.375rem;
  background-color: ${(props) => (props.selected ? "#ffffff" : "transparent")};
  color: ${(props) => (props.selected ? "#0ea5e9" : "#4b5563")};
  box-shadow: ${(props) => (props.selected ? "0 1px 3px rgba(0, 0, 0, 0.1)" : "none")};
  cursor: pointer;
  svg {
    margin-right: 0.5rem;
  }
  &:hover {
    background-color: #f1f5f9;
  }
`;

const TabContent = styled.div`
  margin-top: 1rem;
`;

const Form = styled.form`
  max-width: 40rem;
  margin: 2rem auto;
  background: #ffffff;
  padding: 2rem;
  border-radius: 0.375rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  &:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 1px #6366f1;
  }
`;

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  &:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 1px #6366f1;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #ffffff;
  background-color: orange;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: rgb(208, 136, 3);
  }
`;

const Contact = () => {
  return (
    <Section id="contact">
      <Header>Contact Us</Header>
      
      <TabContent>
        
        <Form action="https://formspree.io/f/xblrdqgd" method="POST">
          <Label htmlFor="first-name">First name</Label>
          <Input type="text" id="first-name" name="first-name" />

          <Label htmlFor="last-name">Last name</Label>
          <Input type="text" id="last-name" name="last-name" />

          

          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" />

          <Label htmlFor="phone-number">Phone number</Label>
          <Input type="tel" id="phone-number" name="phone-number" />

          <Label htmlFor="message">Message</Label>
          <TextArea id="message" name="message" rows="4" />

          <SubmitButton type="submit">Let's talk</SubmitButton>
        </Form>
      </TabContent>
    </Section>
  );
};

export default Contact;
