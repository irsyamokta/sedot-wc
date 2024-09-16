import { Card } from './component/card'
export const Superiority = () => {
    return (
        <>
            <div className='xl:h-[100vh] flex flex-col items-center justify-center gap-2 mt-10 lg:mt-0 px-4 py-4 lg:px-32 lg:py-12'>
                <h5 className='font-quicksand mb-2 text-sm md:text-xl whitespace-nowrap font-regular tracking-tight text-white bg-primary p-1'>Mengapa Harus Kami?</h5>
                <h1 className="font-quicksand text-2xl md:text-5xl font-bold tracking-tight leading-tight text-black  md:max-w-2xl text-center">Kepuasan pelanggan adalah prioritas Utama Kami</h1>
                <Card />
            </div>
        </>
    )
}