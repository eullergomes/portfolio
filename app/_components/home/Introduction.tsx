'use client';

import Typewriter from 'typewriter-effect';

interface Prop {
  responsibility: string;
  education: string;
}

const Introduction = ({ responsibility, education }: Prop) => {
  return (
    <h1>
      <Typewriter
        options={{
          strings: ['Euller Gomes', responsibility, education],
          autoStart: true,
          loop: true
        }}
      />
    </h1>
  );
};

export default Introduction;
