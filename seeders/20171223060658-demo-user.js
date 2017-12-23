'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      { "id": 0, "first_name": "John", "last_name": "Doe", "email": "user0@mail.com", "username": "user0", "password": "password0", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 1, "first_name": "John", "last_name": "Doe", "email": "user1@mail.com", "username": "user1", "password": "password1", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 2, "first_name": "John", "last_name": "Doe", "email": "user2@mail.com", "username": "user2", "password": "password2", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 3, "first_name": "John", "last_name": "Doe", "email": "user3@mail.com", "username": "user3", "password": "password3", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 4, "first_name": "John", "last_name": "Doe", "email": "user4@mail.com", "username": "user4", "password": "password4", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 5, "first_name": "John", "last_name": "Doe", "email": "user5@mail.com", "username": "user5", "password": "password5", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 6, "first_name": "John", "last_name": "Doe", "email": "user6@mail.com", "username": "user6", "password": "password6", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 7, "first_name": "John", "last_name": "Doe", "email": "user7@mail.com", "username": "user7", "password": "password7", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 8, "first_name": "John", "last_name": "Doe", "email": "user8@mail.com", "username": "user8", "password": "password8", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 9, "first_name": "John", "last_name": "Doe", "email": "user9@mail.com", "username": "user9", "password": "password9", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 10, "first_name": "John", "last_name": "Doe", "email": "user10@mail.com", "username": "user10", "password": "password10", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 11, "first_name": "John", "last_name": "Doe", "email": "user11@mail.com", "username": "user11", "password": "password11", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 12, "first_name": "John", "last_name": "Doe", "email": "user12@mail.com", "username": "user12", "password": "password12", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 13, "first_name": "John", "last_name": "Doe", "email": "user13@mail.com", "username": "user13", "password": "password13", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 14, "first_name": "John", "last_name": "Doe", "email": "user14@mail.com", "username": "user14", "password": "password14", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 15, "first_name": "John", "last_name": "Doe", "email": "user15@mail.com", "username": "user15", "password": "password15", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 16, "first_name": "John", "last_name": "Doe", "email": "user16@mail.com", "username": "user16", "password": "password16", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 17, "first_name": "John", "last_name": "Doe", "email": "user17@mail.com", "username": "user17", "password": "password17", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 18, "first_name": "John", "last_name": "Doe", "email": "user18@mail.com", "username": "user18", "password": "password18", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 19, "first_name": "John", "last_name": "Doe", "email": "user19@mail.com", "username": "user19", "password": "password19", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 20, "first_name": "John", "last_name": "Doe", "email": "user20@mail.com", "username": "user20", "password": "password20", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 21, "first_name": "John", "last_name": "Doe", "email": "user21@mail.com", "username": "user21", "password": "password21", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 22, "first_name": "John", "last_name": "Doe", "email": "user22@mail.com", "username": "user22", "password": "password22", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 23, "first_name": "John", "last_name": "Doe", "email": "user23@mail.com", "username": "user23", "password": "password23", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 24, "first_name": "John", "last_name": "Doe", "email": "user24@mail.com", "username": "user24", "password": "password24", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 25, "first_name": "John", "last_name": "Doe", "email": "user25@mail.com", "username": "user25", "password": "password25", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 26, "first_name": "John", "last_name": "Doe", "email": "user26@mail.com", "username": "user26", "password": "password26", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 27, "first_name": "John", "last_name": "Doe", "email": "user27@mail.com", "username": "user27", "password": "password27", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 28, "first_name": "John", "last_name": "Doe", "email": "user28@mail.com", "username": "user28", "password": "password28", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 29, "first_name": "John", "last_name": "Doe", "email": "user29@mail.com", "username": "user29", "password": "password29", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 30, "first_name": "John", "last_name": "Doe", "email": "user30@mail.com", "username": "user30", "password": "password30", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 31, "first_name": "John", "last_name": "Doe", "email": "user31@mail.com", "username": "user31", "password": "password31", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 32, "first_name": "John", "last_name": "Doe", "email": "user32@mail.com", "username": "user32", "password": "password32", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 33, "first_name": "John", "last_name": "Doe", "email": "user33@mail.com", "username": "user33", "password": "password33", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 34, "first_name": "John", "last_name": "Doe", "email": "user34@mail.com", "username": "user34", "password": "password34", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 35, "first_name": "John", "last_name": "Doe", "email": "user35@mail.com", "username": "user35", "password": "password35", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 36, "first_name": "John", "last_name": "Doe", "email": "user36@mail.com", "username": "user36", "password": "password36", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 37, "first_name": "John", "last_name": "Doe", "email": "user37@mail.com", "username": "user37", "password": "password37", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 38, "first_name": "John", "last_name": "Doe", "email": "user38@mail.com", "username": "user38", "password": "password38", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 39, "first_name": "John", "last_name": "Doe", "email": "user39@mail.com", "username": "user39", "password": "password39", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 40, "first_name": "John", "last_name": "Doe", "email": "user40@mail.com", "username": "user40", "password": "password40", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 41, "first_name": "John", "last_name": "Doe", "email": "user41@mail.com", "username": "user41", "password": "password41", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 42, "first_name": "John", "last_name": "Doe", "email": "user42@mail.com", "username": "user42", "password": "password42", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 43, "first_name": "John", "last_name": "Doe", "email": "user43@mail.com", "username": "user43", "password": "password43", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 44, "first_name": "John", "last_name": "Doe", "email": "user44@mail.com", "username": "user44", "password": "password44", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 45, "first_name": "John", "last_name": "Doe", "email": "user45@mail.com", "username": "user45", "password": "password45", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 46, "first_name": "John", "last_name": "Doe", "email": "user46@mail.com", "username": "user46", "password": "password46", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 47, "first_name": "John", "last_name": "Doe", "email": "user47@mail.com", "username": "user47", "password": "password47", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 48, "first_name": "John", "last_name": "Doe", "email": "user48@mail.com", "username": "user48", "password": "password48", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 49, "first_name": "John", "last_name": "Doe", "email": "user49@mail.com", "username": "user49", "password": "password49", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 50, "first_name": "John", "last_name": "Doe", "email": "user50@mail.com", "username": "user50", "password": "password50", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 51, "first_name": "John", "last_name": "Doe", "email": "user51@mail.com", "username": "user51", "password": "password51", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 52, "first_name": "John", "last_name": "Doe", "email": "user52@mail.com", "username": "user52", "password": "password52", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 53, "first_name": "John", "last_name": "Doe", "email": "user53@mail.com", "username": "user53", "password": "password53", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 54, "first_name": "John", "last_name": "Doe", "email": "user54@mail.com", "username": "user54", "password": "password54", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 55, "first_name": "John", "last_name": "Doe", "email": "user55@mail.com", "username": "user55", "password": "password55", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 56, "first_name": "John", "last_name": "Doe", "email": "user56@mail.com", "username": "user56", "password": "password56", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 57, "first_name": "John", "last_name": "Doe", "email": "user57@mail.com", "username": "user57", "password": "password57", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 58, "first_name": "John", "last_name": "Doe", "email": "user58@mail.com", "username": "user58", "password": "password58", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 59, "first_name": "John", "last_name": "Doe", "email": "user59@mail.com", "username": "user59", "password": "password59", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 60, "first_name": "John", "last_name": "Doe", "email": "user60@mail.com", "username": "user60", "password": "password60", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 61, "first_name": "John", "last_name": "Doe", "email": "user61@mail.com", "username": "user61", "password": "password61", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 62, "first_name": "John", "last_name": "Doe", "email": "user62@mail.com", "username": "user62", "password": "password62", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 63, "first_name": "John", "last_name": "Doe", "email": "user63@mail.com", "username": "user63", "password": "password63", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 64, "first_name": "John", "last_name": "Doe", "email": "user64@mail.com", "username": "user64", "password": "password64", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 65, "first_name": "John", "last_name": "Doe", "email": "user65@mail.com", "username": "user65", "password": "password65", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 66, "first_name": "John", "last_name": "Doe", "email": "user66@mail.com", "username": "user66", "password": "password66", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 67, "first_name": "John", "last_name": "Doe", "email": "user67@mail.com", "username": "user67", "password": "password67", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 68, "first_name": "John", "last_name": "Doe", "email": "user68@mail.com", "username": "user68", "password": "password68", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 69, "first_name": "John", "last_name": "Doe", "email": "user69@mail.com", "username": "user69", "password": "password69", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 70, "first_name": "John", "last_name": "Doe", "email": "user70@mail.com", "username": "user70", "password": "password70", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 71, "first_name": "John", "last_name": "Doe", "email": "user71@mail.com", "username": "user71", "password": "password71", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 72, "first_name": "John", "last_name": "Doe", "email": "user72@mail.com", "username": "user72", "password": "password72", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 73, "first_name": "John", "last_name": "Doe", "email": "user73@mail.com", "username": "user73", "password": "password73", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 74, "first_name": "John", "last_name": "Doe", "email": "user74@mail.com", "username": "user74", "password": "password74", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 75, "first_name": "John", "last_name": "Doe", "email": "user75@mail.com", "username": "user75", "password": "password75", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 76, "first_name": "John", "last_name": "Doe", "email": "user76@mail.com", "username": "user76", "password": "password76", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 77, "first_name": "John", "last_name": "Doe", "email": "user77@mail.com", "username": "user77", "password": "password77", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 78, "first_name": "John", "last_name": "Doe", "email": "user78@mail.com", "username": "user78", "password": "password78", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 79, "first_name": "John", "last_name": "Doe", "email": "user79@mail.com", "username": "user79", "password": "password79", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 80, "first_name": "John", "last_name": "Doe", "email": "user80@mail.com", "username": "user80", "password": "password80", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 81, "first_name": "John", "last_name": "Doe", "email": "user81@mail.com", "username": "user81", "password": "password81", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 82, "first_name": "John", "last_name": "Doe", "email": "user82@mail.com", "username": "user82", "password": "password82", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 83, "first_name": "John", "last_name": "Doe", "email": "user83@mail.com", "username": "user83", "password": "password83", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 84, "first_name": "John", "last_name": "Doe", "email": "user84@mail.com", "username": "user84", "password": "password84", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 85, "first_name": "John", "last_name": "Doe", "email": "user85@mail.com", "username": "user85", "password": "password85", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 86, "first_name": "John", "last_name": "Doe", "email": "user86@mail.com", "username": "user86", "password": "password86", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 87, "first_name": "John", "last_name": "Doe", "email": "user87@mail.com", "username": "user87", "password": "password87", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 88, "first_name": "John", "last_name": "Doe", "email": "user88@mail.com", "username": "user88", "password": "password88", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 89, "first_name": "John", "last_name": "Doe", "email": "user89@mail.com", "username": "user89", "password": "password89", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 90, "first_name": "John", "last_name": "Doe", "email": "user90@mail.com", "username": "user90", "password": "password90", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 91, "first_name": "John", "last_name": "Doe", "email": "user91@mail.com", "username": "user91", "password": "password91", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 92, "first_name": "John", "last_name": "Doe", "email": "user92@mail.com", "username": "user92", "password": "password92", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 93, "first_name": "John", "last_name": "Doe", "email": "user93@mail.com", "username": "user93", "password": "password93", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 94, "first_name": "John", "last_name": "Doe", "email": "user94@mail.com", "username": "user94", "password": "password94", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 95, "first_name": "John", "last_name": "Doe", "email": "user95@mail.com", "username": "user95", "password": "password95", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 96, "first_name": "John", "last_name": "Doe", "email": "user96@mail.com", "username": "user96", "password": "password96", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 97, "first_name": "John", "last_name": "Doe", "email": "user97@mail.com", "username": "user97", "password": "password97", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 98, "first_name": "John", "last_name": "Doe", "email": "user98@mail.com", "username": "user98", "password": "password98", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 99, "first_name": "John", "last_name": "Doe", "email": "user99@mail.com", "username": "user99", "password": "password99", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 100, "first_name": "John", "last_name": "Doe", "email": "user100@mail.com", "username": "user100", "password": "password100", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" },
      { "id": 101, "first_name": "James", "last_name": "Rutledge", "email": "jmz527@mail.com", "username": "jmz527", "password": "password527", "createdAt": "2017-12-23 03:06:05.859 +00:00", "updatedAt": "2017-12-23 03:06:05.859 +00:00" }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};