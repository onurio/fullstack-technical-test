import React from "react";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Grid,
  Container,
  Title,
  Loader,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import useAnimals from "../hooks/useAnimals";
import useToken from "../hooks/useToken";

const AnimalsList: React.FC = () => {
  const { animals, loading, error } = useAnimals();
  const { token } = useToken();
  const navigate = useNavigate();

  const handleAdoptClick = (animalId: number) => {
    if (!token) {
      navigate("/login");
    } else {
      // Proceed to adoption logic, e.g., redirect to adoption page
      console.log(`Adopt animal with ID: ${animalId}`);
    }
  };

  if (loading) {
    return <Loader size="xl" />;
  }

  if (error) {
    return (
      <Text color="red" align="center">
        {error}
      </Text>
    );
  }

  return (
    <Container>
      <Title align="center" mb="xl">
        Animals Available for Adoption
      </Title>
      <Grid>
        {animals.map((animal) => (
          <Grid.Col span={4} key={animal.id}>
            <Card shadow="sm" padding="lg">
              <Card.Section>
                <Image
                  src={`/path/to/animal/image/${animal.id}`}
                  height={160}
                  alt={animal.name}
                />
              </Card.Section>

              <Group
                position="apart"
                style={{ marginBottom: 5, marginTop: 10 }}
              >
                <Text weight={500}>{animal.name}</Text>
                <Badge color="green">{animal.status}</Badge>
              </Group>

              <Text size="sm" style={{ lineHeight: 1.5 }}>
                {animal.breed} - {animal.age} years old
              </Text>

              <Button
                variant="light"
                fullWidth
                style={{ marginTop: 14 }}
                onClick={() => handleAdoptClick(animal.id)}
              >
                Adopt
              </Button>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default AnimalsList;
