function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//  FUNCTION FOR EVALUATING AND ASSIGNING COLORS

const security_fields = document.querySelectorAll(".security_field");
const percentage = document.querySelectorAll(".percentage");

function colorAssign () {

    for (let i = 0; i < security_fields.length; i += 1) {

        if (parseInt(percentage[i].textContent) < 38) {
            security_fields[i].parentNode.className += " red"
        } else if (parseInt(percentage[i].textContent) < 50) {
            security_fields[i].parentNode.className += " yellow"
        } else if(parseInt(percentage[i].textContent) < 84) {
            security_fields[i].parentNode.className += "orange"
        } else if(parseInt(percentage[i].textContent) >= 85 ) {
            security_fields[i].parentNode.className += "green"
        }

    }

}

colorAssign();

//  datasets

const dataset_hourly = [125,100,98,67,75,86,90,101,76,65,64,32,37,09, 45, 67, 78, 69, 98, 101, 98,87,78, 89];
const xlabels_hourly = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00",  "22:00",  "23:00"];

const dataset_daily = [1345,2895,1935,2101,1875,2500, 2978];
const xlabels_daily = ["Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const dataset_weekly = [5768, 4657, 5007, 5234, 4897, 4098, 5647, 6875, 6754];
const xlabels_weekly = ["3-9", "10-16", "17-23", "24-30", "1-6", "7-13", "14-20", "21-27"];

const dataset_monthly = [19834, 20234, 21039, 19578, 18039, 19010];
const xlabels_monthly = ["May", "June", "July", "August", "September", "October"];

// FUNCTION FOR DISPLAYING CHARTS WITH DIFFERENT DATA

 const chart_menu = document.querySelector("#chart_menu");
 const timeFrameList = document.querySelectorAll("#chart_menu li");

 chart_menu.addEventListener ("click", (event) => {
    if (event.target.tagName =="LI") {
        
        if (event.target === timeFrameList[0]) {
            print_area_chart(dataset_hourly, xlabels_hourly);
          } else if (event.target === timeFrameList[1]) {
            print_area_chart(dataset_daily, xlabels_daily);
          } else if (event.target === timeFrameList[2]) {
            print_area_chart(dataset_weekly, xlabels_weekly);
          } else if (event.target === timeFrameList[3]) {
            print_area_chart(dataset_monthly, xlabels_monthly);
          } 
    }
 });


//  Print chart function




function print_area_chart (data, xlabels) {

    let area_chart = new Chart(document.querySelector("#chart"), {
      type: "line",
      data: {
          
          xLabels: xlabels,
          
          datasets: [{
              data: data,
              backgroundColor: "rgba(16, 123, 147, 0.144)",
              borderColor: "rgba(16, 123, 147, 0.144)",
              borderWidth: 1,
              pointBorderWidth: 5,
              showLine: true
          }]
      },

      options: {
              legend: { display: false },
              elements: {
                line: {
                    tension: 0
                },
                scales: {
                    
                    
                }


      }
    }
    });

  return area_chart
}

print_area_chart(dataset_daily, xlabels_daily);

// Print donut chart

const data_set_1 = [650, 458, 1243];

function print_donut_chart (data) {

    let donut_chart =  new Chart(document.querySelector("#donut_chart"), {
        type: 'doughnut',
        data: {
        labels: ["Phones", "Tablets", "Desktop"],
        datasets: [
            {
            backgroundColor: ["#3cba9f", "#8e5ea2", "#107B93"],
            data: data
            }
        ]
        },
        options: {
        title: {
            display: false
        },
        layout: {
            padding: {

                right: 50
            }
        },
        legend: {
            position: "right",
            labels: {
            boxWidth: 14,
            fontSize: 14,
            padding: 15
            
            }
        }
        }
    });

    return donut_chart
}

print_donut_chart(data_set_1);


// print chart

const dashboard_links = document.querySelector("#dashboard");

if (dashboard_links != null) {
    dashboard_links.addEventListener("click", (event) => {

    if (event.target.tagName === "LI") {
        print_area_chart(dataset_daily, xlabels_daily, "line");
        print_donut_chart(data_set_1);
    }

    })
}