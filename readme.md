#anu
启动live-server --middleware=yy

读作 安努 ，苏美尔的主神，开天辟地。

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <script src='./dist/anu.js'></script>
    <script>
        var h = anu.createElement
        class Hello extends anu.Component {
            constructor() {
                super() //Must write, or throw ReferenceError: |this| used uninitialized in Hello class constructor
                this.handleClick = this.handleClick.bind(this)
            }
            componentWillMount() {
                console.log('准备插入DOM树')
            }
            handleClick() {
                this.setState({
                    title: new Date - 0,
                    child: new Date - 1
                })
            }
            static className() {
                return 'Point';
            }
            render() {
                return h('div', {
                    title: this.state.title,
                    onClick: this.handleClick
                }, this.state.child || "x")
            }
        }

        function main() {
            return h('h2', null, 'A', '你好', h(Hello), h('p'))
        }
        window.onload = function() {
            //render4个参数， vnode, container, callback, clearContainer
            var result = anu.render(main(), document.body, null, false)
            console.log(result)
        }
    </script>
</head>

<body>
    <div>这个默认会被清掉</div>
</body>

</html>
```

```js
//C:\Users\ASUS\AppData\Roaming\npm\node_modules\live-server\middleware\yy.js
var path = require('path');
var fs = require('fs');
module.exports = function(req, res, next) {
	if (req.method !== "GET" && req.method !== "HEAD")
		next();
	if (req.url !== '/' && path.extname(req.url) === '') {
		var filePath = req.url + '.js';
		fs.readFile(path.resolve(process.cwd() ,'./' +filePath),function (err,data) {
			if (err) {
				// console.log(err);
				res.end('404');
				return;
			}
			res.setHeader("Content-Type","text/javascript");
			res.end(data)
		})
	}
    else next();
```
数组的定义方式 
```javascript
 class Hello extends anu.Component {
    render() {
        return 1984
    }
}
```
套嵌的组件
```javascript
var h = anu.createElement
class World extends anu.Component {
    render() {
        return 'world'
    }
}
class Hello extends anu.Component {
    render() {
        return World
    }
}
window.onload = function() {
    //render4个参数， vnode, container, callback, clearContainer
    var result = anu.render(Hello, document.body, null, false)
    console.log(result)
}
```
Stateless functional components 
```JAVASCRIPT
 var h = anu.createElement

function HelloComponent(props /* context */ ) {
    return h('div', {}, 'Hello', props.name)
}
window.onload = function() {
    //render4个参数， vnode, container, callback, clearContainer
    var result = anu.render(h(HelloComponent, {
        name: '111'
    }), document.body, null, false)
    console.log(result)
}
```