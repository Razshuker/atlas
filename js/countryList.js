import CountryItem from './countryItem.js';


export const doApiContry = async (_country) => {
    try {
        document.querySelector("#id_row").innerHTML = `<img class="load-icon" src="image/Loader.gif" alt="loading">
        `
        let url = `https://restcountries.com/v3.1/name/${_country}`;
        let resp = await fetch(url);
        let data = await resp.json();
        let arr = data;
        if (arr.length == 1) {
            createCountryInfo(data);
        }
        else {
            arr.forEach(item => {
                if (item.name.common.toLowerCase() == _country) {
                    document.querySelector("#id_row").innerHTML = "";
                    let country = new CountryItem("#id_row", item);
                    country.render();
                }
            })
        }
    }
    catch (err) {
        console.log(err);
        alert("COUNTRY NAME UNDEFINED")
        document.querySelector("#id_row").innerHTML = "";
    }
}
// const doApiBorderCountry = async (_border) => {
//     document.querySelector("#id_row").innerHTML = `<h2>LOADING...</h2>`
//     let url = `https://restcountries.com/v3.1/alpha/${_border}`;
//     let resp = await fetch(url);
//     let data = await resp.json();
//     console.log(data);
//     debugger;
//     createCountryInfo(data);
// }

export const getQuery = () => {
    let query = new URLSearchParams(window.location.search);
    if (query.get("country")) {
        doApiContry(query.get("country"));
    }
    // else if (query.get("countryB")) {
    //     doApiBorderCountry(query.get("countryB"));
    // }
    else {
        doApiContry("israel");
    }
}

const createCountryInfo = (_ar) => {
    let arr = _ar;
    document.querySelector("#id_row").innerHTML = "";
    arr.forEach(item => {
        let country = new CountryItem("#id_row", item);
        country.render();
    });
}