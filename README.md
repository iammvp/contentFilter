# contentFilter
contentFilter is a jQuery plugin that helps you filter your collections.
### Features
- Easy to implement
- Very small
- Two types of trigger events
- Works for all tags

### Options
```
'input' : Jquery Object  		The input box where you type key-words

'event' : String         		'keyup' or 'click', default value is keyup

'clickButton': Jquery Object	The selector of submit button, only provider this opiton if event is 'click'

'target': String				Tag which you want to hide if it not match filter. Usually it is your selecotr's 
								parent tag. Default value is the selecotr itself

```
### Usage
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
### Demo
<p><a href="http://iammvp.github.io/contentFilter/examples/list.html" target="_blank">Filter for list</a></p>
<p><a href="http://iammvp.github.io/contentFilter/examples/table.html" target="_blank">Filter for table</a></p>
<p><a href="http://iammvp.github.io/contentFilter/examples/click.html" target="_blank">Filter for click event</a></p>
