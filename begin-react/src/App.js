import React from "react";
import "./App.css";

/*
function App() {

  // class -> className
  return (
    <div>
      <p>hello</p>
    </div>
  );
}

export default App;
*/

/*
export default function App() {
  return (
    <div>
      <p>hello</p>
    </div>
  );
}
*/

/*
const App = () => { // arrow func (es6)
  return (
    <div>
      <p>fuck you</p>
    </div>
  );
}

export default App;
*/

/*
class App extends React.Component {
  render() {
    return (
      <div>
        <p>fuck you fk you</p>
      </div>
    );
  }
}

export default App;
*/

// function App() {

//   // JS
//   console.log("App 실행");

//   var name = "ㅁㄴㅇ";
//   let age = 24;
//   const height = 180.2;

//   const element = <h1>{name}</h1>

//   const user = {
//     firstname: "미정",
//     lastname: "정"
//   };

//   return(
//     <div>
//       <p>{name} {age} {height} {"Seoul"} {123}</p>
//       {element}

//       {/* <div style="color: #ff0000"></div> */}
//       <div style={{ color: "#ff0000", backgroundColor: "yellow" }}>World</div>

//       <h3 className="Mycolor">Hello React</h3>

//       <p>{ user.firstname + user.lastname }</p>
//     </div>
//   );
// }

// export default App;

// function == (component || process)
// const App = () => {

//   // function formatFunc(u) {
//   //   return u.firstname + " " + u.lastname;
//   // }

//   const formatFunc = ( u ) => {
//     return u.firstname + " " + u.lastname;
//   }

//     const user = {
//     firstname: "미정",
//     lastname: "정"
//   };

//   return (
//     <div>
//       hello, { formatFunc(user) }!
//     </div>
//   );
// }

// export default App;


function App() {

  function getGreeting(user) {
    if (user) {
      return <h1>hello {user}</h1>  
    }
    return <h1>hello world</h1>
  }

  // 조건부 render
  const flg = true;

  return (
    <div>
      <div>{ getGreeting("asdf") }</div>
      <div>{ getGreeting() }</div>
      
      <div>{ flg && <p>flg:true</p> }</div>
      <div>{ !flg && <p>flg:false</p> }</div>
      
      <div>{ flg ? <p>flg=true</p> : <p>flg=false</p> }</div>
    </div>
  );
}

export default App;