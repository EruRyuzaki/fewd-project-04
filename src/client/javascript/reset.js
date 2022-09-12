const reset = (event) => {

    const url = document.getElementById("url");
    const messageOutput = document.getElementById("message-output");
    const polarityOutput = document.getElementById("polarity-output");
    const agreementOutput = document.getElementById("agreement-output");
    const subjectivityOutput = document.getElementById("subjectivity-output");
    const confidenceOutput = document.getElementById("confidence-output");
    const ironyOutput = document.getElementById("irony-output");

    event.preventDefault();

    url.value = "";
    url.style.borderColor = "hsla(0, 0%, 10%, 1)";

    messageOutput.textContent = "-";
    polarityOutput.textContent = "-";
    agreementOutput.textContent = "-";
    subjectivityOutput.textContent = "-";
    confidenceOutput.textContent = "-";
    ironyOutput.textContent = "-";

}

module.exports = reset;