/* ============================ 
        Notification Bell
 ============================ */  
 const marker = document.getElementById('marker');
 const bellSVG = document.getElementsByClassName('notifications-bell')[0];




/* ============================ 
        Alert Banner
 ============================ */        
 const alertBanner = document.getElementById('alert');

 alertBanner.innerHTML += 
     "<div class='alert-banner'>" +
         "<p class='alert-message'><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>" +
         "<p class='alert-banner-close'>X</p>" +
     "</div>"
 
 alertBanner.addEventListener('click', e => {
     const element= e.target;
     if (element.classList.contains("alert-banner-close")) {
         alertBanner.style.display = "none";
         marker.style.display ="none";
         bellSVG.classList.add('svg-change');
     }
 });    




/* ============================ 
        Traffic Chart
 ============================ */        
const trafficChart = document.getElementById('traffic-chart').getContext('2d');

let trafficData = {
        labels: [ "16-22", '23-29', '30-5', '6-12', '13-19', '20-25', '27-3', '4-10', "11-17", '18-24', '25-31'],
        datasets: [{
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
            label: 'Traffic Patterns',
            backgroundColor: 'rgba(25, 99, 132, .5)',
            borderWidth: 3,
            borderColor: 'rgb(255, 99, 132)',
        }]
    };

let trafficOptions = {
        aspectRatio: 2.5,
        animation: {
            duration: 0
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: false
        }
};


let chart = new Chart(trafficChart, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});






/* ============================ 
        Bar Chart
 ============================ */        
const dailyCanvas = document.getElementById('daily-chart').getContext('2d');

const dailyData = {
    labels: [ "S", 'M', 'T', 'W', 'TR', 'F', 'S'],
        datasets: [{
            label: '# of Hits',
            data: [75, 115, 175, 125, 225, 200, 100],
            backgroundColor: 'rgba(25, 99, 132, .5)',
            borderColor: 'rgb(255, 99, 132)'
        }]
};

const dailyOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
}

const barChart = new Chart(dailyCanvas, {
    // The type of chart we want to create
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});




/* ============================ 
        Doughnut Chart
 ============================ */        
const mobileCanvas = document.getElementById('mobile-chart').getContext('2d');

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: "# of Users",
        data: [2000, 550, 500],
        borderWidth: 2,
        backgroundColor: [
            '#7477bf',
            '#78cf82',
            '#51b6c8'
        ]
    }]
};

const mobileOptions = {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
    }
};

var mobileDoughnut = new Chart(mobileCanvas, {
    // The type of chart we want to create
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});





/* ============================ 
        Message User
 ============================ */ 
const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

send.addEventListener('click', () => {
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    }   else if (user.value === "") {
        alert("Please fill out user field before sending");
    }   else if (message.value === "") {
        alert("Please fill out message field before sending");
    }   else {
        alert(`Message successfully sent to: ${user.value}`);
    }
});
























