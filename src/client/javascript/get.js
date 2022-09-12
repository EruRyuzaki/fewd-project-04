const get = async (url) => {

    const dataResponse = await fetch(url);

    try {

        const apiData = await dataResponse.json();

        return apiData;

    } catch(error) {

        console.log("Error:", error);

    }

}

module.exports = get;