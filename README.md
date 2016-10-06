# ClaCss.js (Complete)

(Complete mean it's without Basesign. If you want the Basesign version, click here. Or check the Basesign's page).

ClaCss is a super cool tool to write css with class (as color, margin, etc...).
It's light but	nevertheless insane.

  - Extra light (under 250 lines of code)
  - Flexible
  - Magic
  - You can apply :hover
  - You can apply any javascript style object

For information, ClaCss is a component of [Basesign]() which provide clever css classes to use, and write less css as possible. But you can also use ClaCss.js if you don't use [Basesign]().

I don't recomment to use this on big project. CSS's files are better. It's for little project.


## Table of contents
1. [General](#user-content-general)
2. [Borders](#user-content-borders)
3. [Fonts](#user-content-font)
4. [Colors & Background's Color](#user-content-colors)
5. [Display](#user-content-display)
6. [Height](#user-content-height)
7. [Margin](#user-content-margin)
8. [Overflow](#user-content-overflow)
9. [Padding](#user-content-padding)
10. [Position](#user-content-position)
11. [Text-align](#user-content-text-align)
12. [Vertical-align](#user-content-vertical-align)
13. [Width](#user-content-width)

14. [Hover](#user-content-hover)

### Download
    bower install ClaCss
 
 or check [project's website](https://idkn.github.io/ClaCss)

### Installation
    <script src="ClaCss.js"></script>

Just locate the js file, and let the magic explain itself (and write class, magic need little help)

### Example
Want to make color on a div really fast ? 
```
<div class="bs-c_#333"> </div
```

Yeah! Color #333 is now applied.

### Important informations
If you haven't understood example, here's some explanation. bs- is for the structure, color is the property, _ is for spacing, but you can already use  '**-**'  if you want. And #333 is value.

If you have multiple property's value use '**-**' to space each value.
Multiple's value example : ```bs-ma_12px-23px``` or ```bs-ma_10px-15px-20px``` or ```bs-ma_5px-10px-15px-20px```

When you're using multiple values but it's an javascript's style object, like for example ```bs-transition_value``` add ```-1``` or  ```_1``` to specify that is a multiple value. 

##### What can I use as value?
*For color property*, you can use as value :
* color name
* hex number
* rgb number
* rgba number

If you're more interested, check *documentation*.

# Documentation
## General & Global

  <a name="#general"></a><a name="1.1"></a>
[1.1](#general) **General**: Global solution.
 
To make changement, we use HTML DOM Style Object.
The documentation is available [here](http://www.w3schools.com/jsref/dom_obj_style.asp).

For example, you can change any property available on documentation's list. For this, find the property you want and write ```bs-yourProperty_value``` where ```value``` is the of the property you want to.
An example ?  ```bs-overflowY_scroll ``` will set an  ```overflowY``` with an  ```scroll```.

## Borders
### Borders
  <a name="#borders-border"></a><a name="2.1.1"></a>
[2.1.1](#borders-border) **Border**: Basic of border.
  
By using ```bs-bo_value``` where ```value``` can be written as this : ```1px-solid-red```. It will be a border of 1px with solid pixel in red color. 

<a name="#border-t"></a><a name="2.1.2"></a>
[2.1.2](#border-t) **Border Top**: Top border.

Using ```bs-bo-t_value``` where ```value``` can be written as the same way is [2.1.1](#border)

<a name="#border-r"></a><a name="2.1.3"></a>
[2.1.3](#border-r) **Border Right**: Right border.

Using ```bs-bo-r_value``` where ```value``` can be written as the same way is [2.1.1](#border)

<a name="#border-b"></a><a name="2.1.4"></a>
[2.1.4](#border-b) **Border Bottom**: Bottom border.

Using ```bs-bo-b_value``` where ```value``` can be written as the same way is [2.1](#border)

<a name="#border-l"></a><a name="2.1.5"></a>
[2.1.5](#border-l) **Border left**: Left border.

Using ```bs-bo-l_value``` where ```value``` can be written as the same way is [2.1.1](#border)

### Border-radius
<a name="#border-radius"></a><a name="2.2"></a>
[2.2](#border-radius) **Border radius**: Basic of border radius.

By using ```bs-bora_value``` where ```value``` can be written as this : ```10px```. It will be a border-radius of 10px. 

<a name="#border-radius-side"></a><a name="2.2.1"></a>
[2.2.1](#border-radius-side) **Border radius side**: Side of border-radius.
As same logical than ```border-r``` or ```border-t```, you can use for border-radius :

```
t for top
```
```
r for right
```
```
b for bottom
```
```
l for left
```

And what is you want to set topLeft for border-radius ?
Than, you have the choice between ```tl``` OR ```tr``` OR ```bl``` OR ```br```.

An example :    ```bs-bora-t_10px``` will set border_radius for all top with 10px. 

## Fonts
<a name="#font-size"></a><a name="3.1"></a>
[3.1](#font-size) **Font Size**: Set font size.

Using ```bs-f-s_value``` where ```value``` can be written in px, em, rem, %, you've understand, it's as you want.

<a name="#font-weight"></a><a name="3.2"></a>
[3.2](#font-weight) **Font weight**: Set font weight.

Using ```bs-f-w_value``` where ```value``` can be written as you write font-weight generally.

<a name="#font-family"></a><a name="3.3"></a>
[3.3](#font-family) **Font family**: Set font family.

Using ```bs-f-f_value``` where ```value``` can be written as you write font-family generally.

Example : ```bs-f-f_Merriweather``` 

## Colors & Background's Color
<a name="#color"></a><a name="4.1"></a>
[4.1](#color) **Colors**: Set color.

Using ```bs-c_value``` where ```value``` can be written in color name (red, blue, green) or in hexa (#fff, #123456, etc), or in rgb/rgba.

<a name="#background-color"></a><a name="4.2"></a>
[4.2](#background-color) **Background-color**: Set background-color.

Using ```bs-bg-c_value``` where ```value``` can be written as you write it usually.

## Display
<a name="#display"></a><a name="5.1"></a>
[5.1](#display) **Display**: Set display.

Using ```bs-d_value``` where ```value``` can be written as you write it usually. It can be inline, inline-block, none, block, etc...

## Height
<a name="#height"></a><a name="6.1"></a>
[6.1](#height) **Height**: Set height.

Using ```bs-h_value``` where ```value``` can be written as you write it usually. It can be in px, in %, etc
## Margin
<a name="#margin"></a><a name="7.1"></a>
[7.1](#margin) **Margin**: Set margin.

Using ```bs-ma_value``` where ```value``` can be written as you write it usually. Example ? ```bs-ma_15px```. Percentage is working too.

**Multiple example** : ```bs-ma_12px-23px``` or ```bs-ma_10px-15px-20px``` or ```bs-ma_5px-10px-15px-20px```
## 0verflow
<a name="#overflow"></a><a name="8.1"></a>
[8.1](#overflow) **Height**: Set overflow.

Using ```bs-o_value``` where ```value``` can be written as you write it usually. It can be visible, hidden, scroll, auto, etc..

## Padding
<a name="#padding"></a><a name="9.1"></a>
[9.1](#padding) **Padding**: Set padding.

Using ```bs-pa_value``` where ```value``` can be written as you write it usually. Example ? ```bs-pa_15px```. Percentage is working too.

**Multiple example** : ```bs-pa_12px-23px``` or ```bs-pa_10px-15px-20px``` or ```bs-pa_5px-10px-15px-20px```

## Position
<a name="#position"></a><a name="10.1"></a>
[10.1](#position) **Position**: Set position.

Using ```bs-p_value``` where ```value``` can be written as you write it usually. It can be relative, absolute, fixed
## Text-align
<a name="#text-align"></a><a name="11.1"></a>
[11.1](#text-align) **Text-align**: Set text-align.

Using ```bs-t-a_value``` where ```value``` can be written as you write it usually. It can be center, left, right, justify, etc...

## Vertical-align
<a name="#vertical-align"></a><a name="12.1"></a>
[12.1](#vertical-align) **Vertical-align**: Set vertical-align.

Using ```bs-v-a-a_value``` where ```value``` can be written as you write it usually. It can be baseline, middle, bottom, etc...
## Width
<a name="#width"></a><a name="13.1"></a>
[13.1](#width) **Width**: Set width.

Using ```bs-w_value``` where ```value``` can be written as you write it usually. It can be in px, in %, etc


## Hover
<a name="#hover"></a><a name="14.1"></a>
[13.3](#hover) **Hover**: Set an :hover.

Using ```bsh-property_value``` where ```property``` is the property you want to set :hover and where ```value``` can be written as you write it usually. 

# License

ClaCss by Guillaume Bonnet [@idkn on Github](https://github.com/idkn) is licensed under MIT.

# Improvement
Check code. Write code. Push code.
