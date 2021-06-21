import { useEffect, useState } from "react"
import { getServicesApi } from "../api/services"

export default function Home() {

  const [services, setServices] = useState([])

  useEffect(() => {
    (
      async () => {
        const response = await getServicesApi();
        setServices(response || []);
        console.log(response);
      }
    )()
  }, [])
  return (
    <>
      Pagina inicial
      <br/>
      {services[0].nombre}
      <br/>
      <img src={services[0].imagen[0].url} alt="imagen" />
      Pagina inicial
      <br/>
      Pagina inicial
      <br/>
      Pagina inicial
      <br/>
      Pagina inicial
      <br/>
      Pagina inicial
      <br/>
      Pagina inicial
      <br/>
      Pagina inicial
      <br/>
      Pagina inicial
      <br/>
      Pagina inicial
      <br/>
      Pagina inicial
      <br/>
      Pagina inicial
      <br/>
      Pagina inicial
      <br/>
      Pagina inicial
      <br/>
    </>
  )
}
