import classes from './Overlay.module.scss';

const { overlay } = classes;

interface overlayProps {
    closeOverlay: (isVisible: boolean) => void;
}

const Overlay = ({closeOverlay}: overlayProps) => {

    const handleClose = () => {
        closeOverlay(false);
    };

    return (
        <div className={overlay} onClick={handleClose} />
    );
};

export default Overlay;