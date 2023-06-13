import React from 'react';
import { useSpring, animated } from 'react-spring';

const Intro = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const slideIn = useSpring({
    transform: 'translateX(0)',
    from: { transform: 'translateX(-100%)' },
    config: { duration: 1000 },
  });

  return (
    <div>
      <animated.h1 style={fadeIn}>Hello, I'm Muftaudeen Jimoh</animated.h1>
      <animated.div style={slideIn}>
        <p>
          As a programmer and content creator on LinkedIn, I love sharing my passion for programming with others.
        </p>
        <p>
          I create engaging content to help fellow developers learn new technologies, improve their coding skills, and stay up-to-date with the latest trends in the industry.
        </p>
        <p>
          Follow me on LinkedIn to join me on this exciting journey of exploration and knowledge-sharing!
        </p>
      </animated.div>
    </div>
  );
};

export default Intro;
