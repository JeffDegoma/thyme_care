import dotenv from 'dotenv'
import AWS_cognito from 'amazon-cognito-identity-js'

dotenv.config()

const poolData = {
    UserPoolId: process.env.userPoolId,
    ClientId: process.env.clientId
}

const userPool = new AWS_cognito.CognitoUserPool(poolData)

export async function signUp(req, res) {
    const {fullName, email, password} = req.body

    const user = {
        fullName,
        email,
        password
    }

    //aws params
    const emailData = {
        Name: 'email',
        value: email
    }

    const emailAttribute = new AWS_cognito.CognitoUserAttribute(emailData)
    userPool.signUp(email, password, [emailAttribute], null, async(err, data) => {
        try {
            if(err) {
                console.log(err)
            }
           res.json(data)  
        } catch (err){
            console.error("AWS errors", err)
        }
    })


}