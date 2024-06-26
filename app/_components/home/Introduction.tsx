'use client';

import Typewriter from 'typewriter-effect';

const Introduction = () => {
  return (
    <Typewriter
      options={{
        strings: ['Euller Gomes', 'Dev. Full Stack'],
        autoStart: true,
        loop: true
      }}
    />
  );
};

export default Introduction;
