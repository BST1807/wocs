async function fetchData() {
    const apiKey = 'CG-6YX5m7XLSPjniJPahChpqbw7';
    const ethApiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd';

    // try {
        // Fetch data and wait for the response
       
        const ethResponse = await fetch(ethApiUrl);
        console.log(ethResponse);

        // Check if the response is successful (status code 200)
        // if (!ethResponse.ok) {
        //     throw new Error('Network response was not ok');
        // }

        // Parse the JSON data from the response
        const ethData = await ethResponse.json();
        console.log(ethData)

        // Access the specific property in the JSON data
        const ethToUsdRate = ethData.ethereum.usd;
        console.log(ethToUsdRate);

        // Log the result
        // console.log(ethToUsdRate);
    // } catch (error) {
        // Handle errors, e.g., log an error message
        // console.error('Error fetching data:', error);
    // }
}

// Call the function to fetch and process data
fetchData();
