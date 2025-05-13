// function to fetch data from the api

// this function is used to fetch the worldwide data of cases from the api endpoint: https://disease.sh/v3/covid-19/all
export const fetchData = async () => {
  try {
    const response = await fetch("https://disease.sh/v3/covid-19/all", {
      method: "GET",
    });

    const data = await response.json();
    return data;
  } catch (error) {}
};

// this function is used to fetch the data of case fluctuations for plotting in a graph from the api endpoint: https://disease.sh/v3/covid-19/historical/all?lastdays=all
export const fetchChartData = async () => {
  try {
    const response = await fetch(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all",
      {
        method: "GET",
      }
    );
    if (!response.ok) {
      throw new Error("Newtork response error");
    }

    //   Parse the response body as JSON and return the data
    const data = await response.json();
    return data;
  } catch (error) {
    // fetch error handling
    throw error;
  }
};

// this function is used to fetch the data of countrywise covid19 status of cases to plot in a map from the api endpoint: https://disease.sh/v3/covid-19/countries
export const fetchMapData = async () => {
  try {
    const response = await fetch("https://disease.sh/v3/covid-19/countries", {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
