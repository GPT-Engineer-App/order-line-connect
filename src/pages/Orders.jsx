import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Orders = () => {
  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Heading>Orders Page</Heading>
        <Text>Here you can manage and view all orders.</Text>
      </VStack>
    </Box>
  );
};

export default Orders;