export const Contact = () => {
    return (
        <>
            <div className="flex justify-center w-full mt-10 lg:mt-0 mb-20 px-4 lg:px-32">
                <div className="relative flex flex-wrap md:flex-nowrap justify-start items-center md:gap-5 p-2 bg-white border border-gray-200 rounded-3xl shadow overflow-hidden w-full">
                    <div className="absolute -top-20 -left-24 rotate-90">
                        <img className="w-52" src="./src/assets/images/elips.png" alt="elips" />
                    </div>
                    <div className="absolute -top-36 -right-32">
                        <img className="w-52" src="./src/assets/images/circle.png" alt="circle" />
                    </div>
                    <div className="absolute -bottom-32 -right-32">
                        <img className="w-56 lg:w-60 xl:w-72" src="./src/assets/images/circle.png" alt="circle" />
                    </div>
                    <img className="h-auto w-72 lg:w-96 md:max-w-md" src="./src/assets/images/img-contact.png" alt="" />
                    <div className="ms-10">
                        <h5 className='inline-block font-quicksand mb-2 md:text-xl whitespace-nowrap font-regular tracking-tight text-white bg-primary p-1'>Kontak Kami</h5>
                        <h1 className='max-w-xl font-quicksand mb-2 text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight leading-tight text-black'>Memiliki Masalah dengan WC Anda?</h1>
                        <p className="max-w-xl mb-6 leading-relaxed text-sm lg:text-base">Area pelayanan kami mencakup daerah Jakarta Selatan - Depok dan kami membuka pelayanan selama 24 jam</p>
                        <a href="https://wa.link/bbq281" target="_blank">
                            <button className="inline-block font-quicksand mb-2 text-sm whitespace-nowrap font-semibold tracking-tight text-white bg-primary p-3 rounded-lg cursor-pointer">Hubungi Kami</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}