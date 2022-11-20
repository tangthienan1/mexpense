import React, { useEffect } from 'react';
import { db } from './src/db/config';
import RootNavigation from './src/navigation';

const App = () => {
    const createTables = () => {
        db.transaction((txn) => {
            txn.executeSql(
                'CREATE TABLE IF NOT EXISTS ' +
                    'TRIPS ' +
                    '(ID INTEGER PRIMARY KEY AUTOINCREMENT, TRIP_NAME VARCHAR(20))',
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
    const seedData = () => {
        db.transaction((txn) => {
            txn.executeSql(
                'INSERT INTO TRIPS (TRIP_NAME) VALUES ("TRIP NAME SAMPLE")',
                [],
                (sqlTxn, res) => {
                    console.log('seedData', { res });
                },
                (error) => {
                    console.log(error.message);
                }
            );
        });
    };

    const getTrip = () => {
        db.transaction((txn) => {
            txn.executeSql(
                'SELECT * FROM TRIPS',
                [],
                (sqlTxn, res) => {
                    console.log('get data');
                    let len = res.rows.length;

                    if (len > 0) {
                        let results = [];
                        for (let i = 0; i < len; i++) {
                            let item = res.rows.item(i);
                            console.log('gettripp', { id: item.ID, name: item.TRIP_NAME });
                        }
                    }
                    console.log({ res });
                },
                (error) => {
                    console.log(error.message);
                }
            );
        });
    };

    const dropTripTable = () => {
        db.transaction((txn) => {
            txn.executeSql(
                'DROP TABLE trips',
                [],
                (sqlTxn, res) => {
                    console.log({ res });
                    console.log('drop success');
                },
                (error) => {
                    console.log(error.message);
                }
            );
        });
    };

    useEffect(() => {
        // createTables();
        // seedData();
        // getTrip();
        dropTripTable();
    }, []);

    return <RootNavigation />;
};

export default App;
