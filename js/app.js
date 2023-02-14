import { getQuery } from "./countryList.js";
import { searchCountry } from "./countryForm.js";

const init = () => {
    getQuery();
    searchCountry();
}

init();
