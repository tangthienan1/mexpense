import { db } from './config';

export const createExpenseTable = () => {
    db.transaction((txn) => {
        txn.executeSql(
            'CREATE TABLE IF NOT EXISTS ' +
                'EXPENSE ' +
                '(' +
                'ID INTEGER PRIMARY KEY AUTOINCREMENT, ' +
                'USER_UID VARCHAR(40), ' +
                'AMOUNT INTEGER, ' +
                'NOTE VARCHAR(100), ' +
                'LOCATION INTEGER, ' +
                'DATE VARCHAR(10), ' +
                ')',
            [],
            (sqlTxn, res) => {
                console.log('createTable created successfully');
                console.log('createTable', { res });
            },
            (err) => {
                console.log('error on creating table' + err.message);
            }
        );
    });
};
