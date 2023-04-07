import axios from "axios";
import React, { useEffect, useState } from "react";

const Form = () => {
  // ################ FORM VALUES ####################

  const [fname, setfName] = useState("");
  const changefName = (data) => {
    setfName(data.target.value);
  };

  const [lname, setlName] = useState("");
  const changelName = (data) => {
    setlName(data.target.value);
  };

  const [email, setMail] = useState("");
  const changeMail = (data) => {
    setMail(data.target.value);
  };

  const [number, setNumber] = useState("");
  const changeNumber = (data) => {
    setNumber(data.target.value);
  };

  const [list, setList] = useState([]);

  const fetchData = async () => {
    const names = await axios.get("https://scizers-backend.vercel.app/api");
    setList(names.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const verifyDetails = (fname, lname, email, phone) => {
    if (
      fname.trim() === "" ||
      lname.trim() === "" ||
      email.trim() === "" ||
      phone.trim() === ""
    )
      return false;

    return true;
  };

  const findNumber = (phones) => {
    let get = false;
    list.map((item) => {
      console.log(item.phone);
      if (item.phone == phones.trim()) {
        get = true;
      }
    });

    return get;
  };

  const sendData = () => {
    if (!verifyDetails(fname, lname, email, number)) {
      alert("Fill all the Fields");
      return;
    }

    if (findNumber(number)) {
      alert("Phone number exists");
      return;
    }

    axios
      .post("https://scizers-backend.vercel.app/api", {
        name: `${fname} ${lname}`,
        email: email,
        phone: number,
      })
      .then((res) => window.location.reload())
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div className="second-box">
        <div class="login-box">
          <form>
            <div class="user-box">
              <input
                type="text"
                name=""
                required=""
                value={fname}
                onChange={changefName}
              />
              <label>First Name</label>
            </div>
            <div class="user-box">
              <input
                type="text"
                name=""
                required=""
                value={lname}
                onChange={changelName}
              />
              <label>Last Name</label>
            </div>
            <div class="user-box">
              <input type="text" name="" value={email} onChange={changeMail} />
              <label>Email</label>
            </div>
            <div class="user-box">
              <input
                type="text"
                name=""
                value={number}
                onChange={changeNumber}
              />
              <label>Phone Number</label>
            </div>
            <center>
              <a onClick={sendData} className="sendButton">
                Save
                <span></span>
              </a>
            </center>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
