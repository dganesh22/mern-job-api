const { StatusCodes } = require('http-status-codes')
const User = require('../model/User')

const recruiterAuth = async (req,res,next) => {
    try {
        // res.json({ user: req.user })
        const recruiter = await User.findById({ _id: req.user.id })
            if(!recruiter)
                return res.status(StatusCodes.NOT_FOUND).json({ msg: "recruiter id doesn't exists"})
        
         if(recruiter.role === "user")
                return res.status(StatusCodes.UNAUTHORIZED).json({ msg: "Recruiter Resources, access denied for users."})
        // res.json({ recruiter })
         next()  // to continue execution process to next controller
        
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message})
    }
}

module.exports = recruiterAuth