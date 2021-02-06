import dotenv from 'dotenv'
import AWS_cognito from 'amazon-cognito-identity-js'
import validator from 'express-validator'

dotenv.config()
const {validationResult} = validator

const poolData = {
    UserPoolId: process.env.userPoolId,
    ClientId: process.env.clientId
}

const userPool = new AWS_cognito.CognitoUserPool(poolData)

export async function signUp(req, res) {
    const err = validationResult(req)
    const {fullName, email, password} = req.body
    req.session['server-errors'] = err.array()
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
                req.session['server-errors'].push(err)
                res.json(req.session) //send session and errors to front
            } else {
                res.json(data)  
            }
        } catch (err){
            console.error("AWS errors", err)
        }
    })


}