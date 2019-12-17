module.exports.verification = {
    code: '123456',
    check(req, res){
        console.log(this.code)
        console.log(req.verification)
        if(req.verification == this.code){
            res.send(true);
        } else {
            res.send(false);
        }
    }
};