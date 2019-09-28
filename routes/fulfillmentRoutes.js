const {WebhookClient} = require('dialogflow-fulfillment');

const mongoose = require('mongoose');
const Registration = require('./../models/Registration');

module.exports = app =>
{
    app.post('/', async (req, res) =>
    {
        const agent = new WebhookClient({request: req, response: res});

        async function registrationName(agent)
        {
            const registration = new Registration({
                username: agent.parameters.username,
                dateSent: Date.now()
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

        async function registrationEmail(agent)
        {
            const registration = new Registration({
                email: agent.parameters.email
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

        async function registrationNumber(agent)
        {
            const registration = new Registration({
                phone: agent.parameters.phone
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

        async function registrationAddress(agent)
        {
            const registration = new Registration({
                address: agent.parameters.address
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

        function fallback(agent)
        {
            agent.add(`I didn't understand`);
            agent.add(`I'm sorry, can you try again?`);
        }

        let intentMap = new Map();
        intentMap.set('Default Fallback Intent', fallback);
        intentMap.set('name-followup', registrationName);
        intentMap.set('email-followup', registrationEmail);
        intentMap.set('phone-number-followup', registrationNumber);
        intentMap.set('user_address-followup', registrationAddress);
        await agent.handleRequest(intentMap);
    });

};