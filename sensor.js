setChartLibrary('google-chart');
setChartTitle('Sensors' DATA");
var Graph1=new boltGraph();
Graph1.setChartType('tableGraph');
mul(0.0977);
Graph1.plotChart('time_stamp','detect'); 
var Graph2=new boltGraph();
Graph2.setChartType('lineGraph');
Graph2.setAxisName('Time','temperature');
mul(0.0977);
Graph2.plotChart('time_stamp','temp'); 