
function parser(){
return "<script>shift = 1; clr    = 000000; filter = 012345; and    = 111111; transa = clr; transb = filter; function animation(elem,clr1,clr2) { transa = clr1; transa += and; transb = clr2;sum =    transa+transb; or  =    transa|transb; net =    sum&or;shift++; if(net.toString().indexOf('9') >= 0) {	transa = clr;	transb = filter; } if(shift > 6) {	shift = 1;	transa = clr1;	transb = clr2; } setTimeout(function() { elem.style.color = net.toString().substr(shift, 6 - shift) + net.toString ().substr(0, shift); }, 330); } </script><script> function addEvent1(elem){ setTimeout(function(){ animation(elem,012345,123456);addEvent2(elem);   },330); } function addEvent2(elem){ setTimeout(function(){ animation(elem,012345,123456);addEvent1(elem);   },330); } </script><script> function load() { const collection = document.getElementsByClassName(\"para\"); for (let i = 0; i < collection.length; i++){addEvent1(collection[i]);}}</script>";
}

module.exports = parser;