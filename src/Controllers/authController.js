import userSchema from "../Models/user.js";
import { generateToken, verifyToken } from "../Services/TokenService.js";
import { comparePassword, hashPassword } from "../Utils/PasswordHasher.js";

async function login(req, res, next)
{
    const { email, password } = req.body;

    if (!email || !password) 
    return res.status(400).json({
        httpStatus: 400,
        message: 'Please provide email and password',
    });
    
    const user = await userSchema.findOne({email: email.toLowerCase()}, "password name").exec();

    if(!user) 
    return res.status(400).json({
        httpStatus: 400,
        message: 'User not found',
    });

    await comparePassword(password, user.password) 
        ? res.status(200).json({
            httpStatus: 200,
            message: 'Login successful',
            accessToken: await generateToken({
                id: user._id,
                email: email,
                name: user.name
            }), 
        })
        : res.status(400).json({
            httpStatus: 400,
            message: 'Invalid credentials',
        })
    ;
}

async function register(req, res, next)
{
    const { name, email, password } = req.body;

    if (!name || !email || !password)
    return res.status(400).json({
        httpStatus: 400,
        message: 'Please provide name, email and password',
    });

    const user = await userSchema.create({
        name: name,
        email: email.toLowerCase(),
        password: await hashPassword(password)
    });

    res.status(200).json({
        httpStatus: 200,
        message: 'User created successfully',
        accessToken: await generateToken({
            id: user._id,
            email: email,
            name: name
        })
    });
}

export default {
    login,
    register
};