require('dotenv').config()
const express = require('express'),
      session = require('express-session'), 
      massive = require('massive'),
      app = express(),
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
      auth = require('./controllers/authController')

//Top-level Middleware
app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 * 24 *14}, //two weeks
    secret: SESSION_SECRET
}))


//Endpoints
//auth endpoints
app.post('/auth/register', auth.register)  //getting error: illegal arguments: number, string form postman at this endpoint
app.post('/auth/login', auth.login)
app.delete('/auth/logout', auth.logout)
app.get('/auth/user', auth.getUser)

//post endpoints



//DB and Server Connection
massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})
.then(dbInstance => {
    app.set('db', dbInstance)
    console.log('DB connected')
    app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`))
})
.catch(err => console.log(err))



