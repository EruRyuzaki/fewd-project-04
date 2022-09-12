const submit = (event) => {

    const url = document.getElementById("url");
    const error = document.getElementById("error");

    event.preventDefault();

    const dataPath = process.env.BASE_URL + process.env.API_KEY + url.value;

    if (!url.checkValidity()) {

        url.style.borderColor = "hsla(0, 100%, 70%, 1)";
        error.classList.add("active");
        error.textContent = "URL is not valid - please enter a valid URL";

        setTimeout(() => {

            url.style.borderColor = "hsla(0, 0%, 10%, 1)";
            error.classList.remove("active");
            error.textContent = "";

        }, 3000);

    } else if (url.value == "") {

        url.style.borderColor = "hsla(0, 100%, 70%, 1)";
        error.classList.add("active");
        error.textContent = "URL input is empty - please enter a valid URL";

        setTimeout(() => {

            url.style.borderColor = "hsla(0, 0%, 10%, 1)";
            error.classList.remove("active");
            error.textContent = "";

        }, 3000);

    } else {

        url.style.borderColor = "hsla(120, 100%, 30%, 1)";

        client.get(dataPath).then((data) => {
    
            client.create("http://localhost:3000/create", {
    
                message: data.status.msg,
                polarity: data.score_tag,
                agreement: data.agreement,
                subjectivity: data.subjectivity,
                confidence: data.confidence,
                irony: data.irony
    
            }).then(() => {
    
                client.request("http://localhost:3000/request");
    
            });
    
        });

    }

}

module.exports = submit;