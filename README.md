# Weather App (Reactjs + Nodejs + Express + openweatherapi )

Hi! My name is **Abhinav Maharana**, I have created weather app as a assignment. I tried to implement the features mentioned in pdf.

# Prerequisite

1.  Must have basic knowledge of **Node**, **React**, **Express**. 
2.  Node - 
3.  React - 
4.  Express - 
5.  RestApi -

# Install Dependencies

**For Backend** - `npm i` or `yarn or yarn install`

**For Frontend** - `cd frontend` `npm i or yarn install`

## Env Variables

Make Sure to Create a config.env file in backend/config directory and add appropriate variables in order to use the app.

**Essential Variables**
PORT= 
API_BASE_URL = `https//:api.openweathermap.org/data/2.5/weather`
API_KEY_NAME = `appid`
API_KEY_VALUE = `YOUR OPENWEATHER API KEY` 

_fill each filed with your info respectively_

**Workflow for making this app**

1) I created a backend server in nodejs. The folder stucture as follows
   * Config folder- In this env file is present. I was planning to implement mongodb but stucked with fixing the app 😢
   
   * Controllers folder - In this the main calling of api and creating restapi was done.

   * Middleware folder - It consists of catchAsyncErrors and error file.

   * Routes folder - This is responsible for creating api routes.

   * Utils folder -  It consist of Error handler file.

   * app.js - In this file all the routes calling, rate limiting is done.

   * server.js - This file is just use to call the whole api.

   `Note: App.js and server.js can be merged in one file. i made seperate file to get clear understanding where t change what.`

2) For Frontend, I choose reactjs and tailwindcss for this project.
   * I started making the frontend according to the design given in the pdf with dummy data.
   * After completing the frontend with the dummy data.
   * I started working on the connection of frontend and backend for that i have to add `"proxy": "http://localhost:5000"` in frontend package.json.
    * After connecting, i created folders in src directory. 
      * Context Folder - I created this folder with weatherContext.js file to create a easy way of passing data throughout all the app without passing props manually.
      * Helper Folder - In this helper folder, it has two files, QueryUtil.js and TemperatureUtil.js
        * QueryUtil.js - This file help me to get the query easily without writing two or three lines of code to get data from api in every component.
        * TemperatureUtil.js - this file help me in converting temperature in ℉ or ℃ easily in every required component. I have written converting formula in this.
      * Hooks Folder - This folder consists of custom made hooks that helps in reducing repeated code.
        * FetchHook.js - This is a custom made hook for fetching data from api.
        * LocationHook.js - This is a custom made hook for getting user's location.
    * lib folder consists of whole world data which i was planning to use for autocomplete.

**Challenges Faced**
* heroku failed my deployment a lot of time so at the end i had to deploy it in vercel for that reason their might be few css bugs in production but in local it will work perfect.
* From yesterday, my searchbar stopped working and i am still trying to fix it.

**Planned to implement but wasn't able to do due to the above challenges**

* I planned to implement a user authentication using mongodb and also store the user saved location in the database and displayed that. For the logic was to create a User Model Schema and Saved Location Schema and create relevate api routes  and connect it with frontend.

I will implement this stuffs in future.

