import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Allcontacts = () => {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = async (name) => {
    if (name.length == 0) {
      const names = await axios.get("https://scizers-backend.vercel.app/api");
      setList(names.data);
    } else {
      const names = await axios.get(
        `https://scizers-backend.vercel.app/api/${name}`
      );
      setList(names.data);
    }
  };

  useEffect(() => {
    fetchData("");
  }, []);

  const changeSearch = (event) => {
    setSearch(event.target.value);
    fetchData(search);
  };

  return (
    <>
      <div className="list-section">
        <div class="textInputWrapper">
          <input
            placeholder="Type Here"
            type="text"
            class="textInput"
            value={search}
            onChange={changeSearch}
          />
        </div>
        {list.map((item) => {
          return (
            <Card
              name={item.name}
              phone={item.phone}
              email={item.email}
              id={item._id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Allcontacts;
