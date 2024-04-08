import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [first, setFirst] = useState([]);
  const [next, setNext] = useState([]);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const json = await response.json();
      setData(json);
      console.log(data);
    };
    fetchData();
  }, []);

  const loadFirst = () => {
    setActive(!active);
    if (data.length > 0) {
      setFirst(data.slice(0, data.length / 2));
    }
  };
  const loadNext = () => {
    setActive(!active);
    if (data.length > 0) {
      setNext(data.slice(data.length / 2, data.length));
    }
  };

  const clearData = () => {
    setFirst([]);
    setNext([]);
  };
  return (
    <div className="App">
      <button onClick={loadFirst}>Load First</button>
      <button onClick={clearData}>Clear Data</button>
      <button onClick={loadNext}>Load next</button>
      <div>
        {active
          ? first.map((el) => {
              return (
                <table key={el.id} style={{ padding: "10px" }}>
                  <tr style={{ padding: "10px", marginLeft: "32px" }}>
                    <td style={{ padding: "10px", marginLeft: "32px" }}>
                      {el.id}
                    </td>
                    <tr>
                      <td
                        style={{
                          color: "green",
                          padding: "10px",
                          marginLeft: "32px",
                        }}>
                        {el.title}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: "10px", marginLeft: "32px" }}>
                        {el.body}
                      </td>
                    </tr>
                  </tr>
                </table>
              );
            })
          : next.map((el) => {
              return (
                <table key={el.id} style={{ padding: "10px" }}>
                  <tr style={{ padding: "10px", marginLeft: "32px" }}>
                    <td style={{ padding: "10px", marginLeft: "32px" }}>
                      {el.id}
                    </td>
                    <tr>
                      <td
                        style={{
                          color: "green",
                          padding: "10px",
                          marginLeft: "32px",
                        }}>
                        {el.title}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: "10px", marginLeft: "32px" }}>
                        {el.body}
                      </td>
                    </tr>
                  </tr>
                </table>
              );
            })}
      </div>
    </div>
  );
}
