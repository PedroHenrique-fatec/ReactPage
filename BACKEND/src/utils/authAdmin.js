const authAdmin = async (req, res, next) => {
    try {
        const userId = await req.headers['x-user-id'];

        if (userId == 1) {
            return next();
        }

        return res.json({ 
            message: 'Unauthorized', 
            statusBar: 401
        });

    } catch (error) {
        console.error(error);
        return res.json({ 
            message: 'Internal Server Error', 
            statusBar: 500 
        });
    }
};

export default authAdmin;
