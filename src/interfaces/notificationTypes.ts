import React from 'react';
import NoticeIcon from '@/icons/NoticeIcon';

export interface NotificationData {
    type: string;
    header: string;
    icon: React.ComponentType;
};

export const notificationTypes: NotificationData[] = [
    {
        type: 'notice',
        header: 'Feature not yet implemented',
        icon: NoticeIcon,
    }
];

export interface NotificationProps {
    type: string;
    content: string;
};

export interface NotificationTypes {
    type: keyof typeof notificationTypes;
    content: string;
};