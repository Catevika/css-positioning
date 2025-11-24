import { useState } from "react";

export default function Absolute() {
  const [open, setOpen] = useState(false);

  return <>
    <section>
      <h2>Absolute</h2>
      <ul>
        <li>Absolute position is relative to nearest parent with a position other than static</li>
        <li>Absolute position is relative to the window if the nearest parent as no position</li>
        <li>Use cases: positioning nested elements, dropdowns, tooltips, popovers, etc.  </li>
      </ul>
      <div className="relative mt-8 size-[400px] border-4 border-amber-300">
        <p className="text-zinc-200 font-semibold">Parent: relative position</p>
        <div className="absolute flex flex-col justify-center size-[150px] mt-4 ml-8 bg-amber-500">
          <p className="text-zinc-900 text-center font-bold">4 Childs:</p>
          <p className="text-zinc-900 text-center font-bold">absolute position</p>
        </div>
        <div className="bg-amber-500 absolute bottom-0 left-0 mb-0 size-[100px]" />
        <div className="bg-amber-500 absolute bottom-0 right-0 mb-0 size-[100px]" />
        <div className="bg-amber-500 absolute top-0 right-0 mb-0 size-[100px]" />
      </div>
    </section>
    <section>
      <h2>Dropdown example</h2>
      <div className="relative">
        <button className="text-2xl text-zinc-900 font-bold px-4 py-2" onClick={() => setOpen((prev) => !prev)}>Open / Close</button>
        {open && <div className="absolute top-full left-0 mt-2 w-48 bg-amber-200 rounded-md">
          <ul>
            <li className="p-2 text-zinc-900 hover:bg-amber-400 cursor-pointer list-none">Option 1</li>
            <li className="p-2 text-zinc-900 hover:bg-amber-400 cursor-pointer list-none">Option 2</li>
            <li className="p-2 text-zinc-900 hover:bg-amber-400 cursor-pointer list-none">Option 3</li>
          </ul>
        </div>}
      </div>
    </section>
  </>;
};