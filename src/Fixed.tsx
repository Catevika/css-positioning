export default function Fixed() {
  return <section>
    <h2>Fixed info square</h2>
    <ul>
      <li>Its position is relative to the viewport</li>
      <li>It stays in the same position even when the page is scrolled</li>
      <li>It ignores the positioning of any other element</li>
      <li>Use cases: headers, footers, modals, chat widgets, etc.</li>
    </ul>
    <div className='h-[200vh] overflow:scroll'>
      <div className="fixed top-1/2 left-8 -translate-x-8 -translate-y-1/2 w-18 h-24 px-1 bg-amber-500 flex items-center rounded-r-md">
        <p className="text-zinc-900 font-bold">Scroll down &amp; see</p>
      </div>
    </div>
  </section>;
};