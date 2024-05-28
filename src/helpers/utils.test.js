import { getInfo, getDataById, formatDate, acortarTexto } from './utils';

describe('getInfo', () => {
  it('Debe devolver un array con la informacion de la API', async () => {
    const info = await getInfo();
    expect(Array.isArray(info)).toBe(true);
  });
});

describe('getDataById', () => {
    it('Debe devolver el dato correcto para un ID', () => {
      const informacion = [
        { id: 1, title: 'Title 1' },
        { id: 2, title: 'Title 2' },
        { id: 3, title: 'Title 3' },
      ];
      expect(getDataById(2, informacion)).toEqual({ id: 2, title: 'Title 2' });
    });
  
    it('Devuelve undefined si no encuentra por ID', () => {
      const informacion = [
        { id: 1, title: 'Title 1' },
        { id: 2, title: 'Title 2' },
        { id: 3, title: 'Title 3' },
      ];
      expect(getDataById(4, informacion)).toBeUndefined();
    });
});

describe('formatDate', () => {
    it('Debe formatear la fecha correctamente al formato año-mes-dia', () => {
      const date = new Date('2024-05-09');
      expect(formatDate(date)).toBe('2024-05-09');
    });
});

describe('acortarTexto', () => {
    it('Debe cortar el texto a la longitud especifica', () => {
      const texto = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
      expect(acortarTexto(texto, 10)).toBe('Lorem ipsu...');
    });
  
    it('Debe devolver el texto original si la longitud es menor a la longitud que se le indica', () => {
      const texto = 'Lorem ipsum dolor sit amet';
      expect(acortarTexto(texto, 100)).toBe(texto);
    });
});