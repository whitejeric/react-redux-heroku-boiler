# react-redux-heroku-boiler
A react/redux boilerplate specifically created to be hosted on heroku.
To setup:
  Clone repo
  Create heroku app in heroku dashboard or terminal
  cmd:
    npm install
    npm run build
    heroku login
    git init
    git add .
    git commit -m "init"
    heroku git:remote -a <HEROKU_APP_NAME>
    git push heroku master
    heroku open
  
To make changes:
  cmd:
   npm run build
   git add .
   git commit -m <COMMIT_TITLE>
   git push heroku master

To run locally with HMR:
  cmd:
    npm start
      or
    heroku local
