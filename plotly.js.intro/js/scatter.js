
        var trace1 = {
  x: apprehensions.Year,
  y: apprehensions.Number,
  mode: 'markers',
  type: 'scatter',
  marker: {color:apprehensions.daColor
}
};

var layout = {
  title: {
    text:'Apprehensions 1925-2019',
    font: {
      family: 'Courier New, monospace',
      size: 30, color: 'orange'
    }
}
};

var data = [trace1];