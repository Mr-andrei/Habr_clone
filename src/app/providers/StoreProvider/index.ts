import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore } from './config/store';
import type { StateSchema, ThunkConfig } from './config/StateSchema';

export type { AppDispatch } from './config/store';
export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    ThunkConfig,
};
