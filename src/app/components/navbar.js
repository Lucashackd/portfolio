"use client";

export default function Navbar() {
  return (
    <nav className="glass-effect">
      <div className="flex h-full w-full items-center justify-between">
        <div className="flex h-full w-full items-center">
          <h1 className="text-gradient font-iceberg text-4xl">Lucashackd :)</h1>
        </div>
        <ul className="flex h-full w-full items-center justify-end gap-6 text-xl text-white text-shadow-[2px_2px_.5px_rgba(0,0,0,0.25)]">
          <li className="font-inter">
            <button onClick={() => console.log("About")}>About</button>
          </li>
          <li className="font-inter">
            <button onClick={() => console.log("Skills")}>Skills</button>
          </li>
          <li className="font-inter">
            <button onClick={() => console.log("Projects")}>Projects</button>
          </li>
          <li className="font-inter">
            <button onClick={() => console.log("Contact")}>Contact</button>
          </li>
          <li className="font-inter">
            <button onClick={() => console.log("Curriculum")}>
              Curriculum
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
