const baseURL = "http://localhost:3001";
const userurl = `${baseURL}/User`;
const urls = {
  Nvidia: `${baseURL}/Gpunvidia`,
  Intel: `${baseURL}/Gpuintel`,
  AMD: `${baseURL}/Gpuamd`,
};

const translateStatusToErrorMessage = (status) => {
  switch (status) {
    case 401:
      return "Please Login Again";
    case 403:
      return "You don't have permission to view the project";
    default:
      return "There was an error retrieving the projects please try again";
  }
};

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  } else {
    const httpErrorInfo = {
      status: response.status,
      statusText: response.statusText,
      url: response.url,
    };
    console.log(`log server http error : ${JSON.stringify(httpErrorInfo)}`);

    let errorMsg = translateStatusToErrorMessage(httpErrorInfo.status);
    throw new Error(errorMsg);
  }
};

const parseJSON = (response) => {
  return response.json();
};

const searchByName = async (name) => {
  try {
    // Make requests to all URLs concurrently
    const responses = await Promise.all(
      Object.values(urls).map((url) =>
        fetch(`${url}`).then(checkStatus).then(parseJSON)
      )
    );

    // Combine results from all APIs
    let combinedResults = responses.flatMap((data, index) =>
      data.map((item) => ({ ...item, source: Object.keys(urls)[index] }))
    );

    const queryLowerCase = name.toLowerCase();

    // Filter results based on input string
    combinedResults = combinedResults.filter((result) =>
      result.nama.toLowerCase().includes(queryLowerCase)
    );

    return combinedResults;
  } catch (error) {
    console.log(`Log client error: ${error}`);
    throw new Error(
      "There was an error searching for the data. Please try again"
    );
  }
};

const globalAPI = {
  searchByName,
  post(data) {
    return fetch(userurl)
      .then(checkStatus)
      .then(parseJSON)
      .then((responseData) => {
        const existingIds = responseData.map((item) => parseInt(item.id));

        const maxId = Math.max(...existingIds);

        const newId = maxId + 1;

        data.id = String(newId);

        return fetch(userurl, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(checkStatus)
          .then(parseJSON)
          .catch((error) => {
            console.log("Log client error: " + error);
            throw new Error(
              "There was an error creating the project. Please try again"
            );
          });
      })
      .catch((error) => {
        console.log("Log client error: " + error);
        throw new Error(
          "There was an error fetching existing data. Please try again"
        );
      });
  },

  async get() {
    try {
      return fetch(userurl)
      .then(checkStatus)
      .then(parseJSON)
    } catch (error) {
      console.log("Log client error: " + error);
      throw new Error(
        "There was an error fetching existing data. Please try again"
      );
    }
  },

  async find(id) {
    try {
      return fetch(userurl)
      .then(checkStatus)
      .then(parseJSON)
    } catch (error) {
      console.log("Log client error: " + error);
      throw new Error(
        "There was an error fetching existing data. Please try again"
      );
    }
  },
};

export { globalAPI };
