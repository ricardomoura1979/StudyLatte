import io from 'socket.io-client';
import { useEffect, useState } from 'react';
import {
  Chat,
  Users,
  Timer,
  Notes,
  Sound
} from "../pages/index";
import '../styles/app.scss';
import { Formik } from "formik";
import {
  Box,
  Button,
  Flex,
  VStack,
  Heading
} from "@chakra-ui/react";
import * as Yup from 'yup';
import TextField from '../components/TextField';
import axios from 'axios';
import { StudyRoom } from '../rooms';

const socket = io.connect("/");


export const JoinRoom = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [error, setError] = useState("");
  const [usersList, setUsersLists] = useState([])
  const [joinStatus, setJoinStatus] = useState(false)




  const joinRoom = () => {

    console.log(`CLIENT SIDE: socketID ${socket.id} name ${username}`)
    if (username !== "" && room !== "") {
      let data = { user: username, room_id: room }
      socket.emit("join_room", data);
      // setShowChat(true);
      axios.get(`/study_rooms/${data.room_id}/enter/${data.user}`).then((res) => {
        setUsersLists([...res.data])
        setJoinStatus(true)

      })
      // .then(()=>{axios.get('/sockets/add').then(())})
     
      

    }

  };



  socket.on("update_usersList", (data) => {
    const room_id = data.room_id
    axios.get(`study_rooms/entered_users/${room_id}`)
      .then(res => setUsersLists(res.data))
  })


  const removeUser = function () {
    axios.get(`/study_rooms/${room}/leave/${username}`).then(res => {
      setUsersLists([...res.data])
      setJoinStatus(false)
    })
  }

  useEffect(() => {
    window.addEventListener('beforeunload', alertUser)
    window.addEventListener('unload', handleTabClosing)
    return () => {
      window.removeEventListener('beforeunload', alertUser)
      window.removeEventListener('unload', handleTabClosing)
    }
  })

  const handleTabClosing = () => {
    removeUser()
  }

  const alertUser = (event) => {
    event.preventDefault()
    event.returnValue = 'Are you sure?'
  }

  return (

    <main >
      {!joinStatus &&
        <main>
          <Heading>Join a Room</Heading>

          <div className="joinChatContainer">

            <input
              type="text"
              placeholder="Name"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Room ID"
              onChange={(event) => {
                setRoom(event.target.value);
              }}
            />
            <button onClick={joinRoom}>Join a Room</button>
          </div>
        </main>
      }

      {joinStatus && <StudyRoom socket={socket} username={username} usersList={usersList} room={room} removeUser={removeUser} />}




    </main>
  );
};