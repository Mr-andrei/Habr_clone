import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';

import { Page } from 'widgets/Page/Page';
import { EditableProfileCard } from 'features/EditableProfileCard';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ProfilePageHeader } from './ProfielPageHeader/ProfilePageHeader';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{id:string}>();
    const { t } = useTranslation('profile');

    if (!id) {
        return (
            <Text text={t('Profile was not found')} />
        );
    }

    return (
        <Page className={classNames('', {}, [className])}>
            <ProfilePageHeader />
            <EditableProfileCard id={id} />
        </Page>

    );
};

export default ProfilePage;
