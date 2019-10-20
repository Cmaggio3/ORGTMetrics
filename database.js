var mysql = require('mysql');

var db_config = {
	host:"orgtdata.c5xkty4e7x1f.us-east-2.rds.amazonaws.com",
	user: "admin",
	password: "Testtobechanged12",
	database: "data",
    debug    :  true
}


var connection;




function handleDisconnect() {
  if(connection) connection.destroy()
  connection = mysql.createPool(db_config); // Recreate the connection, since
                                                  // the old one cannot be reused


	console.log(db_config)


  connection.getConnection(function(err) {              // The server is either down
    if(err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 10000); // We introduce a delay before attempting to reconnect,
    }
  });                                     // process asynchronous requests in the meantime.
                                          // If you're also serving http, display a 503 error.
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
	  connection.destroy();
	  setTimeout(handleDisconnect,10000);                  // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      throw err;                                  // server variable configures this)
    }
  });

  	connection.query('select 1', function(err, results) {
        if (err) console.log('SELECT', err.code);
        else console.log('SELECT', results);
    });

}















/*
function handleDisconnect() {
  if(connection) connection.destroy()
  connection = mysql.createConnection(db_config); // Recreate the connection, since
                                                  // the old one cannot be reused


	console.log(db_config)


  connection.connect(function(err) {              // The server is either down
    if(err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 10000); // We introduce a delay before attempting to reconnect,
    }
  });                                     // process asynchronous requests in the meantime.
                                          // If you're also serving http, display a 503 error.
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
	  connection.destroy();
	  setTimeout(handleDisconnect,10000);                  // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      throw err;                                  // server variable configures this)
    }
  });

  	connection.query('select 1', function(err, results) {
        if (err) console.log('SELECT', err.code);
        else console.log('SELECT', results);
    });

}
*/

handleDisconnect();

/*setInterval(function() {
    connection.query('select 1', function(err, results) {
        if (err) console.log('SELECT', err.code);
        else console.log('SELECT', results);
    });
}, 60000);
*/

module.exports = connection;

/*
var connection = mysql.createConnection({
	host: "az1-ss18.a2hosting.com",
	user: "jacobsla_Admin",
	password: "JacobsLadderGT2019",
	database: "jacobsla_jacobsLadder",
    debug    :  true
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
*/
