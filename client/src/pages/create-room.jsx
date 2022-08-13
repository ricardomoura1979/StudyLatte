import React from 'react';
import { Formik } from "formik";
import {
  Box,
  Button,
  Flex,
  VStack,
  Heading,
  ButtonGroup,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import TextField from '../components/TextField';
import { Link as RouterLink } from 'react-router-dom';
import TextAreaField from '../components/TextAreaField';
import '../styles/app.scss';
import axios from 'axios';


export const CreateRoom = () => {

  return (
    <main>

      <div className="create-room-container">
        <div className="joinChatWrapper">
          <form className="form">
            <div className="input-group">

              <h3>Create a Study Room</h3>

              <Formik
                initialValues={{
                  title: "",
                  topic: "",
                  description: "",
                }}
                validationSchema={Yup.object({
                  title: Yup.string()
                    .required("Please give your room a title"),
                  topic: Yup.string()
                    .required("Please write a descriptive topic"),
                  description: Yup.string()
                    .required("Please write a description"),
                })}
                onSubmit={(values, actions) => {

                  axios.post("/study_rooms/add_new_room", {
                    title: values.title,
                    topic: values.topic,
                    description: values.description,
                  }).then((response) => {
                    console.log(response.data);

                  });
                  // alert(JSON.stringify(values, null, 3));
                  actions.resetForm();
                }}
              >

                {formik => (
                  <Flex
                    bg="white.100"
                    align="center"
                  >
                    <Box
                      bg="black.100"
                      p={6}
                      rounded="md"
                      w={80}
                    >
                      <VStack
                        as="form"
                        mx="auto"
                        spacing={5}
                        justifyContent="center"
                        onSubmit={formik.handleSubmit}
                      >

                        <TextField
                          name="title"
                          type="text"
                          placeholder="Room Title"
                        />

                        <TextField
                          name="topic"
                          type="text"
                          placeholder="Study Topic"
                        />

                        <TextAreaField
                          name="description"
                          type="text"
                          placeholder='Description' />



                        <ButtonGroup gap="2">
                          <Button type="button" colorScheme="whiteAlpha" width="50%">
                            <RouterLink to="/join-room">
                              Cancel
                            </RouterLink>
                          </Button>

                          <Button type="submit" colorScheme="cyan" width="90%">
                            Create Room
                          </Button>
                        </ButtonGroup>

                      </VStack>
                    </Box>
                  </Flex>
                )}
              </Formik>
            </div>
          </form>
        </div>

      </div>
    </main>
  );
};