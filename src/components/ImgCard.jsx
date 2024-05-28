// import { InfoNasaContext } from '../App'
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import { CardActionArea } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ReactPlayer from 'react-player';
import { useSelector } from "react-redux"


export const ImgCard = () => {

  // Utiliza useSelector para obtener la información del estado
  const { data: informacion} = useSelector((state) => state.informacion);

    // const informacion = useContext(InfoNasaContext);
    // console.log(informacion)
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate("/card/" + id)
    }

    return (
        <>
            {informacion.map((peticion, index) => (
                <Card key={index} sx={{ maxWidth: 345 }} className="tarjeta">
                    <CardActionArea onClick={() => handleClick(peticion.id)} >
                        <div key={index} className="card">
                            <h2>{peticion.title}</h2>
                            <div className="card-img">
                                {peticion.media === 'video' ? (
                                    <ReactPlayer 
                                        url={peticion.image} 
                                        width={"100%"}
                                        height={"140px"} 
                                        controls/>
                                ) : (
                                    <CardMedia
                                        component="img"
                                        width="140"
                                        height="140"
                                        image={peticion.image}
                                        alt={peticion.title}
                                    />
                                )}
                            </div>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <h3>Fecha: {peticion.fecha}</h3>
                                </Typography>
                                <div>
                                </div>
                            </CardContent>
                        </div>
                    </CardActionArea>
                </Card>

            ))}
        </>

    )
}
