import { verifyToken } from "../Services/tokenService.js";

async function tokenSession(req, res, next)
{
    const authHeader = req.headers.authorization;
    const token = !!authHeader ? authHeader.split(" ")[1] : null;

    if(!token)
    return res.status(401).json({ 
        httpStatus: 401,
        message: "Unauthorized" 
    });

    try{
        const decoded = verifyToken(token);
        
        req.user = decoded;
        next();
    }
    catch(err)
    {
        return res.status(401).json({ 
            httpStatus: 401,
            message: "invalid token"
        });
    }
}

export default tokenSession;