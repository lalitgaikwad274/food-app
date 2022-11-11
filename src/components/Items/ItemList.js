import React, { useState } from "react";
import "./item.css";

const ItemList = ({ id, name, desc, price, onSelect, item }) => {
   const [Count, setCount] = useState(0);

   const SetCount = (e) => {
      setCount(e.target.value);
      console.log("in ItemLISt", Count);
      onSelect({ count: Count, itemId: id });

      setCount(0);
   };

   return (
      <>
         <div className="item_box">
            <div className="d-flex flex-column">
               <strong>{name}</strong>
               <i>{desc}</i>
               <div className="price">${price}</div>
            </div>
            <div>
               <div>
                  <strong className="me-2">Amount</strong>
                  <input
                     type="number"
                     min="0"
                     max="10"
                     style={{ width: 40 }}
                     value={Count}
                     onChange={(e) => setCount(e.target.value)}
                  />
               </div>
               <div>
                  <button className="btn" onClick={SetCount}>
                     + Add
                  </button>
               </div>
            </div>
         </div>
         <hr />
      </>
   );
};

export default ItemList;
