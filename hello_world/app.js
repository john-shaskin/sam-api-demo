
const axios = require('axios')
const url = 'http://checkip.amazonaws.com/';
let response;


exports.lambda_handler = async (event, context, callback) => {
    try {
        const ret = await axios(url);
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: `Hello, ${event.pathParameters.name}!!`,
                location: ret.data.trim()
            })
        }
    }
    catch (err) {
        console.log(err);
        callback(err, null);
    }

    callback(null, response)
};
