import styled from 'styled-components'
import AutoContainer from '../AutoContainer';

const TopHeaderSection = styled.section`
    position: relative;
    padding: 10px 0;
`;

const TopHeaderWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background-color: #ffffff;
`;

const LogoBox = styled.div`

    img {
        max-width: 183px;
        max-height: 100%;
    }
`;

const BoxHoraires = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    align-items: center;

`;

const Icon = styled.div`
    display: flex;
    align-items: center;
`;

const Text = styled.div`
    padding-left: 5px;
    padding-right: 5px;

    h3 {
        font-family: 'Montserrat', sans-serif;
        font-size: .8em;
        font-weight: 600;
        line-height: 1;
        width: 100%;
    }
`;

const TopHeader = () => {
    return (
        <>

            <TopHeaderSection>
                <AutoContainer>
                    <TopHeaderWrapper>
                        <LogoBox>
                            <img src="/img/logo.png" alt="Template Logo" />
                        </LogoBox>
                        <BoxHoraires>
                            <Icon></Icon>
                            <Text>
                                <h3>LUN-VEN: 11H:00 à 16H:00</h3>
                            </Text>
                        </BoxHoraires>
                    </TopHeaderWrapper>
                </AutoContainer>
            </TopHeaderSection>


        </>
    )
}

export default TopHeader;