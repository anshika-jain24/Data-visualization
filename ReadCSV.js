const fs= require('fs');
const Papa = require('papaparse');

//Reading file using readFileSync method of file-system
const file=fs.readFileSync("Internship form.csv", {
    encoding: "utf8",
    flag: "r",
});

//console.log(file);

const datarow=[];

//Parsing the file to convert into array
Papa.parse(file, {
       configs: {
           header:false,
       },
       step: function(row) {
        //console.log(row.data);
        datarow.push(row.data);
       },
       error: function(err, file, inputElem)
       {
        console.log("Error:", err, file);
       },
       complete: function()
       {
        console.log("finished");
       },
      }
);

const LIST="LIST";
const CHECKBOX="CHECKBOX";
const MCQ="MCQ";

//console.log(datarow);
for ( var i = 0; i < datarow.length; i++) {
    datarow[i].shift();
  }
  

const heads= datarow[0];
const types= [LIST, CHECKBOX, MCQ];
const options= [
    ["Tea", "Coffee", "Softdrinks", "Water"],
    ["Dairy Milk", "Five star", "Milky Bar", "Munch", "Kitkat"],
    ["England", "Australia", "UAE", "Malaysia"]
];

const data=[];

//Pushing the objects of each type into the data array
for(var i=0; i<datarow[0].length; i++)
{
    const obj={}
    obj.title= heads[i];
    obj.type= types[i];
    obj.options= options[i];
    obj.responses=[];
    data.push(obj);
}

//Pushing the responses of the user into the data array
for(var i=1; i<datarow.length; i++)
{
    for(var j=0; j<datarow[i].length; j++)
    {
        const res=[];
        res.push(datarow[i][j].split(','));
        console.log(res[0]);
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
