const Twit = require('twit')


const apikey = '4puMWeFU7uVev8xnTMZLBnYvP'
const apiSecretKey = '5mFpcNGl7fEUSYhwEStjuFVPVMzIhFXfAd3UmiyoHqSBDJO7dE'
const accessToken = '1284897671220609025-bEvvZ2dO5YoTt40NZKfsRIm1IK2OBD'
const accessTokenSecret = '0Eblxmb7b0hmbokzURbSjbHWgKf9l3pRcQpotwoFKEyVp'
document.getElementById('demo').innerHTML = 'yeet';
var T = new Twit({
  consumer_key:         apikey,
  consumer_secret:      apiSecretKey,
  access_token:         accessToken,
  access_token_secret:  accessTokenSecret,
});

(async () => {

     var stream = T.stream('statuses/filter', { track: '#tesla' })
     stream.on('tweet', function (tweet) {
         console.log(tweet.text);
         document.getElementById('demo').innerHTML = 'yeet';
         console.log('------');
     })
      });


