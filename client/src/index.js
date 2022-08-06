import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
const container = document.getElementById('root');
const root = createRoot(container);


root.render(

  <ChakraProvider>
    <App />
  </ChakraProvider>
  
);





