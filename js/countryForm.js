import { getQuery } from "./countryList.js";

export const searchCountry = () => {
    let input = document.querySelector("#id_input");
    let btn = document.querySelector("#search_btn");

    input.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
            if (input.value != "") {
                window.location.href = `?country=${input.value}`;
                getQuery();
            } else {
                alert("enter country to search");
            }
        }
    })

    btn.addEventListener("click", () => {
        if (input.value != "") {
            window.location.href = `?country=${input.value}`;
            getQuery();
        } else {
            alert("enter country to search");
        }
    })
}