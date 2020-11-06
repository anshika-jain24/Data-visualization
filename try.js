
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

function makeChart(data1){
    console.log(data1);
    const heads=data1.columns;
    heads.shift();

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
        res.push(data1[i][heads[j]].split(','));
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

}



d3.csv("Internship form.csv", (data1) => {
    console.log(data1);
});