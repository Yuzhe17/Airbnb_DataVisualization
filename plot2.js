var data=[{x:['North Beacon Hill', 'Mount Baker', 'University District', 'Greenwood',
       'Columbia City', 'Ravenna', 'Atlantic', 'Ballard', 'Stevens',
       'Capitol Hill'],y:[92.09473684,95,95.42056075,97.03797468,103.54098361,109.13559322,116.28,123.61502347,123.98979592,126.43304843],type:"bar"}]

var layout={title:"top 10 affordable neighbourhoods",xaxis:{title:"neighbourhoods"},yaxis:{title:"averge listing prices"}}

Plotly.newPlot("plot2",data,layout);
