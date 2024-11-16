import User from '../models/userModel.js'

const register = async (req, res) => {

    const body = req.body;
    const { username, email, password, profilePicture } = body;

    try {
        const user1 = await UserModel.findOne({ username });
        if (user1) {
            return res.status(409).json({ message: "Username already taken" });
        }

        const user2 = await UserModel.findOne({ email });
        if (user2) {
            return res.status(409).json({ message: "Provided email is already registered" });
        }

        const generatedOtp = Math.floor(100000 + Math.random() * 900000);


        const hashedPassword = await bcryptjs.hash(password, 10);

        SendEmail(email, generatedOtp);

        const newUser = await UserModel.create({ username, email, password: hashedPassword, profilePicture, otp: generatedOtp });
        return res
            .status(201)
            .json(
                {
                    message: "User created successfully",
                    data: newUser,
                    success: true
                }
            );
    } catch (error) {
        res.status(409).json({
            message: error.message,
            error: error,
        });
    }

}

export const login = (req, res) => {
    const l = req.cookies?.user
    if(!l) {
        return res.status(401).json({ message: 'Unauthorized' })
    }
    console.log(l)
}