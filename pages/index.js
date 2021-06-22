import { useEffect, useState } from "react"
import { getClientsApi } from "../api/clients"
import { getServicesApi } from "../api/services"

export default function Home() {

  const [services, setServices] = useState([])
  const [clients, setClients] = useState([])

  useEffect(() => {
    (
      async () => {
        const response = await getServicesApi();
        setServices(response || []);
        console.log('goooooooooo', response);
      }
    )()
  }, []);

  useEffect(() => {
    (
      async () => {
        const response = await getClientsApi();
        setClients(response || []);
        console.log('gaaaaaaaaaaaa',response);
      }
    )()
  }, [])
  return (
    <>
      
      {/* <ul>
        {
          services.map((service) => (
            <li key={service.id}>
              { service.nombre }
            </li>
          ))
        }
      </ul> */}
      <br/>
      <br/>
      <br/>
      {/* {
        clients.map((client) => 
        <div key={ client.id }>
        <img src={ client.imagen.url} alt={client.imagen.name}/>
        </div>
        )
      } */}
      <br/>
      
    </>
  )
}
