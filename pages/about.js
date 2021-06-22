const About = () => {
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
                </div>
            </section>
        </>
    )
}

export default About
