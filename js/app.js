function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//  Print chart function


const dataset_daily = [1345,2895,1935,2101,1875,2500, 2978];
const xlabels_daily = ["Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function print_area_chart (data, xlabels, type) {

    let area_chart = new Chart(document.querySelector("#chart"), {
      type: type,
      data: {
          
          xLabels: xlabels,
          
          datasets: [{
              data: data,
              backgroundColor: "rgba(16, 123, 147, 0.144)",
              borderColor: "#107B93",
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
                }
      }
    }
    });

  return area_chart
}


// print chart

const dashboard_links = document.querySelector("#dashboard");

if (dashboard_links != null) {
    dashboard_links.addEventListener("click", (event) => {

        console.log(event.target)

        if (event.target.tagName === "P") {
            print_area_chart(dataset_daily, xlabels_daily, "line");
        }

    })
}