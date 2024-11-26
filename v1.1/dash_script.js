// // // dash_script.js

// // // Simulated data from ESP32 via Ngrok
// // const tankData = {
// //     waterLevel: 99, // percentage
// //     waterQuality: "Excellent", // Excellent, Moderate, Poor
// //     lastFillDate: "23rd Nov 2024, 10:00 AM",
// //     estimatedRunoutDate: "28th Nov 2024"
// // };

// // // Replace 'YOUR_NGROK_URL' with the Ngrok URL
// // const NGROK_URL = "https://abcd1234.ngrok.io/tank-data";

// // // Fetch data from the mock server
// // async function fetchTankData() {
// //     try {
// //         const response = await fetch(NGROK_URL);
// //         if (!response.ok) {
// //             throw new Error("Failed to fetch data");
// //         }
// //         const data = await response.json();
// //         updateDashboard(data);
// //     } catch (error) {
// //         console.error("Error fetching tank data:", error);
// //     }
// // }

// // // Call fetchTankData to load the dashboard
// // fetchTankData();

// // // Update the dashboard dynamically
// // function updateDashboard(data) {
// //     // Update water level
// //     const waterLevelElement = document.getElementById("water-level");
// //     const waterLevelText = document.getElementById("water-level-text");
// //     waterLevelElement.style.height = `${data.waterLevel}%`;
// //     waterLevelText.textContent = `${data.waterLevel}% Full`;

// //     // Update water quality
// //     const qualityIcon = document.getElementById("quality-icon");
// //     const qualityText = document.getElementById("quality-text");
// //     if (data.waterQuality === "Excellent") {
// //         qualityIcon.textContent = "😊";
// //         qualityText.textContent = "Excellent Quality";
// //     } else if (data.waterQuality === "Moderate") {
// //         qualityIcon.textContent = "👍";
// //         qualityText.textContent = "Moderate Quality";
// //     } else {
// //         qualityIcon.textContent = "🚫";
// //         qualityText.textContent = "Not Suitable for Drinking";
// //     }

// //     // Update dates
// //     document.getElementById("last-fill-date").textContent = `Last Filled: ${data.lastFillDate}`;
// //     document.getElementById("estimated-runout-date").textContent = `Estimated Run-Out: ${data.estimatedRunoutDate}`;
// // }


// // // Call the function to update the dashboard
// // updateDashboard(tankData);


// // Replace with your Ngrok URL
// const NGROK_URL = "https://dbe4-2401-4900-62f5-9419-5133-4dd1-d148-41da.ngrok-free.app/tank-data";

// // Function to fetch data from Ngrok and update the dashboard
// async function fetchDataAndUpdateDashboard() {
//     try {
//         // Fetch data from the Ngrok endpoint
//         const response = await fetch(NGROK_URL);
        
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
        
//         const data = await response.json(); // Assuming data is in JSON format
        
//         // Destructure the fetched data
//         const { waterLevel, waterQuality, lastFillDate } = data;
        
//         // Example Calculation: Water Level Percentage
//         const tankCapacity = 100; // Adjust based on the max capacity of the tank
//         const waterLevelPercentage = (waterLevel / tankCapacity) * 100;

//         // Example Estimation: Days till water runs out (mock calculation)
//         const dailyUsage = 10; // Adjust based on estimated daily usage
//         const estimatedDaysLeft = Math.floor(waterLevel / dailyUsage);

//         // Update the dashboard elements
//         updateDashboard(waterLevelPercentage, waterQuality, lastFillDate, estimatedDaysLeft);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//         alert("Failed to fetch data from the server. Please check the connection.");
//     }
// }

// // Function to update the dashboard with fetched data
// function updateDashboard(waterLevelPercentage, waterQuality, lastFillDate, estimatedDaysLeft) {
//     // Update water level (tank bar graph)
//     const waterLevelElement = document.querySelector(".water-level");
//     waterLevelElement.style.height = `${waterLevelPercentage}%`;
//     waterLevelElement.textContent = `${Math.round(waterLevelPercentage)}%`;

//     // Update water quality (emoji display)
//     const waterQualityElement = document.querySelector(".water-quality");
//     if (waterQuality === "Good") {
//         waterQualityElement.textContent = "😊"; // Smiley face for good quality
//     } else if (waterQuality === "Moderate") {
//         waterQualityElement.textContent = "👍"; // Thumbs up for moderate quality
//     } else {
//         waterQualityElement.textContent = "❌"; // Cross for poor quality
//     }

//     // Update last fill date and estimated run-out date
//     const lastFillElement = document.querySelector(".last-fill-date");
//     const estimatedRunOutElement = document.querySelector(".estimated-runout-date");

//     lastFillElement.textContent = `Last Fill Date: ${new Date(lastFillDate).toLocaleDateString()}`;
//     estimatedRunOutElement.textContent = `Estimated Run-out Date: ${new Date(Date.now() + (estimatedDaysLeft * 24 * 60 * 60 * 1000)).toLocaleDateString()}`;
// }

// // Call the function to fetch data and update the dashboard
// fetchDataAndUpdateDashboard();

// // Optional: Refresh data periodically (e.g., every 30 seconds)
// setInterval(fetchDataAndUpdateDashboard, 30000);


// // Replace with your Ngrok URL
// const NGROK_URL = "https://fe5c-2401-4900-900b-be83-3f4a-beca-90c9-d85c.ngrok-free.app/tank-data";

// // Tank Configuration
// const TANK_HEIGHT = 100; // Height of the tank in cm (adjust to your tank's actual height)
// const TANK_CAPACITY = 500; // Maximum capacity of the tank in liters (adjust as needed)
// const DAILY_USAGE = 50; // Estimated daily water usage in liters (adjust as needed)

// // Function to fetch data from Ngrok and update the dashboard
// async function fetchDataAndUpdateDashboard() {
//     try {
//         // Fetch data from the Ngrok endpoint
//         console.log("Fetching data from:", NGROK_URL);
//         const response = await fetch(NGROK_URL, {
//             headers:{
//                 "User-Agent": "my-dashboard-app",
//                 "Accept": "application/json"
//             }
//         });
        
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
        
//         const rawdata = await response.text(); // Read raw response as text
//         console.log("Raw response data:", rawdata);
        
//         const data = JSON.parse(rawdata); // Parse JSON data
//         console.log("Parsed JSON data:", data);

//         // Extract ultrasonic and TDS sensor values
//         const { ultrasonicValue, tdsValue } = data;
        
//         // Calculate water level percentage
//         const waterLevel = TANK_HEIGHT - ultrasonicValue; // Water height in cm
//         const waterLevelPercentage = (waterLevel / TANK_HEIGHT) * 100;

//         // Calculate water quality based on TDS value
//         let waterQuality;
//         if (tdsValue <= 300) {
//             waterQuality = "Good";
//         } else if (tdsValue > 300 && tdsValue <= 600) {
//             waterQuality = "Moderate";
//         } else {
//             waterQuality = "Poor";
//         }

//         // Estimate days till water runs out
//         const waterVolume = (waterLevel / TANK_HEIGHT) * TANK_CAPACITY; // Water volume in liters
//         const estimatedDaysLeft = Math.floor(waterVolume / DAILY_USAGE);

//         // Update the dashboard elements
//         updateDashboard(waterLevelPercentage, waterQuality, estimatedDaysLeft);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//         alert("Failed to fetch data from the server. Please check the connection.");
//     }
// }

// // Function to update the dashboard with fetched data
// function updateDashboard(waterLevelPercentage, waterQuality, estimatedDaysLeft) {
//     // Update water level (tank bar graph)
//     const waterLevelElement = document.querySelector(".water-level");
//     waterLevelElement.style.height = `${waterLevelPercentage}%`;
//     waterLevelElement.textContent = `${Math.round(waterLevelPercentage)}%`;

//     // Update water quality (emoji display)
//     const waterQualityElement = document.querySelector(".water-quality");
//     if (waterQuality === "Good") {
//         waterQualityElement.textContent = "😊"; // Smiley face for good quality
//     } else if (waterQuality === "Moderate") {
//         waterQualityElement.textContent = "👍"; // Thumbs up for moderate quality
//     } else {
//         waterQualityElement.textContent = "❌"; // Cross for poor quality
//     }

//     // Update estimated run-out date
//     const estimatedRunOutElement = document.querySelector(".estimated-runout-date");
//     if (estimatedDaysLeft > 0) {
//         estimatedRunOutElement.textContent = `Estimated Run-out Date: ${new Date(Date.now() + (estimatedDaysLeft * 24 * 60 * 60 * 1000)).toLocaleDateString()}`;
//     } else {
//         estimatedRunOutElement.textContent = "Estimated Run-out Date: Water is critically low!";
//     }
// }

// // Call the function to fetch data and update the dashboard
// fetchDataAndUpdateDashboard();

// // Optional: Refresh data periodically (e.g., every 30 seconds)
// setInterval(fetchDataAndUpdateDashboard, 30000);


// Replace with your Ngrok URL
const NGROK_URL = "https://1f2e-2401-4900-900b-be83-3f4a-beca-90c9-d85c.ngrok-free.app/tank-data";

// Tank Configuration
const TANK_HEIGHT = 100; // Height of the tank in cm (adjust to your tank's actual height)
const TANK_CAPACITY = 500; // Maximum capacity of the tank in liters (adjust as needed)
const DAILY_USAGE = 50; // Estimated daily water usage in liters (adjust as needed)

// Function to fetch data from Ngrok and update the dashboard
async function fetchDataAndUpdateDashboard() {
    try {
        // Fetch data from the Ngrok endpoint
        console.log("Fetching data from:", NGROK_URL);
        const response = await fetch(NGROK_URL, {
            headers: {
                "User-Agent": "my-dashboard-app",
                "Accept": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const rawdata = await response.text(); // Read raw response as text
        console.log("Raw response data:", rawdata);

        const data = JSON.parse(rawdata); // Parse JSON data
        console.log("Parsed JSON data:", data);

        // Extract ultrasonic and TDS sensor values
        const { ultrasonicValue, tdsValue } = data;

        // Calculate water level percentage
        const waterLevel = TANK_HEIGHT - ultrasonicValue; // Water height in cm
        const waterLevelPercentage = (waterLevel / TANK_HEIGHT) * 100;

        // Calculate water quality based on TDS value
        let waterQuality;
        if (tdsValue <= 300) {
            waterQuality = "Good";
        } else if (tdsValue > 300 && tdsValue <= 600) {
            waterQuality = "Moderate";
        } else {
            waterQuality = "Poor";
        }

        // Estimate days till water runs out
        const waterVolume = (waterLevel / TANK_HEIGHT) * TANK_CAPACITY; // Water volume in liters
        const estimatedDaysLeft = Math.floor(waterVolume / DAILY_USAGE);

        // Update the dashboard elements
        updateDashboard(waterLevelPercentage, waterQuality, estimatedDaysLeft);
    } catch (error) {
        console.error("Error fetching data:", error);
        alert("Failed to fetch data from the server. Please check the connection.");
    }
}

// Function to update the dashboard with fetched data
function updateDashboard(waterLevelPercentage, waterQuality, estimatedDaysLeft) {
    // Update water level (tank bar graph)
    const waterLevelElement = document.querySelector(".water-level");
    if (waterLevelElement) {
        waterLevelElement.style.height = `${waterLevelPercentage}%`;
        waterLevelElement.textContent = `${Math.round(waterLevelPercentage)}%`;
    } else {
        console.error("Water level element is missing in the DOM.");
    }

    // Update water quality (emoji and text display)
    const qualityIconElement = document.getElementById("quality-icon");
    const qualityTextElement = document.getElementById("quality-text");
    if (qualityIconElement && qualityTextElement) {
        if (waterQuality === "Good") {
            qualityIconElement.textContent = "😊"; // Smiley face for good quality
            qualityTextElement.textContent = "Excellent Quality";
        } else if (waterQuality === "Moderate") {
            qualityIconElement.textContent = "👍"; // Thumbs up for moderate quality
            qualityTextElement.textContent = "Moderate Quality";
        } else {
            qualityIconElement.textContent = "❌"; // Cross for poor quality
            qualityTextElement.textContent = "Poor Quality";
        }
    } else {
        console.error("Water quality elements are missing in the DOM.");
    }

    // Update estimated run-out date
    const estimatedRunOutElement = document.getElementById("estimated-runout-date");
    if (estimatedRunOutElement) {
        if (estimatedDaysLeft > 0) {
            estimatedRunOutElement.textContent = `Estimated Run-out Date: ${new Date(Date.now() + (estimatedDaysLeft * 24 * 60 * 60 * 1000)).toLocaleDateString()}`;
        } else {
            estimatedRunOutElement.textContent = "Estimated Run-out Date: Water is critically low!";
        }
    } else {
        console.error("Run-out date element is missing in the DOM.");
    }

    // Update last filled date (dummy data, can be replaced with actual)
    const lastFillDateElement = document.getElementById("last-fill-date");
    if (lastFillDateElement) {
        lastFillDateElement.textContent = "Last Filled: 23rd Nov 2024, 10:00 AM";
    } else {
        console.error("Last fill date element is missing in the DOM.");
    }
}

// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
    fetchDataAndUpdateDashboard();
    setInterval(fetchDataAndUpdateDashboard, 30000); // Refresh data every 30 seconds
});
