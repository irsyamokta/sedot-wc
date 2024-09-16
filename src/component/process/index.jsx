import {Image} from './component/image'
import { Timeline } from './component/timeline'
export const Process = () => {
    return (
        <>
            <div className='xl:h-[100vh] flex flex-wrap items-center justify-center gap-12 px-4 py-4 mt-10 lg:mt-0 lg:px-32 lg:py-12'>
                <Image/>
                <Timeline/>
            </div>
        </>
    )
}