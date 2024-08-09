import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextInput,
  Button,
  Text,
  Container,
  Paper,
  Title,
  Space,
} from "@mantine/core";
import api from "../services/api";
import useToken from "../hooks/useToken";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { saveToken } = useToken();

  const handleSignUp = async () => {
    try {
      const response = await api.post("/signup/", {
        email,
        password,
        first_name: firstName,
        last_name: lastName,
      });
      saveToken(response.data.access);
      navigate("/");
    } catch (err) {
      setError("Error signing up, please try again.");
    }
  };

  return (
    <Container size={420} my={40}>
      <Title align="center">Sign Up</Title>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        {error && (
          <Text color="red" mb="sm">
            {error}
          </Text>
        )}
        <TextInput
          label="First Name"
          placeholder="Your first name"
          value={firstName}
          onChange={(event) => setFirstName(event.currentTarget.value)}
          required
        />
        <Space h="md" />
        <TextInput
          label="Last Name"
          placeholder="Your last name"
          value={lastName}
          onChange={(event) => setLastName(event.currentTarget.value)}
          required
        />
        <Space h="md" />
        <TextInput
          label="Email"
          placeholder="Your email"
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
          required
        />
        <Space h="md" />
        <TextInput
          label="Password"
          placeholder="Your password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
          required
        />
        <Space h="md" />
        <Button fullWidth mt="md" onClick={handleSignUp}>
          Sign Up
        </Button>
      </Paper>
    </Container>
  );
};

export default SignUp;
