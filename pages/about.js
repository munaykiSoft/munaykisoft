import { useEffect, useState } from 'react';
import { getTeamApi } from '../api/team';

const About = () => {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        (
            async() => {
                const response = await getTeamApiApi();
                setTeam(response || []);
                console.log('goooooooooo', response);
            }
        )()
    }, [])

    return (
        <>
            Pagina nosotros
            Pagina nosotros
            Pagina nosotros
            Pagina nosotros
            Pagina nosotros
            Pagina nosotros
            Pagina nosotros
            Pagina nosotros
            Pagina nosotros
            Pagina nosotros
            Pagina nosotros
        </>
    )
}

export default About
