const request = async (url) => {

    const messageOutput = document.getElementById("message-output");
    const polarityOutput = document.getElementById("polarity-output");
    const agreementOutput = document.getElementById("agreement-output");
    const subjectivityOutput = document.getElementById("subjectivity-output");
    const confidenceOutput = document.getElementById("confidence-output");
    const ironyOutput = document.getElementById("irony-output");

    const dataResponse = await fetch(url);

    try {

        const appData = await dataResponse.json();

        messageOutput.textContent = appData.message;
        polarityOutput.textContent = appData.polarity == "P+" ? "STRONG POSITIVE" : appData.polarity == "P" ? "POSITIVE" : appData.polarity == "NEU" ? "NEUTRAL" : appData.polarity == "N" ? "NEGATIVE" : appData.polarity == "N+" ? "STRONG NEGATIVE" : appData.polarity == "NONE" ? "WITHOUT POLARITY" : "";
        agreementOutput.textContent = appData.agreement;
        subjectivityOutput.textContent = appData.subjectivity;
        confidenceOutput.textContent = appData.confidence;
        ironyOutput.textContent = appData.irony;

    } catch(error) {

        console.log("Error:", error);

    }

}

module.exports = request;