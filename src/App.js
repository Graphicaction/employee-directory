import React, { useCallback } from 'react';

function App() {
  const [message, setMessage] =  React.useState();

  const sendUserInfoMessage = () => {
    console.log('sending message')
    window.parent.postMessage("user-info", "*");
  };

  const sendNotificationMessage = () => {
    const payload = {
      messageType: 'notification',
      title: 'Random alert',
      description: 'Some text'
    };
    console.log('sending message')
    window.parent.postMessage(payload, "*");
  };

  const sendBadNotificationMessage = () => {
    const payload = {
      messageType: 'notification',
      title: 1,
      description: 'Some text'
    };
    console.log('sending message')
    window.parent.postMessage(payload, "*");
  };

  const handleIncomingMessage = useCallback((event) => {
    console.log(event.data);
    setMessage(JSON.stringify(event.data));
  },[]);

  React.useEffect(() => {
    window.addEventListener("message", handleIncomingMessage);
    return () => window.removeEventListener("message", handleIncomingMessage)
  },[handleIncomingMessage]);

  return (
    <div className="App container">
      <header className="App-header">
        <button onClick={sendUserInfoMessage}>
          Click to send user-info message
        </button>
        <button onClick={sendNotificationMessage}>
          Click to create a notification
        </button>
        <button onClick={sendBadNotificationMessage}>
          Click to create a bad notification
        </button>
        {message}
      </header>
    </div>
  );
}

export default App;
