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
        console.log(parseInt(percentage[i].textContent));

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
                scale: {
                    gridLines: {
                        color: "rgba(255,255,255, 1)"   
                    }
                }
                
                
      }
    }
    });

  return area_chart
}


// print chart

const dashboard_links = document.querySelector("#dashboard");

dashboard_links.addEventListener("click", (event) => {

    if (event.target.tagName === "P") {
        print_area_chart(dataset_daily, xlabels_daily, "line");
    }

})