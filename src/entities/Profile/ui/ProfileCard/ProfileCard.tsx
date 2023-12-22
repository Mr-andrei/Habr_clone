import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from 'entities/Profile';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeFirstName: (value: string) => void;
    onChangeLastName: (value: string) => void;
    onChangeCity: (value: string) => void;
    onChangeAge: (value: string) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const {
        className,
        data,
        error,
        isLoading,
        readonly,
        onChangeFirstName,
        onChangeLastName,
        onChangeCity,
        onChangeAge,
    } = props;

    if (isLoading) {
        return (
            <div
                className={classNames('', { [cls.loading]: true }, [className])}
            >
                <Loader />
            </div>
        );
    }
    if (error) {
        return (
            <div className={classNames('', {}, [className])}>
                <Text
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t('Yor name')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeFirstName}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Yor last name')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeLastName}
                />
                <Input
                    value={data?.age}
                    placeholder={t('Age')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeAge}
                />
                <Input
                    value={data?.city}
                    placeholder={t('City')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeCity}
                />
            </div>
        </div>
    );
};
