import { NotificationProps, NotificationTypes, notificationTypes } from '@/interfaces/notificationTypes';
import classes from './Toast.module.scss';

const { toastContainer, toastHeaderContainer } = classes;

const Toast = ({ type, content }: NotificationProps) => {
    const notification = notificationTypes.find(nt => nt.type === type);

    if (!notification) {
        return null; // Or some error message.
    }

    // dynamically grab icon for matching type from find method.
    const IconComponent = notification.icon;

    return (
        <div className={`${toastContainer} ${String(type)}Toast`} style={{ backgroundColor: notification.bgColor }}>
            <div className={toastHeaderContainer} style={{ color: notification.textColor }}>
                <IconComponent /> {/* Render the icon component here */}
                <h3>{notification.header}</h3>
            </div>
            <p>{content}</p>
        </div>
    );
};

export default Toast;
