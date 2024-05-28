// import { formatDate } from "./formatDate";

export const getInfo = async () => {

    const today = new Date();
    const sixDaysAgo = new Date(today);
    sixDaysAgo.setDate(today.getDate() - 6);

    const dates = [];
    for (let i = 0; i < 7; i++) {
        const date = new Date(sixDaysAgo);
        date.setDate(sixDaysAgo.getDate() + i);
        dates.push(formatDate(date));
    }

    const inicio = dates[0];
    const fin = dates[5];

    const peticion = `https://api.nasa.gov/planetary/apod?api_key=K0KlEJOLtT82uigy9mG334lstlLNuE0z840gnZqF&start_date=${inicio}&end_date=${fin}&thumbs=true`;
    const resp = await fetch(peticion);
    const imagenes = await resp.json();

    const info = imagenes.map(img => ({
        id: img.date,
        title: img.title,
        // image: img.thumbnail_url ? img.thumbnail_url : img.url,
        image: img.url,
        fecha: img.date,
        descripcion: img.explanation,
        media: img.media_type
    }));
    return info;
}

// import { useContext } from "react";
// import { InfoNasaContext} from '../App'

export const getDataById = (id, informacion) => {
    return informacion.find(img => img.id === id);

}


export function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}


export const acortarTexto = (texto, caracteres = 50) => {
    let recortado;
    if (texto && texto.length > caracteres) {
        recortado = texto.slice(0, caracteres);
        return recortado + '...';
    }
    return texto;
};