# Tasker

Tasker is a TODO-List with 'Shuffle' thing. 
Tasker use firebase as database to store your tasks.

## Introduction

We all use todo-list for storing lists, but in the end of adding we have so many tasks and we don't know where to start from. Here comes the shuffiling. 

By shuffling the list you can get a random-order to your tasks, so you don't need to thing about the order of the tasks - just start do them.

## How To Use?
You can add as much as you like tasks in the main page, and by double-click on the tasks it become 'completed' and disappear from the tasks list.

If you want to see all your completed tasks, you need to switch to the 'Completed' Link in the right-top corner on the navigation bar.

By clicking 'Delete All' all the uncompleted tasks will be deleted, and if you want to delete also the completed tasks - you need to switch to the compelted list and delete them one by one.

By clicking the 'Shuffle' button, the tasks will change their order randomly.

## What I need to do to use it?

First of all you need :

- NodeJs installed

- Google account


Then:

You need to start a new project in firebase : https://firebase.google.com/

After that, you need to download the release and update /src/fire.js file with the correct values from firebase. 

Then you just need to call from the downloaded folder:

 `npm start` 
 
to start a new server and open the app in:

http://localhost:3000/


