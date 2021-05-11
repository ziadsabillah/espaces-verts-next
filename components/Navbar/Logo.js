import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'


const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const LogoImg = styled.div`
    

    img {
        width: 100%;
        height: 100%;
        &:hover {
            cursor: pointer;
        }
    }
`;

const Logo = () => (
    <>
        <LogoWrapper>
            <LogoImg><Link href="/"><Image src='/img/logo.png' alt="MaTechSo Template Logo" width={100} height={25}/></Link></LogoImg>
        </LogoWrapper>
    </>
)

export default Logo;