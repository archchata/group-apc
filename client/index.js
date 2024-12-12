import React from 'react';
import { createRoot } from 'react-dom/client';
// What else might we need to import here?
import Feed from './Feed';

const api_endpoint = 'http://localhost:8080/api';

// App consists of one feed
const App = () => {
  return (
    <div style={styles.container}>
      <div>Hey, girl!</div>
      {/* What do we need to put here to render our feed? */}
      <Feed />
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
