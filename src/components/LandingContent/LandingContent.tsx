import Image from 'next/image';
import classes from './LandingContent.module.scss';
import LandingMobileGallery from '../LandingMobileGallery/LandingMobileGallery';
import Button, { ButtonTypes } from '@/containers/Button/Button';

const { landingContainer, galleryContainer, mobileGalleryContainer, landingFlex, blurb, loginContainer } = classes;

interface Photo {
    imagePath: string;
    altTag: string;
    width: number;
    height: number;
    key: number;
};

const LandingContent = ({ }) => {

    const gallery: Photo[] = [
        {
            imagePath: '/assets/gallery/gallery-image-1.png',
            altTag: 'Girl meditating',
            width: 500,
            height: 316,
            key: 0
        },
        {
            imagePath: '/assets/gallery/gallery-image-2.png',
            altTag: 'A charcuterie board',
            width: 654,
            height: 325,
            key: 1
        },
        {
            imagePath: '/assets/gallery/gallery-image-3.png',
            altTag: 'Close up of a salad',
            width: 665,
            height: 327,
            key: 2
        },
    ];

    return (
        <div className={landingContainer}>
            <h1>Get <span>cooking</span>.
                get <span>moving</span>.<br />
                get <span>groov&apos;n.</span></h1>
            <div className={landingFlex}>
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
                <section className={mobileGalleryContainer}>
                    <LandingMobileGallery galleryPhotos={gallery} />
                </section>
                <section className={blurb}>
                    <h2>Discover a world of healthy living</h2>
                    <p>
                        Join or log in now to start your journey to a nourished body and a vibrant community. Let's cook, stay fit, and make lasting connections together!
                    </p>
                    <div className={loginContainer}>
                        <Button buttonType={ButtonTypes.SIGNUP} />
                        <Button buttonType={ButtonTypes.LOGIN} />
                        <Button buttonType={ButtonTypes.GUEST} />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default LandingContent;