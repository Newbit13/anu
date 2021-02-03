import anu from './src/index';
var h = anu.createElement

var vnode = eval('0,' + genCode(`<div id={111} >
<p>222</p>
<p>{new Date()-0}</p>
</div>`))

window.onload = function() {
    //render4个参数， vnode, container, callback, clearContainer
    var result = anu.render(vnode, document.getElementById('app'), null, false)
console.log(result)
}