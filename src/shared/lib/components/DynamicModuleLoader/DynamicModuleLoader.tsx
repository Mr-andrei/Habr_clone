import { FC, ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import {
    ReduxStoreWithManager, StateSchema,
    StateSchemaKey,
} from '@/app/providers/StoreProvider/config/StateSchema';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>
}

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
    children: ReactNode;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children,
        removeAfterUnmount = true,
        reducers,
    } = props;

    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        const mountedReducer = store.reducerManager.getMountedReducers();
        Object.entries(reducers)
            .forEach(([name, reducer]) => {
                const mounted = mountedReducer[name as StateSchemaKey];
                if (!mounted) {
                    store.reducerManager.add(name as StateSchemaKey, reducer);
                }
            });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers)
                    .forEach(([name]) => {
                        store.reducerManager.remove(name as StateSchemaKey);
                    });
            }
        };
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {children}
        </>
    );
};
