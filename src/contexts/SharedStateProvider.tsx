import React, { FunctionComponent, useContext, useState } from 'react';
import { SharedState, SharedStateContext } from './SharedStateContext';

type SharedStateProviderProps = {
    initialState?: Pick<SharedState, 'user' | 'currentTrip' | 'expenseList' | 'updateSharedState'>;
    children: any;
};

export const SharedStateProvider: FunctionComponent<SharedStateProviderProps> = ({
    children,
    initialState,
}) => {
    const [sharedState, setSharedState] = useState(() => initialState);

    const updateSharedState = (newState: SharedState) => {
        setSharedState((prevSharedState) => ({
            ...prevSharedState,
            ...newState,
        }));
    };

    const value = {
        ...sharedState,
        updateSharedState,
    };

    return <SharedStateContext.Provider value={value}>{children}</SharedStateContext.Provider>;
};

export const useSharedState = () => {
    const context = useContext(SharedStateContext);

    if (!context) {
        throw new Error('useSharedState must be used within a SharedState');
    }

    return context;
};
