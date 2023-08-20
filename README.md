# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Environment variables

In the project directory, copy the `.env.example` file to a `.env` file and enter the API key for [Visual Crossing Weather API](https://www.visualcrossing.com/weather-api).

You may need to run the `npm start` command again afterwards if you already have the app loaded.

## Design decisions

- To save time in switching between Celcius and Fahreinheit, I calculated it manually rather than making another call to the API. This seemed unnecessary given the simplicity of the calculation, and it shouldn't cause any mismatch in the data.
