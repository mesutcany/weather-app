import React, { useState, useEffect } from 'react';

const Loading = () => {
  const [loadingText, setLoadingText] = React.useState('Loading.');

  React.useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText((prevText) => {
        if (prevText == 'Loading...') {
          return 'Loading';
        }
        return (prevText += '.');
      });
      console.log('...');
    }, 300);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <h2>{loadingText}</h2>;
};

export default Loading;
