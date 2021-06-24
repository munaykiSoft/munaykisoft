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
                            <div className="border-blue-600 border-2">
                                <h2>
                                    Mision
                                </h2>
                                <p>
                                    En munaykisoft se trabaja con pasión
                                    para transformar los negocios de nuestros clientes,
                                    haciendoles exitosos mediante el uso de la tecnología y la innovación.
                                </p>
                            </div>
                            <div className="bg-red-500">
                                imagen pruebas
                            </div>
                        </div>

                        <div>
                            <div className="border-yellow-600 border-2">
                                <h2>
                                    Vision
                                </h2>
                                <p>
                                    Munaykisoft sera una empresa con la cual los clientes y
                                    mejores talentos quieran trabajar.
                                </p>
                            </div>
                            <div className="bg-blue-600">
                                imagen pruebas
                            </div>
                        </div>
                        <div>
                            <h3>
                                Valores
                            </h3>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-center mt-10">
                            Nuestro Equipo
                        </h2>
                        <div className="grid gap-4 my-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {
                                team.map((equipo) => (
                                    <div key={ equipo.id } className="text-center mx-5 pb-4">
                                        <div className="text-center shadow-2xl">
                                            <Image width="auto" height="250" src={ equipo.imagen.url } alt={equipo.imagen.name} />
                                        <h1 className="w-full  text-center">
                                        { equipo.nombres }
                                        </h1>
                                        <h3 className="w-full text-center">
                                        { equipo.descripcion }
                                        </h3>
                                        </div>
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
