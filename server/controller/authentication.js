const pg = require('pg');

const uri = 'postgres://bqeheala:GWAZ5COFlyvb129JAd-EhwSLdqAzkD_l@raja.db.elephantsql.com:5432/bqeheala';

const client = new pg.Client({
    connectionString: uri
});

client.connect((err, result) => {
    if(err) console.log(err);
});


const authentication = {};


authentication.verifyLogin = (req, res, next) => {
    let query = `SELECT * FROM info WHERE USERNAME = '${req.body.username}'`;
    console.log(req.body);

    client.query(query,(err, data)=> {
        if(err) console.log(err);
        if(data.rows[0].password === req.body.password){
            query = `SELECT * FROM characters WHERE userid = ${data.rows[0].id}`;
            client.query(query, (err, data) => {
                res.locals.data = data;
                return next();
            })
        } else {
            res.status(401).end('Authentication Failed!')
        }
    });
};

authentication.insertCharacter = (req, res, next) => {
    let query = `
    INSERT INTO characters(userid, name, advancement_type, skill_increase_type, stereotype, specialty)
    VALUES();
    `;
    client.query(query, (err, res) => {
        if(err) return next(err);
        
    })
}
authentication.getCharacters = (req, res, next) => {

};

authentication.createUser = (req, res, next) => {

};

module.exports = authentication;