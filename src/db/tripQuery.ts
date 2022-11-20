import { db } from './config';

export const createTripTable = () => {
    db.transaction((txn) => {
        txn.executeSql(
            'CREATE TABLE IF NOT EXISTS ' +
                'TRIP ' +
                '(' +
                'ID INTEGER PRIMARY KEY AUTOINCREMENT, ' +
                'USER_UID VARCHAR(40), ' +
                'NAME VARCHAR(20), ' +
                'DESTINATION VARCHAR(100), ' +
                'BUDGET INTEGER, ' +
                'DATE VARCHAR(10), ' +
                'TAG VARCHAR(50), ' +
                'DESCRIPTION VARCHAR(100), ' +
                'REQUIRED_RISK_ASSESSMENT INTEGER' +
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
export const createTrip = () => {
    db.transaction((txn) => {
        txn.executeSql(
            'INSERT INTO ' +
                'TRIP ' +
                '(NAME, DESTINATION, BUDGET, DATE, TAG, DESCRIPTION, REQUIRED_RISK_ASSESSMENT' +
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
