import '../index.css';
import { Link, Navigate, useParams } from "react-router-dom";
import { getDataById, acortarTexto } from "../helpers/utils";
import Paper from '@mui/material/Paper';
import { useSelector } from "react-redux"
// import { useContext } from "react";
// import { InfoNasaContext} from '../App';
import ReactPlayer from 'react-player';
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';


export const Card = () => {

    // const informacion = useContext(InfoNasaContext);
    // const informacion = JSON.parse(localStorage.getItem('ImgNASA')); // quitar cuando se pueda hacer peticiones
  const { data: informacion} = useSelector((state) => state.informacion);
  
  
  const { id } = useParams();
  const img = getDataById(id, informacion);
  const textoCompleto = img.descripcion;

    if (!img) {
        return <Navigate to='/' />
    }

    const handleUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    const [mostrarCompleto, setMostrarCompleto] = useState(false);
    const textoAcortado = acortarTexto(textoCompleto, 180);
    const [mostrarBoton, setMostrarBoton] = useState(true);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth > 768) { // Cambia el tamaño aquí según tu necesidad
            setMostrarBoton(false);
            setMostrarCompleto(true);
          } else {
            setMostrarBoton(true);
            setMostrarCompleto(false);
          }
        };
    
        window.addEventListener('resize', handleResize);
        handleResize(); // Llama a la función una vez al inicio para establecer el estado inicial
    
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    
      const toggleMostrarCompleto = () => {
        setMostrarCompleto(!mostrarCompleto);
      };

    return (
        <>
            <Link to='/'><button className="back">
                <div className="button-box">
                    <span className="button-elem">
                        <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                            ></path>
                        </svg>
                    </span>
                    <span className="button-elem">
                        <svg viewBox="0 0 46 40">
                            <path
                                d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                            ></path>
                        </svg>
                    </span>
                </div>
            </button></Link>

            <Paper elevation={3} sx={{ width: '50%' }} className='info'>
                <div className='info-foto'>
                    <div>
                        <h1>{img.title}</h1>
                    </div>
                    <div className='img-descrip'>
                        <div className='imagen-info'>
                            {img.media === 'video' ? (
                                <ReactPlayer 
                                url={img.image}
                                controls
                                className='info-img'
                                />
                            ): (
                                <img
                                className='info-img'
                                src={img.image}
                                alt={img.title}
                            />
                            )}
                            
                        </div>
                        <div className='descripcion-img'>
                            <h4>Descripcion</h4>
                            <p>{mostrarCompleto ? textoCompleto : textoAcortado}</p>
                            {mostrarBoton && (
                                <Button onClick={toggleMostrarCompleto}>
                                    {mostrarCompleto ? 'Ocultar información' : 'Mostrar más información'}
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </Paper>

            <button className="up" onClick={handleUp}>
                <svg className="svgIcon" viewBox="0 0 384 512">
                    <path
                        d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                    ></path>
                </svg>
            </button>

        </>

    )
}
