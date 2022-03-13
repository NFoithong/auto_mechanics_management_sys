# auto_mechanics_management_sys

## Table of Contents

  - [User Story](#user-story)
  - [Technologies](#technologies)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Installation](#installation)
  - [Mockup and Prototype](#mockup and prototype)
  - [Link to deployed Heroku application:](#link-to-deployed-heroku-application)
  - [Contributors](#contributors)

## User Story
AS A Car Owner who wants to maintain the health of my car
I WANT a CMS-style application site
SO THAT I can be a aware of the status repairs, and appointments.

## Technologies
We used Node.js, Express.js, Handlebars, Bootstrap, Sequelize, Figma, Fullpage.js

## Acceptance Criteria
GIVEN a CMS-style application site
- WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes the navigation links for the homepage and the dashboard; and the option to log in or Signup
- WHEN I click on any links in the navigation
  THEN I am prompted to either sign up or sign in
- WHEN I choose to sign up
  THEN I am prompted to create a username and password
- WHEN I click on the sign-up button
  THEN my user credentials are saved and I am logged into the site
- WHEN I revisit the site at a later time and choose to sign in
  THEN I am prompted to enter my username and password
- WHEN I am signed in to the site
  THEN I see navigation links for the homepage, the status page, appointment page, and the option to log out
- WHEN I click on the Appointments option in the navigation
  THEN I am taken to the homepage and presented existing appointments that include the Date and Time, and Car, and Owner
- WHEN I click on an appointment
  THEN I am presented with a list appointment options and have the option to leave a comment
- WHEN I select all the options needed for the repair and click on the submit button while signed in
  THEN the repair items are moved to the Status Page 
- WHEN I click on the dashboard option in the navigation
  THEN I am taken to the dashboard and presented with any appointments and the option to add a new appointment
- WHEN I click on the button to add a new appointment
  THEN I am prompted to enter both a date and time and car for my appointment (maybe add repairs needed from user)
- WHEN I click on the logout option in the navigation
  THEN I am signed out of the site
- WHEN I am idle on the site for more than a set time
  THEN  I am prompted to log in again before I can add appointments

## Installation

To install this application: 

$ git clone {address}
$ cd ../path/to/the/file
$ npm install
$ npm start

## Mockup and Prototype

click link to see mockupdesign and prototyping

https://www.figma.com/proto/xtTTkjbXDemiMTkIKfCKHT/Group4-project2-prototype-v1-final?node-id=99%3A547&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=99%3A547&show-proto-sidebar=1

## Link to deployed application:
 - Heroku https://fast-n-furious.herokuapp.com/ 
 - GitHub https://github.com/NFoithong/auto_mechanics_management_sys

## Screenshot od Live Application

<img width="1186" alt="ScreenShot" src="https://user-images.githubusercontent.com/69065671/158042302-a2c8d1c5-f4e4-4ac1-9df5-0343870c0464.png">

## Contributors
- @rdenton3 (https://github.com/rdenton3)
- @Maryjezek (https://github.com/Maryjezek)
- @NFoithong
