const Twit = require('twit')


const apikey = '4pvP'
const apiSecretKey = '5JO7dE'
const accessToken = '12RIm1IK2OBD'
const accessTokenSecret = ''

var T = new Twit({
  consumer_key:         apikey,
  consumer_secret:      apiSecretKey,
  access_token:         accessToken,
  access_token_secret:  accessTokenSecret,
});

(async () => {

     var stream = T.stream('statuses/filter', { track: '#paper' })
     stream.on('tweet', function (tweet) {
         console.log(tweet.text);
         
         console.log('------');
     })
      });


