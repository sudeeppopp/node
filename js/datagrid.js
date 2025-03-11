const fs = require('fs');
var array = require('array');
var Theme = "Themes(1)";
var imp = __dirname + "/Theme/" + Theme + "/import";
var ret = null;

function data() {
	try {
		fs.readFile(imp.replace("\js","").replace("\\","\/"), null, function(err, contents) {
		ret = array();
		var temp = contents.toString();
		populate(temp);
		});
	}
	catch(Exception ) {   temp = "err";        }
	finally {  }

try {
		fs.readFile(imp.replace("\js","").replace("\\","\/").replace('import','output'), null, function(err, contents) {
		var temp = contents.toString();
		populate(temp);
		});
	}
	catch(Exception ) {   temp = "err";        }
	finally {  }
	
}

function populate(temp) {

if(temp.toString().length >= 5) 
{
	if(ret == null) ret = array();
var Contents = temp.toString().split('\n');
for(var i = 0; i < Contents.length; i++)
	ret.push(Contents[i]);		
}
 }


function datagrid() {
	data();
}

function query() {
try {
	if(ret != null)
		return ret;
	//else data();

	return ret; }
catch(Exception ) {  }
finally {  }
 //array(["hell","hi","lo","low","hellow","abc","123"]);
}

function append(para) {
	if(ret == null)
		ret = Array();
	ret.push(para);
}

exports.query = query;
exports.append = append;
exports.populate = populate;
exports.datagrid = datagrid;
