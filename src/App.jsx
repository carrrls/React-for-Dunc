// import { useState } from "react";
// const App = () => {
//   let name = "ayush";
//   const [inputValue, newUpdatedValue] = useState(name);
//   console.log(inputValue);
//   const onChange = (e) => {
//     const newValue = e.target.value;
//     newUpdatedValue(newValue);
//   };
//   return (
//     <div>
//       <h1>{inputValue}</h1>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={onChange}
//         placeholder="enter your name"
//       />
//     </div>
//   );
// };
// export default App;
// import React from "react";
// import { useState } from "react";
// const app = () => {
//   let name = "ayush";
//   const [inputValue, newValue] = useState(name);
//   console.log(inputValue);
//   const changeAp = (e) => {
//     const newVal = e.target.value;
//     newValue(newVal);
//   };
//   return (
//     <div>
//       <h1>{inputValue}</h1>
//       <input
//         type="text"
//         placeholder="enter your name"
//         value={inputValue}
//         onChange={changeAp}
//       ></input>
//       <h1>hello aayush buddy</h1>
//     </div>
//   );
// };
// export default app;
import { useState } from "react";

const app = () => {
  let value = "ayush";
  const [inputValue, updatedValue] = useState(value);
  console.log(value);
  const onChange = (e) => {
    const newVal = e.target.value;
    updatedValue(newVal);
  };
  return (
    <div>
      <h1>{inputValue}</h1>
      <input
        value={inputValue}
        type="text"
        placeholder="enter your name"
        onChange={onChange}
      ></input>
      <h1>hello ayush</h1>
    </div>
  );
};
export default app;
