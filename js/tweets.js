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
    let element = document.createElement('blockquote');
    element.setAttribute('class', 'tweet');

    // Avatar
    let avatarElement = document.createElement('div');
    avatarElement.setAttribute('class', 'tweeter-avatar');
    let img = document.createElement('img');
    img.setAttribute('src', 'images/avatar.jpg');
    img.setAttribute('alt', 'avatar');
    img.setAttribute('class', 'avatar');
    avatarElement.appendChild(img);

    // Tweet Text
    let textElement = document.createElement('p');
    textElement.setAttribute('class', 'tweet-text');
    textElement.innerText = text;

    // Username
    let usernameElement = document.createElement('footer');
    usernameElement.setAttribute('class', 'tweeter-username');
    usernameElement.innerText = username;

    element.appendChild(avatarElement);
    element.appendChild(textElement);
    element.appendChild(usernameElement);

    return element;
}