export default function Relative() {
  return <section className="h-[200vh] overflow-scroll">
    <h2>Relative</h2>
    <ul>
      <li>RELATIVE element is positioned relative to its normal position</li>
      <li>The flow of other elements is not affected</li>
      <li>Use cases: slight adjustments to position without affecting other elements</li>
    </ul>

    <div className="size-[400px] border-4 border-amber-300 mt-8">
      <div className="relative -top-4 -left-4 size-[150px] bg-amber-500 flex flex-col justify-center">
        <p className="px-4 py-2 text-zinc-900 font-bold">This box is relatively positioned</p>
      </div>
      <p className="px-4 text-zinc-200 font-bold">This text is NOT affected by the relative positioning of the box above</p>
      <p className="mt-4 px-4 text-zinc-200 font-bold">Scroll down to see</p>
    </div>
  </section>;
}
