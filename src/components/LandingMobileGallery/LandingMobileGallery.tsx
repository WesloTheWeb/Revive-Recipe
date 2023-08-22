import Image from 'next/image';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import classes from './LandingMobileGallery.module.scss';

const { carouselImage } = classes;

interface Photo {
    imagePath: string;
    altTag: string;
    width: number;
    height: number;
    key: number;
}

interface photoProps {
    galleryPhotos: Photo[]
}

const LandingMobileGallery = ({ galleryPhotos }: photoProps) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Carousel responsive={responsive}>
            {galleryPhotos.map((photo) => {
                return (
                    <div className={carouselImage} key={photo.key}>
                        <Image
                            src={photo.imagePath}
                            alt={photo.altTag}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                )
            })}
        </Carousel>
    );
};

export default LandingMobileGallery;