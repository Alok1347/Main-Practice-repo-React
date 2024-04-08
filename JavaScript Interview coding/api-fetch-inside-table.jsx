// Fetch data from api and show inside table using map method on array
// Used Fetch and clear button to fetch and clear the data.

import "./styles.css";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState([]);

  const fetchHandler = async () => {
    const fetched = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await fetched.json();
    console.log(json);
    setData(json);
  };

  const clearHandler = () => {
    setData((data) => []);
  };
  return (
    <div className="App">
      <div>
        <button onClick={fetchHandler}>Fetch</button>
        <button onClick={clearHandler}>Clear</button>
      </div>
      <div>
        {data.length <= 0 ? (
          <p>Loading...</p>
        ) : (
          <table style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ border: "1px solid black" }}>
                <th>ID</th>
                <th>UseID</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} style={{ border: "1px solid black" }}>
                  <td style={{ border: "1px solid black" }}>{item.id}</td>
                  <td style={{ border: "1px solid black" }}>{item.userId}</td>
                  <td style={{ border: "1px solid black" }}>{item.title}</td>
                  <td style={{ border: "1px solid black" }}>{item.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
