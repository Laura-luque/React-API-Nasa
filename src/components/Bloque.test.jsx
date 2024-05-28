import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom'; // Importa el enrutador que estás utilizando
import { Bloque } from './Bloque';

const mockStore = configureStore([]);

describe('Bloque Component', () => {
  test('renders ImgCard component', () => {
    // Simula un estado inicial del store
    const initialState = {
      informacion: {
        data: [
          { id: 1, title: 'Imagen 1', description: 'Descripción de la imagen 1' },
          { id: 2, title: 'Imagen 2', description: 'Descripción de la imagen 2' },
        ]
      }
    };
    
    // Crea un store simulado con el estado inicial
    const store = mockStore(initialState);
    
    // Renderiza el componente Bloque dentro de un Provider con el store simulado y un Router
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <Bloque />
        </Router>
      </Provider>
    );
    
    expect(() => getByText('Imagen 1')).not.toThrow();
  });
});
