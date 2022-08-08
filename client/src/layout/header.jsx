import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import {
  Button,
  Flex,
  IconButton,
  Text,
  Highlight
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon
} from '@chakra-ui/icons';

export const Header = () => {

  const [display, changeDisplay] = useState('none');

  return (

    <Flex>
      <Flex
        position="fixed"
        top="1rem"
        right="1rem"
        align="center"
      >

        {/* Desktop view */}
        <Flex
          display={["none", "none", "flex", "flex"]}
        align="center">

          <Highlight query="Username" styles={{px: "2", py: "1", rounded: "full", bg: "purple.100"}}>
            Username
          </Highlight>

          <RouterLink to="/">
            <Button
              as="button"
              variant="ghost"
              aria-label="home"
              my={5}
              w="100%"
            >
              Home
            </Button>
          </RouterLink>

          <RouterLink to="/join-room">
            <Button
              as="button"
              variant="ghost"
              aria-label="join room"
              my={5}
              w="100%"
            >
              Join Room
            </Button>
          </RouterLink>

          <RouterLink to="/create-room">
            <Button
              as="button"
              variant="ghost"
              aria-label="create room"
              my={5}
              w="100%"
            >
              Create Room
            </Button>
          </RouterLink>

          <RouterLink to="/login">
            <Button
              as="button"
              variant="ghost"
              aria-label="log in"
              my={5}
              w="100%"
            >
              Log In
            </Button>
          </RouterLink>

          <RouterLink to="/signup">
            <Button
              as="button"
              variant="ghost"
              aria-label="sign up"
              my={5}
              w="100%"
            >
              Sign Up
            </Button>
          </RouterLink>

          <RouterLink to="/">
            <Button
              as="button"
              variant="ghost"
              aria-label="edit account"
              my={5}
              w="100%"
            >
              Edit Account
            </Button>
          </RouterLink>

          <RouterLink to="/">
            <Button
              as="button"
              variant="ghost"
              aria-label="logout"
              my={5}
              w="100%"
            >
              Log Out
            </Button>
          </RouterLink>

        </Flex>

        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay("flex")}
          display={["flex", "flex", "none", "none"]}
        />
      </Flex>

      {/* Mobile View */}
      <Flex
        w='100vw'
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={
              <CloseIcon />
            }
            onClick={() => changeDisplay('none')}
          />
        </Flex>

        <Flex
          flexDir="column"
          align="center"
        >

          <RouterLink to="/">
            <Button
              as="button"
              variant="ghost"
              aria-label="home"
              my={5}
              w="100%"
            >
              Home
            </Button>
          </RouterLink>

          <RouterLink to="/join-room">
            <Button
              as="button"
              variant="ghost"
              aria-label="join-room"
              my={5}
              w="100%"
            >
              Join Room
            </Button>
          </RouterLink>

          <RouterLink to="/create-room">
            <Button
              as="button"
              variant="ghost"
              aria-label="create-room"
              my={5}
              w="100%"
            >
              Create Room
            </Button>
          </RouterLink>

          <RouterLink to="/login">
            <Button
              as="button"
              variant="ghost"
              aria-label="login"
              my={5}
              w="100%"
            >
              Log In
            </Button>
          </RouterLink>

          <RouterLink to="/signup">
            <Button
              as="button"
              variant="ghost"
              aria-label="signup"
              my={5}
              w="100%"
            >
              Sign Up
            </Button>
          </RouterLink>

          <RouterLink to="/">
            <Button
              as="button"
              variant="ghost"
              aria-label="edit account"
              my={5}
              w="100%"
            >
              Edit Account
            </Button>
          </RouterLink>

          <RouterLink to="/">
            <Button
              as="button"
              variant="ghost"
              aria-label="logout"
              my={5}
              w="100%"
            >
              Log Out
            </Button>
          </RouterLink>
        </Flex>
      </Flex>
    </Flex>



  );
};