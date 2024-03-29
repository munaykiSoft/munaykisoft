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
    
      <div>
        <div className="text-center h-auto w-auto" >
          <Image src="/assets/images/hero.jpg" width={1440} height={600} />
        </div>

        <h2 className="text-center text-3xl">
          Nuestro Clientes
        </h2>
        <div className="grid gap-4 my-2 mx-5 text-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {
          clients.map((client) => 
          <div key={ client.id } >
              {/* <img src={ client.imagen.url} alt={client.imagen.name}/> */}
              <Image width="100" height="50" src={ client.imagen.url } alt={client.imagen.name} />
          </div>
          )
        }
        </div>
      </div>
    
  )
}