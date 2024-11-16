// Real-time Water Level chart (using Chart.js)
const ctx = document.getElementById('waterLevelChart').getContext('2d');
const waterLevelChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Tank 1'],
        datasets: [{
            label: 'Water Level',
            data: [75],  // Example value, should be dynamic
            backgroundColor: '#4caf50',  // Green for sufficient water level
            borderColor: '#4caf50',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});

// Water Usage chart (using Chart.js)
const usageCtx = document.getElementById('usageChart').getContext('2d');
const usageChart = new Chart(usageCtx, {
    type: 'line',
    data: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
        datasets: [{
            label: 'Water Usage',
            data: [5, 6, 7, 8, 9],  // Example data, should be dynamic
            borderColor: '#2196F3',
            fill: false
        }]
    }
});

// Set up alert behavior
function bookTanker() {
    alert('Tanker booked!');
    dismissAlert();
}

function dismissAlert() {
    document.getElementById('alertCard').style.display = 'none';
}

// Display alert if water level is low (example)
window.onload = function() {
    let waterLevel = 75;  // Example value
    if (waterLevel < 30) {
        document.getElementById('alertCard').style.display = 'block';
    }
};

// Change water level indicator based on value
function updateWaterLevel(level) {
    const status = document.getElementById('levelStatus');
    if (level >= 70) {
        status.innerHTML = 'Status: <span class="green">Sufficient</span>';
    } else if (level >= 30) {
        status.innerHTML = 'Status: <span class="yellow">Low</span>';
    } else {
        status.innerHTML = 'Status: <span class="red">Critical</span>';
    }
}

// Function to toggle the visibility of the hamburger menu
function toggleMenu() {
    const menuItems = document.getElementById("hamburger-menu-items");
    menuItems.style.display = (menuItems.style.display === "block") ? "none" : "block";
}

// Function to toggle the visibility of the profile area
function toggleProfile() {
    const profileArea = document.getElementById("profile-area");
    profileArea.style.display = (profileArea.style.display === "block") ? "none" : "block";
}

// Function to show the selected section
function showSection(section) {
    // Hide all sections
    const sections = document.querySelectorAll('.dashboard-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(section + '-section');
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

