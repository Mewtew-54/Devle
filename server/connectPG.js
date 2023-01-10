const { Pool } = require('pg');

const PG_URI = 'postgres://mgtghjbc:NHNiRP1mdR5Jl_hKAATF0PrP-AYpJWWS@mahmud.db.elephantsql.com/mgtghjbc';

const pool = new Pool({
    connectionString: PG_URI
})

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }   
};