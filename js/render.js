function render(val,i,clr){

var block = "<a width = 100px; height = 100px; id = 'para'; style = 'background-color: white'>[&nbsp;/&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]<br>&nbsp;/&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;['X']&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;/]</a>";

     return block.replace('para', 'para'+i).replace("['X']", val);
}

exports.render = render;