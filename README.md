# 🌍 COVID-19 Tracker & Visualizer

A responsive, interactive React application that visualizes global COVID-19 data using charts and maps. Built with **Create React App**, **TailwindCSS**, **Recharts**, **React Query**, and **Leaflet**.

## 🔧 Features

- 📊 Real-time COVID-19 data visualized through interactive **line charts**
- 🗺️ World **map** with country-wise statistics and popup tooltips
- 🌀 **Loading states** for async data fetching
- 📱 Fully **responsive** and optimized for all screen sizes
- 🎨 Clean and modern UI using **TailwindCSS**

---

## 🛠 Tech Stack

- **React** (Create React App)
- **TailwindCSS**
- **Recharts** – for visualizing cases, recoveries, and deaths
- **React Query** – for efficient data fetching and caching
- **Leaflet.js** with **React Leaflet** – for interactive mapping
- **numeral.js** – for formatting large numbers

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm or yarn

### Installation

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

4. Access the COVID-19 Dashboard:
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
