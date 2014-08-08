function meanval(values) {
	var mean;
	var sum = 0;

	for (var i = 0; i < values.length; i++) {
		sum += values[i];
	}
	mean = sum/values.length;
	return mean;
}

function median(values) {
 	var half;

	values.sort( function(a,b) {return a - b;} );
 
	half = Math.floor(values.length/2);

	if(values.length % 2)
		return values[half];
	else
		return (values[half-1] + values[half]) / 2.0;
}

function mode(array)
{
    var object = {};
    var max = array[0]
    var count = 1;

    if(array.length == 0) return null;

    for(var i = 0; i < array.length; i++)
    {
      var key = array[i];
      if(object[key] == null)
        object[key] = 1;
      else
        object[key]++;  
      if(object[key] > count)
      {
        max = key;
        count = object[key];
      }
    }
    return max;
}


var array = [];
var resultmedian;
var resultmode;
var resultmean;

for (var i = 2; i < process.argv.length; i++) {
	array.push(Number(process.argv[i]));
}
  
resultmedian = median(array);
resultmode = mode(array);
resultmean = meanval(array);
console.log("Mean: " + resultmean);
console.log("Median " + resultmedian);
console.log("Mode: " + resultmode);
