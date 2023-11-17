// document.on("click", ".add_field", function () {
//   '<input type="text" class="input" name="field[]" value="">'.insertAfter(
//     ".input:last",
//   );
// });
import { useState } from "react";

export default function AddField() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  return (
    <div className="App">
      <button onClick={handleClick}>Submit</button>

      {Array.from(Array(counter)).map((c, index) => {
        return (
          <input key={c} type="text">
            {index}
          </input>
        );
      })}
    </div>
  );
}

// export default function addField() {
//   return (
//     <>
//       <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
//       <form>
//         <div className="input-group">
//           <label placeholder="Your email">Food:</label>
//           <input className="input" placeholder=" Cereal, Chips, Fruit, etc" />
//         </div>
//       </form>

//       <button
//         type="button"
//         className="add_field"
//         onClick={function () {
//           return (
//             <>
//               <input />
//               <label>Somet hing</label>
//             </>
//           );
//         }}
//       >
//         Add field
//       </button>
//     </>
//   );
// }
