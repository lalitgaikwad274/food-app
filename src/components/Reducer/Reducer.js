// import { combineReducers } from "redux";

const initialState = {
   item: [],
   TotalCount: 0,
   TotalAmount: 0,
};
// console.log("in reducer", data[0].count);

const countReducer = (state = initialState, action) => {
   // state.count = action.payload;
   let id = action.payload;
   // let data = JSON.parse(localStorage.getItem("cartItem"));
   // console.log("get data", data);

   // state.item = data;

   switch (action.type) {
      case "increment":
         // console.log("the inc before", state.item);

         // state.item = state.item.map((item) =>
         //    item.id === id ? { ...item, count: Number(item.count) + 1 } : item
         // );
         let cart = JSON.parse(localStorage.getItem("cartItem"));
         console.log("before", cart);
         cart = cart.map((item) =>
            item.id === id ? { ...item, count: Number(item.count) + 1 } : item
         );

         // for (let i = 0; i < cart.length; i++) {
         //    console.log("object", cart[i].id, id);
         //    if (cart[i].id === id) {
         //       // console.log("count before", cart[i].count);

         //       cart[i].count = Number(cart[i].count) + 1;
         //       // console.log("count after", cart[i].count);
         //       break;
         //    }
         // }
         console.log("after", cart);

         // console.log("the inc after", state.item);

         localStorage.setItem("cartItem", JSON.stringify(cart));
         // return { item: cart, TotalCount: 0, TotalAmount: 0 };
         return { ...state, item: cart };
      case "decrement":
         let m = JSON.parse(localStorage.getItem("cartItem"));
         m = m.map((item) =>
            item.id === id
               ? {
                    ...item,
                    count: item.count === 1 ? 1 : Number(item.count) - 1,
                 }
               : item
         );

         // for (let i = 0; i < m.length; i++) {
         //    console.log("object", m[i].id, id);
         //    if (m[i].id === id) {
         //       console.log("count before", m[i].count);

         //       m[i].count = Number(m[i].count) - 1;
         //       console.log("count after", m[i].count);
         //       break;
         //    }
         // }
         console.log("after", m);

         // console.log("the inc after", state.item);

         localStorage.setItem("cartItem", JSON.stringify(m));
         // return { item: m, TotalCount: 0, TotalAmount: 0 };
         return { ...state, item: m };

      default:
         return state;
   }
};

export default countReducer;

// const rootReducer = combineReducers(countReducer);
