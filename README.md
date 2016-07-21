# react/redux/heroku boilerplate
A react/redux template specifically created to be served by heroku.
##setup:
  - Clone repo
  - Create heroku app in heroku dashboard or terminal
  - cmd:
    - npm install
    - npm run build
    - heroku login
    - git init
    - git add .
    - git commit -m "init"
    - heroku git:remote -a <HEROKU_APP_NAME>
    - git push heroku master
    - heroku open
  
##making changes:
  - cmd:
   - npm run build
   - git add .
   - git commit -m <COMMIT_TITLE>
   - git push heroku master

##run locally with HMR:
  - cmd:
    - npm start
      - or
    - heroku local


[Here's a demo](https://react-redux-heroku-boiler.herokuapp.com/)
