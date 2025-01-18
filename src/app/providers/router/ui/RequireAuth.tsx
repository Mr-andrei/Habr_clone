import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { getUserAuthData, getUserRole, UserRole } from '@/entities/User';

interface RequireAuthProps {
    children: JSX.Element;
    roles?: UserRole[];
}

export const RequireAuth = ({
    children,
    roles,
}: RequireAuthProps) => {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    const userRoles = useSelector(getUserRole);

    const hasRequireRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((role) => {
            return userRoles?.includes(role);
        });
    }, [roles, userRoles]);

    if (!auth) {
        return (
            <Navigate
                to={RoutePath.main}
                state={{ form: location }}
                replace
            />
        );
    }

    if (!hasRequireRoles) {
        return (
            <Navigate
                to={RoutePath.forbidden}
                state={{ form: location }}
                replace
            />
        );
    }

    return children;
};
