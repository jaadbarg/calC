import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const ContactContainer = styled.section`
  background-color: #ffffff;
  padding: 80px 20px;
`;

const ContactTitle = styled.h3`
  text-align: center;
  font-size: 36px;
  color: #333333;
  margin-bottom: 40px;
  font-weight: 700;
`;

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  color: #333333;
  font-size: 16px;
  margin-bottom: 5px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-size: 16px;
  height: 150px;
  resize: vertical;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
`;

const SubmitButton = styled(motion.button)`
  background-color: #002060;
  color: #ffffff;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  font-weight: 500;

  &:hover {
    background-color: #003399;
  }
`;

const Message = styled.p`
  text-align: center;
  font-size: 16px;
  color: ${({ error }) => (error ? 'red' : 'green')};
  margin-top: 20px;
`;

function ContactForm() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        form.current,
        'YOUR_USER_ID' // Replace with your EmailJS user ID (public key)
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage('Your message has been sent successfully!');
          setError(false);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatusMessage('An error occurred while sending your message. Please try again later.');
          setError(true);
        }
      );
  };

  return (
    <ContactContainer id="contact">
      <ContactTitle>Contact Us</ContactTitle>
      <Form ref={form} onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name:</Label>
          <Input type="text" id="name" name="user_name" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input type="email" id="email" name="user_email" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="subject">Subject:</Label>
          <Input type="text" id="subject" name="subject" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message:</Label>
          <TextArea id="message" name="message" required></TextArea>
        </FormGroup>
        <SubmitButton
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </SubmitButton>
        {statusMessage && <Message error={error}>{statusMessage}</Message>}
      </Form>
    </ContactContainer>
  );
}

export default ContactForm;
