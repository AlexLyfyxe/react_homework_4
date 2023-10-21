import React from "react";

import { useState } from "react";


export default function FormRegister() {
  const [formRegister, setFormRegister] = useState({
    FIO: "", 
    phone: "",
    email: "",
  })

  const clickSubmit = (e) => {
    alert (
      `ФИО: ${formRegister.FIO}\nНомер телефона: ${formRegister.phone}\nEmail: ${formRegister.email}`
    )
  
    setFormRegister({
      FIO: "",
      phone: "",
      email: "",
  })
}


  return (
    <>
      <div className="container">
        <div className="register_content">
          <h1>Регистрация</h1>
          <label>
            ФИО: 
            <input
              value={formRegister.FIO}
              onChange={(e) => {
                setFormRegister({
                  ...formRegister,
                FIO: e.target.value,
                })
              }}
              placeholder="FIO"
            />
          </label>

          <label>
            Телефон:
            <input
              value={formRegister.phone}
              onChange={(e) => {
                setFormRegister({
                  ...formRegister,
                phone: e.target.value,
                })
              }}
              placeholder="Phone"
            />
          </label>

          <label>
            Email:
            <input
              value={formRegister.email}
              onChange={(e) => {
                setFormRegister({
                  ...formRegister,
                email: e.target.value,
                })
              }}
              placeholder="Email"
            />
          </label>
          
          <button onClick={clickSubmit}>
              Submit
          </button>
        </div>
      </div>
    </>
  )
}
