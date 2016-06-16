# contentFilter
contentFilter is a jQuery plugin that helps you filter your collections.
### Features
- Easy to implement
- Very small
- Two types of trigger events
- Works for all tags

### Options
```
'input' : Jquery selecotr  		The input box where you type key-words

'event' : 'keyup' or 'click'    default value is keyup

'clickButton': Jquery selecotr	The selector of submit button, only provider this opiton if event is 'click'

'target': css selecotr 			If you want hide the selector's parent node but not itself, provider css selector
								of parent node, otherwise, leave it

```
### 配置选项(Options for Chinses)
```
'input' : Jquery选择器  		关键字输入框的选择器

'event' : 'keyup' or 'click'    默认事件是keyup

'clickButton': Jquery选择器	    提交按钮,只有在'event'选项是'click'的时候才配置

'target': css选择器 			如果你想隐藏选择器的父元素而不是选择器自己,提供它的父元素css选择器,否则不配置

```
### Usage(使用)
```html
  <input type="text" class="search" />
  <div class="container">
    <p class="name">Bob    <span>Brown</span></p>
    <p class="name">Jimmy  <span>Green</span></p>
    <p class="name">Mike   <span>Smith</span></p>
    <p class="name">Lucy   <span>Snow</span></p>
    <p class="name">Kitty  <span>Kong</span></p>
  </div>
```
```javascript
	$('.container .name span').contentFilter({
    	'event': 'keyup',
		'input': $('.search'),
		'target': '.name'
	});
```
### Demo(示例)
[Filter for list](http://iammvp.github.io/contentFilter/examples/list.html)

[Filter for table](http://iammvp.github.io/contentFilter/examples/table.html)

[Filter for click event](http://iammvp.github.io/contentFilter/examples/click.html)

