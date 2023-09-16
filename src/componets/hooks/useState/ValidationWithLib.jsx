import React from "react";
import { useForm } from "react-hook-form";

export const ValidationWithLib = () => {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  
  console.log(errors);

  const submit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label>langauge</label>
          <br />
          <select
            {...register("language", {
              required: { value: true, message: "select your language" },
            })}
          >
            <option value="">select lan</option>
            <option value="hindi">hindi</option>
            <option value="english">english</option>
            <option value="marathi">marathi</option>
          </select>
          <p style={{ color: "red" }}>{errors.language?.message}</p>
        </div>
        <br />
        <div>
          <label htmlFor="">first Name</label>
          <input
            type="text"
            {...register("Fname", {
              required: { value: true, message: "enter first name" },
              pattern:{value:/^[a-zA-Z]*$/,message:"please enter valid name"}
            })}
          />
          <p style={{ color: "red" }}>{errors.Fname?.message}</p>
        </div>
        <br />
        <div>
          <label htmlFor="">Last Name</label>
          <input type="text" {...register("Lname")} />
        </div>
        <br />
        <div>
          <label htmlFor="">Age</label>
          <input
            type="number"
            {...register("age", {
              required: { value: true, message: "this field is required" },
              min: { value: 20, message: "age should be greater than 20 " },
              max: { value: 40, message: "age should not greater than 40" },
            })}
          />
          <p style={{ color: "red" }}>{errors.age?.message}</p>
        </div>
        <br />
        <div>
          <label htmlFor="">gender:</label>
          <input
            type="radio"
            value="male"
            {...register("gender", {
              required: { value: true, message: "please select your gender" },
            })}
          />
          male
          <input type="radio" value="female" {...register("gender")} />
          female
          <p style={{ color: "red" }}>{errors.gender?.message}</p>
        </div>
        <br />
        <div>
          <label htmlFor="">email</label>
          <input type="email" {...register("email")} />
        </div>
        <br />
        <div>
          <label htmlFor="">date of birth</label>
          <input type="date" {...register("date")} />
        </div>
        <br />
        <div>
          <label htmlFor="">Address</label>
          <textarea
            cols="30"
            rows="10"
            {...register("address", {
              minLength: {
                value: 50,
                message: "please type at least 50 charectors",
              },
              maxLength: { value: 100, message: "charector limit exceed" },
            })}
          ></textarea>
          <p style={{ color: "red" }}>{errors.address?.message}</p>
        </div>
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
