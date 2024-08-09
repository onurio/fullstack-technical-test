import { useState, useEffect } from "react";
import api from "../services/api";

interface Animal {
  id: number;
  name: string;
  age: number;
  breed: string;
  type: string;
  status: string;
}

const useAnimals = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnimals = async () => {
      setLoading(true);
      try {
        const response = await api.get("/animals/");
        const availableAnimals = response.data.filter(
          (animal: Animal) => animal.status === "available"
        );
        setAnimals(availableAnimals);
      } catch (error) {
        setError("Failed to fetch animals.");
        console.error("Error fetching animals:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimals();
  }, []);

  return { animals, loading, error };
};

export default useAnimals;
