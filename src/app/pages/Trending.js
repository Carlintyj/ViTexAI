// src/pages/Trending.js

import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Trending = () => {
  return (
    <Box p={6}>
      <Heading size="2xl" mb={4}>Trending Page</Heading>
      <Text fontSize="lg">Here you can show the content that is currently trending.</Text>
      {/* You can add more content or components here */}
    </Box>
  );
};

export default Trending;
