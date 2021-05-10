import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components';

const GallerySection = styled.section`
    position: relative;
`;

const CustomCol = styled(Col)`
    max-height: 177px;
    margin: 0;
    padding: 0;
    overflow: hidden;
    img {
        max-height: 100%;
        width: 100%;
    }
`;

const GalleryContainer = styled.div`
    display: flex;
    margin-right: auto;
    margin-left: auto;
    position: relative;
`;

const CustomRow = styled(Row)`
    margin-right: 0;
    margin-left: 0;

`;

const Effect = styled.figure`

    position: relative;
    float: left;
    overflow: hidden;
    text-align: center;
    cursor: pointer;

    img {
        position: relative;
        display: block;
        opacity: 0.8;
    }

    figcaption {
        text-transform: uppercase;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        top: auto;
        bottom: 0;
        padding: 1em;
        height: 3.75em;
        background: #fff;
        color: #3c4a50;
        -webkit-transition: -webkit-transform 0.35s;
        transition: transform 0.35s;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;

        &::before, &::after {
            pointer-events: none;
        } 

        h2 {
            display: inline-block;
            float: left;
            -webkit-transition: -webkit-transform 0.35s;
            transition: transform 0.35s;
            -webkit-transform: translate3d(0,200%,0);
            transform: translate3d(0,200%,0);
        }
    p.description {
        position: absolute;
        bottom: 8em;
        padding: 2em;
        color: #fff;
        text-transform: none;
        font-size: 90%;
        opacity: 0;
        -webkit-transition: opacity 0.35s;
        transition: opacity 0.35s;
        -webkit-backface-visibility: hidden; /* Fix for Chrome 37.0.2062.120 (Mac) */
    }
    }

    &:hover {
        h2 {
            
            -webkit-transition-delay: 0.05s;
	        transition-delay: 0.05s;
        }
        figcaption p.description {
            opacity: 1;
            color: #3c4a50;
        }


        figcaption, h2 {
            -webkit-transform: translate3d(0,0,0);
	        transform: translate3d(0,0,0);
        }
    }

    
`;

const Gallery = () => {
    return (
        <>
            <GallerySection>
                <GalleryContainer>
                    <CustomRow>
                        <CustomCol sm={2} md={2}>
                            <Effect>
                                <img src='/img/gallery1.jpeg' alt="Gallery Image 1" />
                                <figcaption>
                                    <h2>JARDINIER</h2>
                                    <p className="description">Petite description du project (Lieux, ...)</p>
                                </figcaption>
                            </Effect>
                        </CustomCol>
                        <CustomCol sm={2} md={2}>
                        <Effect>
                                <img src='/img/gallery2.jpeg' alt="Gallery Image 2" />
                                <figcaption>
                                    <h2>JARDINIER</h2>
                                    <p className="description">Petite description du project (Lieux, ...)</p>
                                </figcaption>
                            </Effect>
                        </CustomCol>
                        <CustomCol sm={2} md={2}>
                        <Effect>
                                <img src='/img/gallery3.jpeg' alt="Gallery Image 1" />
                                <figcaption>
                                    <h2>JARDINIER</h2>
                                    <p className="description">Petite description du project (Lieux, ...)</p>
                                </figcaption>
                            </Effect>
                        </CustomCol>
                        <CustomCol sm={2} md={2}>
                        <Effect>
                                <img src='/img/gallery4.jpeg' alt="Gallery Image 1" />
                                <figcaption>
                                    <h2>JARDINIER</h2>
                                    <p className="description">Petite description du project (Lieux, ...)</p>
                                </figcaption>
                            </Effect>
                        </CustomCol>
                        <CustomCol sm={2} md={2}>
                        <Effect>
                                <img src='/img/gallery5.jpeg' alt="Gallery Image 1" />
                                <figcaption>
                                    <h2>JARDINIER</h2>
                                    <p className="description">Petite description du project (Lieux, ...)</p>
                                </figcaption>
                            </Effect>
                        </CustomCol>
                        <CustomCol sm={2} md={2}>
                        <Effect>
                                <img src='/img/gallery6.jpeg' alt="Gallery Image 1" />
                                <figcaption>
                                    <h2>JARDINIER</h2>
                                    <p className="description">Petite description du project (Lieux, ...)</p>
                                </figcaption>
                            </Effect>
                        </CustomCol>
                        <CustomCol sm={2} md={2}>
                        <Effect>
                                <img src='/img/gallery1.jpeg' alt="Gallery Image 1" />
                                <figcaption>
                                    <h2>JARDINIER</h2>
                                    <p className="description">Petite description du project (Lieux, ...)</p>
                                </figcaption>
                            </Effect>
                        </CustomCol>
                        <CustomCol sm={2} md={2}>
                        <Effect>
                                <img src='/img/gallery2.jpeg' alt="Gallery Image 1" />
                                <figcaption>
                                    <h2>JARDINIER</h2>
                                    <p className="description">Petite description du project (Lieux, ...)</p>
                                </figcaption>
                            </Effect>
                        </CustomCol>
                        <CustomCol sm={2} md={2}>
                        <Effect>
                                <img src='/img/gallery3.jpeg' alt="Gallery Image 1" />
                                <figcaption>
                                    <h2>JARDINIER</h2>
                                    <p className="description">Petite description du project (Lieux, ...)</p>
                                </figcaption>
                            </Effect>
                        </CustomCol>
                        <CustomCol sm={2} md={2}>
                        <Effect>
                                <img src='/img/gallery4.jpeg' alt="Gallery Image 1" />
                                <figcaption>
                                    <h2>JARDINIER</h2>
                                    <p className="description">Petite description du project (Lieux, ...)</p>
                                </figcaption>
                            </Effect>
                        </CustomCol>
                        <CustomCol sm={2} md={2}>
                        <Effect>
                                <img src='/img/gallery5.jpeg' alt="Gallery Image 1" />
                                <figcaption>
                                    <h2>JARDINIER</h2>
                                    <p className="description">Petite description du project (Lieux, ...)</p>
                                </figcaption>
                            </Effect>
                        </CustomCol>
                        <CustomCol sm={2} md={2}>
                        <Effect>
                                <img src='/img/gallery6.jpeg' alt="Gallery Image 1" />
                                <figcaption>
                                    <h2>JARDINIER</h2>
                                    <p className="description">Petite description du project (Lieux, ...)</p>
                                </figcaption>
                            </Effect>
                        </CustomCol>
                    </CustomRow>
                </GalleryContainer>
            </GallerySection>
        </>
    )
}

export default Gallery;