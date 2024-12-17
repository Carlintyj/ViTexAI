"use client";
import { Box, Button, Flex, Text, Input } from "@chakra-ui/react";
import { LinkIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { useState } from "react";
import Sidebar from "./components/sidebar";

export default function Home() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
      // Placeholder for bot response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "This is a placeholder response. 🚀", sender: "bot" },
        ]);
      }, 1000);
    }
  };

  return (
    <Flex direction="row" h="100vh">
      {/* Sidebar */}
      <Box w={{ base: "full", md: "60" }} h="100%" bg="gray.800">
        <Sidebar /> {/* Sidebar component */}
      </Box>

      {/* Main Content */}
      <Box
        w={{ base: "full", md: "calc(100% - 60px)" }} // Adjust width to take up the remaining space
        h="100%"
        bg="white"
        p={4}
        overflow="auto"
      >
        {/* Centered Chat Box */}
        <Flex
          justify="center"
          align="center"
          h="80vh"
          direction="column"
          w="100%"
        >
          {/* Header */}
          <Box textAlign="center" mb={10}>
            <Text textStyle="2xl" color="black" fontWeight="bold">
              Upload or ask anything to begin content creation!
            </Text>
          </Box>
          <Box
            w="80%"
            h="25vh"
            bg="gray.100"
            boxShadow="lg"
            borderRadius="lg"
            overflow="hidden"
            display="flex"
            flexDirection="column"
            position="relative"
          >

            {/* Input Box */}
            <Flex p={4} borderTop="1px solid" borderColor="gray.200">
              <Button mr={2}>
                <LinkIcon color='black' />
              </Button>
              <Input
                placeholder="Generate me a cat in my video"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                mr={2}
                color="black"
              />
            </Flex>
            <Button
              onClick={handleSendMessage}
              isDisabled={!input.trim()}
              position="absolute"
              bottom={4}
              right={4}
            >
              <ArrowForwardIcon color='black' />
            </Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
