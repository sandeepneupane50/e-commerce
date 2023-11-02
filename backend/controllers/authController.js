import User from '../models/user';

export const registerUser = async (req, res) => {
    // const {name, email, password } = req.body;
    // console.log(name, email, password);
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    console.log(req.body);
    const user = await User.create({
       name,
       email,
       password
    })

    res.status(201).json({
        user,
    })
}