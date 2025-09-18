import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ShowAllCategories from '../show-all-categories/showAllCategories';
import ShowLibelleExpense from '../show-libelle-expense/ShowLibelleExpense';
import { removeAmount } from '../store/store';



export default function HomePage() {
    const dataExpense = useSelector((state) => state.dataExpense);
    const dispatch = useDispatch();

    const handleDelete = (category, id) => {
        dispatch(removeAmount({ category, id }));
    };
  return (
    <>
        <ShowAllCategories dataExpense={dataExpense}/>
        <ShowLibelleExpense dataExpense={dataExpense} onDelete={handleDelete}/>
    </>
  )
}
