var jwt = require('jsonwebtoken');

const getJwtToken=(userId)=>{
    jwt.sign({ userId: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });

}

module.exports=getJwtToken;