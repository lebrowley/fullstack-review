# MVP
- login functionality
- post posts
- delete/edit posts
- control the view based on authorization

**icebox- extras** 
- delete account
- play music
- customize background
- datamine customers
- add friends (fav five list)
 
## Database
User 
```SQL
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(50),
    password VARCHAR(50),  --this will be the hash password
);
```
Post
```SQL
CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    content VARCHAR(250),
    created_at DATE
);
```
**SQL Queries**


## Server
**dependencies**
- express
- express-session
- massive
- dotenv
- bcrypt

**controllers**
- auth controller
    - register
    - login
    - logout
    - getUser
- post controller

**endpoints**
- auth:
    - app.post('/auth/register')
    - app.post('/auth/login')
    - app.delete('/auth/logout')  
    - app.get('/auth/user')  

- post: 
    - app.get('/api/posts')
    - app.post('/api/post') 
    - app.put('/api/posts/:post_id')  
    - app.delete('/api/posts/:post_id')

## Client
**dependencies**
- axios
- react-router-dom
- react-redux
- redux
- redux-promise-middleware

**routes**
- landing view (/)
- register view (/register)
- profile view (/profile)
- dashboard view (/dashboard)

**file structure**
- src/
    - App.js
    - App.css
    - index.js
    - reset.css (add this and all below)
    - .env (put in .gitignore)
    - redux/ 
        - store
        - reducer
    - components/
        - Landing.js / .css
        - Register.js / .css
        - Dashboard.js / .css
        - Profile.js / .css
        - PostContainer.js /.css
        - Post.js / .css
        - Edit.js / .css
        - Header.js / .css
        - AuthHeader.js / .css