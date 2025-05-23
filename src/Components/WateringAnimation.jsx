import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

const WateringAnimation = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // URL of a sample Lottie JSON animation from LottieFiles CDN
    fetch('https://assets8.lottiefiles.com/packages/lf20_jcikwtux.json')
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error('Failed to load animation JSON:', err));
  }, []);

  if (!animationData) {
    return <p>Loading animation...</p>;
  }

  return (
    <div style={{ width: 300, height: 300 }}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default WateringAnimation;
