export default class CountryItem {
    constructor(_parent, _item) {
        this.parent = _parent,
            this.img = _item.flags ? _item.flags.png : null,
            this.map = _item.latlng || [],
            this.name = _item.name.common,
            this.capital = _item.capital,
            this.languages = _item.languages || [],
            this.pop = _item.population ? _item.population.toLocaleString() : 0;
        this.region = _item.region || "";
        this.coin = _item.currencies || [];
        this.borders = _item.borders || [];
    }

    render() {
        let langs = Object.values(this.languages);
        let coinSt = JSON.stringify(this.coin);
        let coinAr = JSON.parse(coinSt);
        let coinName = Object.keys(coinAr)[0];
        let coin_val = Object.values(coinAr[coinName]);

        let div_info = document.createElement("div");
        div_info.className = "country-info col-lg-6";
        document.querySelector(this.parent).append(div_info);
        div_info.innerHTML = `
        <img class="img-fluid" src=${this.img} alt="flag">
                    <h2 class="display-6 mt-3">${this.name}</h2>
                    <p class="lead">Capital: ${this.capital} </p>
                    <p class="lead lang">Languages: ${langs.join(", ")}</p>
                    <p class="lead">Pop: ${this.pop} </p>
                    <p class="lead">Region: ${this.region} </p>
                    <p class="lead">Coin: ${coinName}, ${coin_val[0]} </p>
        `

        let borderSt = JSON.stringify(this.borders);
        let borderAr = JSON.parse(borderSt);
        let div_map = document.createElement("div");
        div_map.className = "country-map col-lg-5";
        document.querySelector(this.parent).append(div_map);
        div_map.innerHTML
            = `
        <iframe src="https://maps.google.com/maps?q=${this.map}&amp;z=4&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        `
        if (this.borders.length == 0) {
            div_map.innerHTML += `
            <p class="lead mt-4">There are no countries bordering the country
            </p>
            `
        } else {
            div_map.innerHTML += `
            <p class="lead my-1">State with border: </p>
            <ul class="border-list"></ul>`
            borderAr.forEach(async (item) => {
                let url = `https://restcountries.com/v3.1/alpha/${item}`;
                let resp = await fetch(url);
                let data = await resp.json();
                data.forEach(element => {
                    div_map.querySelector(".border-list").innerHTML += `
                <li><a href="?country=${element.name.common}">${element.name.common}</a></i>`
                });
            });
        }
    }



}