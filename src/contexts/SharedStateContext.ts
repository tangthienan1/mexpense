import { createContext } from 'react';

export type SharedState = {
    user?: any;
    currentScreen?: any;
    currentTrip?: any;
    expenseList?: any;
    updateSharedState?: (newState: SharedState) => void;
};

export const SharedStateContext = createContext<SharedState>({});
