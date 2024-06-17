import { Container, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to the Restobar Internal Ordering System</Text>
        <Text>Use the navigation bar to manage orders and communicate with the kitchen.</Text>
      </VStack>
    </Container>
  );
};

export default Index;