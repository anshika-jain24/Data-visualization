const LIST = "LIST"
const MCQ = "MCQ"
const CHECKBOX = "CHECKBOX"

// The variables and constants that are used in makeChart function
var data = [];
var titles;
const types = [LIST, CHECKBOX, MCQ];
const options = [
  ["Tea", "Coffee", "Soft drinks", "Water"],
  ["Dairy milk", "Five star", "Milky bar", "Munch", "KitKat"],
  ["England", "Australia", "UAE", "Malaysia"],
];


function listProcessing(listData) {
    const map = new Map()

    const options = listData.options
    for(let i=0;i<options.length;i++){
        map.set(options[i], 0)
    }

    const responses = listData.responses
    for(let i=0;i<responses.length;i++){
        map.set(responses[i], map.get(responses[i]) + 1)
    }

    const data = [[],[]]
    map.forEach((value, key) => {
        data[0].push(key)
        data[1].push(value)
    })
    
    const div= document.getElementById("1");
    div.style.width="50%";
    div.style.borderRadius= "10px";
    div.style.backgroundColor= "#ffffff";
    div.style.padding= "20px";
    div.style.paddingTop= "10px";
    div.style.margin= "auto";
    div.style.marginBottom= "100px";
    
    const graph = document.getElementById("Beverages");
    const ctx = graph.getContext("2d");
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data[0],
            datasets: [{
                label: 'Graph for beverage choices',
                data: data[1],
                backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)',
                    'rgba(75, 192, 192)',
                    'rgba(153, 102, 255)',
                    'rgba(255, 159, 64)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1.5,
                hoverBorderColor: "#000000"
            }]
        },
        options: {
            layout: {
              padding: {
                left: 5,
                right: 50,
                top: 0,
                bottom: 0,
              },
            },
            legend: {
              display: false,
            },
            title: {
              display: true,
              text: listData.title,
              position: "top",
              fontStyle: "bold",
              fontColor: "#000000",
              fontSize: 20,
              padding: 20,
            },
            scales: {
              yAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: "Frequency",
                    fontSize: 15,
                    fontColor: "#000000",
                    padding: 15,
                  },
                  ticks: {
                    stepSize: 1,
                    max: Math.max(...data[1]) + 1,
                    min: 0,
                    fontColor: "#000000",
                    fontSize: 12,
                  },
                },
              ],
              xAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: "Beverages",
                    fontSize: 15,
                    fontColor: "#000000",
                    padding: 10,
                  },
                  ticks: {
                    fontColor: "#000000",
                    fontSize: 12,
                  }, 
                },
              ],
            },
          },
    });
   // document.body.append(graph)
    console.log(map);
}

function checkboxProcessing(checkboxData) {
    const map = new Map()
    const options = checkboxData.options
    for(let i=0;i<options.length;i++){
        map.set(options[i], 0)
    }

    const responses = checkboxData.responses
    for(let i=0;i<responses.length;i++){
        for(let j=0;j<responses[i].length;j++) {
            map.set(responses[i][j], map.get(responses[i][j])+1)
        }
    }

    const data = [[],[]]
    map.forEach((value, key) => {
        data[0].push(key)
        data[1].push(value)
    })

    const div= document.getElementById("2");
    div.style.width="50%";
    div.style.borderRadius= "10px";
    div.style.backgroundColor= "#ffffff";
    div.style.padding= "20px";
    div.style.paddingTop= "10px";
    div.style.margin= "auto";
    div.style.marginBottom= "100px";

    const graph = document.getElementById("Chocolates")
    const ctx = graph.getContext("2d");
    const chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: data[0],
            datasets: [{
                label: 'Graph for chocolate preferences',
                data: data[1],
                backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)',
                    'rgba(75, 192, 192)',
                    'rgba(153, 102, 255)',
                    'rgba(255, 159, 64)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1.5,
                hoverBorderColor: "#0000000"

            }],
        },
        options: {
            layout: {
              padding: {
                left: 25,
                right: 60,
                top: 0,
                bottom: 0,
              },
            },
            legend: {
              display: true,
              position: "right",
              labels: {
                boxWidth: 25,
                padding: 20,
                fontColor: "#000000",
                fontSize: 12,
              },
            }, 
        title: {
            display: true,
            text: checkboxData.title,
            position:"top",
            fontSize: 20,
            fontColor: "#000000",
            fontStyle: "bold",
            padding: 20
        },
        }
    });
    //document.body.append(graph)
}

function mcqProcessing(mcqData) {
    const map = new Map()
    const others = "Others"
    const options = mcqData.options
    for(let i=0;i<options.length;i++){
        map.set(options[i], 0)
    }
    map.set(others, 0)

    const responses = mcqData.responses
    for(let i=0;i<responses.length;i++){
        if(map.has(responses[i])) {
            map.set(responses[i], map.get(responses[i])+1)
        } else{
            map.set(others, map.get(others)+1)
        }
    }

    const data = [[],[]]
    map.forEach((value, key) => {
        data[0].push(key)
        data[1].push(value)
    })

    const div= document.getElementById("3");
    div.style.width="50%";
    div.style.borderRadius= "10px";
    div.style.backgroundColor= "#ffffff";
    div.style.padding= "20px";
    div.style.paddingTop= "10px";
    div.style.margin= "auto";
    div.style.marginBottom= "100px";

    const graph = document.getElementById("Vacay_Places")
    const ctx = graph.getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data[0],
            datasets: [{
                label: 'Graph for favourite destinations',
                data: data[1],
                backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)',
                    'rgba(75, 192, 192)',
                    'rgba(153, 102, 255)',
                    'rgba(255, 159, 64)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1.5,
                hoverBorderColor: "#000000"
            }]
        },
        options: {
            layout:{
                padding: {
                    left: 5,
                    right: 60,
                    top: 0,
                    bottom: 0,
                },
            },
            legend: {
                display: false
            },
            title: {
                display: true,
                text: mcqData.title,
                position: "top",
                fontSize: 20,
                fontStyle: "bold",
                fontColor: "#000000",
                padding: 20
            },
            scales: {
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Frequency",
                        fontSize: 15,
                        fontColor: "#000000",
                        padding: 15
                    },
                    ticks: {
                        stepSize: 1,
                        max: Math.max(...data[1])+1,
                        min: 0
                    },
                }],
                xAxes: [
                    {
                        scaleLabel: {
                            display: true,
                            labelString: "Vacation Places",
                            fontSize: 15,
                            fontColor: "#000000",
                            padding: 10
                        },
                        ticks: {
                            fontColor: "#000000",
                            fontSize: 12
                        }
                    }
                ]
            }
        }
    });
    //document.body.append(graph)
}

function makeChart(data1){
    
    //console.log("Hello");
    const heads=data1.columns;
    heads.shift();
    console.log(heads);
    for(var i=0; i<heads.length; i++)
    {
        const obj={}
        obj.title=heads[i];
        obj.type=types[i];
        obj.options=options[i];
        obj.responses=[];
        data.push(obj);
    }

for(var i=0; i<data1.length; i++)
{
    for(var j=0; j<data.length; j++)
    {
        const res=[];
        res.push(data1[i][heads[j]].split(", "));
        //console.log(res[0]);
       if(j==1)
       {

           data[j].responses.push(res[0]);
       }
       else{
           if(res[0].length==1)
           {
               data[j].responses.push(res[0][0]);
           }
           else{
               data[j].responses.push(res[0]);
            
           }
       }
    }
}
console.log(data);
    data.forEach(item => {
        switch (item.type) {
            case LIST:
                listProcessing(item)
                break;
            case MCQ:
                mcqProcessing(item)
                break;
            case CHECKBOX:
                checkboxProcessing(item)
                break;
        }
    })
}

d3.csv("Internship form.csv", (data1)=>{
    console.log(data1);
    makeChart(data1);
});

