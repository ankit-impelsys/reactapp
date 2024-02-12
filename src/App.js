// src/App.js
import React from 'react';
import { Button } from 'my-react-library'; 

function App() {
  return (
    <div>
      <h1>This is a sample react app</h1>
      <p>Click the button below:</p>
      <Button onClick={() => console.log('Button clicked')}>Click me</Button> {/* Using the Button component */}
    </div>
  );
}

export default App;
