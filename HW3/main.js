let HW3_Graph=document.getElementById('HW3_Graph');
let trace3_1 ={};
trace3_1.type ="pie";
trace3_1.title = "中央大學個學院人數比較";
trace3_1.labels =[];
trace3_1.values =[];
trace3_1.domain = {
    row : 0,
    column : 0
}
for(let x=0; x<department_ratio_data.length; x++){
    trace3_1.labels[x] =department_ratio_data[x]['name'];
    trace3_1.values[x] =department_ratio_data[x]['count'];
}
// Create an array of objects to hold the labels and values
const dataPoints = trace3_1.labels.map((label, index) => ({
    label,
    value: trace3_1.values[index]
  }));
  
  // Sort the dataPoints array based on the 'value' property
  dataPoints.sort((a, b) => b.value - a.value); // Sorting in descending order
  
  // Clear the existing labels and values arrays
  trace3_1.labels = [];
  trace3_1.values = [];
  
  // Populate the sorted data back into trace1
  dataPoints.forEach(dataPoint => {
    trace3_1.labels.push(dataPoint.label);
    trace3_1.values.push(dataPoint.value);
  });
  
trace3_1.marker = {
    colors: [(76, 114, 190), (223, 130, 68), (165, 165, 165), (246, 193, 66), (104, 154, 208), (126, 170, 85), (44, 68, 116), (148, 76, 32)]
};
// ---

let trace3_2 ={};
trace3_2.type ="pie";
trace3_2.title = "中央大學理組文組人數比例";
trace3_2.labels =[];
trace3_2.values =[];
trace3_2.domain = {
    row : 0,
    column : 1
}
for(let x=0; x<college_ratio_data.length; x++){
    trace3_2.labels[x] =college_ratio_data[x]['name'];
    trace3_2.values[x] =college_ratio_data[x]['count'];
}

trace3_2.marker = {
    colors: [(0, 107, 154), (246, 178, 9)]
};


// ---
let data3 =[];
data3.push(trace3_1);
data3.push(trace3_2);
let layout3 ={
    margin:{
        t:40,
        l:0,
    },
    title : '中央大學各學院人數比較',
    grid : {
        rows : 2, 
        columns : 2
    }
};
Plotly.newPlot(HW3_Graph, data3, layout3);