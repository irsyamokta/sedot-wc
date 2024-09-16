import { Card } from './component/card'
export const Service = () => {
    return (
        <>
            <div id='service' className='lg:h-[100vh] flex flex-col items-center justify-center gap-2 mt-10 lg:mt-0 px-4 py-4 lg:px-32 lg:py-12'>
                <h5 className='font-quicksand mb-2 text-sm md:text-xl whitespace-nowrap font-regular tracking-tight text-white bg-primary p-1'>Apa saja Pelayanan Kami?</h5> 
                <h1 className='font-quicksand text-2xl md:text-5xl font-bold tracking-tight leading-tight text-black lg:max-w-2xl text-center'>Kami menawarkan berbagai layanan untuk Anda</h1>
                <Card />
            </div>
        </>
    )
}