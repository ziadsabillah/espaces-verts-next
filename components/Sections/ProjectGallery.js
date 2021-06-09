import { useState, useCallback } from 'react';

import Gallery from 'react-photo-gallery';

import Carousel, { Modal, ModalGateway} from 'react-images';

import { projects } from '../../data/projects';







const ProjectGallery = () => {

    const [currentImage, setCurrentImage] = useState(0);

    const [viewerIsOpen, setViewerIsOpen] = useState(false);


    const openLightbox = useCallback((event, {photo, index}) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    })

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    }


    return (
        <>
            <Gallery photos={projects} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel currentIndex={currentImage}
                            views={projects.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                        />

                    </Modal>
                ) : null}
            </ModalGateway>
        </>
    )
}

export default ProjectGallery;