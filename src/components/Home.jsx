import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "../styles.css";

export default function Home() {
  const [dataList, setdataList] = useState([]);
  const [selected, setSelected] = useState("");
  const [addedList, setaddedList] = useState([]);
  // const [isNewPage, setIsNewPage] = useState(false);

  const fetchData = async () => {
    try {
      const resp = await fetch("https://jsonplaceholder.typicode.com/photos");
      const data = await resp.json();
      setdataList(data.slice(0, 10));
      // console.log("SURR", dataList);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDropdownChange = (e) => {
    setSelected(e.target.value);
  };

  // const handleMoveToNewPage = () => {
  //   setIsNewPage(true);
  // };

  const handleAddTod = () => {
    setaddedList(...addedList, selected);
  };

  useEffect(() => {
    fetchData();
  }, []);

  //   console.log("SURR check", dataList, selected);

  return (
    <>
      <div className="ImageGrid">
        {dataList.map((item, index) => (
          // <li key={item.id}>{item.title}</li>
          <div>
            <img
              className="ImageSelf"
              src={item.thumbnailUrl}
              alt={item.title}
            ></img>
          </div>
        ))}
      </div>

      <div>
        <span>Dropdown Below!!</span>
        <div>
          <span>Select image title</span>
          <select value={selected} onChange={handleDropdownChange}>
            <option>Select Title</option>
            {dataList.map((item, index) => (
              <option key={index} value={item.id}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
      </div>
      {selected == 4 && (
        <div>
          <span>Dropdown Below!!</span>
          <div>
            <span>Select image title</span>
            <select value={selected} onChange={handleDropdownChange}>
              <option>Select Title</option>
              {dataList.map((item, index) => (
                <option key={index} value={item.id}>
                  {item.id}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
      <div>
        <Link to="/main">Click to go to main</Link>
      </div>
      <div>
        <Link to="/carousel">Click to go to Image carousal</Link>
      </div>
      <div>
        <Link to="/redux">Click to go to Redux Page</Link>
      </div>
      <div>
        <Link to="/page">Click to go to Pagination Page</Link>
      </div>
    </>
  );
}
