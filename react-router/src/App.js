// npm install react-router-dom

import {BrowserRouter, Link, Route, Routes, useParams} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <span>
            <Link to="/">Home</Link>
          </span>&nbsp;&nbsp;
          <span>
            <Link to="/about">About</Link>
          </span>&nbsp;&nbsp;
          <span>
            <Link to="/users">Users</Link>
          </span>&nbsp;&nbsp;
          <span>
            <Link to="/topics">Topics</Link>
          </span>&nbsp;&nbsp;
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/topics/:topicId" exact element={<Topic />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return (
    <h1>Home</h1>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>...에 대해서</p>
    </div>
  )
}

function Users() {
  return (
    <div>
      <h3>Users</h3>
      <h6>Welcome</h6>
    </div>
  )
}

function Topics({match}) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to="/topics/component">Components</Link>
        </li>
        <li>
          <Link to="/topics/props">props state</Link>
        </li>
      </ul>
    </div>
  )
}

function Topic() {
  let {topicId} = useParams();
  return <h3>Request topic ID : {topicId}</h3>
}

export default App;
