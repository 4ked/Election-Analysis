# Election-Analysis

My function within the project was to create a working database for the counted votes. I did this by creating a spreadsheet for the website and coding it into the backend part of our project.

## Tech Stack

- Cloud Hosting: Heroku
- Backend: Node.js
- Database: Postgres
- Data API: State Government Web Pages
- Frontend: Javascript + HTML/CSS

## Setup Development Environment

To build the project from your local machine you need to setup the node.js environment properly.

### Step One: Install node.js

Download node.js [here](https://nodejs.org/en/). npm is a Node package manager that gives us tools to allow our server to run effectively. To ensure node was installed properly, open up the command line and type the following command below to check your current node version:

```sh
node -v
```

### Step Two: Install node.js

Move into the root/backend directory, and initialize the environment by typing:

```sh
npm install
```

### Step Three: Running Locally

For test development, enter the following and head to [http://localhost:3000](http://localhost:3000). Be wary there will be no valid database connection given we are deployed on heroku.

```sh
npm start
```
