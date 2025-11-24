export default function Sticky() {
  return <section>
    <h2>Sticky</h2>
    <ul>
      <li>Sticky position is relative to the nearest parent with a scrollable position</li>
      <li>Sticky element is in the flow until it reaches the top or bottom of the scrollable container</li>
      <li>Use cases: nav headers,table headers, massive text, etc.</li>
    </ul>
    <div className="mt-8 max-h-50 border-2 border-amber-300 overflow-y-scroll">
      <div>
        <p>This box is scrollable</p>
        <p>The below table has a sticky header</p>
        <p className="mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quis accusamus a eligendi, iure hic inventore error tempore blanditiis iste culpa architecto assumenda beatae dolorum esse quisquam? Porro officiis dolor cumque facilis quas odio quos a maiores, optio sint distinctio voluptatibus odit qui eos, perspiciatis neque voluptates pariatur voluptate molestiae. Blanditiis, excepturi velit tempora labore fugiat rerum est a ratione quae tenetur neque ullam voluptatem ipsa libero magnam eius delectus quam quis maiores reiciendis deleniti tempore doloremque nisi. Assumenda, optio reprehenderit! Nesciunt odio error quod accusamus, ut voluptatum animi asperiores cum! Quae eaque, aliquam rem nam odit deleniti alias nulla!</p>
      </div>
      <table className="my-4">
        <thead>
          <tr className="sticky top-0 bg-amber-500 text-zinc-900 font-bold">
            <th className="px-6">Col 1</th>
            <th className="px-6">Col 2</th>
            <th className="px-6">Col 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-6">Data 1</td>
            <td className="px-6">Data 2</td>
            <td className="px-6">Data 3</td>
          </tr>
          <tr>
            <td className="px-6">Data 1</td>
            <td className="px-6">Data 2</td>
            <td className="px-6">Data 3</td>
          </tr>
          <tr>
            <td className="px-6">Data 1</td>
            <td className="px-6">Data 2</td>
            <td className="px-6">Data 3</td>
          </tr>
          <tr>
            <td className="px-6">Data 1</td>
            <td className="px-6">Data 2</td>
            <td className="px-6">Data 3</td>
          </tr>
          <tr>
            <td className="px-6">Data 1</td>
            <td className="px-6">Data 2</td>
            <td className="px-6">Data 3</td>
          </tr>
          <tr>
            <td className="px-6">Data 1</td>
            <td className="px-6">Data 2</td>
            <td className="px-6">Data 3</td>
          </tr>
          <tr>
            <td className="px-6">Data 1</td>
            <td className="px-6">Data 2</td>
            <td className="px-6">Data 3</td>
          </tr>
          <tr>
            <td className="px-6">Data 1</td>
            <td className="px-6">Data 2</td>
            <td className="px-6">Data 3</td>
          </tr>
          <tr>
            <td className="px-6">Data 1</td>
            <td className="px-6">Data 2</td>
            <td className="px-6">Data 3</td>
          </tr>
          <tr>
            <td className="px-6">Data 1</td>
            <td className="px-6">Data 2</td>
            <td className="px-6">Data 3</td>
          </tr>
          <tr>
            <td className="px-6">Data 1</td>
            <td className="px-6">Data 2</td>
            <td className="px-6">Data 3</td>
          </tr>
          <tr>
            <td className="px-6">Data 1</td>
            <td className="px-6">Data 2</td>
            <td className="px-6">Data 3</td>
          </tr>
          <tr>
            <td className="px-6">Data 1</td>
            <td className="px-6">Data 2</td>
            <td className="px-6">Data 3</td>
          </tr>
          <tr>
            <td className="px-6">Data 1</td>
            <td className="px-6">Data 2</td>
            <td className="px-6">Data 3</td>
          </tr>
          <tr>
            <td className="px-6">Data 1</td>
            <td className="px-6">Data 2</td>
            <td className="px-6">Data 3</td>
          </tr>
          <tr>
            <td className="px-6">Data 1</td>
            <td className="px-6">Data 2</td>
            <td className="px-6">Data 3</td>
          </tr>
          <tr>
            <td className="px-6">Data 1</td>
            <td className="px-6">Data 2</td>
            <td className="px-6">Data 3</td>
          </tr>
          <tr>
            <td className="px-6">Data 1</td>
            <td className="px-6">Data 2</td>
            <td className="px-6">Data 3</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>;
}
