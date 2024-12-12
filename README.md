# group-apc-app
**GOAL:** Build a full-stack application that renders a feed of images and retrieves a list of image URLs from an external API by making a call to the API endpoint in our backend. Our server should listen for requests from our frontend, make a call to an external API for a list of image URLs and return that response to the client (our frontend).

## How do I get started?
1. Run the following command to install external dependencies:
````
npm install
````
1. Complete the React App located in the `client/` directory according to the specifications below.
  - Follow the specifications closely and be sure to name classes correctly.
2. To start your app, run
````
npm start
````
3. To view your app, navigate your browser to `http://localhost:8080`

## Frontend
1. When you first navigate to `http://localhost:8080`, it looks like nothing is rendering in the browser. Investigate the files in our `client/` folder. Which file is responsible for rendering our application? What is missing from this file to successfully render our application with the text `Hey, girl!' in the browser?
2. The requirements for the frontend of our application are:
 	- The `Feed` component should render a `<div>` with the ID `feed`
	- The `Feed` component should make a request to the `api_endpoint` prop provided to it.
	- Upon completion of the AJAX request, `Feed` must use the `updateUrls` setter function to update the `urls` state variable to the returned array of URLs.
		- **Important:** Be sure to name the key `urls` for testing purposes.
  		- **Hint:** What have we imported from React but has yet to be used?
	- `Feed` must render a `FeedItem` component for each url in the `urls` array in its state object (these `FeedItem` components should be inside the `#feed` <div>)
	- The `Feed` component must pass each `FeedItem` its image url as a `prop` named `url`
	- The `FeedItem` component must render an `<img>` tag, using its `url` prop for the `src` attribute on the img tag.
	- The `<img>` tag for `FeedItem` must be inside a `<div>` with the class `feedItem`
## BACKEND
1. Create a *GET* route for the url `/api`
  - the route should respond to *GET* requests to `/api` by sending a list of image urls back to the frontend
  - Your response should include a status code of 200.
2. We want to perform some logic on the data that's being sent from the frontend before we send a response back. We'll do this using Express middleware and a controller - which you'll write in the `controller.js` file.
  - In `controller.js`, give the `controller` object a method called `getImages`. 
  - `getImages` should make a request to the url provided in the file
  - Export the `getImages` method so that you can use it in your `server.js` file.
4. After `getImages` runs, end the request/response cycle with a function that sends the correct color back to the frontend in a JSON object.
  - This function **must** be defined in the `server.js` file.
  - Hint: make sure the JSON object you're sending back matches the format that the frontend is expecting!

## Reminders
- Each part of this README helps break down a big problem into a smaller problem.
- Where possible, copy and paste instructions into their relevant files.
- Think about how data flows in the React framework. How do we pass information between components?
- Use your resources! The internet, previous code, your peers, fellows, etc. - identify similarities with things you have already seen and apply even the smallest bits of what you know to get started!
