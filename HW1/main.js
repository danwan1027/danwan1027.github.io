let myGraph = document.getElementById('HW1_Graph');
let trace1 = {}; 
trace1.mode = "markers+text+lines"; // Include markers, text, and lines
trace1.type = "scatter"; 
trace1.name = "大學以下總人數";
trace1.marker = {
    size: 5,
}
trace1.x = [];
trace1.y = [];
trace1.text = [];
trace1.textposition = 'top center'; // Set text position
trace1.textfont = {
    size: 10
}
for (let i = 0; i < total.length; i++) { 
    trace1.x[i] = total[i][0];
    trace1.y[i] = total[i][1];
    trace1.text[i] = total[i][1]+'人';
}
let data = []; 
data.push(trace1);
let layout = { 
    margin: {
        t: 50
    },
    xaxis: {
        autorange: false,
        tickmode: 'array',
        tickvals: [96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109],
        range: [96, 109],
        title: '民國年'
    },
    title: '各級學校學生懷孕事件統計',
    yaxis:{
        title : '人數'
    }
};
Plotly.newPlot(myGraph, data, layout);

//---------------

let trace2 = {}; 
trace2.mode = "lines+markers+text"; 
trace2.type = "scatter"; 
trace2.name = "大學";
trace2.marker = {
    size: 5
}
trace2.x = [];
trace2.y = [];
trace2.text = [];
trace2.textposition = 'top center'; // Set text position
trace2.textfont = {
    size: 10
}
for (let i = 0; i < college.length; i++) { 
    trace2.x[i] = college[i][0];
    trace2.y[i] = college[i][1]; 
    trace2.text[i] = college[i][1]+'人';
}
data = []; 
data.push(trace1); 
data.push(trace2);

Plotly.newPlot(myGraph, data, layout);

//---------------

let trace3 = {}; 
trace3.mode = "lines+markers+text"; 
trace3.type = "scatter"; 
trace3.name = "高中";
trace3.marker = {
    size: 5
}
trace3.x = [];
trace3.y = [];
trace3.text = [];
trace3.textposition = 'top center'; // Set text position
trace3.textfont = {
    size: 10
}

for (let i = 0; i < high_school.length; i++) { 
    trace3.x[i] = high_school[i][0];
    trace3.y[i] = high_school[i][1]; 
    trace3.text[i] = high_school[i][1]+'人';
}
data = []; 
data.push(trace1); 
data.push(trace2);
data.push(trace3);

Plotly.newPlot(myGraph, data, layout);

//---------------

let trace4 = {}; 
trace4.mode = "lines+markers+text"; 
trace4.type = "scatter"; 
trace4.name = "國中小";
trace4.marker = {
    size: 5
}
trace4.x = [];
trace4.y = [];
trace4.text = [];
trace4.textposition = 'top center'; // Set text position
trace4.textfont = {
    size: 10
}
for (let i = 0; i < middle_school_and_below.length; i++) { 
    trace4.x[i] = middle_school_and_below[i][0];
    trace4.y[i] = middle_school_and_below[i][1]; 
    trace4.text[i] = middle_school_and_below[i][1]+'人';
}
data = []; 
data.push(trace1); 
data.push(trace2);
data.push(trace3);
data.push(trace4);
Plotly.newPlot(myGraph, data, layout);

//----------

// Create an initial data array with all datasets
let initialData = [trace1, trace2, trace3, trace4];

// Create the plot with the initial data
Plotly.newPlot(myGraph, initialData, layout);

// Function to update the chart based on checkbox status
function updateChart() {
    let newData = [];

    // Check the status of each checkbox and add the corresponding trace to the new data array
    if (dataset1Checkbox.checked) {
        newData.push(trace1);
    }
    if (dataset2Checkbox.checked) {
        newData.push(trace2);
    }
    if (dataset3Checkbox.checked) {
        newData.push(trace3);
    }
    if (dataset4Checkbox.checked) {
        newData.push(trace4);
    }

    // Update the chart with the new data
    Plotly.newPlot(myGraph, newData, layout);
}

// Get references to the checkboxes
let dataset1Checkbox = document.getElementById('dataset1');
let dataset2Checkbox = document.getElementById('dataset2');
let dataset3Checkbox = document.getElementById('dataset3');
let dataset4Checkbox = document.getElementById('dataset4');

// Add event listeners to the checkboxes
dataset1Checkbox.addEventListener('change', updateChart);
dataset2Checkbox.addEventListener('change', updateChart);
dataset3Checkbox.addEventListener('change', updateChart);
dataset4Checkbox.addEventListener('change', updateChart);
