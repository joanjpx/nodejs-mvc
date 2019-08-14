// JWT MIDDLEWARE

module.exports = {validate};

function validate(req,res,next)
{
    const bearerHeader = req.headers['authorization'];
    console.log(bearerHeader);
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }else{
        res.status(403).json({Message:"Not Allowed"});
    }
}