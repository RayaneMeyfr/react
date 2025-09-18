export default function ShowLibelleExpense({ dataExpense, onDelete }) {
  return (
    <div>
      <ul>
        {Object.entries(dataExpense).map(([category, values]) => {
          if (values.length > 0) {
            return values.map((item) => (
              <li key={category + item.id}>
                {item.name} - 
                {item.date} - 
                {item.price} 
                <button onClick={() => onDelete(category, item.id)}>
                  Delete
                </button>
              </li>
            ));
          }
        })}
        
      </ul>
    </div>
  );
}
