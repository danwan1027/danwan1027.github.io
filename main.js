let myGraph = document.getElementById('myGraph');
let trace1 = {}; 
trace1.mode = "markers+text+lines"; // Include markers, text, and lines
trace1.type = "scatter"; 
trace1.name = "Team A";
trace1.marker = {
    size: 10
}
trace1.x = [];
trace1.y = [];
trace1.text = [];
trace1.textposition = 'top center'; // Set text position
trace1.textfont = {
    size: 10
}
for (let i = 0; i < set1.length; i++) { 
    trace1.x[i] = set1[i][0];
    trace1.y[i] = set1[i][1];
    trace1.text[i] = set1[i][1]+'人';
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
