//this is middleware function to check request has session or not
const sessionAuth = async(req, res, next) => {
    // console.log("inside middleware", req.session);
    try {
        if(!req.session){
            throw new Error();
        }
        next();
    } catch (e) {
        res.send("session not found")
    }
};

module.exports = sessionAuth;