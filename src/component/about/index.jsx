import { Card } from './component/card'
import { Content } from './component/content'
export const About = () => {
    return (
        <>
            <div id='about' className='h-[80vh] md:h-[100vh] flex items-center justify-center gap-8 px-4 py-12 lg:px-32 lg:py-12'>
                <Card />
                <Content />
            </div>
        </>
    )
}