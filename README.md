# recruit-test

This repository aims to evaluate your abilities. Please do the following tasks and send your repo to jobs [at] d-rating.com

## What you are supposed to know

D-Rating is looking for **confirmed talents** to help us growing. You should be experimented into following skills :
 - NodeJS
 - React
 - Elasticsearch / Postgresql

These are the most important pieces of our stack. Our infrastructure is _of course_ containerized with Docker. If you don't feel confortable with ALL theses skills, please do not waste your time.

## What we don't want

You are not supposed to work hard to make this work. This should be easy. If it takes time, you are not experimented enough to apply. 

## What you are supposed to do

- Tell us what is wrong in this repo. There are some mistakes, bad practices into the code
- Implement the function to be implemented and make it callable from route "/test"
- Write a Dockerfile for this server
- Tell us how long this took to do the test
- Tell us what salary you expect / Full remote is possible.

## Work done ? What's next ?

If the work is done and was easy. Please share your code with us the way you want. You are supposed to know git, so don't send us a ZIP of your code ;)

# RESPONSE
## What is wrong with this repo
- No error handling, what is really crucial. There are many ways to deal with them: in Vyte we used callbacks and logged errors in console, In Nestor we used async-await with try catch blocks. And errors were logged in Datadog by winston logger. Express has a built-in error handler, but allows to write custom ones.

- No path-aliases. I prefer to use aliases like "@routes" instead of "../routes", aliases are more readable and safe.

- Exposing hard-coded PORT. Normally such things are defined in constants or rather in enviroment variables. In Nestor we used .env file to stock such data.

- It feels like there are also some security problems, but I cannot figure out what exactly.

- No tests. For such a small app I would use mocha-chai, for more complex app - jest.



