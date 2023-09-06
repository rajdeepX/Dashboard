# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

Instructions to run the Application

Node.js and npm should be installed on your computer. You can download them from the official
website: https://nodejs.org/

Steps to Run the App:

1. Clone the Repository:
If your app is in a Git repository, you can clone it using the following command in your terminal:

bash
Copy code
git clone <repository-url>

If you have your project in a local directory, navigate to that directory using the terminal.

2. Install Dependencies:
In the root directory of your project (where package.json is located), run the following command to
install the required dependencies:

Copy code
npm install

This command will read the package.json file and install all the necessary packages listed under
dependencies and devDependencies.

3. Start the Development Server:
To start the development server and run your React app, use the following command:

npm start

This command will start the development server, and your app will be accessible in your web browser at
http://localhost:3000. You should see your app running.

4. Access the Contact Management Page and COVID-19 Dashboard:
You should have two main sections in your app: the contact management page and the COVID-19
dashboard. You can access these sections by clicking on the respective links or navigation elements
within your app.

API Information

I have used the - disease.sh - Open Disease Data API, to fetch the data for the covid19 dashboard.

1. https://disease.sh/v3/covid-19/all
This api endpoint serves all the cases of covid19 across the world

2. https://disease.sh/v3/covid-19/historical/all?lastdays=all
This api endpoint provides the worldwide cases with date and I have used it to plot the cases
graph with its case data using recharts.

3. https://disease.sh/v3/covid-19/countries
This api endpoint provides the countrywise cases of covid19. I used it to plot all the effected
countried and the total cases them in a map using leaflet.js



That's it! Your simple static React app should now be up and running locally. You can make changes to
the code, and the development server will automatically reload the app for you to see the updates.
When you're ready to deploy your app, you can follow the deployment instructions for Create React App
to make it accessible online.
