import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home';
import { Card } from './components/Card';
import { Navbar } from './components/Navbar';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  
  return (
    <div>
      <Navbar/>
      <Provider store={store}>
          <Routes>

            <Route path='card/:id' element={<Card/>}/>
            <Route  path='/*' element={<Home />}/>

          </Routes>
      </Provider>

    </div>
  );
}

export default App