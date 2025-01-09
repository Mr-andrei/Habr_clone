export { userActions, userReducer } from './model/slice/userSlice';
export type { UserSchema, User } from './model/types/userSchema';
export { UserRole } from './model/types/userSchema';
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';
export {
    getUserRole,
    isUserAdmin,
    isUserManager,
} from './model/selectors/userRole/userRole';
