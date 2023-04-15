import userModel from "../Models/user.js";
import { comparePassword, hashPassword } from "../Utils/PasswordHasher.js";

// return string or null
async function getPassword(userID)
{
    const user = await userModel.findById(userID, "password").exec();
    if(!user) return null;
    return user.password;
}

// thorws error 
async function updatePassword(userID, password)
{
    const currentPassword = await getPassword(userID);

    if(!currentPassword)
    throw new Error("User not found");

    const passwordValid = await comparePassword(password.current, currentPassword);
    
    if(!passwordValid) 
    throw new Error("Invalid password");

    const hashedPassword = await hashPassword(password.new);

    try {
        userModel.updateOne({password: hashedPassword}).exec();
    } catch (error) {
        console.log(error);
        throw new Error("Error updating password");
    }

}

async function data(userId)
{
    const data = await userModel.findById(userId, "email name createdAt").exec();

    if(!data) return null;
    
    return {
        email: data.email,
        name: data.name,
        createdAt: data.createdAt
    };
}

async function del(userId, password)
{
    const passwordDb = await getPassword(userId);

    if(!passwordDb)
    throw new Error("User not found");

    if(!comparePassword(password, passwordDb))
    throw new Error("Invalid password");

    try {
        userModel.findByIdAndDelete(userId).exec();
    } catch (error) {
        throw error;
    }
}

export default { 
    updatePassword ,
    data,
    del
};