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
      <div>
        <div className="border-2 border-secondary-900">
          imagen
        </div>

        <h2 className="text-center text-3xl border-secondary-900 border-2">
          Nuestro Clientes
        </h2>
        <div className="grid gap-4 my-2 mx-5 text-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
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
    </>
  )
}