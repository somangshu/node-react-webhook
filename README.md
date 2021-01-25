<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">node-react-webhook-example</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> This project is intended to showcase websocket communication between two React clients using a Node server.
    <br> 
</p>

## 📝 Table of Contents

-   [About](#about)
-   [Getting Started](#getting_started)
-   [Usage](#usage)
-   [Built Using](#built_using)
-   [Authors](#authors)
-   [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

This project is intended to showcase websocket communication between two React clients using a Node server.

When host clicks on the timer (15 sec, 30 sec, 45 sec, 60 sec etc), there should be a countdown timer displayed on the participant page. The timer should refresh every second and should be on the screen till it reaches zero. Once the timer reaches zero, it should play any sound.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them.

```
node > 10.0
```

### Installing

A step by step series of examples that tell you how to get a development env running.

Clone repository to local machine

```
git clone repo_name
```

Change directory to project root and install all node module for backend server

```
cd repo_name || npm install
```

Change directory to client and install all node module for react app

```
cd client/ || npm install
```

Run node server on root

```
npm start
```

Your server is not running on http://localhost:3000, Once you open the app, create a new meeting to open the host app.

## 🎈 Usage <a name="usage"></a>

Once the app is opened and a meeting is created, the host can start replaying any countdown message to any and all participants of the meeting. The the host page is loaded the dialog shows url to invite a participant. Once the participant meeting view is opened, the client is subscribed to the receive any new messages. Now if the host inits the countdown even the participants should be able to see this.

## ⛏️ Built Using <a name = "built_using"></a>

-   [NodeJS](https://nodejs.org/en/) - Server Environment
-   [Express](https://expressjs.com/) - Server Framework
-   [ReactJS](https://vuejs.org/) - Web Framework
-   [MaterialUI](https://material-ui.com/) - React UI Library
-   [Webpack](https://webpack.js.org/) - Bundling tool

## ✍️ Authors <a name = "authors"></a>

-   [@somangshu](https://github.com/somangshu) - Architecture and Implementation

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

-   Hat tip to anyone whose code was used
-   Inspiration
-   References
