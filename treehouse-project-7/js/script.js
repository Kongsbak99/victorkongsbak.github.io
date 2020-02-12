
// First chart TRAFFIC
const trafficChart = document.getElementById("lineChart");

let lineChart = new Chart(trafficChart, {
  type: 'line',
  data: {
        labels: ['16', '22', '26', '34', '56', '67', '87', '98', '102'],
        datasets: [{
            data: [10, 15, 13, 17, 18, 20, 18, 21, 23],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: '#7476C0',
            borderWidth: 0,
            lineTension: 0,
            pointBackgroundColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 6,
        }]
      },
  options: {
    legend: {
      display: false
    },
      tooltips: {
        callbacks: {
          label: function(tooltipItem) {
            return tooltipItem.yLabel;
          }
        }
      },
    responsive: true,
    maintainAspectRatio: false
    }
});


// Second chart DAILY TRAFFIC
const dailyTraffic = document.getElementById('barChart')

let barChart = new Chart(dailyTraffic, {
  type: 'bar',
  data:{
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
      data:[50, 100, 155, 110, 175, 160, 60],
      borderColor: '#7476C0',
      backgroundColor: '#7476C0'
    }]
  },
  options: {
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false,

  },
});

// Third chart MOBILE USERS
const mobileUsers = document.getElementById('donutChart')

let donutChart = new Chart(mobileUsers, {
  type: 'doughnut',
  data:{
    labels:['Phones', 'Tablets', 'Desktops'],
    datasets:[{
      data:[20, 20, 60],
      backgroundColor: ['#82C98F', '#74B0BE', '#7476C0']
    }],

  },
  options: {
    legend: {
        position: 'right'
    },
    elements: {
      arc:{
        borderWidth: 0
      }
    },
    responsive: true,
    maintainAspectRatio: false,
  }

});



// Submit button
const submit = document.getElementById('submit');

submit.onclick = function(){
  var searchUser = document.getElementById('searchUser').value;
  var messageUser = document.getElementById('messageUser').value;
  if(searchUser == '' && messageUser == '') {
    alert('Please select a user & write a message to send')
  }
  else if (searchUser == ''){
    alert('Please select a user to send')
  }else if(messageUser == ''){
    alert('Please write a message to send')
  }else{
    alert('Your message was send')
  }
}
