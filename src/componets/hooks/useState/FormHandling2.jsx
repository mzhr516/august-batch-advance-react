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

  const submit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      lan: "",
      fName: "",
      LName: "",
      gender: "",
      email: "",
      DOB: "",
      add: "",
    });
  };

  return (
    <div>
      <h1>personal details</h1>
      <form onSubmit={submit}>
        <div>
          <label>langauge</label>
          <br />
          <select
            onChange={(e) => {
              setFormData({ ...formData, lan: e.target.value });
            }}
            value={formData.lan}
            required
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
            value={formData.fName}
            required
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
            value={formData.LName}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="">gender:</label>
          <input
            type="radio"
            value="male"
            name="gender"
            onChange={(e) => {
              setFormData({ ...formData, gender: e.target.value });
            }}
            checked={formData.gender === "male"}
            required
          />
          male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={(e) => {
              setFormData({ ...formData, gender: e.target.value });
            }}
            checked={formData.gender === "female"}
            required
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
            value={formData.email}
            required
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
            value={formData.DOB}
            required
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
            value={formData.add}
            required
          ></textarea>
        </div>
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
