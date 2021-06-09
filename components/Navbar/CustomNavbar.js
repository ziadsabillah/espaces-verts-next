import styled from 'styled-components';
import Logo from './Logo'
import NavLinks from './NavLinks';
import { DeviceSize } from './responsive'
import MobileNavLinks from './MobileNavLinks'

import { useMediaQuery } from 'react-responsive'
import TopHeader from '../TopHeader';

const NavbarContainer = styled.div`
    width: 100%;
    height: 60px;
    box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
    display: flex;
    align-items: center;
    padding: 0 1.5em;
    background: #4e9918;
    justify-content: space-between;
    ${props => props.isMobile || props.isTablet ? 'justify-content: space-between': '' }
`;

const LeftSection = styled.div`
    display: flex;
`;

const RightSection = styled.div`
    display: flex;
`;


const CustomNavbar = () => {

    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
    const isTablet = useMediaQuery({ maxWidth: DeviceSize.tablet});

    return (
        <>

            {!isMobile && <TopHeader />}
            {/* Passing the isMobile to set the content to the right side if we're on mobile 
                TODO: Do smth about the LOGO on mobile ? Need white version 
            */}
            <NavbarContainer isMobile={isMobile} isTablet={isTablet}>
                    {isMobile && (
                        <LeftSection>
                            <Logo></Logo>
                        </LeftSection>
                    )}
                <LeftSection>
                    {!isMobile && <NavLinks />}
                </LeftSection>
                <RightSection>
                    {isMobile && <MobileNavLinks />}
                </RightSection>
            </NavbarContainer>
        </>
    )
}

export default CustomNavbar