let myGraph = document.getElementById('myGraph');
let trace1 = {}; 
trace1.mode = "markers+text+lines"; // Include markers, text, and lines
trace1.type = "scatter"; 
trace1.name = "大學以下總人數";
trace1.marker = {
    size: 5
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
trace2.name = "高中";
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
layout = { 
    margin:{
    t:0 
}
};
Plotly.newPlot(myGraph, data, layout);

