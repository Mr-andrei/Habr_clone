import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    getProfileData,
} from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import {
    getProfileError,
} from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import {
    getProfileIsLoading,
} from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    const profileData = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Profile')} />
                <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn}>{t('Change')}</Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={profileData?.first}
                    placeholder={t('Yor name')}
                    className={cls.input}
                />
                <Input
                    value={profileData?.lastname}
                    placeholder={t('Yor last name')}
                    className={cls.input}
                />
            </div>
        </div>
    );
};
