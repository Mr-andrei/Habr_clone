import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import {
    loginByUserName,
} from '../../model/servious/loginByUserName/LoginByUserName';
import {
    getLoginState,
} from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/LoginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const {
        password,
        userName,
        isLoading,
        error,
    } = useSelector(getLoginState);

    const onChangeUserName = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value));
    }, [dispatch]);
    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUserName({
            password,
            username: userName,
        }));
    }, [dispatch, password, userName]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            {error && <Text text={error} theme={TextTheme.ERROR} />}
            <Input
                placeholder={t('Login')}
                autofocus
                onChange={onChangeUserName}
                value={userName}
            />
            <Input
                placeholder={t('Password')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>

        </div>
    );
});
