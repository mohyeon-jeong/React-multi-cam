// import MessageTwo from "./message";

// function App() {

//   function Message() { // component로 사용 시 첫 글자는 대문자여야 함
//     return <h1>Hello React</h1>
//   }

//   function MessageOne(props) {
//     return (
//       <div>
//         <h2>Hello {props.name}</h2>
//         <p>world {props.name}</p>
//       </div>
//     );
//   }

//   return (
//     <div>
//       {Message()}

//       <Message /> {/* <- component. 위의 방법도 사용 가능하나 이 방법으로 더 많이 쓴다고 함 */}

//       <MessageOne name="asdf" />

//       <MessageTwo name="fda" />
//     </div>
//   );

// }

// export default App;

// Map
// function App() {

  // const numbers = [ 1, 2, 3 ];

  // for (let i = 0; i < numbers.length; i++) {
  //   console.log(numbers[i]);
  // }

  // numbers.map(function (n) {
  //   console.log(n);
  //   return 0;
  // });

  // numbers.map((n) => { // ES6
  //   console.log(n);
  //   return 0;
  // });

//   const numbers2 = numbers.map((num) => {
//     return num * 2;
//   });

//   return (
//     <div>
//       {numbers2}
//     </div>
//   );

// }

// export default App;

// function App() {

//   const members = [
//     { "number":1, "name":"hong", "height":172.1 },
//     { "number":2, "name":"seong", "height":156.3 },
//     { "number":3, "name":"il", "height":180.9 }
//   ];

//   const memberlist = members.map(function(member, index) {
//     return (
//       <tr key={index}>
//         <th>{member.number}</th>
//         <td>{member.name}</td>
//         <td>{member.height}</td>
//       </tr>
//     );
//   });

//   return (
//     <div>
//       <table>
//         <tbody>
//           {memberlist}
//         </tbody>
//       </table>
//     </div>
//   );

// }

// export default App;

function App() {

  function btnclick() {
    alert("btnclick")
  }

  function inputFunc(e) {
    console.log(e.target.value);
  }

  return (
    <div>
      {/* <button onClick={btnclick()}>button</button> */}
      <button onClick={() => btnclick()}>button</button>

      <input type="text" onChange={(event) => {console.log(event.target.value)}} />

      <input type="text" onChange={inputFunc} />

      <input type="checkbox" />
    </div>
  );

}

export default App;