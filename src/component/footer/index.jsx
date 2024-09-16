export const Footer = () => {
    return (
        <>
            <footer className="bg-dark shadow">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <a className="flex flex-col justify-center items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <span className="mb-5 self-center text-2xl md:text-3xl lg:text-5xl text-white text-center font-semibold whitespace-nowrap">Sedot WC 24 Jam</span>
                        <p className="text-white text-xs md:text-base">Jakarta Selatan - Depok</p>
                    </a>
                    <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                    <div className="flex flex-col-reverse items-center justify-center md:flex-row md:justify-between">
                        <span className="block text-sm text-gray-500 sm:text-center">Copyright © 2024 | All Right Reserved</span>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                            <li>
                                <a href="#home" className="hover:underline me-4 md:me-6">Beranda</a>
                            </li>
                            <li>
                                <a href="#about" className="hover:underline me-4 md:me-6">Tentang</a>
                            </li>
                            <li>
                                <a href="#service" className="hover:underline">Layanan</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}