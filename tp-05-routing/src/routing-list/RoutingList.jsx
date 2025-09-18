import React from 'react'
import HomePage from '../HomePage/HomePage'
import ShowLibelleExpense from '../show-libelle-expense/ShowLibelleExpense'
import ShowAllCategories from '../show-all-categories/showAllCategories'
import { useDispatch, useSelector } from 'react-redux';
import { removeAmount } from '../store/store';
import FormAddExpense from '../form-add-expense/FormAddExpense';
import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
import './RoutingList.css'


export default function RoutingList() {
    const dataExpense = useSelector((state) => state.dataExpense);
    const dispatch = useDispatch();

    const handleDelete = (category, id) => {
        dispatch(removeAmount({ category, id }));
    };

  return (
    <div>
      <nav>
        <NavLink to="/">Home </NavLink>
        <NavLink to="/libelles">Voir les libellés </NavLink>
        <NavLink to="/categories">Voir les dépenses par catégories </NavLink>
        <NavLink to="/add">Ajouter une dépenses </NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/categories" element={<div><h2>Catégories</h2><Outlet /></div>}>
            <Route index element={<ShowAllCategories dataExpense={dataExpense} />} />
        </Route>
        <Route path='/libelles' element={<ShowLibelleExpense dataExpense={dataExpense} onDelete={handleDelete}/>}/>
        <Route path='/add' element={<FormAddExpense/>}/>
      </Routes>
    </div>
  )
}
