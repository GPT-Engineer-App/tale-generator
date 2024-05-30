import { useState } from "react";
import { Container, Text, VStack, Button, Textarea, Box, Heading } from "@chakra-ui/react";
import { FaMagic } from "react-icons/fa";

const Index = () => {
  const [story, setStory] = useState("");
  const [input, setInput] = useState("");

  const generateStory = () => {
    // Simple story generation logic
    const newStory = `Once upon a time, in a land far away, ${input} embarked on an incredible journey. Along the way, they encountered many challenges and made new friends. In the end, ${input} discovered that the true treasure was the friendships they made and the lessons they learned.`;
    setStory(newStory);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">
          Story Generator
        </Heading>
        <Textarea placeholder="Enter a character or a theme..." value={input} onChange={(e) => setInput(e.target.value)} />
        <Button leftIcon={<FaMagic />} colorScheme="teal" onClick={generateStory}>
          Generate Story
        </Button>
        {story && (
          <Box p={4} borderWidth="1px" borderRadius="lg" width="100%">
            <Text>{story}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
