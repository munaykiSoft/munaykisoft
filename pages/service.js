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
            Servicio     
        </>
    )
}

export default Service
