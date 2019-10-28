# Meetapp Frontend

In this challenge was built the front-end with ReactJS of Meetapp that use the API developed in this [repository](https://github.com/tgmarinho/meetapp-api).

Created an application from scratch using create-react-app and configured linting tools, [Reactotron](https://github.com/infinitered/reactotron), [Redux](https://www.github.com/reduxjs/redux) and [Redux Saga](https://github.com/redux-saga/redux-saga).

This application is used by meetup organizers and do not have subscribing features.

The project layout is attached to assets-challenge folder in this repository.

## Pages

### SignIn

- [x] User must be able to authenticate using email and password.
![](https://raw.githubusercontent.com/tgmarinho/meetapp/master/screenshots/sign-web.png)

### SignUp

- [x] User must be able to sign up with name, email and password.
![](https://raw.githubusercontent.com/tgmarinho/meetapp/master/screenshots/signup-web.png)

### Dashboard

- [x] User should be able to list the meetups they organize and click to see details of a meetup.
- [x] From this page the user can navigate to meetup creation page.
![](https://raw.githubusercontent.com/tgmarinho/meetapp/master/screenshots/listMeetup-werb.png)

### Details

- [x] User must be able to view details of a previously registered meetup.
- [x] In this page the user can edit the data of a meetup or even cancel a meetup.
![](https://raw.githubusercontent.com/tgmarinho/meetapp/master/screenshots/details-web.png)

### Create or Edit

- [x] User must be able to create or edit information about meetups he organizes.
- [x] Display the meetup banner image preview when the user selects an image.
- [x] Use validation in the fields.
![](https://raw.githubusercontent.com/tgmarinho/meetapp/master/screenshots/edit-web.png)

### Profile

- [x] User must be able to edit your personal data.
- [x] Use validation in the fields.
![](https://raw.githubusercontent.com/tgmarinho/meetapp/master/screenshots/profile-web.png)

## How to Setup

### Prerequisites

The project can be built with npm or yarn, so choose one of the approach bellow in case you don't have any installed on your system.

* **Npm** is distributed with Node.js which means that when you download Node.js, you automatically get npm installed on your computer. [Download Node.js](https://nodejs.org/en/download/)

* **Yarn** is a package manager built by Facebook Team and seems to be faster than npm in general.  [Download Yarn](https://yarnpkg.com/en/docs/install)

### Installing

To download the project follow the instructions bellow:

Download, install dependencies and start the API server

```
1. git clone https://github.com/tgmarinho/meetapp-api.git
2. cd meetapp-api
3. yarn install
4. yarn run dev
```

Then download, install dependencies and run the project:

```
5. git clone https://github.com/tgmarinho/meetapp-web.git
6. cd meetapp-web
7. yarn install
8. yarn start
```



## Authors

| ![Thiago Marinho](https://avatars2.githubusercontent.com/u/380327?s=150&v=3)|
|:---------------------:|
|  [Thiago Marinho](https://github.com/tgmarinho/)   |


Thanks!
