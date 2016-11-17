# ClaCss.js (Complete)

(Complete mean it's without Basesign. If you want the Basesign version, click here. Or check the Basesign's page).

ClaCss is a super cool tool to write css with class (as color, margin, etc...).

  - Flexible
  - Magic
  - You can apply :hover
  - You can save rules and use them again.
  - You can apply any javascript style object

For information, ClaCss is a component of [Basesign]() which provide clever css classes to use, and write less css as possible. But you can also use ClaCss.js if you don't use [Basesign]().

It's for little project. I don't recommend to use this on big project. CSS's files are better.


## Table of contents
1. [General & Global](#general--global)
1. [Borders](#borders)
1. [Fonts](#fonts)
1. [Colors & Background's Color](#colors--backgrounds-color)
1. [Height](#height)
1. [Margin](#margin)
1. [Padding](#padding)
1. [Width](#width)
1. [Hover](#hover)
1. [Save configuration](#save-configuration)
1. [Use saved configuration](#use-configuration)


## List of short-hand's included property
- Background-color : ```bg-c```
- Color : ```c```
- Font-size : ```f-s```
- Font-weight : ```f-w```
- Font-family : ```f-f```
- Margin : ```ma```
- Padding : ```pa```
- Height : ```h```
- Width : ```w```
- Top : ```t``` / Right : ```r``` / Bottom : ```b``` / Left : ```l```

(Want to add something ? Contact me or go on GitHub)

### Download
    bower install ClaCss

 or check [project's website](https://idkn.github.io/ClaCss)

### Installation
    <script src="ClaCss.js"></script>

Just locate the js file, and let the magic explain itself (and write class, magic need little help)

### Example
Want to make color on a div really fast ?
```
<div class="c_#333"> </div
```

Yeah! Color #333 is now applied.

### Important informations
If you haven't understood example, here's some explanation. ```c```, i.e color is the property, _ is for spacing. And #333 is value.

If you have multiple property's value use '**-**' to space each value.
Multiple's value example : ```ma_12px-23px``` or ```ma_10px-15px-20px``` or ```ma_5px-10px-15px-20px```

When you're using multiple values but it's an javascript's style object (not included in ClaCss.js's conf), like for example ```transition_value``` add ```-m``` or  ```_m``` to specify that is a multiple value.

Thus, it will be:

**Example** : ```ma_5px-10px-15px-20px_m```.


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

**Don't forget to add ```-m``` OR ```_m``` to specify that's a multiple value.**

**Don't forget to add ```bs-``` before your property when it's not a available short-hand.**

## Borders
### Borders
  <a name="#borders-border"></a><a name="2.1.1"></a>
[2.1.1](#borders-border) **Border**: Basic of border.

By using ```bo_value``` where ```value``` can be written as this : ```1px-solid-red```. It will be a border of 1px with solid pixel in red color.

<a name="#border-t"></a><a name="2.1.2"></a>
[2.1.2](#border-t) **Border Top**: Top border.

Using ```bo-t_value``` where ```value``` can be written as the same way is [2.1.1](#border)

<a name="#border-r"></a><a name="2.1.3"></a>
[2.1.3](#border-r) **Border Right**: Right border.

Using ```bo-r_value``` where ```value``` can be written as the same way is [2.1.1](#border)

<a name="#border-b"></a><a name="2.1.4"></a>
[2.1.4](#border-b) **Border Bottom**: Bottom border.

Using ```bo-b_value``` where ```value``` can be written as the same way is [2.1](#border)

<a name="#border-l"></a><a name="2.1.5"></a>
[2.1.5](#border-l) **Border left**: Left border.

Using ```bo-l_value``` where ```value``` can be written as the same way is [2.1.1](#border)

### Border-radius
<a name="#border-radius"></a><a name="2.2"></a>
[2.2](#border-radius) **Border radius**: Basic of border radius.

By using ```bora_value``` where ```value``` can be written as this : ```10px```. It will be a border-radius of 10px.

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

An example :    ```bora-t_10px``` will set border_radius for all top with 10px.

## Fonts
<a name="#font-size"></a><a name="3.1"></a>
[3.1](#font-size) **Font Size**: Set font size.

Using ```f-s_value``` where ```value``` can be written in px, em, rem, %, you've understand, it's as you want.

<a name="#font-weight"></a><a name="3.2"></a>
[3.2](#font-weight) **Font weight**: Set font weight.

Using ```f-w_value``` where ```value``` can be written as you write font-weight generally.

<a name="#font-family"></a><a name="3.3"></a>
[3.3](#font-family) **Font family**: Set font family.

Using ```f-f_value``` where ```value``` can be written as you write font-family generally.

Example : ```f-f_Merriweather```

## Colors & Background's Color
<a name="#color"></a><a name="4.1"></a>
[4.1](#color) **Colors**: Set color.

Using ```c_value``` where ```value``` can be written in color name (red, blue, green) or in hexa (#fff, #123456, etc), or in rgb/rgba.

<a name="#background-color"></a><a name="4.2"></a>
[4.2](#background-color) **Background-color**: Set background-color.

Using ```bg-c_value``` where ```value``` can be written as you write it usually.

## Height
<a name="#height"></a><a name="6.1"></a>
[6.1](#height) **Height**: Set height.

Using ```h_value``` where ```value``` can be written as you write it usually. It can be in px, in %, etc
## Margin
<a name="#margin"></a><a name="7.1"></a>
[7.1](#margin) **Margin**: Set margin.

Using ```ma_value``` where ```value``` can be written as you write it usually. Example ? ```ma_15px```. Percentage is working too.

**Multiple example** : ```ma_12px-23px``` or ```ma_10px-15px-20px``` or ```ma_5px-10px-15px-20px```

## Padding
<a name="#padding"></a><a name="9.1"></a>
[9.1](#padding) **Padding**: Set padding.

Using ```pa_value``` where ```value``` can be written as you write it usually. Example ? ```pa_15px```. Percentage is working too.

**Multiple example** : ```pa_12px-23px``` or ```pa_10px-15px-20px``` or ```pa_5px-10px-15px-20px```

## Width
<a name="#width"></a><a name="13.1"></a>
[13.1](#width) **Width**: Set width.

Using ```w_value``` where ```value``` can be written as you write it usually. It can be in px, in %, etc


## Hover
<a name="#hover"></a><a name="14.1"></a>
[14.1](#hover) **Hover**: Set an :hover.

Using ```property_value:hover``` where ```property``` is the property you want to set your hover and where ```value``` can be written as you write it usually.

Example : ```c_green:hover```

## Save configuration
<a name="#saveconf"></a><a name="15.1"></a>
[15.1](#saveconf) **Save configuration**: Save configuration.

You can save all the property you have setted in your class. For this, use ```sc-nameOfYourConfig```, sc- is to specify it's an saving, and obviously, ```nameOfYourConfig``` is the name you want to give it.

Use one unique name per configuration.
Example : ```sc-Trumpostrophic``` will save your config.

Save your config at the last to save all classes before.
Example : ``` <div class="c_red bg-c_white pa_20% sc-Trumpostrophic"> ``` will save color, bg-c and padding in Trumpostrophic.


## Use configuration
<a name="#useconf"></a><a name="16.1"></a>
[16.1](#useconf) **Use configuration**: Use configuration.

To use configuration : ```uc-nameOfYourConfiguration```, where ```nameOfYourConfiguration``` is the name you have given to your config. For our previous example, we'll use ```uc-Trumpostrophic``` to apply ```c_red bg-c_white pa_20%```.

So far, so good ?

# License

ClaCss by Guillaume Bonnet [@idkn on Github](https://github.com/idkn) is licensed under MIT.

# Improvement
Check code. Write code. Push code.
