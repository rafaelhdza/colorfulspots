import pkg from 'mysql';

const { createConnection } = pkg;
const connection = createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  database: 'ColorfulSpots',
  password: 'thecrew'
});

connection.connect();
export var all = connection.query('SELECT * FROM `Business`',
function (error, results, fields){
if (error) throw error;
  var businesses = JSON.stringify(results);
  var bjson = JSON.parse(businesses);
  
  console.log(bjson);
  return bjson
  });

  connection.end()

export default {
  all
}