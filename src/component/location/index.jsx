import { Map } from "./component/map"
export const Location = () => {
    return (
        <>
            <div className='lg:h-[100vh] flex flex-col items-center justify-center gap-2 px-4 py-4 mt-10 lg:mt-0 lg:px-32 lg:py-12'>
                <h5 className='font-quicksand mb-2 text-base md:text-xl whitespace-nowrap font-regular tracking-tight text-white bg-primary p-1'>Dimana Lokasi yang Dijangkau?</h5>
                <h1 className='font-quicksand mb-2 text-2xl md:text-5xl font-bold tracking-tight leading-tight text-black max-w-2xl text-center'>Area pelayanan kami</h1>
                <p className="max-w-xl mb-6 text-center leading-relaxed">Area pelayanan kami mencakup daerah Jakarta Selatan - Depok dan kami membuka pelayanan selama 24 jam</p>
                <Map />
            </div>
        </>
    )
}