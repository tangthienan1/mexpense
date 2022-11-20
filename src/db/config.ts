import { openDatabase } from 'react-native-sqlite-storage';

const DB_NAME = 'mexpense';

export const db = openDatabase({
    name: DB_NAME,
});
