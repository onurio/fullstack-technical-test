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

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { saveToken } = useToken();

  const handleLogin = async () => {
    try {
      const response = await api.post("/token/", { email, password });
      saveToken(response.data.access);
      navigate("/");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <Container size={420} my={40}>
      <Title align="center">Login</Title>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        {error && (
          <Text color="red" mb="sm">
            {error}
          </Text>
        )}
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
        <Button fullWidth mt="md" onClick={handleLogin}>
          Login
        </Button>
      </Paper>
    </Container>
  );
};

export default Login;
