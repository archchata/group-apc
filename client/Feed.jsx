import React, { useEffect, useState } from 'react';
// This component should show a "feed" of players

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

/*
const players = {
  Bryan: { 5050: true, popcorn: true, audience: true },
  Jocelyn: { 5050: true, popcorn: true, audience: true },
  Jose: { 5050: true, popcorn: true, audience: true },
  Nathalie: { 5050: true, popcorn: true, audience: true },
  Tyler: { 5050: true, popcorn: true, audience: true },
};
*/
