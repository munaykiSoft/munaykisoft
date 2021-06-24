import { useEffect, useState } from 'react';
import { getServicesApi } from '../api/services';
import Image from 'next/image';


const Service = () => {

  const [services, setServices] = useState([])

  useEffect(() => {
    (
      async () => {
        const response = await getServicesApi();
        setServices(response || []);
        console.log('goooooooooo', response);
      }
    )()
  }, []);

    return (
        <>
           <section>
                <div>
                    <h2 className="text-center leading-10">
                        Nuestros Servicios
                    </h2>
                    <div className="grid gap-4 my-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {
                            services.map((service)=> (
                                <div key={ service.id } className="text-center py-4 my-4">
                                    {service.nombre}
                                    <div className="border-2 border-secondary-500">
                                      <Image width="250" height="200"  src={ service.imagen.url } alt={service.imagen.name}/>
                                    </div>
                                </div>
                            ))
                        }
                       
                    </div>
                </div>
           </section>
        </>
    )
}

export default Service
