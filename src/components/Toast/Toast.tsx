import { NotificationProps, notificationTypes } from '@/interfaces/notificationTypes';
import classes from './Toast.module.scss';

export enum NotificationType {
    NOTICE = 'notice',
    // ... add other types as needed ...
}

// ? Works similar to Button component but trying something different and not destructuring all the classes.
const { toastContainer, toastHeaderContainer } = classes;

const notificationPaths = {
    'notice': classes.noticeToast,
    // ? Other types go here in future
};

const determineNotificationStyleFromProps = (type: string) => {
    return notificationPaths.notice || classes.defaultToast;  // Using a default class if type is not found
};

const Toast = ({ type, content }: NotificationProps) => {
    const notification = notificationTypes.find(nt => nt.type === type);

    if (!notification) {
        return null;
    };

    // dynamically grab icon for matching type from find method.
    const IconComponent = notification.icon;

    return (
        <div className={`${toastContainer} ${determineNotificationStyleFromProps(type)}`}>
            <div className={toastHeaderContainer}>
                <IconComponent /> {/* Render the icon component here from ./icons */}
                <h3>{notification.header}</h3>
            </div>
            <p>{content}</p>
        </div>
    );
};

export default Toast;