import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handlerChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const register = async (e) => {
    e.preventDefault();
    console.log("register successfully", formData);
    let responseData;
    await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    }
  };

  return (
    <div>
      <div className="w-full max-w-md p-8 space-y-3 mx-auto rounded-xl bg-gradient-to-b from-purple-200 to-gray-100 dark:bg-gray-50 dark:text-gray-800 my-8">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form
          noValidate=""
          action=""
          onSubmit={register}
          className="space-y-6 text-left"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-600">
              UserName
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handlerChange}
              id="username"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block dark:text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handlerChange}
              id="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handlerChange}
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
            <div className="flex justify-end text-xs dark:text-gray-600">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="block w-full p-3 text-white text-center rounded bg-red-500 dark:text-gray-50 dark:bg-violet-600"
          >
            Sign Up
          </button>
        </form>
        <p className="text-base text-center sm:px-6 dark:text-gray-600">
          Already Have an Account ?
          <Link
            to={"/login"}
            rel="noopener noreferrer"
            href="#"
            className="underline dark:text-gray-800"
          >
            {" "}
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
