import anu from './src/index';
import evalJSX from './dist/evalJSX';
var h = anu.createElement

function HelloComponent(props, context) {
    return evalJSX(`<div>Hello {props.name}</div>`, {
        this: this,
        props: props
    })
}

window.onload = function() {
    var result = anu.render(HelloComponent({
        name: '这是属性'
    }), document.getElementById('app'))
    console.log(result)
}