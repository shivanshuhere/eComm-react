import jwt from 'jsonwebtoken'

const findUser = async (refreshToken) => {
    try {
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

        const UserId = decoded._id

        return UserId
    } catch (error) {
        console.log(error);
        return error
    }
}

export default findUser