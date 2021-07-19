var data=[{x:['Capitol Hill', 'Ballard', 'Belltown', 'Minor', 'Queen Anne', 'Fremont',
              'Wallingford', 'University District', 'First Hill', 'Stevens'],y:[351, 213, 204, 192, 187, 147, 143, 107, 105,  98],type:'bar'}];
var layout={title:"top 10 neighbourhoods with most listings",xaxis:{title:"neighbourhoods"},yaxis:{title:"number of listings"}}
Plotly.newPlot("plot1",data,layout)
