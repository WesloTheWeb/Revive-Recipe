import classes from './LandingContent.module.scss';

const { landingContainer } = classes;

const LandingContent = ({ }) => {

    const gallery = [
        {
            imagePath: 'https://placehold.co/600x400',
            altTag: 'Girl medidating',
            key: 0
        },
        {
            imagePath: 'https://placehold.co/600x400',
            altTag: 'A charcuterie board',
            key: 1
        },
        {
            imagePath: 'https://placehold.co/600x400',
            altTag: 'Close up of a salad',
            key: 2
        },
    ]

    return (
        <div className={landingContainer}>
            <h1>Get cooking, get moving, get groov&apos;n</h1>
            <section>
                {gallery.map((img) => {
                    return (
                        <img src={img.imagePath} alt={img.altTag} key={img.key} />
                    );
                })};
            </section>
        </div>
    );
};

export default LandingContent;