import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { NotificationList } from 'entities/Notification';
import { Popover } from 'shared/ui/Popups';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => {
        setIsOpen(false);
    };
    const onOpen = () => {
        setIsOpen(true);
    };

    const trigger = (
        <Button onClick={onOpen} theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotificationIcon} isInverted />
        </Button>
    );

    return (
        <div>
            <BrowserView>
                <Popover
                    className={classNames(cls.NotificationButton, {}, [className])}
                    direction="bottom left"
                    trigger={trigger}
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onClose}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </div>
    );
});
