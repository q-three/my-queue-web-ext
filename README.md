# My Queue Chrome Extension
This Extension pairs with the My Queue project as an alternative, light-weight front end.<br>
The purpose is to be able to add things to your/your friend's Queues quickly and from any page.<br>

The initial popup allows you to login, separate from the regular front-end's login.<br>
Your login will persist over Chrome Sessions and Tabs, but does not hold over to the regular<br>
front end web interface. It only persists in the scope of this extension.<br>
However, you must have a valid login. You will not be able to sign up through the Extension.<br>

After login the main popup screen allows you to add to your Queue or a friend's.<br>
It fills in the current tab's URL by default, but can be cleared to use another (like a link on the page)<br>

### To Do
This project requires a .env file with the following data <br>
`INLINE_RUNTIME_CHUNK=false
 REACT_APP_BASE_URL=(INSERT URL HERE)`
Since this works in tandem with the My-Queue project, it requires a back end url in REACT_APP_BASE_URL

## To Install in Chrome

Since this will not be available in the Chrome Extension Store, you can load this package as an Unpacked Extension<br>
(See more here: https://developer.chrome.com/extensions/getstarted#unpacked)<br>
* Go to chrome://extensions/<br>
* Make sure you have Developer Mode on<br>
* Build the project using `yarn build` or `npm run build`<br>
* In Chrome, select `Load Unpacked`<br>
* Navigate to your project's `Build` folder<br>


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode as a browser page.<br>
You may not wish to test like this, instead view the instructions for uploading an extension.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
