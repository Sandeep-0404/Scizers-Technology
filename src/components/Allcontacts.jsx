import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Allcontacts = () => {
  const [list, setList] = useState([]);

  const fetchData = async () => {
    const names = await axios.get("https://scizers-backend.vercel.app/api");
    setList(names.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="list-section">
        <h1 className="main-heading">All the contacts</h1>
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
