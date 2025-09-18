import React from 'react';
import { useSelector } from 'react-redux';

export default function ShowAllCategories() {
  const dataExpense = useSelector((state) => state.dataExpense);

    return (
        <div>
            <ul>
                {Object.entries(dataExpense).map(([category, value]) => {
                    const total = value.length > 0 ? value.reduce((sum, data) => sum + data.price, 0) : 0;
                    return <li key={category}>{category}: {total}</li>;
                })}
            </ul>
        </div>
    );
}
