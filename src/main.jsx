import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createContext } from 'react';
const shincodeInfo = {
  name: "kang",
  age: 34
};

export const ShinCodeContext = createContext(shincodeInfo);


ReactDOM.createRoot(document.getElementById('root')).render(
  <ShinCodeContext.Provider value={shincodeInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ShinCodeContext.Provider>
);
export default ShinCodeContext;