---
title: 'Building a Chat App with Node/Express'
excerpt: 'This post will teach how to build a Chat App using Node/Express.js, WebSockets, and Moment'
coverImage: ''
date: '2021-11-01T15:49:51.800Z'
author:
  name: Bannon Tanner
  picture: ''
ogImage:
  url: ''
---

# Introduction

This post will teach how to build a Chat App using Node/Express.js, WebSockets, and Moment

## Credit

This blog will be following Chimezie Enyinnaya's [blog post](https://www.cometchat.com/tutorials/how-to-build-a-chat-app-with-websockets-and-node-js) about building a Chat App with Websockets and Node.js.

I am rewriting as my own blog because sometimes I find there is knowledge missing from these tutorials as to *WHY* things are done the way they are if you are an absolute beginner to a technology/framework.

Some of the words will be redundant with the original blog post but this will also help later to explain things in further detail.

## Dependencies

- [Express](https://www.npmjs.com/package/express): *lightweight and flexible Node.js web framework that provides robust set of features for building applications.* This will help streamline the application building so that we do not have to write vanilla node.js code for every piece we build. Express.js is used solely for building web-apps using approaches and principles of Node.js. [Here is another post](https://www.geeksforgeeks.org/node-js-vs-express-js/) explaining the differences between Node.js and Express.js in more detail
- [Socket.IO](https://www.npmjs.com/package/socket.io): *enables real-time bi-directional event-based communication. Socket abstract WebSocket connections. It uses WebSocket for transportation and then fallback to long polling when WebSockets fail to establish a connection*
- [Moment](https://www.npmjs.com/package/moment): helps you manipulate and format dates in JavaScript
- [Nodemon](https://www.npmjs.com/package/nodemon): a tool that helps develop Node.js application by automatically restarting the node application when file changes in the directory are detected