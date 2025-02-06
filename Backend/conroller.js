import userSchema from "./model"

export async function Register() {
    try{
        const {username,email,phone,password,cpassword,profile}=req.body
        if(!(username&&email&&phone&&password&&cpassword&&profile))
            return res.status(404).send({msg:"All fields are required"})
        if(password!==cpassword)
            return res.status(404).send({msg:"Password doesn't Match"})
        const data=await userSchema.findOne({email})
        if(data)
            return res.status(404).send({msg:"Email already in use"})
        const user=new userSchema({username,email,phone,password,cpassword,profile})
        
    }
    catch(error){    

    }
}  