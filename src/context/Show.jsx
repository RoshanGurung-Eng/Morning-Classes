import React from 'react';
import ComA from './ComA';
import GContextProvider from './Context' // Adjust the import path according to your project structure

const Show = () => {
  return (
    <GContextProvider>
      <ComA />
    </GContextProvider>
  );
};

export default Show;
