import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Kitchen = () => {
  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Heading>Kitchen Page</Heading>
        <Text>Here the kitchen staff can view and update the status of orders.</Text>
      </VStack>
    </Box>
  );
};

export default Kitchen;