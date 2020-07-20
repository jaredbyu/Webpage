<scirpt>
     function myFunction(a, b) {
  return a * b;
}

        // data-main="main"

const Twit = require(['twit'])
//const notifier = require([node-notifier]);
//const open = require([open]);
//const franc = require([franc])

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

    // //1. GET RECENT TWEETS
//      T.get('search/tweets', { q: '#paper since:2020-04-15', count: 100 }, function(err, data, response) {
//        const tweets = data.statuses
//        .map(tweet => `LANG: ${franc(tweet.text)} : ${tweet.text}`) //CHECK LANGUAGE
//        .map(tweet => tweet.text)
//        .filter(tweet => tweet.toLowerCase().includes('paper'));
//        console.log(tweets);
//        document.getElementById('demo').innerHTML = tweets;
//      })

    // //2. REAL TIME MONITORING USING STREAM (HASHTAG)
     var stream = T.stream('statuses/filter', { track: '#tesla' })
     stream.on('tweet', function (tweet) {
         console.log(tweet.text);
         document.getElementById('demo').innerHTML = 'yeet';
         console.log('------');
     })

    // 3. REAL TIME MONITORING USING STREAM (LOCATION)
    //var sanFrancisco = [ '-122.75', '36.8', '-121.75', '37.8' ]
    //var stream = T.stream('statuses/filter', { locations: sanFrancisco })
    
    //SHOW NOTIFICATION FOR EACH RECEIVED TWEET
    //stream.on('tweet', function (tweet) {
     // console.log(tweet.text);
      //let url = `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`

     // notifier.notify({
      //  title: tweet.user.name,
      //  message: tweet.text
      });

      
    //})
//})();
    </script>
