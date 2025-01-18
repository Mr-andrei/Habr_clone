import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text';
import { Input } from '@/shared/ui/Input/Input';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { Country, CountrySelect } from '@/entities/Country';
import { Profile } from '../../model/types/Profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeFirstName?: (value: string) => void;
    onChangeLastName?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (value: Currency) => void;
    onChangeCountry?: (value: Country) => void;
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
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
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
    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && <Avatar src={data?.avatar} alt="Avatar" />}
                <Input
                    value={data?.first}
                    placeholder={t('Yor name')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeFirstName}
                    data-testid="ProfileCard.Name"
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Yor last name')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeLastName}
                    data-testid="ProfileCard.lastname"
                />
                <Input
                    value={data?.age}
                    placeholder={t('Age')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeAge}
                    data-testid="ProfileCard.age"
                />
                <Input
                    value={data?.city}
                    placeholder={t('City')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeCity}
                    data-testid="ProfileCard.city"
                />
                <Input
                    value={data?.username}
                    placeholder={t('username')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeUsername}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Avatar')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeAvatar}
                />
                <CurrencySelect value={data?.currency} readonly={readonly} onChange={onChangeCurrency} />
                <CountrySelect value={data?.country} readonly={readonly} onChange={onChangeCountry} />
            </div>
        </div>
    );
};
