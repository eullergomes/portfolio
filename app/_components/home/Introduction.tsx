'use client';

import Typewriter from 'typewriter-effect';

interface Prop {
  responsibility: string;
  education?: string;
}

const Introduction = ({ responsibility }: Prop) => {
  return (
    <h1 className="home__tit">
      <Typewriter
        options={{
          strings: ['Euller Gomes', responsibility],
          autoStart: true,
          loop: true
        }}
      />
    </h1>
  );
};

export default Introduction;
