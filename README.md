### 安装
```sh
npm i split-text-animation
```

### 引入
```js
import SplitText from "split-text-animation"
```
```css
@import "~split-text-animation/css/index.min.css";
```

### 使用
例子：
```html
  <h1 class="text">++是将操作数加一的自增运算符。</h1>
```
```js
const st = new SplitText({
  container: ".text",
  speed: 100, 
  autoplay:true 
})
```