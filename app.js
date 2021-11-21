var mysql = require("mysql");
var inq = require("./node_modeules/inquirer");
var table = require("console.table");
var add = require("./lib/add");
var view = require("./lib/view");


connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  exports.start();
});

exports.start = () => {
    inq.prompt([
        {
            type: "list",
            message: "what is that you would like do today please select one down below?",
            name: "choice",
            choices: [
                "View all of Employees",
                "Add an Employee",
                "get updates on employees",
                "done"                
            ]
        }
    ])
    .then(function(answer) {
      if(answer.choice === "View All Employees") {
        view.viewAllEmployees();
      }
      else if(answer.choice === "Add Employee") {
        add.addEmployee();
      }      
      else if(answer..choice === "Update Employee Role") {
        update.updateRole();
      }
      else if(answer.choice === "EXIT") {
        connection.end();
        return
      }
    });
  
  var connection = mysql.createConnection({
  host: "localhost",
  port: 3000,
  user: "root",
  password: "Brunomars45",
  database: "company_db"
});
    
};
