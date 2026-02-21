// Friends Birthday List in JavaScript

// Array to store friends
let friends = [];

// Function to add a friend
function addFriend(name, birthday) {
    // birthday should be in 'YYYY-MM-DD' format
    friends.push({ name: name, birthday: new Date(birthday) });
    console.log(`${name} added with birthday ${birthday}`);
}

// Function to list all friends
function listFriends() {
    console.log("Friends and Birthdays:");
    friends.forEach(friend => {
        let bday = friend.birthday.toISOString().split('T')[0];
        console.log(`${friend.name} - ${bday}`);
    });
}

// Function to find upcoming birthdays within next N days
function upcomingBirthdays(days = 30) {
    let today = new Date();
    let upcoming = friends.filter(friend => {
        let nextBday = new Date(friend.birthday);
        nextBday.setFullYear(today.getFullYear());
        let diffDays = (nextBday - today) / (1000 * 60 * 60 * 24);
        return diffDays >= 0 && diffDays <= days;
    });
    console.log(`Upcoming birthdays in next ${days} days:`);
    if (upcoming.length === 0) {
        console.log("No upcoming birthdays!");
    } else {
        upcoming.forEach(friend => {
            let bday = friend.birthday.toISOString().split('T')[0];
            console.log(`${friend.name} - ${bday}`);
        });
    }
}

// Example usage:
addFriend("Alice", "1995-03-25");
addFriend("Bob", "1992-03-30");
addFriend("Charlie", "1990-04-02");

listFriends();
upcomingBirthdays(10);  // Check for birthdays in next 10 days