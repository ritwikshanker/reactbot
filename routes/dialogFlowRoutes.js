const dialogflow = require('dialogflow');
const config = require('../config/keys');

const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath(config.googleProjectID, config.dialogFlowSessionID);


module.exports = app =>
{
    app.get('/', (req, res) =>
    {
        res.send({'Hello': 'New User'})
    });

    app.post('/api/df_text_query', async (req, res) =>
    {
        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                    // The query to send to the dialogflow agent
                    text: req.body.text,
                    // The language used by the client (en-US)
                    languageCode: config.dialogFlowSessionLanguageCode,
                },
            },
        };


        let responses = await sessionClient
            .detectIntent(request);

        res.send(responses[0].queryResult)


    });

    app.post('/api/df_event_query', (req, res) =>
    {
        res.send({'do': 'event query'})
    });
};