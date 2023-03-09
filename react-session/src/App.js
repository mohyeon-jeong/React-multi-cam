import Session from "react-session-api";

function App() {
  function save() {
    // 1
    // let count = 1024;
    // Session.set("counter", count);

    // 2
    // let member = { id:"asdf", pw:"123" };
    // Session.set("member", member);

    // 3
    let jsonData = [{ "name":"hong", "age":24 }, { "name":"seong", "age":16 }];
    Session.set("jsonData", jsonData);
  }
  
  function load() {
    // 1
    // let c = Session.get("counter");
    // alert(c);

    // 2
    // let member = Session.get("member");
    // alert(JSON.stringify(member));

    // 3
    let jsonData = Session.get("jsonData");
    alert(JSON.stringify(jsonData));
    alert(jsonData[1].age);
  }

  return (
    <div>
      <h3>session test</h3>
      <button type="button" onClick={() => save()}>session 저장</button>
      <button type="button" onClick={() => load()}>session 로드</button>
    </div>
  );
}

export default App;
