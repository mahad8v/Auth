import { createSlice } from "@reduxjs/toolkit"


const intialState = {
   
    products: [
        {
        "id": 1,
        "name": "Product A",
        "category": "Electronics",
        "color": "Black",
        "price": 499.99,
        "details": {
            "manufacturer": "ABC Electronics",
            "ratings": 4.5
        }
        },
        {
        "id": 2,
        "name": "Product B",
        "category": "Clothing",
        "details": {
            "color": "Blue",
            "price": 29.99,
            "brand": "Fashionista",
            "size": "Medium"
        }
        },
        {
        "id": 3,
        "name": "Product C",
        "category": "Home & Kitchen",
        "details": {
            "color": "White",
            "price": 149.99,
            "brand": "Home Essentials",
            "material": "Ceramic"
        }
        },
        {
        "id": 4,
        "name": "Product D",
        "category": "Sports & Outdoors",
        "details": {
            "color": "Red",
            "price": 79.99,
            "brand": "Outdoor Adventure",
            "weight": "2.5 lbs"
        }
        }
    ]}
    
export const Product = createSlice({
    initialState,
    reducers: {
     addNewProduct: (state) => {
        
     }
    }
})