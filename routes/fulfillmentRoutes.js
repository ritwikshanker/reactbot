const {WebhookClient} = require('dialogflow-fulfillment');

const mongoose = require('mongoose');
const Registration = mongoose.model('registration');

module.exports = app =>
{
    app.post('/', async (req, res) =>
    {
        const agent = new WebhookClient({request: req, response: res});

        async function registration(agent)
        {

            const registration = new Registration({
                name: agent.parameters.name,
                address: agent.parameters.address,
                phone: agent.parameters.phone,
                email: agent.parameters.email,
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

        function fallback(agent)
        {
            agent.add(`I didn't understand`);
            agent.add(`I'm sorry, can you try again?`);
        }

        let intentMap = new Map();
        intentMap.set('recommend courses - yes', registration);
        intentMap.set('Default Fallback Intent', fallback);

        agent.handleRequest(intentMap);
    });

};