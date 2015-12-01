var mysql      = require('mysql');
var config = require('config');

var connection = mysql.createConnection(config.get('dbConfig'));

connection.connect(function(err)
{
    if (err) {
        console.error('MySQL error connecting: ' + err.stack);
        return;
    }

    console.log('MySQL connected as id ' + connection.threadId);
},charset='utf8', init_command='SET NAMES UTF8');


var getAllTasks = function(cb) {
    connection.query("SELECT * FROM tasks", function(err, rows, fields)
    {
        console.log('Rows ', rows);
        cb(rows, err);
    });
};

var getAllUsers = function(cb) {
    connection.query("SELECT * FROM users", function(err, rows, fields)
    {
        console.log('Rows ', rows);
        cb(rows, err);
    });
};

var getAllProgramlangs = function(cb) {
    connection.query("SELECT * FROM program_languages", function(err, rows, fields)
    {
        console.log('Rows ', rows);
        cb(rows, err);
    });
};

var getTop10Users = function(cb) {
    connection.query("select ID_USER,FIRSTNAME,SECONDNAME,sum(POINTS) as SUMPOINTS" +
        " from USERS,SOLUTIONS where ID_USER=SOLUTION_USER_ID and ID_USER " +
        "in (select SOLUTION_USER_ID from SOLUTIONS group by SOLUTION_USER_ID " +
        "order by sum(POINTS)) group by ID_USER,FIRSTNAME,SECONDNAME order" +
        " by sum(POINTS) desc;", function(err, rows, fields)
    {
        console.log('Rows ', rows);
        cb(rows, err);
    });
};

var getProgramLangs = function(argument) {
    return [{'lang': 'c++'}, {'lang': 'Java'}, {'lang': 'Python'}];
};

var getTestByTaskID = function(taskID)
{
    // TODO: create sql table TESTS
    return [ {'input': '123', 'output': '456'}, {'input': '123', 'output': '456'}];
};

var getTask = function(id, cb) {
    connection.query("SELECT * FROM tasks WHERE id = ?", id, function(err, rows, fields)
    {
        rows[0]['tests'] = getTestByTaskID(id);
        cb(rows[0], err);
        return rows[0];
    });
};

var sql1 = "SET CHARACTER SET utf8";
connection.query(sql1, function (err, result) {
    var sql = "SET SESSION collation_connection ='utf8_general_ci";
    connection.query(sql,  function (err, result) {
    });
});

exports.getProgramLangs = getProgramLangs;
exports.getAllTasks = getAllTasks;
exports.getAllUsers = getAllUsers;
exports.getAllProgramlangs = getAllProgramlangs;
exports.getTask = getTask;
exports.getTestByTaskID = getTestByTaskID;
exports.getTop10Users = getTop10Users;