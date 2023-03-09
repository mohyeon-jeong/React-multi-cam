import React, { useState } from "react";
import { useCookies } from "react-cookie";

function App() {
  const[id, setId] = useState("");

  // 기존 cookie 저장
  const[cookies, setCookies] = useCookies(["id"]);

  const changeId = (e) => setId(e.target.value);

  const cookieSave = () => {
    setCookies("id", id, { path:"/" });
  }

  const cookieLoad = () => {
    alert(cookies.id);
  }

  return (
    <div>
      <h3>cookie test</h3>
      <input value={id} onChange={changeId} /><br />
      <button onClick={cookieSave}>save cookie</button>
      <button onClick={cookieLoad}>load cookie</button>
    </div>
  );
}

export default App;
