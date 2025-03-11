function parse(clr1,clr2,translate,filter){

if(filter > 111111) return null;

switch(translate.toString()){

case 'linear': return "<script>clr1 = "+clr1+"; clr2 = "+clr2+"; shift = 1; transa = clr1; transb = clr2; function animation(elem,clr1,clr2) { transa = clr1; transb = clr2; net = ((transa|"+filter+") + (transb|"+filter+"))/2; shift++; if(net.toString().indexOf('9') >= 0) {transa = clr1; transb = clr2; } if(shift > 6) {shift = 0; temp = transb; transb = transa; transa = temp; } setTimeout(function() { elem.style.color = net.toString().substr(shift, 6 - shift) + net.toString ().substr(0,shift); }, 330); } </script><script> function addEvent1(elem){ setTimeout(function(){ animation(elem,clr1,clr2); addEvent2(elem); },330); } function addEvent2(elem){ setTimeout(function(){ animation(elem,clr1,clr2);addEvent1(elem); },330); } </script><script> function load() { const collection = document.getElementsByClassName('para'); for (let i = 0; i < collection.length; i++){addEvent1(collection[i]);}}</script>";

case 'rotate': return "<script> enable = false; var deg = 0; function animation(elem) { setTimeout(function() { if(enable) deg += 12;  if(deg >= 360) deg = 0; elem.style.transform = 'rotate('+deg+'deg)'; enable = !enable; }, 330); } function addEvent1(elem){ setTimeout(function(){ animation(elem); addEvent2(elem);},330); } function addEvent2(elem){ setTimeout(function(){ animation(elem); addEvent1(elem); },330); } </script><script> function load() { const collection = document.getElementsByClassName('para'); for (let i = 0; i < collection.length; i++){addEvent1(collection[i]);}}</script>";

default : return "<script>clr1 = "+clr1+"; clr2 = "+clr2+"; shift = 1; transa; transb; function animation(elem,clr1,clr2) { transa = clr1; transb = clr2; sum = transa+transb; or  =    transa|transb; net = sum&or|" + filter +"; shift++; if(net.toString().indexOf('9') >= 0) {transa = clr1;	transb = clr2; } if(shift > 6) {shift = 0; transa = clr1;	transb = clr2; } setTimeout(function() { elem.style.color = net.toString().substr(shift, 6 - shift) + net.toString ().substr(0,shift); }, 330); } </script><script> function addEvent1(elem){ setTimeout(function(){ animation(elem,clr1,clr2);addEvent2(elem);   },330); } function addEvent2(elem){ setTimeout(function(){ animation(elem,clr1,clr2);addEvent1(elem); },330); } </script><script> function load() { const collection = document.getElementsByClassName('para'); for (let i = 0; i < collection.length; i++){addEvent1(collection[i]);}}</script>";
};

  return null;
}

exports.parse = parse;