import React, { useEffect, useState } from 'react';
import FeedItem from './FeedItem';
// This component should show a "feed" of players

 const Feed = ({url}) => {
  const [urls, updateUrls] = useState([]);

  useEffect(()=>{
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
      updateUrls(data);
    })
    .catch(err => console.log('err', err));
  }, [])

 
  return (
    <>
      <div style={styles.container}>
        {urls.map((url, index)=> <FeedItem key = {index} url = {url}/>)}
      </div>
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
export default Feed;