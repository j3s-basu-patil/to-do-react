import { Button } from '@mui/material';
import './App.css';
import { store } from './strore/store'
import { Provider } from 'react-redux'
import Home from './components/Home';

function App() {
  return (
    <div className="App">
       <Provider store={store}>
         <Home/>
       </Provider>
     
    </div>
  );
}

export default App;
