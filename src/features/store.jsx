const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        product: productReducer,
    }
})