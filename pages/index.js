import { useEffect, useState } from 'react'
import { getClientsApi } from '../api/clients'
import Image from 'next/image';

export default function Home() {

  const [clients, setClients] = useState([])

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
      <br/>
      <br/>
      <br/>
      {
        clients.map((client) => 
          <div key={ client.id }>
            {/* <img src={ client.imagen.url} alt={client.imagen.name}/> */}
            <Image width="100" height="50" src={ client.imagen.url } alt={client.imagen.name} />
          </div>
        )
      }
      <br/>
      <br/>
    </>
  )
}