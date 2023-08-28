import React from 'react';
import NoticeIcon from '@/icons/NoticeIcon';

export interface NotificationData {
    type: string;
    header: string;
    icon: React.ComponentType;
    bgColor: string;
    textColor: string;
};

export const notificationTypes: NotificationData[] = [
    {
        type: 'notice',
        header: 'Feature Disabled',
        icon: NoticeIcon,
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
