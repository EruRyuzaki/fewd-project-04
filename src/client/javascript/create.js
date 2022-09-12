const create = async (url = "", data = {}) => {

    const dataResponse = await fetch(url, {

        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)

    });

    try {

        const appData = await dataResponse.json();

        return appData;

    } catch(error) {

        console.log("Error:", error);

    }

}

module.exports = create;