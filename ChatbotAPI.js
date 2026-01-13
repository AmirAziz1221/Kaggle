const createAPIInstance = () => {
  let isFirstCall = true;

  return {
    GetChatbotResponse: async (message) => {
      const url = "http://127.0.0.1:8000/chat";
      const data = { text: message };

      try {
        if (isFirstCall) {
          isFirstCall = false; // Mark as not the first call
          return "Hello"; // Return "hello" only on the first call
        }
        const response = await fetch(url, {
          method: "POST", // Specify method
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data), // Send JSON data
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json(); // Parse JSON response
        console.log(result);

        return result.response; // Return the parsed result for subsequent calls
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        return null; // Or handle the error appropriately
      }
    },
  };
};

// Create an instance of the API
const API = createAPIInstance();

export default API;
