//Define Base_URL
const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

//Define const API_id
const APP_ID = "5bf706d0e63ea0fd43de2b4964fd71b8";

//Define constant for Units
const UNITS = "metric";

class WeatherAPI {

    constructURL(userInput) {

        this.apiURL = new URL(API_BASE_URL);

        this.apiURL.searchParams.append("q", userInput);
        this.apiURL.searchParams.append("appid", APP_ID);
        this.apiURL.searchParams.append("units", UNITS);

        console.log(this.apiURL.toString());

    }

    async invokeURL() {

        const responseObj = await fetch(this.apiURL.toString());

        const responseJSON = await responseObj.json();

        return responseJSON;


        // responseObj = await  fetch(url) // 1s / 10s
        // responseJSON = await responseObj.json()

        // return 
        // print (json-response)

    }

}

export { WeatherAPI }