const dialogflow = require('dialogflow');
const structjson = require('./structjson.js');
const config = require('../config/keys');
const mongoose = require('mongoose');

const googleAuth = require('google-oauth-jwt');

const projectId = config.googleProjectID;
const sessionId = config.dialogFlowSessionID;
const languageCode = config.dialogFlowSessionLanguageCode;

const credentials = {
    client_email: config.googleClientEmail,
    private_key: config.googlePrivateKey,
};

const sessionClient = new dialogflow.SessionsClient({projectId, credentials});


const Registration = mongoose.model('registration');


module.exports = {

    getToken: async function ()
    {
        return new Promise((resolve) =>
        {
            googleAuth.authenticate(
                {
                    email: config.googleClientEmail,
                    key: config.googlePrivateKey,
                    scopes: ['https://www.googleapis.com/auth/cloud-platform'],
                },
                (err, token) =>
                {
                    resolve(token);
                },
            );
        });
    },

    textQuery: async function (text, userID, parameters = {})
    {
        let self = module.exports;
        const sessionPath = sessionClient.sessionPath(projectId, sessionId + userID);

        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                    text: text,
                    languageCode: languageCode,
                },
            },
            queryParams: {
                payload: {
                    data: parameters
                }
            }
        };

        let responses = await sessionClient.detectIntent(request);
        responses = await self.handleAction(responses);
        return responses;


    },

    handleAction: function (responses)
    {
        let self = module.exports;
        let queryResult = responses[0].queryResult;

        switch (queryResult.action)
        {
            case 'DefaultWelcomeIntent-name':
            {
                if (queryResult.allRequiredParamsPresent)
                {
                    self.saveRegistrationName(queryResult.parameters.fields);
                }
                break;
            }
            case 'DefaultWelcomeIntent-email':
            {
                if (queryResult.allRequiredParamsPresent)
                {
                    self.saveRegistrationEmail(queryResult.parameters.fields);
                }
                break;
            }
            case 'DefaultWelcomeIntent-number':
            {
                if (queryResult.allRequiredParamsPresent)
                {
                    self.saveRegistrationNumber(queryResult.parameters.fields);
                }
                break;
            }
            case 'DefaultWelcomeIntent-address':
            {
                if (queryResult.allRequiredParamsPresent)
                {
                    self.saveRegistrationAddress(queryResult.parameters.fields);
                }
                break;
            }
        }
        return responses;
    },

    saveRegistrationName: async function (fields)
    {
        const registration = new Registration({
            username: fields.username.stringValue,
        });
        try
        {
            let reg = await registration.save();
            console.log(reg);
        } catch (err)
        {
            console.log(err);
        }
    },

    saveRegistrationEmail: async function (fields)
    {
        const registration = new Registration({
            email: fields.email.stringValue,
        });
        try
        {
            let reg = await registration.save();
            console.log(reg);
        } catch (err)
        {
            console.log(err);
        }
    },
    saveRegistrationNumber: async function (fields)
    {
        const registration = new Registration({
            mobilenum: fields.mobilenum.stringValue,
        });
        try
        {
            let reg = await registration.save();
            console.log(reg);
        } catch (err)
        {
            console.log(err);
        }
    },
    saveRegistrationAddress: async function (fields)
    {
        const registration = new Registration({
            address: fields.address.stringValue,
        });
        try
        {
            let reg = await registration.save();
            console.log(reg);
        } catch (err)
        {
            console.log(err);
        }
    }

};