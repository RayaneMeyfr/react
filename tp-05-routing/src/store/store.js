import { configureStore, createSlice } from "@reduxjs/toolkit";

const dataExpenseSlice = createSlice({
    name : "dataExpense",
    initialState : {
                        total: 82,
                        food: [{
                            id: 1,
                            price: 12,
                            name: "Course",
                            date: "25/08/2025"
                        },{
                            id: 2,
                            price: 20,
                            name: "TEST",
                            date: "25/08/2025"
                        }],
                        transport: [{
                            id: 2,
                            price: 50,
                            name: "voiture",
                            date: "25/08/2025"
                        }],
                        rent: [],
                        leisure:[],
                        other: []
                    },
    reducers : {
        addExpense: (state, action) => {
            const { category, data } = action.payload;
            if (state[category] && category != "total") {
                state[category].push({...data });
                state["total"] += data.price
            }
        },
        removeAmount: (state, action) => {
           const { category, id } = action.payload;
            if (state[category]) {
                const itemToRemove = state[category].find(item => item.id === id);
                if (itemToRemove) {
                    state["total"] -= itemToRemove.price;
                    state[category] = state[category].filter(item => item.id !== id);
                }
            }

        }
    }
})

export const {addExpense,removeAmount} = dataExpenseSlice.actions;

export const store = configureStore({
    reducer : {
        dataExpense : dataExpenseSlice.reducer
    }
})