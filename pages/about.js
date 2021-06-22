import { useEffect, useState } from 'react';
import { getTeamApi } from '../api/team';
import Image from 'next/image';

const About = () => {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        (
            async () => {
                const response = await getTeamApi();
                setTeam(response || []);
                console.log('goooooooooo', response);
            }
        )()
    }, [])

    return (
        <>
            <section>
                <div>
                    <div className="border-red-600 border-2">
                        <div>
                            <h2>
                                Mision
                            </h2>
                            <p>
                                En munaykisoft se trabaja con pasión
                                para transformar los negocios de nuestros clientes,
                                haciendoles exitosos mediante el uso de la tecnología y la innovación.
                            </p>
                        </div>
                        <div>
                            imagen
                        </div>

                        <div>
                            <h2>
                                Vision
                            </h2>
                            <p>
                                Munaykisoft sera una empresa con la cual los clientes y
                                mejores talentos quieran trabajar.
                            </p>
                        </div>
                        <div>
                            <h3>
                                Valores
                            </h3>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-center">
                            Nuestro Equipo
                        </h2>

                        <div className="grid gap-4 my-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {
                                team.map((equipo) => (
                                    <div key={ equipo.id } className="bg-yellow-500">
                                        { equipo.nombres }
                                        <div className="bg-primary-600">
                                            <Image width="auto" height="250" src={ equipo.imagen.url } alt={equipo.imagen.name} />
                                        </div>
                                        <br />
                                        { equipo.descripcion }
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default About
