# React wall app 
Simple React app where all users can view messages posted to the wall. Create an account and sign in to post your own. Email verification is required upon creating an account, passwords are hashed, and JWT used for authorization to post messages.

See screenshots below for the full user flow.

## Get this running...
This front end was developed in conjunction with a Mongo database and Node/express API - the latter of which you can find [here](https://github.com/dboudet/react-wall-app-api)

Once you have the backend up and running:
1. Fork/clone this repo
2. Run `yarn` or `yarn install` to install all dependencies
3. Create a **config.js** file in your project's **src** folder with the following contents. This will used to hash users' passwords before sending them to the API and saving them to the database:
```javascript
export const mySalt = "$2a$10$jVyAWBR3gWWyNcEQqx/hwY"
```
4. Run `yarn start` to run the application in your browser!

## Screenshots

### Homepage / Wall
All users can view messages posted to the wall.
![Homepage](/public/screenshots/homepage.png)

### Create an Account
Upon creating an account, a verification link will be sent to the email address provided.
![Create Account Page](/public/screenshots/createNewAccount.png)

Follow the link in the email to verify your email address.
![Verification Email](/public/screenshots/verificationEmail.png)

![Email Verified](/public/screenshots/emailVerified.png)

Once email has been verified, you can sign in.
![Sign In](/public/screenshots/signIn.png)

Once signed in, you're directed to the Post Message screen and can post your message.
![Post Message](/public/screenshots/postMessage.png)

Now your new message has been posted to the wall!
![New Message Posted](/public/screenshots/newMessagePosted.png)
