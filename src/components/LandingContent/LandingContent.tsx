import Image from 'next/image';
import classes from './LandingContent.module.scss';

const { landingContainer, galleryContainer } = classes;

console.log(classes)

const LandingContent = ({ }) => {

    const gallery = [
        {
            imagePath: '/assets/gallery/gallery-image-1.png',
            altTag: 'Girl meditating',
            width: 400,
            height: 216,
            key: 0
        },
        {
            imagePath: '/assets/gallery/gallery-image-2.png',
            altTag: 'A charcuterie board',
            width: 454,
            height: 325,
            key: 1
        },
        {
            imagePath: '/assets/gallery/gallery-image-3.png',
            altTag: 'Close up of a salad',
            width: 565,
            height: 272,
            key: 2
        },
    ]

    // ! original starting properties
    // const gallery = [
    //     {
    //         imagePath: '/assets/gallery/gallery-image-1.png',
    //         altTag: 'Girl meditating',
    //         width: 565,
    //         height: 316,
    //         key: 0
    //     },
    //     {
    //         imagePath: '/assets/gallery/gallery-image-2.png',
    //         altTag: 'A charcuterie board',
    //         width: 614,
    //         height: 425,
    //         key: 1
    //     },
    //     {
    //         imagePath: '/assets/gallery/gallery-image-3.png',
    //         altTag: 'Close up of a salad',
    //         width: 765,
    //         height: 372,
    //         key: 2
    //     },
    // ]

    return (
        <div className={landingContainer}>
            <h1>Get cooking, get moving,<br/> get groov&apos;n</h1>
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
                })}
            </section>
        </div>
    );
};

export default LandingContent;