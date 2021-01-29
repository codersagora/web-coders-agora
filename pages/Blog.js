import { Wrapper } from "../layout/Wrapper"
import { Header } from 'components/Header'

export default function Blog() {
    return (
        <Wrapper>
            <div className='h-screen bg-green-200'>
                <Header height={80} width={80} href="/Blog"/>
            </div>
        </Wrapper>
    )
}