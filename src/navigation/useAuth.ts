import React, { useEffect } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';

const auth = getAuth();

export function useAuth() {
    const [user, setUser] = React.useState<User>();

    useEffect(() => {
        const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                setUser(authUser);
            } else {
                // User is signed out
                setUser(undefined);
            }
        });

        return unsubscribeFromAuthStateChanged;
    }, []);

    return {
        user,
    };
}
