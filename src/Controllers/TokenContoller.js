import { generateToken, verifyToken } from '../Services/tokenService.js';

async function validateToken(req, res, next)
{
    const { token } = req.body;

    if (!token)
    return res.status(400).json({
        httpStatus: 400,
        message: 'Please provide token',
    });

    try {

        const decoded = verifyToken(token);
        
        return res.status(200).json({
            httpStatus: 200,
            message: 'Token is valid',
            decoded: decoded
        });

    } catch (error) {
        return res.status(401).json({
            httpStatus: 401,
            message: 'Unauthorized',
        });
    }
}


// i will use this later

// async function refreshToken(req, res, next) {

//     const { refreshToken } = req.body;

//     if (!refreshToken)
//     return res.status(400).json({
//         httpStatus: 400,
//         message: 'Please provide refresh token',
//     });

//     const token = await tokenSchema.findOne({ refreshToken: refreshToken });

//     if (!token) {
//         return res.status(400).json({
//             httpStatus: 400,
//             message: 'Invalid refresh token',
//         });
//     }

//     const user = await userSchema.findById(token.userId);

//     if (!user) {
//         return res.status(400).json({
//             httpStatus: 400,
//             message: 'User not found',
//         });
//     }

//     res.status(200).json({
//         httpStatus: 200,
//         message: 'Token refreshed successfully',
//         accessToken: await generateToken({
//             id: user._id,
//             email: user.email,
//             name: user.name
//         })
//     });
// }

export default {
    // refreshToken,
    validateToken
}