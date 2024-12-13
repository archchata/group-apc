import React, { useEffect, useState } from 'react';
// This component should show a "feed" of images

const Feed = () => {
  return (
    <>
      <div style={styles.container}></div>
    </>
  );
};

const styles = {
  container: {
    border: '1px black solid',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
  },
};


