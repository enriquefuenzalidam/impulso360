"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import porQueNosotros from 'public/images/porQueNosotros.webp';
import portadaFondoB from 'public/images/portadaFondoB.jpg';
import portadaFondoC from 'public/images/portadaFondoC.jpg';
import portadaFondoD from 'public/images/portadaFondoD.jpg';
import portadaFondoE from 'public/images/portadaFondoE.jpg';
import portadaFondoF from 'public/images/portadaFondoF.jpg';
import portadaFondoG from 'public/images/portadaFondoG.jpg';

const serviciosBlocks = [
    { fondoImagen: portadaFondoB, titulo: 'Estrategias digitales', descripcion: 'Transformamos tus metas comerciales en estrategias digitales efectivas. Desde la identificación del público objetivo hasta análisis competitivo, creamos planes personalizados para tu éxito.' },
    { fondoImagen: portadaFondoC, titulo: 'SEO (Optimización de Motores de Búsqueda)', descripcion: 'Mejoramos tu visibilidad online con investigación de palabras clave, optimización de contenido y construcción de enlaces estratégicos. Aumenta tu posición en los motores de búsqueda y atrae a tu audiencia objetivo.' },
    { fondoImagen: portadaFondoD, titulo: 'SEM (Marketing en Motores de Búsqueda)', descripcion: 'Gestionamos campañas publicitarias en Google, optimizando presupuestos y enfocándonos en estrategias de palabras clave. Aumenta la visibilidad y atrae clientes potenciales de manera efectiva.' },
    { fondoImagen: portadaFondoE, titulo: 'Redes Sociales', descripcion: 'Gestionamos tus perfiles en redes sociales, desarrollamos estrategias de contenido social y ejecutamos campañas publicitarias. Conéctate con tu audiencia, y ahora, también optimizamos tus campañas de pago para maximizar el alcance y la conversión.' },
    { fondoImagen: portadaFondoF, titulo: 'Email Marketing', descripcion: 'Diseñamos y ejecutamos campañas de email marketing impactantes. Mantén a tus clientes informados, comprometidos y listos para convertirse.' },
    { fondoImagen: portadaFondoG, titulo: 'Diseño y Desarrollo Web', descripcion: 'Creamos sitios web responsivos y optimizados para brindar una experiencia excepcional al usuario. Desde la velocidad hasta la integración de tecnologías, garantizamos una presencia online efectiva.' }
]


import clientesA from 'public/images/clientesA.png';
import clientesB from 'public/images/clientesB.png';
import clientesC from 'public/images/clientesC.webp';
import clientesD from 'public/images/clientesD.webp';
import clientesE from 'public/images/clientesE.webp';
import clientesF from 'public/images/clientesF.webp';

const clientesImagenes = [
    { imagen: clientesA },
    { imagen: clientesB },
    { imagen: clientesC },
    { imagen: clientesD },
    { imagen: clientesE },
    { imagen: clientesF }
]


import instagramIcono from 'public/images/instagram.png';
import telefonoIcono from 'public/images/telefono.png';
import correoIcono from 'public/images/email.png';

import portadaVideo from 'public/images/portadaFondoVideo.mp4';

export default function Page() {

const [currentClientesImagenesIndex, setCurrentClientesImagenesIndex] = useState(0);
const [fade, setFade] = useState(true);

useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentClientesImagenesIndex((prevIndex) => (prevIndex + 1) % clientesImagenes.length);
        setFade(true);
      }, 618);
    }, 2382);

    return () => clearInterval(interval);
  }, []);

  const { imagen } = clientesImagenes[currentClientesImagenesIndex];

    return (
        <main className={` text-white font-Roboto `}>
            <section className={` h-screen relative w-full bg-cover bg-center bg-black overflow-hidden  `} >
                <div className={` absolute top-0 left-0 w-full h-full `}>
                    <video poster='images/portadaFondoVideo.png' className='object-cover object-center h-full w-full' preload="auto" autoPlay="autoplay" muted loop playsInline>
                        <source src={portadaVideo} type="video/mp4" />
                    </video>
                </div>
                <div className={`  absolute top-0 left-0 w-full h-full bg-fucsiaAzulRatioFondo opacity-40 `} />
                <div className={` relative mx-auto flex flex-col w-full h-full items-center justify-center px-4`}>
                    <h2 className={` max-w-5xl text-left w-full transition-all ease-in-out duration-100 text-4xl  lg:text-5xl font-bold lg:my-2 opacity-80`}>En Impulso 360</h2>
                    <h3 className={` max-w-5xl text-left w-full transition-all ease-in-out duration-100 text-2xl lg:text-3xl font-semibold lg:my-2 opacity-80 `}>comienza tu transformación digital hoy</h3>
                    <p className={` max-w-5xl text-left w-full text-lg my-8 `}><Link className={` transition-all ease-in-out duration-200 rounded-full py-3 px-6 hover:bg-white bg-[#b10c72] hover:text-black text-white no-underline font-medium`} href='' >Conoce más aquí</Link></p>
                </div>
            </section>
            <section className={` pt-16 pb-0 lg:pb-4 bg-neutral-700 `}>
                <h3 className={` max-w-5xl mx-auto transition-all ease-in-out duration-100 text-3xl lg:text-4xl font-semibold mb-8 text-center uppercase font-RobotoCondensed`}>Servicios integrales</h3>
                {!!serviciosBlocks?.length && (
                    <div className={` mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 `}>
                        {serviciosBlocks.map((item, index) => (
                            <div key={index} className={` w-full bg-cover bg-center `} style={{ backgroundImage: `url('${item.fondoImagen.src}')`, }}>
                                <div className={` py-28 px-4 md:px-4 lg:px-8 xl:px-16 text-center`}>
                                    <div className={`py-6 bg-black bg-opacity-60`}>
                                        <h3 className={` transition-all ease-in-out duration-100 text-3xl lg:text-4xl font-semibold mx-4 my-8 font-RobotoCondensed`}>{item.titulo}</h3>
                                        <p className={` transition-all ease-in-out duration-100 text-lg lg:text-xl m-4 `}>{item.descripcion}</p>
                                        {/* <p className={`  text-lg mx-4 my-8 `}><Link className={` transition-all ease-in-out duration-200 rounded-full py-3 px-6 bg-white hover:bg-[#b10c72] text-black hover:text-white no-underline font-medium`} href='' >Cotiza aquí</Link></p> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
            <section>
                <div className={` max-w-5xl mx-auto grid md:grid-cols-2 grid-cols-1 `}>
                    <div className={` p-8 `}>
                        <h3 className={` text-[#b10c72] transition-all ease-in-out duration-100 text-3xl lg:text-4xl font-semibold font-RobotoCondensed mx-4 my-8 `}>¿Por qué nosotros?</h3>
                        <ul className={` list-disc transition-all ease-in-out duration-100 text-lg ml-8 mr-4 `}>
                            <li className={` my-4 `}>Nuestro servicio incluye la implementación de un CRM de última generación que optimiza la gestión de leads y seguimientos. Con esta herramienta, podrás mejorar la eficiencia de tu empresa y aumentar tus oportunidades de venta.</li>
                            <li className={` my-4 `}>Colaboramos estrechamente contigo para comprender tus metas, identificar desafíos específicos y crear estrategias de marketing digital personalizadas.</li>
                            <li className={` my-4 `}>No brindamos soluciones estándar, sino que diseñamos estrategias que se ajustan de forma precisa a tu visión y objetivos comerciales.</li>
                            <li className={` my-4 `}>Nos dedicamos a potenciar el crecimiento de tu empresa a través de servicios integrales de marketing digital y la implementación estratégica de CRM.</li>
                        </ul>
                    </div>
                    <div className={`flex items-center justify-center p-8 text-center `}>
                        <Image className={` mx-auto `} src={porQueNosotros} alt='' />
                    </div>
                </div>
                <div className={` bg-white `}>
                    <p className={` max-w-5xl mx-auto px-8 py-16 text-center text-black font-semibold text-xl lg:text-2xl leading-relaxed lg:leading-relaxed font-RobotoCondensed`}>Nos consideramos socios estratégicos de tu éxito. Nos dedicamos a impulsar tu presencia en línea, aumentar la visibilidad de tu marca y, en última instancia, a potenciar el crecimiento sostenible de tu negocio en el mundo digital.</p>
                </div>
            </section>
            <section className={` relative w-full bg-cover bg-center bg-black overflow-hidden `} >
                <div className={` absolute top-0 left-0 w-full h-full `}>
                    <video poster='images/portadaFondoVideo.png' className='object-cover object-center h-full w-full' preload="auto" autoPlay="autoplay" muted loop playsInline>
                        <source src={portadaVideo} type="video/mp4" />
                    </video>
                </div>
                <div className={` relative px-4 py-16`}>
                    <h2 className={` max-w-5xl mx-auto text-center w-full transition-all ease-in-out duration-100 text-3xl lg:text-3xl font-bold lg:my-2 opacity-80 uppercase`}>Nuestros tres pilares esenciales</h2>

                    <div className={` mx-auto max-w-5xl grid md:grid-cols-3 grid-cols-1 mt-8 `}>

                        <div className={` mx-auto text-center w-full text-lg bg-white bg-opacity-30 p-8 `}>
                            <h3 className={` text-2xl font-medium mb-4`}>Enfoque Estratégico Personalizado</h3>
                            <p className={` text-lg`}>Entendemos que cada negocio es único. Trabajamos contigo para comprender tus objetivos, identificar desafíos específicos y desarrollar estrategias de marketing digital a medida. No ofrecemos soluciones genéricas; creamos estrategias que se alinean con tu visión y metas empresariales.</p>
                        </div>
                        <div className={` mx-auto text-center w-full text-lg bg-[#b10c72] bg-opacity-30 p-8 `}>
                            <h3 className={` text-2xl font-medium mb-4`}>Innovación y Adaptabilidad Continuas</h3>
                            <p className={` text-lg`}>El marketing digital evoluciona constantemente. Nos comprometemos a mantenerte al tanto de las últimas tendencias y tecnologías. Nuestro equipo altamente capacitado se esfuerza por la innovación constante para asegurar que tu presencia en línea esté siempre a la par con las mejores prácticas y te dé una ventaja competitiva sostenible.</p>
                        </div>
                        <div className={` mx-auto text-center w-full text-lg bg-white bg-opacity-30 p-8 `}>
                            <h3 className={` text-2xl font-medium mb-4`}>Resultados Medibles y Tangibles</h3>
                            <p className={` text-lg`}>No nos conformamos con promesas vacías. Implementamos estrategias con datos y métricas concretas para asegurarnos de que cada campaña genere resultados tangibles.</p>
                        </div>

                    </div>
                </div>
            </section>
            <section className={` bg-black py-16 `}>
                <p className={` max-w-5xl mx-auto px-8 text-center text-white font-semibold text-xl lg:text-2xl leading-relaxed lg:leading-relaxed font-RobotoCondensed`}>
                    Algunos de los clientes que han confiado en nosotros
                </p>
                <p className={` max-w-5xl mx-auto px-8 mt-8 text-center `}>
                                <Image className={` mx-5 inline-block transition-opacity duration-[618ms] ease-in-out ${fade ? 'opacity-100' : 'opacity-0'} `} src={ imagen } alt='' />
                </p>
            </section>
            <section className={` bg-white `}>
                    <p className={` max-w-5xl mx-auto px-8 py-16 text-center text-black font-semibold text-xl lg:text-2xl leading-relaxed lg:leading-relaxed font-RobotoCondensed`}>¿Aún no estás seguro? Contactanos para ofrecerte una asesoria personalizada y aclarar tus dudas.</p>
            </section>
            <section className={` bg-black `}>
                <div className={` max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 `}>
                    <div className={` w-full pt-6 md:py-6 text-center text-white font-semibold text-xl lg:text-2xl leading-relaxed lg:leading-relaxed font-RobotoCondensed`}>

                        <form className={` mx-8 appearance-none text-left text-black font-normal text-lg lg:text-xl font-RobotoCondensed `}>
                            <input className={` block my-4 p-2 w-full appearance-none  `} type='text' placeholder='Nombre' />
                            <input className={` block my-4 p-2 w-full appearance-none `} type='email' placeholder='Correo' />
                            <input className={` block my-4 p-2 w-full appearance-none `} type='tel' placeholder='Teléfono' />
                            <input className={` block my-4 p-2 w-full appearance-none `} type='text' placeholder='Asunto' />
                            <textarea className={` block my-4 p-2 w-full appearance-none `} rows='8' placeholder='Mensaje' />
                            <input className={` inline-block mt-4 appearance-none transition-all ease-in-out duration-200 rounded-full py-1 px-12 uppercase hover:bg-white bg-[#b10c72] hover:text-black text-white no-underline font-medium cursor-pointer `} type='Submit' value='Enviar' />
                        </form>


                    </div>
                    <div className={` py-8 flex flex-col justify-center text-left text-white font-normal text-lg lg:text-xl leading-relaxed lg:leading-relaxed font-RobotoCondensed`}>
                        <adress className={` not-italic `}>
                            <p className={` ml-8 `}>Dirección: Av. Los Rosales 122, 28021, Madrid.</p>
                            <p className={` ml-8 `}><Link className={` no-underline `} href='mailto:info@misitio.com'>Email: info@misitio.com</Link></p>
                            <p className={` ml-8 `} ><Link className={` no-underline `} href='tel:tel:914123456'>Teléfono: 914-123-456</Link></p>
                        </adress>
                        <p className={` ml-8 mt-8`}><Link className={` inline-block w-12 mx-3`} href='/'><Image src={instagramIcono} alt='' /></Link><Link className={` inline-block w-12 mx-3`} href='/'><Image src={correoIcono} alt='' /></Link><Link className={` inline-block w-12 mx-3`} href='/'><Image src={telefonoIcono} alt='' /></Link></p>
                    </div>
                </div>
            </section>
            <section className={` bg-white py-4`}>
                <p className={` max-w-5xl mx-auto px-8 text-left text-black font-normal text-lg lg:text-xl font-RobotoCondensed`}>
                    ©Impulso360 todos los derechos reservados
                </p>
            </section>
        </main>
    );
}

