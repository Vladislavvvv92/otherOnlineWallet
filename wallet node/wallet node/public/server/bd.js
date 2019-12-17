module.exports.db = {
    mysql: require('mysql'),
    connection() {
        return this.mysql.createConnection({
            host: "localhost",
            database: "onlinewallet",
            user: "root",
            password: "",
        })
    },
    connect() {
        const con = this.connection();
        return con.connect(function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log("Connected!");
            }
        })
    }
};

/*
app.get('/', function (req, res) {
    connection.query("SELECT * FROM users", function (err, rows, fields) {
        if (err) {
    console.log('Error in the query')
} else {
    console.log('successful query')
}
});
});

app.listen(4000);*/
