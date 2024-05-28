import { createSlice } from '@reduxjs/toolkit'
import { getInfo } from '../../../helpers/utils';

export const infoNasa = createSlice({
  name: 'informacion',
  initialState: {
    // Define el estado inicial para la información de la NASA
    data: [],
    loading: false,
    error: null
  },
  reducers: {
    getInfoStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getInfoSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    getInfoFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  },
})

// Exporta los action creators generados automáticamente
export const { getInfoStart, getInfoSuccess, getInfoFailure } = infoNasa.actions;

// Define un action creator asincrónico para obtener la información de la API
export const fetchInfo = () => async (dispatch) => {
  try {
    dispatch(getInfoStart()); // Dispara la acción de inicio de obtención de información
    const info = await getInfo(); // Llama a la función getInfo para obtener la información
    dispatch(getInfoSuccess(info)); // Dispara la acción de éxito con la información obtenida
  } catch (error) {
    dispatch(getInfoFailure(error.message)); // Dispara la acción de fallo con el mensaje de error
  }
}

// Exporta el reducer
export default infoNasa.reducer;
