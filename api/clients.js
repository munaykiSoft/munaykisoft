import { BASE_PATH } from '../utils/constants';

export const getClientsApi = async () => {
   try {
       const url = `${BASE_PATH}/clientes`;
       const response = await fetch(url);
       const result = await response.json();
       return result;
   } catch (error) {    
       console.log(error);
       return null;
   } 
}
