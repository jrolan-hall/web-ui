import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';

import './index.css';
import App from './App';

ReactDOM.render(
    <ChakraProvider>
      <App />
    </ChakraProvider>,
  document.querySelector('#root')
);
reportWebVitals();