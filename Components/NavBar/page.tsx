import React from "react";

export default function NavBar() {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="flex flex-row justify-evenly h-1/5 w-3/5 border-4 p-4 m-4 rounded-3xl border-gray-300">
        <h2>About</h2>
        <h2>Projects</h2>
        <h2>Skills</h2>
        <h2>Contacts</h2>
      </div>
    </div>
  );
}
