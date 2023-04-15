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

async function getData(req, res, next)
{
    try {
        const data = await accountService.data(req.user.sub);

        if(!data) return res.status(404).json({
            httpStatus: 404,
            message: "User not found"
        });

        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            httpStatus: 500,
            message: "Error getting data"
        });
    }
}

async function deleteAccount(req, res, next)
{
    const { password } = req.body;

    if(!password)
    return res.status(400).json({ 
        httpStatus: 400,
        message: "Missing required fields" 
    });

    try {
        await accountService.del(req.user.sub, password);
        res.status(204).json({});
    } catch (error) {
        console.log(error);
        res.status(500).json({
            httpStatus: 500,
            message: "Error deleting account"
        });
    }
}

export default { 
    updatePassword,
    getData,
    deleteAccount
};