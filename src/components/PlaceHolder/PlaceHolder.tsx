const logo = '/assets/svg/Revive-Recipe-small.svg';

const PlaceHolder = ({ }) => {

    const currentDate = new Date();

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = days[currentDate.getDay()];

    // Get the time in 12-hour format (AM/PM)
    const time = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

    return (
        <section className="preview">
            <h1>Coming Soon!</h1>
            <img className="rotate" src={logo} width={250} height={250} alt="Logo" />
            <p>If you made it this far to fork this repository, check back later!</p>
            <p className="test">Date and your local time is {dayOfWeek}, {time}</p>
        </section>
    );
};

export default PlaceHolder;