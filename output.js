var fs = require('fs');

function output(para) {

var out = __dirname + "/Theme/Themes(1)/output";
	try {
		fs.writeFile(out, para, null, function(err) {
		});
		
	}
	catch(Exception ) {     }
	finally { }

}

exports.output = output;