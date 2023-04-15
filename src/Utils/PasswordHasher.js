import * as bcrypt from 'bcrypt';

export async function hashPassword (password) 
{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

export const comparePassword = async (password, hashPassword) => 
    bcrypt.compare(password, hashPassword);
