window.onload = () => {
    loadUsers(filteredUsers);
    loadFollowing()
};

const users = [
    {
        username: 'Yarin',
        avatar: 'images/avatar.jpg'
    },
    {
        username: 'Bob',
        avatar: 'images/avatar.jpg'
    },
    {
        username: 'Lichter',
        avatar: 'images/avatar.jpg'
    },
    {
        username: 'Moshe',
        avatar: 'images/avatar.jpg'
    },
    {
        username: 'Dumbo',
        avatar: 'images/avatar.jpg'
    },
];

let filteredUsers = users;

let following = [];

function toggleFollow(username) {
    if (following.indexOf(username) === -1) {
        following.push(username);
    } else {
        following.splice(following.indexOf(username), 1);
    }

    loadFollowing();
    loadUsers(filteredUsers);
}

function filterUsers(keyword) {
    filteredUsers = users.filter( u => u.username.toLowerCase().includes(keyword.toLowerCase()) );
    loadUsers(filteredUsers);
}

function loadUsers(users) {
    let usersSection = document.getElementById('users-section');
    usersSection.innerText = '';

    for (const user of users) {
        usersSection.appendChild(createUserElement(user));
    }
}

function loadFollowing() {
    let followingSection = document.getElementById('following-section');
    followingSection.innerText = '';

    for (const user of users) {
        if (following.indexOf(user.username) !== -1) {
            followingSection.appendChild(createUserElement(user));
        }
    }
}

function createUserElement(user) {
    let element = document.createElement('div');
    element.setAttribute('class', 'user col-xs-12 col-md-4 col-lg-4');

    let detailsList = document.createElement('ul');

    let avatarItem = document.createElement('li');
    let img = document.createElement('img');
    img.setAttribute('src', 'images/avatar.jpg');
    img.setAttribute('alt', 'avatar');
    img.setAttribute('class', 'avatar');
    avatarItem.appendChild(img);

    let usernameItem = document.createElement('li');
    usernameItem.innerText = user.username;

    let followItem = document.createElement('li');
    let button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'btn btn-primary');
    button.onclick = () => {
        toggleFollow(user.username);
        button.innerText = (following.indexOf(user.username) === -1) ? 'Follow' : 'UnFollow';
    }
    button.innerText = (following.indexOf(user.username) === -1) ? 'Follow' : 'UnFollow';
    followItem.appendChild(button);

    detailsList.appendChild(avatarItem);
    detailsList.appendChild(usernameItem);
    detailsList.appendChild(button);
    element.appendChild(detailsList);

    return element;
}