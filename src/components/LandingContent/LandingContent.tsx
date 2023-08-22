import Image from 'next/image';
import classes from './LandingContent.module.scss';

const { landingContainer, galleryContainer } = classes;

const LandingContent = ({ }) => {

    const gallery = [
        {
            imagePath: '/assets/gallery/gallery-image-1.png',
            altTag: 'Girl meditating',
            width: 600,
            height: 400,
            key: 0
        },
        {
            imagePath: '/assets/gallery/gallery-image-2.png',
            altTag: 'A charcuterie board',
            width: 600,
            height: 400,
            key: 1
        },
        {
            imagePath: '/assets/gallery/gallery-image-3.png',
            altTag: 'Close up of a salad',
            width: 600,
            height: 400,
            key: 2
        },
    ]

    return (
        <div className={landingContainer}>
            <h1>Get cooking, get moving, get groov&apos;n</h1>
            <section className={galleryContainer}>
                {gallery.map((img) => {
                    return (
                        <Image
                            src={img.imagePath}
                            alt={img.altTag}
                            key={img.key}
                            width={img.width}
                            height={img.height}
                        />
                    );
                })};
            </section>
        </div>
    );
};

export default LandingContent;