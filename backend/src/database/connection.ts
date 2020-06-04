import knex from 'knex';
import path from 'path';

// const connection = knex({
//     client: 'pg',
//     connection: process.env.DB_URL,
//     migrations: {
//       directory: './database/migrations'
//     },
//     useNullAsDefault: true,
// })

const connection = knex({
        client: 'sqlite3',
        connection: {
            filename: path.resolve('./src/database/database.sqlite'),   
        },
        useNullAsDefault: true,
    }); 

    export default connection;

    