import React, { useState } from "react";

export const FormHandling2 = () => {
  const [formData, setFormData] = useState({
    lan: "",
    fName: "",
    LName: "",
    gender: "",
    email: "",
    DOB: "",
    add: "",
  });
  console.log(formData);
  return (
    <div>
      <h1>personal details</h1>
      <form>
        <div>
          <label> langauge</label>
          <br />
          <select
            onChange={(e) => {
              setFormData({ ...formData, lan: e.target.value });
            }}
          >
            <option value="">select lan</option>
            <option value="hindi">hindi</option>
            <option value="english">english</option>
            <option value="marathi">marathi</option>
          </select>
        </div>
        <br />
        <div>
          <label htmlFor="">first Name</label>
          <input
            type="text"
            onChange={(e) => {
              setFormData({ ...formData, fName: e.target.value });
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            onChange={(e) => {
              setFormData({ ...formData, LName: e.target.value });
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="">gender:</label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={(e) => {
              setFormData({ ...formData, gender: e.target.value });
            }}
          />
          male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={(e) => {
              setFormData({ ...formData, gender: e.target.value });
            }}
          />
          female
        </div>
        <br />
        <div>
          <label htmlFor="">email</label>
          <input
            type="email"
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="">date of birth</label>
          <input
            type="date"
            onChange={(e) => {
              setFormData({ ...formData, DOB: e.target.value });
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="">Address</label>
          <textarea
            cols="30"
            rows="10"
            onChange={(e) => {
              setFormData({ ...formData, add: e.target.value });
            }}
          ></textarea>
        </div>
        <br />
        <button>submit</button>
      </form>
    </div>
  );
};
