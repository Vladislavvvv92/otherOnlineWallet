const db = require('./bd').db;
let login;
let pass;
let devName;
module.exports.authQuerys = {
    connect: db.connection(),
    sqlQuery(req, res) {
        login = req.login;
        pass = req.password;
        devName = req.deviceName;
        this.connect.query(`SELECT * FROM users WHERE login = '${login}' and deviceName = '${devName}' and password = '${pass}'`, function (err, rows, fields) {
            if (err) {
                console.log('Error in the query');
            } else {
                if(rows.length == 1){
                    res.send(true)
                } else {
                    res.send(false)
                }

            }
        })
    },
    getUser(req, res){
        this.connect.query(`SELECT name, surname FROM users WHERE login = '${login}' and deviceName = '${devName}' and password = '${pass}'`, function (err, rows, fields) {
            const user = {
                name: rows[0].name,
                surname: rows[0].surname
            };
            if (err) {
                console.log('Error in the query');
            } else {
                if(rows.length == 1){
                    res.send(user)
                } else {
                    res.send(false)
                }
            }
        })
    }

};
