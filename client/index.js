import React from 'react';
import { createRoot } from 'react-dom/client';
import Feed from './Feed';

const api_endpoint = 'http://localhost:3000/api';

// App consists of one feed
const App = () => {
  return (
    <div style={styles.container}>
      <div>Hey, girl!</div>
      {/* What prop do we need to make available to feed? */}
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
