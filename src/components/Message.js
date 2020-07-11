import React from 'react';

const Message = ({ text }) => {
  return (
    <div className="message">
      <h2 className="message__text">{text}</h2>
    </div>
  );
};

export default Message;
