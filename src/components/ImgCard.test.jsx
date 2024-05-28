import { render, screen } from '@testing-library/react';
import { ImgCard } from './ImgCard';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { infoNasa } from '../store/slices/infoNasa/infoNasa';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('ImgCard Component', () => {
  let store; // Declara store aquí para que esté disponible para ambos tests

  beforeEach(() => {
    // Simula el estado de Redux
    const mockState = {
      informacion: {
        data: [
          {
            id: '2024-05-0598',
            title: 'Titulo de prueba',
            media: 'imagen',
            image: 'url-de-la-imagen',
            fecha: '2024-05-10'
          }
        ]
      }
    };

    // Crea un nuevo store en cada test
    store = configureStore({
      reducer: {
        informacion: infoNasa.reducer
      },
      preloadedState: mockState
    });
  });

  test('Renderizado sin errores', () => {
    // Renderiza el componente con el store simulado
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ImgCard />
        </BrowserRouter>
      </Provider>
    );

    // Verifica que los elementos se rendericen correctamente
    expect(screen.getByText('Titulo de prueba')).toBeInTheDocument();
    expect(screen.getByAltText('Titulo de prueba')).toBeInTheDocument();
    expect(screen.getByText('Fecha: 2024-05-10')).toBeInTheDocument();
  });

  
});
