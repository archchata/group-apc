import React from 'react';
import { createRoot } from 'react-dom/client';
// What else might we need to import here?
import Feed from './Feed';

const api_endpoint = 'http://localhost:3000/api';

// App consists of one feed
const App = () => {
  return (
    <div style={styles.container}>
      <div>Hey, girl!</div>
      <Feed url = {api_endpoint}/>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
};

// Nothing is showing up when we start our app ??? How do we render our app in the Browser
const app = document.getElementById('app');
const root = createRoot(app);
root.render(<App/>);