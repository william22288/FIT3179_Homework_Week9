var vg_1 = "homeworkWeek9.json";
vegaEmbed("#symbol_map", vg_1).then(function(result) {
  // Access the Vega view instance
  var view = result.view; 
  console.log("Vega view object:", view);
}).catch(console.error);
