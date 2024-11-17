import jwt from 'jsonwebtoken'

const accessToken = jwt.sign({ _id: "user._id", email: "user.email" }, "dgdfgfshhsgfdh", { expiresIn: '2h' })
const refreshToken = jwt.sign({ _id: "user._id "}, "dfgdsgsdgsdgsdgdf", { expiresIn: '7d' })

console.log(accessToken, refreshToken)