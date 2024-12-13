import React, { useEffect, useState } from 'react';

// each feeditem should have a spot for the player name,

const FeedItem = ({url}) => {
  return (
    <>
      <div className='feedItem' style={styles.container}>
        <img src= {url}/>
        {/* if we want each person to have a tile, what do we need to put here? */}
      </div>
    </>
  );
};

const styles = {
  container: {
    border: '1px solid black',
    height: '20%',
    width: '20%',
    flex: 1,
  },
};

export default FeedItem;