export const Content = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center bg-about bg-gray-500 bg-blend-multiply border border-gray-200 rounded-3xl shadow overflow-hidden h-full lg:h-full">
                <div className="relative flex flex-col md:px-10">
                    <div className="absolute -top-24 -right-24">
                        <img className="rotate-90 w-52" src="../src/assets/images/circle-white.png" alt="circle" />
                    </div>
                    <div className="mt-40 md:mt-[700px] lg:mt-56 xl:mt-[420px] lg:pe-20">
                        <h1 className="inline-block font-quicksand mb-2 text-sm md:text-xl whitespace-nowrap font-regular tracking-tight text-white bg-primary p-1">Tentang Kami</h1>
                        <h5 className="font-quicksand mb-5 text-2xl md:text-5xl whitespace-nowrap font-bold tracking-tight text-white">Kenali kami lebih dekat</h5>
                        <p className="font-quicksand mb-2 text-base font-regular tracking-tight text-white">Sebagai perusahaan jasa sedot WC berpengalaman, kami telah melayani pelanggan di berbagai wilayah. Kami didukung oleh tim profesional yang memiliki keahlian dalam menangani segala jenis masalah pembuangan, mulai dari WC penuh hingga perawatan septic tank. Kami berkomitmen memberikan layanan berkualitas dengan harga kompetitif serta hasil yang memuaskan.</p>
                    </div>
                </div>
            </div>
        </>
    )

}
