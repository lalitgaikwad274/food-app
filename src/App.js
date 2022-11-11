import "./App.css";
import Modal from "./components/Modal/Modal";
import Items from "./components/Items/Items";
import NavBar from "./components/Navbar/NavBar";
import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./components/store";

function App() {
   // localStorage.setItem("cartItem", []);

   const food = [
      {
         id: 1,
         name: "Sushi",
         desc: "Finest fish and veggies",
         price: 22.99,
      },
      {
         id: 2,
         name: "Schnitzel",
         desc: "A german speciality!",
         price: 16.5,
      },
      {
         id: 3,
         name: "Barbecue Burger",
         desc: "American, raw, mealy",
         price: 12.99,
      },
      {
         id: 4,
         name: "Green Bowl",
         desc: "Healthy ..and green..",
         price: 18.99,
      },
   ];
   const [Count, setCount] = useState(0);
   const [open, setOpen] = useState(false);
   const [CartData, setCartData] = useState([]);

   const addToCart = (item) => {
      console.log(`In APP ${item.count} and id is ${item.itemId}`);
      setCount((cnt) => Number(cnt) + Number(item.count));

      // let Cartdata = JSON.parse(localStorage.getItem("cartItem"));
      let data;
      for (const ele of food) {
         console.log("in for", ele.id, " ", item.itemId);
         if (item.itemId === ele.id) {
            let flag = 1;
            for (let r of CartData) {
               if (r.id === item.itemId) {
                  r.count = Number(r.count) + Number(item.count);
                  flag = 0;
               }
            }
            if (flag) {
               setCartData([
                  ...CartData,
                  {
                     id: ele.id,
                     name: ele.name,
                     desc: ele.desc,
                     price: ele.price,
                     count: item.count,
                  },
               ]);
            }

            data = {
               id: ele.id,
               name: ele.name,
               desc: ele.desc,
               price: ele.price,
               count: item.count,
            };

            break;
         }
      }
      console.log("in App cartdata", CartData);
      let Ddata = CartData.length === 0 ? [data] : [...CartData, data];
      Ddata.map((item) =>
         item.id === data.id
            ? { ...item, count: Number(item.count) + Number(data.count) }
            : item
      );

      console.log(data);
      localStorage.setItem("cartItem", JSON.stringify(Ddata));
   };

   // const check = localStorage.getItem("cartItem");
   // console.log("check localstriage value", check);

   return (
      <Provider store={store}>
         <div className="App">
            <NavBar count={Count} onOpen={() => setOpen(true)} />
            <Items food={food} onSelect={addToCart} />
            <Modal open={open} onClose={() => setOpen(false)} />
         </div>
      </Provider>
   );
}

export default App;
