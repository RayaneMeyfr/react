
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store'
import HomePage from './HomePage/HomePage'



createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <HomePage/>
  </Provider>
)
