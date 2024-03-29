import { BASE_PATH } from '../utils/constants';

export const contactApi = async (formData) => {
    try {
        const url = `${BASE_PATH}/contactos`;
        const params = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error)
        return null;
    }
}