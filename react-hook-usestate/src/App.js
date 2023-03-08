import React, { useState } from 'react';

// function App() {

//   const [state, setState] = useState("click");
//   //      get     set                 초기값

//   console.log(state);
//   // state = 'abc'; - 상수에 대입 불가
//   // setState("abc"); - 다시 초기화 불가능

//   return (
//     <div>
//       <button onClick={() => setState("clicked")}>{state}</button>
//     </div>
//   );
// }

// export default App;

// const INITIAL_COUNT = 0;

// function App() {

//   const[message, setMessage] = useState("");
//   const[number, setNumber] = useState(INITIAL_COUNT);

//   const btnclick = () => {
//     alert(message);
//   }

//   function counterBtn() {
//     setNumber(number + 1);
//   }

//   const initCount = () => {
//     setNumber(INITIAL_COUNT);
//   }

//   return (
//     <div>
//       <input onChange={(e) => {setMessage(e.target.value)}} />
//       <button onClick={btnclick}>message 보기</button>

//       <p>{number}</p>
//       <button onClick={counterBtn}>counter</button>
//       <button onClick={initCount}>initialize</button>
//     </div>
//   );

// }

// export default App;

// function App() {
//   const[inputTextVal, setInputTextVal] = useState("초기값");
//   const[text, setText] = useState("React");

//   const handleChange = (e) => setInputTextVal(e.target.value);

//   const handleClick = () => {
//     setText(inputTextVal);
//     setInputTextVal("");
//   }

//   return (
//     <div>
//       <h1>I love {text}</h1>
//       <input type="text" value={inputTextVal} onChange={handleChange} />
//       <input type="button" value="input" onClick={() => handleClick()} />
//     </div>
//   );

// }

// export default App;

// const SelectBox = () => {
//   const[selectedVal, setSelectedVal] = useState("HTML");

//   const handleChange = (e) => {
//     setSelectedVal(e.target.value);
//   }

//   const selectChoice = () => {
//     alert(selectedVal);
//   }

//   return (
//     <div>
//       <p>현재 선택된 항목 : <b>{selectedVal}</b></p>
//       <select value={selectedVal} onChange={handleChange}>
//         <option value="HTML">HTML</option>
//         <option value="CSS">CSS</option>
//         <option value="React">React</option>
//       </select>

//       <button onClick={() => selectChoice()}>선택된 값</button>
//     </div>
//   )
// }

// function App() {

//   return(
//     <div>
//       <SelectBox />
//     </div>
//   )

// }

// export default App;

// radio
// function InputRadio() {
//   const[radioVal, setRadioVal] = useState("red");

//   function handleChange(e) {
//     setRadioVal(e.target.value);
//   }

//   return (
//     <div>
//       <p>선택된 항목 : <b>{radioVal}</b></p>
//       {/* == : 주소 비교, === : 값 비교 */}
//       <input type="radio" value="red" onChange={handleChange} checked={radioVal === "red"} />red
//       <input type="radio" value="green" onChange={handleChange} checked={radioVal === "green"} />green
//       <input type="radio" value="blue" onChange={handleChange} checked={radioVal === "blue"} />blue
//     </div>
//   )
// }

// function App() {

//   return(
//     <div>
//       <InputRadio />
//     </div>
//   )

// }

// export default App;



const InputCheckBox = () => {
  const[checkedVal, setCheckedVal] = useState(false);

  const handleChange = (e) => {
    setCheckedVal(!checkedVal);
  }

  const isChecked = () => {
    if (checkedVal) {
      alert("checked")
    } else {
      alert("not checked")
    }
  }

  return (
    <div>
      <input type="checkbox" onChange={handleChange} checked={checkedVal} />a
      <input type="button" onClick={() => isChecked()} value="is checked?" />
    </div>
  )
}

function App() {

  return(
    <div>
      <InputCheckBox />
    </div>
  )

}

export default App;