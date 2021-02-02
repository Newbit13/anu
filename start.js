import anu from './src/index';
var h = anu.createElement

class Hello extends anu.Component {
    constructor() {
        super() //Must write, or throw ReferenceError: |this| used uninitialized in Hello class constructor
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            list: [{
                key: 1,
                content: '111'
            }, {
                key: 2,
                content: '222'
            }]
        }
    }
    componentWillMount() {
        console.log('准备插入DOM树')
    }
    handleClick() {
        // this.setState({
        //     title: new Date - 0,
        //     child: new Date - 1
        // })
        this.setState({
            list: [{
                key: 2,
                content: '333'
            }, {
                key: 1,
                content: '444'
            }]
        })
    }
    static className() {
        return 'Point';
    }
    render() {
        // return h('div', {
        //     title: this.state.title,
        //     onClick: this.handleClick
        // }, this.state.child || "x")
        return h('div', {
            title: this.state.title,
            onClick: this.handleClick
        }, this.state.list.map(item => {
            return h(
                'div',
                { key: item.key },
                [item.content]
            )
        }))
    }
}
function Ha(v){
    console.log(v);
    return h('h2', null, 'A');
}
// Ha['--func'] = true//要设置这个fn才能拿到props,且只执行一次
function main() {
    var vnode = h('h2', null, 'A', '你好', h(Hello), h(Ha,{good:233}));
    return vnode;
}
window.onload = function () {
    // var vnode1 = main();
    // var vnode2 = main();
    // console.log(vnode1.props === vnode2.props);
    //render4个参数， vnode, container, callback, clearContainer
    // var result = anu.render(main(), document.getElementById('app'), null, false)
    var result = anu.render(new Hello(), document.getElementById('app'), null, false)
    console.log(result);
}