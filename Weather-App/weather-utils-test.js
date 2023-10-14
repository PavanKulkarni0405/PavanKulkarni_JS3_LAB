import { WeatherAPI } from "./weather-api.js"
import { WeatherUtils } from "./weather-utils.js"


async function testResponseUtils() {

  const weatherAPIObj = new WeatherAPI();
  weatherAPIObj.constructURL("France");
  const responseJSON = await weatherAPIObj.invokeURL();

  const responseObj = WeatherUtils.convertResponse(responseJSON);
  // converResponse
  // print (object)
  console.log(responseObj);
  // converResponse
  // print (object)
}

testResponseUtils();