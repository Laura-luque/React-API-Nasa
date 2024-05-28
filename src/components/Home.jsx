import { useEffect } from "react"
import { Bloque } from "./Bloque"
import { useDispatch, useSelector } from "react-redux"
import { fetchInfo } from "../store/slices/infoNasa/infoNasa"
import '../styles/wrapper.css';

export const Home = () => {
  const dispatch = useDispatch();

  // Utiliza useSelector para obtener la información del estado
  const { loading, error } = useSelector((state) => state.informacion);

  // Utiliza useEffect para llamar a la acción de obtener información cuando el componente se monta
  useEffect(() => {
    dispatch(fetchInfo());
  }, [dispatch]);

  if (loading) {
    return <div className="wrapper">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
    </div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Bloque />
    </>
  )
}
