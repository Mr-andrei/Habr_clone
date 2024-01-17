import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { HStack } from 'shared/ui/Stack';
import { SidebarItemType } from '../../model/types/sidebar';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps extends SidebarItemType {
    collapsed: boolean;
}

export const SidebarItem = ({
    Icon, text, path, collapsed,
}: SidebarItemProps) => {
    const { t } = useTranslation();

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={path}
            className={classNames('', { [cls.collapsed]: collapsed }, [])}
        >
            <HStack gap="8">
                <Icon className={cls.icon} />
                <span className={cls.link}>{t(text)}</span>
            </HStack>
        </AppLink>

    );
};
