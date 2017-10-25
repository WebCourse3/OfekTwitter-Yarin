window.onload = loadTweets;

let tweets = [
    { username: 'Yarin', text: 'Random Text' },
    { username: 'Bob', text: 'Different Random Text' },
    { username: 'Lichter', text: 'Some other Random Text' },
];

function publishTweet(username, text) {
    const tweet = {
        username: username,
        text: text
    }

    tweets.push(tweet);

    loadTweets();
    clearTweetInput();
}

function clearTweetInput() {
    document.getElementById('tweet-input').value = '';
}

function loadTweets() {
    let tweetsSection = document.getElementById('tweets-section');
    tweetsSection.innerHTML = ''; // Clear all tweets

    for (let i=0; i < tweets.length; i++) {
        const element = createTweetElement(tweets[i].username,
                                           tweets[i].text);
        
        tweetsSection.appendChild(element);
    }
}

function createTweetElement(username, text) {
    let element = document.createElement('div');
    element.setAttribute('class', 'tweet');

    // Avatar
    let avatarDiv = document.createElement('div');
    avatarDiv.setAttribute('class', 'tweeter-avatar');
    let img = document.createElement('img');
    img.setAttribute('src', 'images/avatar.jpg');
    img.setAttribute('alt', 'avatar');
    img.setAttribute('class', 'avatar');
    avatarDiv.appendChild(img);

    // Username
    let usernameDiv = document.createElement('div');
    usernameDiv.setAttribute('class', 'tweeter-username');
    usernameDiv.innerText = username;

    // Tweet Text
    let textDiv = document.createElement('div');
    textDiv.setAttribute('class', 'tweet-text');
    textDiv.innerText = text;

    element.appendChild(avatarDiv);
    element.appendChild(usernameDiv);
    element.appendChild(textDiv);

    return element;
}