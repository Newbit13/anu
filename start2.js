import anu from './src/index';
import evalJSX from './dist/evalJSX';
function HelloComponent(props, context) {
    return evalJSX(`<div>Hello {props.name}</div>`, {
        this: this,
        props: props
    })
}
// console.log(HelloComponent({
//     name: '这是属性'
// }));
window.onload = function() {
    var result = anu.render(HelloComponent({
        name: '这是属性'
    }), document.getElementById('app'))
    console.log(result)
}