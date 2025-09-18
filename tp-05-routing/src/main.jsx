
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { BrowserRouter } from 'react-router-dom'
import RoutingList from './routing-list/RoutingList'



createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <RoutingList/>
    </BrowserRouter>
  </Provider>
);

