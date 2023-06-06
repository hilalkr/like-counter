import React, { useState } from 'react';


function LikeCounter() {
  const [likes, setLikes] = useState(0);

  const increaseLikes = () => {
    setLikes(likes + 1);
  };

  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', marginTop:'70px,', backgroundColor:'black', height:'100vh', msoverflowY:'hidden'}}>
      <img src={'https://images.pexels.com/photos/94272/sports-car-pkw-auto-vehicle-94272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} width={600} height={300} alt="Like" />
      <h3 style={{ fontFamily: 'sans-serif', fontSize: '30px',marginTop:'50px', fontWeight: 'bold', color:'wheat' }}>
  Number of Likes: <span style={{ color: 'orangered' }}>{likes}</span>
</h3>
      <button style={{backgroundColor:'transparent', fontSize:'17px', fontFamily:'cursive', fontWeight:'bold', color:'orangered', width:'120px', padding:'5px'}} onClick={increaseLikes}>Like</button>
    </div>
  );
}

export default LikeCounter;