import React, { useState } from "react";
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Radio, RadioGroup, Stack, Text, VStack } from "@chakra-ui/react";
import { FaMapMarkedAlt, FaPlus, FaSignInAlt } from "react-icons/fa";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showEventForm, setShowEventForm] = useState(false);
  const [eventType, setEventType] = useState("existing");

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleBrowse = () => {
    // Placeholder function for browsing as a guest
  };

  const toggleEventForm = () => {
    setShowEventForm(!showEventForm);
  };

  const handleEventTypeChange = (value) => {
    setEventType(value);
  };

  return (
    <VStack spacing={8} p={5}>
      <Heading>Welcome to Eventinder!</Heading>
      <Text>Select an option to get started.</Text>
      <Flex>
        <Button leftIcon={<FaSignInAlt />} colorScheme="teal" onClick={handleLogin}>
          Login
        </Button>
        <Button leftIcon={<FaMapMarkedAlt />} colorScheme="gray" onClick={handleBrowse} ml={2}>
          Browse as Guest
        </Button>
      </Flex>

      {isLoggedIn && (
        <Box>
          <Button leftIcon={<FaPlus />} colorScheme="pink" onClick={toggleEventForm}>
            Create New Event
          </Button>
          {showEventForm && (
            <FormControl>
              <FormLabel>Event Type</FormLabel>
              <RadioGroup onChange={handleEventTypeChange} value={eventType}>
                <Stack direction="row">
                  <Radio value="existing">Existing Organization</Radio>
                  <Radio value="new">New External Organization</Radio>
                </Stack>
              </RadioGroup>
              <FormLabel mt={4}>Number of Participants</FormLabel>
              <Input placeholder="Enter number of participants" />
              <Button mt={4} colorScheme="blue">
                Submit Event
              </Button>
            </FormControl>
          )}
        </Box>
      )}
    </VStack>
  );
};

export default Index;
