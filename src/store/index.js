import {configureStore, createSlice} from "@reduxjs/toolkit"

const foodList = [
    {
      id: 1,
      name: "Spaghetti Carbonara",
      image:  "/images/food1.jpg",
      price: 12.99,
      description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
      category: "Pasta"
    },
    {
      id: 2,
      name: "Margherita Pizza",
      image:  "/images/food2.jpg",
      price: 10.99,
      description: "A simple pizza with fresh tomatoes, mozzarella cheese, and basil.",
      category: "Pizza"
    },
    {
      id: 3,
      name: "Chicken Caesar Salad",
      image:  "/images/food3.jpg",
      price: 11.49,
      description: "Grilled chicken served on a bed of romaine lettuce with Caesar dressing and croutons.",
      category: "Salad"
    },
    {
      id: 4,
      name: "Beef Tacos",
      image:  "/images/food4.jpg",
      price: 9.99,
      description: "Soft or crispy tacos filled with seasoned beef, lettuce, cheese, and salsa.",
      category: "Tacos"
    },
    {
      id: 5,
      name: "Marinated Grilled Salmon",
      image:  "/images/food5.jpg",
      price: 15.99,
      description: "Salmon fillet marinated and grilled to perfection, served with a side of vegetables.",
      category: "Seafood"
    },
    {
      id: 6,
      name: "Vegetable Stir-Fry",
      image:  "/images/food6.jpg",
      price: 10.49,
      description: "A mix of fresh vegetables stir-fried with a savory sauce, served over rice.",
      category: "Vegetarian"
    },
    {
      id: 7,
      name: "Classic Cheeseburger",
      image:  "/images/food7.jpg",
      price: 12.49,
      description: "A juicy beef burger with melted cheese, lettuce, tomato, and pickles, served with fries.",
      category: "Burgers"
    },
    {
      id: 8,
      name: "Chicken Alfredo",
      image:  "/images/food8.jpg",
      price: 13.99,
      description: "Fettuccine pasta in a creamy Alfredo sauce with grilled chicken and parmesan cheese.",
      category: "Pasta"
    },
    {
      id: 9,
      name: "Greek Salad",
      image:  "/images/food9.jpg",
      price: 8.99,
      description: "A refreshing salad with cucumbers, tomatoes, olives, feta cheese, and a lemon-oregano dressing.",
      category: "Salad"
    },
    {
      id: 10,
      name: "BBQ Ribs",
      image:  "/images/food10.jpg",
      price: 16.99,
      description: "Tender pork ribs slow-cooked and coated in a smoky BBQ sauce, served with coleslaw.",
      category: "BBQ"
    }
  ];

const foodItemsSlice = createSlice({
    name : 'fooditems',
    initialState : foodList,
    reducers : {

    }
})

const addToCartSlice = createSlice({
  name : 'cart',
  initialState : [],
  reducers : {
    addToCartItem : (state,action) => {
      state.push(action.payload)  
    },
    removeFromCartItem : (state,action) =>{
      return state.filter(itemId => itemId !== action.payload);
    }
  }
})


const store = configureStore({
    reducer : {
        fooditems : foodItemsSlice.reducer,
        cart : addToCartSlice.reducer,
    }
})


export const addToCartActions = addToCartSlice.actions;

export default store;