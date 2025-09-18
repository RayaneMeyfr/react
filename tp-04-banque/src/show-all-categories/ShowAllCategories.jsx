import React from 'react';

export default function ShowAllCategories({dataExpense}) {
    return (
        <div>
            <ul>
                {Object.entries(dataExpense).map(([category, value]) => {
                        if(category == "total"){
                            return <li key={category}>{category}: {value}</li>
                        }
                        const total = value.length > 0 ? value.reduce((sum, data) => sum + data.price, 0) : 0;
                        return <li key={category}>{category}: {total}</li>;
                })}
            </ul>
        </div>
    );
}
