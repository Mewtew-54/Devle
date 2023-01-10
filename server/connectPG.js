const { Pool } = require('pg');

const PG_URI = 'postgres://vkwhzusy:3Ji7kTTVx79D-fUi9x41EbRCmCNYPrba@mahmud.db.elephantsql.com/vkwhzusy';

const pool = new Pool({
    connectionString: PG_URI
})

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }   
};