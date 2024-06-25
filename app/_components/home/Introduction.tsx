'use client';

import Typewriter from 'typewriter-effect';

const Introduction = () => {
  return (
    <h1 className="home__title">
      <Typewriter
        options={{
          strings: ['Euller Gomes', 'Dev. Full Stack'],
          autoStart: true,
          loop: true
        }}
      />
    </h1>
  );
};

export default Introduction;
