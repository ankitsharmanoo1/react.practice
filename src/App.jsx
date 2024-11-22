// import { useState } from "react";
// function App() {
//   const [count, setCount] = useState(0);

//   // Event handler function
//   const handleClick = () => {
//     setCount(count + 1);
//   };

//   const handleClick2 = () => {
//     setCount(count - 1);
//   };


//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       {/* Button with onClick event handler */}
//       <button onClick={handleClick}>

//         Click me
//       </button>

//       <button onClick={handleClick2}>
//         Click Me
//       </button>
//     </div>
//   );
// }

// export default App;




import  { useState } from 'react';

function App() {
  const [message, setMessage] = useState("");

  const handleMessage = (text) => {
    setMessage(text);
  };

  return (
    <div>
      <p>{message}</p>
      {/* Pass arguments to the event handler */}
      <button onClick={() => handleMessage('Hello from the button!')}>
        Send Message
      </button>
    </div>
  );
}

export default App;

