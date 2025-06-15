import React from 'react';
import { Link } from 'react-router-dom';
import { MdMuseum } from "react-icons/md";
import { FaBookOpen, FaChalkboardTeacher } from "react-icons/fa";
import { FaFacebook, FaSquareInstagram, FaXTwitter } from "react-icons/fa6";

export const Home = () => {
    return (
        <>
            {/* HEADER */}
            <header className="container mx-auto py-6 md:flex justify-between items-center px-6">
                <div className="flex items-center gap-4">
                    <img src="/epn.png" alt="Logo EPN" className="h-16 w-auto" />
                    <img src="/museo.png" alt="Logo Museo" className="h-16 w-auto" />
                    <h1 className='font-bold text-3xl text-teal-800'>
                        MUSEO <span className='text-green-700'>GUSTAVO ORCÉS</span>
                    </h1>
                </div>

                <nav className='mt-4 md:mt-0'>
                    <ul className='flex gap-6 text-lg font-semibold'>
                        <li><a href="#" className='hover:text-teal-700 hover:underline'>Inicio</a></li>
                        <li><Link to="/login" className='hover:text-teal-700 hover:underline'>Iniciar Sesión</Link></li>
                    </ul>
                </nav>
            </header>

            {/* HERO */}
            <main className='bg-green-50 text-center py-10 px-6 md:text-left md:flex justify-between items-center gap-10'>
                <div className='md:w-3/5'>
                    <h1 className='text-4xl md:text-6xl font-extrabold text-teal-800 uppercase'>Patrimonio Científico</h1>
                    <p className='text-xl md:text-2xl my-6 font-bold underline'>Inspirando a través del conocimiento</p>
                    <p className='text-lg my-4'>Exposiciones permanentes, visitas guiadas, talleres educativos y más...</p>
                </div>
                {/* Aquí podrías agregar una imagen decorativa */}
            </main>

            {/* SOBRE NOSOTROS */}
            <section className='container mx-auto px-6 py-14'>
                <div className="relative text-center mb-12">
                    <div className="absolute left-0 right-0 top-1/2 border-t-4 border-teal-700 z-0"></div>
                    <h2 className="relative z-10 inline-block px-4 bg-green-50 text-3xl font-semibold text-teal-800">SOBRE NOSOTROS</h2>
                </div>

                <div className='md:flex md:items-center md:justify-center gap-10'>
                    <div className='md:w-3/4 text-center md:text-left text-gray-700'>
                        <p className='text-lg mb-6'>
                            El Museo Gustavo Orcés es un espacio dedicado a la ciencia y la historia natural del Ecuador. Nuestro objetivo es educar,
                            inspirar y conectar a los visitantes con la riqueza biológica y paleontológica del país.
                        </p>
                        <ul className='space-y-4 text-left'>
                            <li><MdMuseum className='inline text-2xl mr-2 text-teal-700' /> Exhibiciones Permanentes</li>
                            <li><FaBookOpen className='inline text-2xl mr-2 text-teal-700' /> Biblioteca Científica</li>
                            <li><FaChalkboardTeacher className='inline text-2xl mr-2 text-teal-700' /> Programas Educativos</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* SERVICIOS */}
            <section className='container mx-auto px-6 py-14'>
                <div className="relative text-center mb-12">
                    <div className="absolute left-0 right-0 top-1/2 border-t-4 border-teal-700 z-0"></div>
                    <h2 className="relative z-10 inline-block px-4 bg-green-50 text-3xl font-semibold text-teal-800">SERVICIOS</h2>
                </div>

                <div className='grid gap-8 sm:grid-cols-2'>
                    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
                        <FaBookOpen className='text-4xl text-teal-800 mx-auto mb-4' />
                        <h4 className="text-xl font-bold text-center text-teal-700">Área de Visitantes</h4>
                        <p className="text-center mt-2 text-gray-700">Conoce nuestras exposiciones, horarios y guías disponibles.</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow text-center">
                        <MdMuseum className='text-4xl text-teal-800 mx-auto mb-4' />
                        <h4 className="text-xl font-bold text-teal-700">Login Pasantes</h4>
                        <p className="mt-2 text-gray-700">Accede a tu perfil, gestiona tus actividades y consulta tus horarios.</p>
                        <Link to="/login" className='inline-block mt-4 bg-teal-800 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition'>Iniciar Sesión</Link>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className='bg-green-50 p-10 mt-20 rounded-tr-3xl rounded-tl-3xl text-center space-y-6'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
                    <div className='text-2xl font-extrabold text-teal-800'>Contáctanos</div>
                    <ul className='flex gap-4 text-teal-700'>
                        <li><FaFacebook className='text-2xl' /></li>
                        <li><FaSquareInstagram className='text-2xl' /></li>
                        <li><FaXTwitter className='text-2xl' /></li>
                    </ul>
                </div>

                <div>
                    <p className='font-bold'>Email: info@museogustavorces.ec</p>
                    <p className='font-bold'>Teléfono: 02 123 4567</p>
                </div>

                <hr className='border-t border-teal-700' />
                <p className='text-sm font-semibold text-gray-600'>© 2025 Museo Gustavo Orcés</p>
            </footer>
        </>
    );
}
