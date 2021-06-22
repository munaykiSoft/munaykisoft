import { useState } from 'react';
import { getServicesApi } from '../api/services'

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
                    <h2 className="text-center">
                        Nuestros Servicios
                    </h2>
                    <div className="grid gap-4 my-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-yellow-500">
                            1
                        </div>
                        <div className="bg-red-500">
                            2
                        </div>
                        <div className="bg-pink-500">
                            3
                        </div>
                        <div className="bg-green-500">
                            4
                        </div>
                        <div className="bg-primary-600">
                            5
                        </div>
                        <div className="bg-secondary-500">
                            6
                        </div>
                    </div>
                </div>
           </section>
        </>
    )
}

export default Service
