import React from 'react';
import { Formik, Field } from "formik";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Heading
} from "@chakra-ui/react";

//for the form to work with ChakraUI, use <Input> and <Button> (capital letter)

export const Login = () => {

  return (
    <main>

      <Flex bg="gray.100" align="center" justify="center" h="100vh">
        <Box bg="white" p={6} rounded="md" w={80}>
          <Formik
            initialValues={{
              email: "",
              password: "",
              rememberMe: false
            }}
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                
                <VStack spacing={4} align="flex-start">
                  <Heading>Welcome Back!</Heading>
                  <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Field
                      as={Input}
                      id="email"
                      name="email"
                      type="email"
                      variant="filled"
                    />
                  </FormControl>

                  <FormControl isInvalid={!!errors.password && touched.password}>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Field
                      as={Input}
                      id="password"
                      name="password"
                      type="password"
                      variant="filled"
                      validate={(value) => {
                        let error;

                        if (value.length < 5) {
                          error = "Password must contain at least 6 characters";
                        }

                        return error;
                      }}
                    />
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>

                  <Field
                    as={Checkbox}
                    id="rememberMe"
                    name="rememberMe"
                    colorScheme="purple"
                  >
                    Remember me?
                  </Field>
                  
                  <Button type="submit" colorScheme="purple" width="full">
                    Log In
                  </Button>
                </VStack>
              </form>
            )}
          </Formik>
        </Box>
      </Flex>
    </main>
  );
};
