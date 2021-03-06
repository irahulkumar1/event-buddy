const moment = require('moment');
const mongoose = require('mongoose');

const user1Id = mongoose.Types.ObjectId();
const user2Id = mongoose.Types.ObjectId();
const user3Id = mongoose.Types.ObjectId();

const event1Id = mongoose.Types.ObjectId();
const event2Id = mongoose.Types.ObjectId();
const event3Id = mongoose.Types.ObjectId();
const event4Id = mongoose.Types.ObjectId();
const event5Id = mongoose.Types.ObjectId();
const event6Id = mongoose.Types.ObjectId();

const thread1Id = mongoose.Types.ObjectId();
const thread2Id = mongoose.Types.ObjectId();
const thread3Id = mongoose.Types.ObjectId();

const post1Id = mongoose.Types.ObjectId();
const post2Id = mongoose.Types.ObjectId();
const post3Id = mongoose.Types.ObjectId();
const post4Id = mongoose.Types.ObjectId();
const post5Id = mongoose.Types.ObjectId();

const category1Id = mongoose.Types.ObjectId();
const category2Id = mongoose.Types.ObjectId();
const category3Id = mongoose.Types.ObjectId();
const category4Id = mongoose.Types.ObjectId();
const category5Id = mongoose.Types.ObjectId();

module.exports = {
  "events": [
    {
      "_id": event1Id,
      "location": "Karnataka, IN",
      "processedLocation": "BTM stage 2",
      "title": "Night in the City",
      "image": "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2452&q=80",
      "description": "Some description of this event. I dont know what to talk about",
      "shortInfo": "Just some short info, I don't kow just be yourself.",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "startDate": moment().add(2, 'days').toISOString(),
      "timeFrom": "14:00",
      "timeTo": "18:00",
      "joinedPeopleCount": 1,
      "status": "active",
      "category": category1Id,
      "joinedPeople": [user2Id],
      "eventCreator": user1Id
    },
    {
      "_id": event2Id,
      "location": "Mumbai, IN",
      "processedLocation": "Andheri East",
      "title": "New Aquaman",
      "image": "https://images.unsplash.com/photo-1527956041665-d7a1b380c460?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
      "description": "Lets watch new aquaman together",
      "shortInfo": "Just some short info, I don't kow just be yourself.",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "startDate": moment().add(7, 'days').toISOString(),
      "timeFrom": "08:00",
      "timeTo": "10:00",
      "joinedPeopleCount": 2,
      "status": "active",
      "category": category2Id,
      "joinedPeople": [user1Id, user3Id],
      "eventCreator": user2Id
    },
    {
      "_id": event3Id,
      "location": "Delhi, IN",
      "processedLocation": "Red Fort",
      "title": "Cycling Together",
      "image": "https://images.unsplash.com/photo-1527956041665-d7a1b380c460?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
      "description": "Lets watch new Tour De France",
      "shortInfo": "Just some short info, I don't kow just be yourself.",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "startDate": moment().add(7, 'days').toISOString(),
      "timeFrom": "08:00",
      "timeTo": "10:00",
      "joinedPeopleCount": 2,
      "status": "active",
      "category": category5Id,
      "joinedPeople": [user1Id, user3Id],
      "eventCreator": user2Id
    },
    {
      "_id": event4Id,
      "location": "Los Angeles, US",
      "processedLocation": "losangelesus",
      "title": "New Aquaman 2",
      "image": "https://images.unsplash.com/photo-1527956041665-d7a1b380c460?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
      "description": "Lets watch new aquaman together",
      "shortInfo": "Just some short info, I don't kow just be yourself.",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "startDate": moment().add(7, 'days').toISOString(),
      "timeFrom": "08:00",
      "timeTo": "10:00",
      "joinedPeopleCount": 2,
      "status": "active",
      "category": category1Id,
      "joinedPeople": [user1Id, user3Id],
      "eventCreator": user2Id
    },
    {
      "_id": event5Id,
      "location": "Hyderabad, IN",
      "processedLocation": "Golconda Fort",
      "title": "New Aquaman 5",
      "image": "https://images.unsplash.com/photo-1527956041665-d7a1b380c460?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
      "description": "Lets watch new aquaman together",
      "shortInfo": "Just some short info, I don't kow just be yourself.",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "startDate": moment().add(7, 'days').toISOString(),
      "timeFrom": "08:00",
      "timeTo": "10:00",
      "joinedPeopleCount": 1,
      "status": "active",
      "category": category2Id,
      "joinedPeople": [user1Id, user3Id],
      "eventCreator": user2Id
    },
    {
      "_id": event6Id,
      "location": "London, UK",
      "processedLocation": "londonuk",
      "title": "New Spiderman",
      "image": "https://images.unsplash.com/photo-1527956041665-d7a1b380c460?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
      "description": "Lets watch new spiderman together",
      "shortInfo": "Just some short info, I don't kow just be yourself.",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "startDate": moment().add(7, 'days').toISOString(),
      "timeFrom": "08:00",
      "timeTo": "10:00",
      "joinedPeopleCount": 2,
      "status": "active",
      "category": category3Id,
      "joinedPeople": [user1Id, user3Id],
      "eventCreator": user2Id
    }
  ],
  "users": [
    {
      "_id": user1Id,
      "avatar": "https://b.kisscc0.com/20180718/urw/kisscc0-ninja-computer-icons-samurai-youtube-avatar-ninja-5b4ed903c2dd20.4931332915318940197982.jpg",
      "email": "filip@gmail.com",
      "name": "Filip Jerga",
      "info": "Bla bla bla bla",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "username": "Rhonyn99",
      "password": "testtest",
      joinedEvents: [event2Id, event3Id, event4Id, event5Id, event6Id]
    },
    {
      "_id": user2Id,
      "avatar": "https://www.clipartmax.com/png/middle/195-1956720_%5B-img%5D-avatar.png",
      "email": "peter@gmail.com",
      "name": "Peter Green",
      "info": "Bla bla bla bla",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "username": "Petergreen",
      "password": "testtest1",
      joinedEvents: [event1Id]
    },
    {
      "_id": user3Id,
      "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuqyc3j2s3bL4DIkC8uC9h0rcAdsDXcwJPNh8XHWbLQfHbOpVU",
      "email": "kevin@gmail.com",
      "name": "Kevin Rock",
      "info": "I have a famous name",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "username": "Kevin21",
      "password": "testtest2",
      joinedEvents: [event2Id, event3Id, event4Id, event5Id, event6Id]
    }
  ],
  "threads": [
    {
      "_id": thread1Id,
      "title": "Should I take some food?",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "event": event1Id,
      "user": user1Id,
      "posts": [post1Id, post2Id]
    },
    {
      "_id": thread2Id,
      "title": "I dont know what to think about this.",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "event": event2Id,
      "user": user2Id,
      "posts": [post3Id, post4Id]
    },
    {
      "_id": thread3Id,
      "title": "Here should be something about thread 3",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "event": event2Id,
      "user": user2Id,
      "posts": [post5Id]
    }
  ],
  "posts": [
    {
      "_id": post1Id,
      "text": "I will be late",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "thread": thread1Id,
      "user": user1Id
    },
    {
      "_id": post2Id,
      "text": "I like turtles",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "thread": thread1Id,
      "user": user1Id
    },
    {
      "_id": post3Id,
      "text": "I will be late",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "thread": thread2Id,
      "user": user2Id,
    },
    {
      "_id": post4Id,
      "text": "I like turtles",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "thread": thread2Id,
      "user": user2Id,
    },
    {
      "_id": post5Id,
      "text": "I like writing about nothing",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "thread": thread3Id,
      "user": user2Id,
    }
  ],
  "categories": [
    {
      "_id": category1Id,
      "name": "sport",
      "image": "https://images.unsplash.com/photo-1508355991726-ebd81e4802f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1506&q=80"
    }, {
      "_id": category2Id,
      "name": "cinema",
      "image": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      "image2": "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80",
      "image3": "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
    {
      "_id": category3Id,
      "name": "music",
      "image": "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80"
    },
    {
      "_id": category4Id,
      "name": "dance",
      "image": "https://images.unsplash.com/photo-1509670811615-bb8b07cb3caf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80"
    },
    {
      "_id": category5Id,
      "name": "party",
      "image": "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
    },
    {
      "_id": mongoose.Types.ObjectId(),
      "name": "literature",
      "image": "https://images.unsplash.com/photo-1490633874781-1c63cc424610?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
    },
    {
      "_id": mongoose.Types.ObjectId(),
      "name": "food",
      "image": "https://images.unsplash.com/photo-1536510233921-8e5043fce771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1542&q=80"
    },
    {
      "_id": mongoose.Types.ObjectId(),
      "name": "games",
      "image": "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
    }
  ]
};
