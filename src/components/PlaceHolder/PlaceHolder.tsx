const logo = '/assets/svg/Revive-Recipe-small.svg';

const PlaceHolder = ({ }) => {
    return (
        <section className="preview">
            <h1>Coming Soon!</h1>
            <img className="rotate" src={logo} width={250} height={250} alt="Logo" />
            <p>If you made it this far to fork this repository, check back later!</p>            
        </section>
    );
};

export default PlaceHolder;