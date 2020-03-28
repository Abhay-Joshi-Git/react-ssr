import React from 'react';

const Home = () => {
  return (
    <div>
      Home
      <div>
        <button onClick={() => {
          console.log('button clicked...');
        }}>
          Click me
        </button>
      </div>
    </div>
  )
}

export default Home;