const fs = require('fs');
var array = require('array');
var Theme = "Themes";
var imp = __dirname + "/" + Theme + "/import";
var ret = null;

function data() {
	try {
		fs.readFile(imp.replace("\js","").replace("\\","\/"), null, function(err, contents) {
		var temp = contents.toString();
		populate(temp);
		});
	}
	catch(Exception ) {   temp = "err";        }
	finally {  }
	
}

function populate(temp) {

if(temp.toString().length > 5) 
{
	ret = array();
var Contents = temp.toString().split('\n');
for(var i = 0; i < Contents.length; i++)
	ret.push(Contents[i]);		
}
 }


function datagrid() {
	data();
}

function query() {
	return ret;
}

exports.query = query;
exports.populate = populate;
exports.datagrid = datagrid;