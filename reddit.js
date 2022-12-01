require('dotenv').config();
const snoowrap = require('snoowrap');

function scrapeSubreddit(){
    const r = new snoowrap({
        userAgent: 'bdayman-blog',
        clientId: process.env.RedditclientId,
        clientSecret: process.env.RedditclientSecret,
        username: process.env.Redditusername,
        password: process.env.Redditpassword,
        refreshToken: process.env.RedditrefreshToken
    });

    // Printing a list of the titles on the front page
    r.getHot().map(post => post.title).then(console.log);

    // const subreddit = r.getSubreddit('AskReddit');
    // const topPosts = subreddit.getTop({time: 'week', limit: 3});

    // let data = [];
    // topPosts.forEach((post) => {
    //     data.push({
    //         link: post.url,
    //         text: post.title,
    //         score: post.score
    //     })
    // });
    // console.log(data);
};
scrapeSubreddit();


// var express = require('express');
// const { URLSearchParams } = require('url');
// var router = express.Router();
// const fetch = require('node-fetch');

// const REDDIT_ACCESS_TOKEN_URL = 'https://www.reddit.com/api/v1/access_token';
// const APP_ONLY_GRANT_TYPE = 'https://oauth.reddit.com/grants/installed_client';
// const fetchRedditTrendingData = (sub, accessToken) =>
//     fetch(`https://oauth.reddit.com/r/${sub}/top`, {
//         headers: {
//             Authorization: `Bearer ${accessToken}`
//         }
//     }).then(data => data.json());

// router.post('/trending', async function (req, res, next) {
//     const { REDDIT_CLIENT_ID } = process.env;

//     const redditSub = req.body.redditsub;

//     try {
//         const params = new URLSearchParams();
//         params.append('grant_type', APP_ONLY_GRANT_TYPE);
//         params.append('device_id', 'DO_NOT_TRACK_THIS_DEVICE');

//         const tokenData = await fetch(REDDIT_ACCESS_TOKEN_URL, {
//             method: 'POST',
//             body: params,
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded',
//                 'Authorization': `Basic ${Buffer.from(`${REDDIT_CLIENT_ID}:`).toString('base64')}`
//             }
//         }).then(res => res.json())

//         if (!tokenData.error) {
//             const trendData = await fetchRedditTrendingData(redditSub, tokenData.access_token);
            
//             const trendindResult = trendData.data.children.map(
//                 child => child.data.title
//             )

//             res.send(trendindResult);
//         }
//         res.status(tokenData.error).send(tokenData.message);
//     } catch (error) {
//         console.log(error)
//         res.status(500).send('Unexpected Error !')
//     }
// })

// module.exports = router;