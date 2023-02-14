import { getQuery } from "./countryList.js";

export const searchCountry = () => {
    let input = document.querySelector("#id_input");
    let btn = document.querySelector("#search_btn");

    input.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
            window.location.href = `?country=${input.value}`;
            getQuery();
        }
    })

    btn.addEventListener("click", () => {
        window.location.href = `?country=${input.value}`;
        getQuery();
    })
}