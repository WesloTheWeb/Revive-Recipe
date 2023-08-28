import { JSX } from 'react';

export interface NotificationData {
    type: string;
    header: string;
    icon: JSX.Element;
    bgColor: string;
    textColor: string;
};

export const notificationTypes: NotificationData[] = [
    {
        type: 'notice',
        header: 'Feature Disabled',
        icon: (/*... your SVG here...*/),
        bgColor: 'orange',
        textColor: 'dark'
    }
];

export interface NotificationProps {
    // type: 'notice'; // Add other types as string literals separated by |
    type: string;
    content: string;
}

export interface NotificationTypes {
    type: keyof typeof notificationTypes;
    content: string;
}
