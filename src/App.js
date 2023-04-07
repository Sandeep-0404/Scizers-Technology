import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import "./App.css";
import axios from "axios";
import Allcontacts from "./components/Allcontacts";

const App = () => {
  return (
    <>
      <div className="container">
        <Allcontacts />
        <Form />
      </div>
    </>
  );
};

export default App;
