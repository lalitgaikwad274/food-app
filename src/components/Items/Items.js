import React from "react";
import ItemList from "./ItemList";

const Items = ({ food, onSelect }) => {
   const SetCount = (item) => {
      console.log(`In Items ${item.count} and id is ${item.itemId}`);
      onSelect(item);
   };

   return (
      <div className="container bg-white mx-auto mt-4 rounded">
         {food.map((item) => (
            <ItemList
               key={item.id}
               name={item.name}
               price={item.price}
               desc={item.desc}
               id={item.id}
               onSelect={SetCount}
               item={item}
            />
         ))}
      </div>
   );
};

export default Items;
