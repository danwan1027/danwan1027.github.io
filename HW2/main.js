let HW2_Graph=document.getElementById('HW2_Graph');

//trace1
let trace2_1 ={};
trace2_1.type ="bar";
trace2_1.x =[];
trace2_1.y =[];
trace2_1.name = '男性'
trace2_1.text =[];
trace2_1.marker = {
    color : '#2f75a0'
}

for(let i=0; i< male.length; i++){
    trace2_1.x[i] = male[i]['name'];
    trace2_1.y[i] = male[i]['count'];
    const number = male[i]['count']; // Get the count
    trace2_1.text[i] = number; // Format the text
}


//trace2
let trace2_2 ={};
trace2_2.type ="bar";
trace2_2.x =[];
trace2_2.y =[];
trace2_2.name = '女性'
trace2_2.text = [];
trace2_2.marker = {
    color : '##ebbd40'
}
for(let i=0; i< female.length; i++){
    trace2_2.x[i] = female[i]['name'];
    trace2_2.y[i] = female[i]['count'];

    const number = female[i]['count']; // Get the count
    trace2_2.text[i] = number; // Format the text
}

let data2 =[];
data2.push(trace2_1);
data2.push(trace2_2);
let layout2 ={
    margin:{
        t:40,
    },
    title: '高等教育的男女人數差異'
};
Plotly.newPlot(HW2_Graph, data2, layout2);

// ----------- HW2_Graph_2 --------------

let HW2_Graph_2=document.getElementById('HW2_Graph_2');

//trace1
let trace2_3 ={};
trace2_3.type ="bar";
trace2_3.x =[];
trace2_3.y =[];
trace2_3.name = '男性'
trace2_3.text =[];
trace2_3.marker = {
    color : '#2f75a0'
}

for(let i=0; i< male.length; i++){
    trace2_3.x[i] = male[i]['name'];
    trace2_3.y[i] = male[i]['count'] / new_born_male[i]['count'];
    const number = trace2_3.y[i]; // Get the count
    trace2_3.text[i] = number; // Format the text
}


//trace2
let trace2_4 ={};
trace2_4.type ="bar";
trace2_4.x =[];
trace2_4.y =[];
trace2_4.name = '女性'
trace2_4.text = [];
trace2_4.marker = {
    color : '##ebbd40'
}
for(let i=0; i< female.length; i++){
    trace2_4.x[i] = female[i]['name'];
    trace2_4.y[i] = female[i]['count']/ new_born_female[i]['count'];
    const number = trace2_4.y[i]; // Get the count
    trace2_4.text[i] = number; // Format the text
}

let data2_2 =[];
data2_2.push(trace2_3);
data2_2.push(trace2_4);
let layout2_2 ={
    margin:{
        t:40,
    },
    title: '高等教育的男女比例差異'
};
Plotly.newPlot(HW2_Graph_2, data2_2, layout2_2);