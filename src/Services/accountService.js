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

export default { 
    updatePassword 
};