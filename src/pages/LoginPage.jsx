import React from "react";

export default function LoginPage() {
  return (
    <main className="bg-blue-400 h-screen justify-center">
      <div className="flex flex-col items-center text-3xl font-bold underline">
        Chat App
      </div>
      <div className="flex flex-col items-center">Log Into Your Account</div>
      <div className="flex flex-col items-center">
        <form className="flex flex-col items-center w-full mt-6 p-10">
          <label className="p-2">Username:</label>
          <input
            placeholder="Type here"
            className=" border-2 border-red-400 w-full rounded-md max-w-xs"
            type="text"
            name="email"
          />
          <label className="p-2">Password:</label>
          <input
            placeholder="Type here"
            className="border-2  border-red-400 w-full rounded-md max-w-xs"
            type="password"
            name="password"
          />
          <button
            className="border-2 border-red-400 rounded p-2 mt-4"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <button className="border-2 border-red-400 rounded p-2 m-2">
          Create An Account
        </button>
      </div>
    </main>
  );
}
