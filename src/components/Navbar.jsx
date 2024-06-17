import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-around">
        <Link as={RouterLink} to="/" color="white" fontWeight="bold">
          Home
        </Link>
        <Link as={RouterLink} to="/orders" color="white" fontWeight="bold">
          Orders
        </Link>
        <Link as={RouterLink} to="/kitchen" color="white" fontWeight="bold">
          Kitchen
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;