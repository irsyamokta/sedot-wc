export const Card = () => {
    return (
        <>
            <div className="mt-10 flex flex-wrap justify-center gap-5 lg:gap-12">
                <div className="relative flex flex-col justify-center items-center w-full lg:max-w-sm bg-white border border-gray-200 rounded-3xl shadow px-2 overflow-hidden">
                    <div className="absolute -top-32 -right-32 md:-top-28 md:-right-28">
                        <img className="w-52" src="./src/assets/images/circle.png" alt="circle" />
                    </div>
                    <a>
                        <img className="rounded-t-lg w-60 lg:w-72" src="../src/assets/images/img-profesional.png" alt="" />
                    </a>
                    <div className="p-5 text-center">
                        <a href="#">
                            <h5 className="font-quicksand mb-2 text-xl font-bold tracking-tight text-primary">Tenaga Profesional</h5>
                        </a>
                        <p className="font-quicksand mb-3 text-base font-semibold text-gray-700 max-w-md">Kami memiliki tim profesional berpengalaman yang telah menangani berbagai masalah pembuangan</p>
                    </div>
                </div>
                <div className="relative flex flex-col justify-center items-center w-full lg:max-w-sm bg-white border border-gray-200 rounded-3xl shadow px-2 overflow-hidden">
                    <div className="absolute -top-32 -right-32 md:-top-28 md:-right-28">
                        <img className="w-52" src="./src/assets/images/circle.png" alt="circle" />
                    </div>
                    <a>
                        <img className="rounded-t-lg w-60 lg:w-72" src="../src/assets/images/img-service.png" alt="" />
                    </a>
                    <div className="p-5 text-center">
                        <a href="#">
                            <h5 className="font-quicksand mb-2 text-xl font-bold tracking-tight text-primary">Layanan Cepat</h5>
                        </a>
                        <p className="font-quicksand mb-3 text-base font-semibold text-gray-700 max-w-md"> Kami memastikan setiap pertanyaan dan kebutuhan Anda ditangani dengan cepat dan ramah selama 24 jam</p>
                    </div>
                </div>
                <div className="relative flex flex-col justify-center items-center w-full lg:max-w-sm bg-white border border-gray-200 rounded-3xl shadow px-2 overflow-hidden">
                    <div className="absolute -top-32 -right-32 md:-top-28 md:-right-28">
                        <img className="w-52" src="./src/assets/images/circle.png" alt="circle" />
                    </div>
                    <a>
                        <img className="rounded-t-lg w-60 lg:w-72" src="../src/assets/images/img-price.png" alt="" />
                    </a>
                    <div className="p-5 text-center">
                        <a href="#">
                            <h5 className="font-quicksand mb-2 text-xl font-bold tracking-tight text-primary">Harga Terjangkau</h5>
                        </a>
                        <p className="font-quicksand mb-3 text-base font-semibold text-gray-700 max-w-md">Kami menyediakan layanan berkualitas tinggi dengan harga yang terjangkau dan transparan</p>
                    </div>
                </div>
            </div>
        </>
    )
}