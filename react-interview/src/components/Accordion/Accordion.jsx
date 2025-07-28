import { useState } from "react";
import data from "./data";

export default function Accordion() {
  const [selected, setSelected] = useState(null);

  function singleActivation(id) {
    selected === id ? setSelected(null) : setSelected(id);
    console.log(id);
  }
  return (
    <div>
      <div>
        {data && data.length > 0 ? (
          data.map((dataItem, index) => (
            <div key={index}>
              <div className="title">
                <h3>{dataItem.title}</h3>
              </div>
              <button onClick={() => singleActivation(dataItem.id)}>+</button>
              <div>
                {dataItem.id === selected ? (
                  <div>{dataItem.content}</div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div>No Data Found!!</div>
        )}
      </div>
    </div>
  );
}
