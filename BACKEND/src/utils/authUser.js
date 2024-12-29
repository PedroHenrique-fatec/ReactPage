const authUser = async (req, res, next) => {
    try {
        const userId = await req.headers['x-user-id'];


        if(userId == 'null' || userId == '') {
            return res.json({ message: 'Unauthorized', statusBar: 401});
        }

        return next();

    } catch (error) {
        console.log(error)
    }
}

export default authUser;