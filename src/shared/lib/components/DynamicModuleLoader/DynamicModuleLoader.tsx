import { FC, useEffect } from 'react';
import { useStore } from 'react-redux';
import {
    ReduxStoreWithManager,
    StateSchemaKey,
} from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer
}

type ReducerListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
    reducers: ReducerList;
    removeAfterUnmount: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children,
        removeAfterUnmount,
        reducers,
    } = props;

    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers)
            .forEach(([name, reducer]: ReducerListEntry) => {
                store.reducerManager.add(name, reducer);
            });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers)
                    .forEach(([name]: ReducerListEntry) => {
                        store.reducerManager.remove(name);
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
