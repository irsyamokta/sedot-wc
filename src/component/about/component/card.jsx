export const Card = () => {
    return (
        <>
            <div className="relative hidden md:flex justify-center items-center bg-white border border-gray-200 rounded-3xl shadow overflow-hidden h-full px-10">
                <div className="absolute -top-16 -right-16">
                    <img className="w-52" src="./src/assets/images/elips.png" alt="elips" />
                </div>
                <h5 className="mb-2 text-6xl whitespace-nowrap font-bold tracking-tight text-primary -rotate-90">Tentang Kami</h5>
                <div className="absolute -bottom-24 -left-24">
                    <img className="w-52" src="./src/assets/images/circle.png" alt="circle" />
                </div>
            </div>
        </>
    )
}