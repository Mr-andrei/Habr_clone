import { Suspense } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import {
    LoginFormAsync,
} from 'features/AuthByUserName/ui/LoginForm/LoginForm.async';
import { Loader } from 'shared/ui/Loader/Loader';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
    const {
        isOpen,
        onClose,
    } = props;

    return (
        <Modal isOpen={isOpen} onClose={onClose} lazy>
            <Suspense fallback={<Loader />}>
                <LoginFormAsync />
            </Suspense>
        </Modal>
    );
};
