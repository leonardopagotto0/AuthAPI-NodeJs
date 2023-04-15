import accountService from "../Services/accountService.js";

async function updatePassword(req, res, next)
{
    const { currentPassword, newPassword } = req.body;

    if(!currentPassword || !newPassword)
    return res.status(400).json({ 
        httpStatus: 400,
        message: "Missing required fields" 
    });

    try {
        
        await accountService.updatePassword(req.user.sub, { 
            current: currentPassword, 
            new: newPassword 
        });

        res.status(204).json({});

    } catch (error) {
        console.log(error);
        res.status(500).json({ 
            httpStatus: 500,
            message: "Error updating password" 
        });
    }

}

export default { 
    updatePassword
};