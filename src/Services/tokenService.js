import jwt from "jsonwebtoken";

export function generateToken(user) {
    const payload = {
        email: user.email,
        name: user.name
    };
    
    return jwt.sign(payload, process.env.JWT_SECRET, {
        algorithm: "HS256",
        subject: user.id,
        expiresIn: "1h"
    });
}

export const verifyToken = (token) => 
    jwt.verify(token, process.env.JWT_SECRET, {
        algorithms: ["HS256"]
    });

export default {
    generateToken,
    verifyToken
}