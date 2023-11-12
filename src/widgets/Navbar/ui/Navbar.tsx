import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import React, { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModel, setIsAuthModel] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModel((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>

            <Modal isOpen={isAuthModel} onClose={onToggleModal}>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Expedita facilis iure laboriosam magnam nisi nobis
                    porro, saepe temporibus velit. Dicta eveniet illo iusto
                    minima nemo nihil quidem. Blanditiis commodi, ratione?
                </span>
            </Modal>
        </div>
    );
};
