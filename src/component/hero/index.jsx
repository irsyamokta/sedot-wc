import { Navbar } from '../navbar'
export const Hero = () => {
    return (
        <>
            <Navbar />
            <section id="home" className="flex flex-col justify-center items-center h-[100vh] bg-center bg-no-repeat bg-[url('./src/assets/images/img-hero.jpeg')] bg-gray-500 bg-blend-multiply">
                <div className="px-6 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 className="mb-8 text-3xl font-semibold tracking-wide text-white md:text-5xl lg:text-6xl">Layanan <span className='highlight'>Tepat</span> dengan</h1>
                    <h1 className="mb-8 text-3xl font-semibold tracking-wide text-white md:text-5xl lg:text-6xl">Pembersihan yang <span className='highlight'>Cepat</span></h1>
                    <p className="mb-8 text-sm font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Solusi terbaik untuk masalah WC Penuh dan Saluran Tersumbat</p>
                    <div className="absolute bottom-16 left-0 right-0 flex justify-center">
                        <a href="#about" className='flex flex-col items-center'>
                            <p className="relative inline-flex justify-center items-center text-xs md:text-base font-regular text-center text-white">
                                Selengkapnya
                            </p>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 9.07108L12.5711 16.1421L19.6421 9.07108" stroke="#CED4DA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}