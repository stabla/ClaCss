# ClaCss.js (Basesign)



ClaCss is a super cool tool to write css with class, but css's properties with variable values (as is color, margin, etc...).
For other css properties, use CSS Framework as Basesign. It's light but	nevertheless insane

  - Extra light (under 150 lines of code)
  - Flexible
  - Magic

For information, ClaCss is a component of [Basesign]() which provide clever css classes to use, and write less css as possible.


## Table of contents
1. [Borders]()
2. [Font]()
3. [Colors]()
4. [Height]()
5. [Margin]()
6. [Padding]()
7. [Width]()

### Download
    bower clacss

### Installation
    <script href="clacss.js"></script>

Just locate the js file, and let the magic explain itself (and write class, magic need little help)

### Example
Want to make color on a div really fast ? 
```
<div class="bs-color_#333"> </div
```

Yeah! Color #333 is now applied.

### Important informations
If you haven't understood example, here's some explanation. bs- is for the structure, color is the property, _ is for spacing, but you can already use  '**-**'  if you want. And #333 is value.

##### What can I use as value?
For color property, you can use as value :
* color name
* hex number
* rgb number
* rgba number

If you're more interested, check *documentation*.

# Documentation
## Borders

-[1.1](#border) **Border**: Basic of border.
  
By using ```bs-border_value``` where ```value``` can be written as this : ```1px-solid-red```. It's will be a border of 1px with solid pixel in red color. 

-[1.2](#border-t) **Border Top**: Top border.

Using ```bs-border-t_value``` where ```value``` can be written as the same way is [1.1](#border)

-[1.3](#border-r) **Border Right**: Right border.

Using ```bs-border-r_value``` where ```value``` can be written as the same way is [1.1](#border)

-[1.4](#border-b) **Border Bottom**: Bottom border.

Using ```bs-border-b_value``` where ```value``` can be written as the same way is [1.1](#border)

-[1.5](#border-l) **Border left**: Left border.

Using ```bs-border-l_value``` where ```value``` can be written as the same way is [1.1](#border)
## Font
-[2.1](#Font-size) **Font Size**: Set font size.

Using ```bs-t-size_value``` where ```value``` can be written in px, em, rem, %, you've understand, it's as you want.

-[2.2](#Font-weight) **Font weight**: Set font weight.

Using ```bs-t-weight_value``` where ```value``` can be written as you write font-weight generally.
## Colors
-[3.1](#Colors) **Colors**: Set color.

Using ```bs-c_value``` where ```value``` can be written in color name (red, blue, green) or in hexa (#fff, #123456, etc), or in rgb/rgba.

-[3.2](#Background-color) **Background-color**: Set background-color.

Using ```bs-bg-c_value``` where ```value``` can be written as you write it usually.
## Height
-[4.1](#Height) **Height**: Set height.

Using ```bs-h_value``` where ```value``` can be written as you write it usually. It can be in px, in %, etc
## Margin
-[5.1](#Margin) **Margin**: Set margin.

Using ```bs-margin_value``` where ```value``` can be written as you write it usually. Example ? ```bs-margin_15px```. Percentage is working too.

**Multiple example** : ```bs-margin_12px-23px``` or ```bs-margin_10px-15px-20px``` or ```bs-margin_5px-10px-15px-20px```

## Padding
-[6.1](#Padding) **Padding**: Set padding.

Using ```bs-padding_value``` where ```value``` can be written as you write it usually. Example ? ```bs-padding_15px```. Percentage is working too.

**Multiple example** : ```bs-padding_12px-23px``` or ```bs-padding_10px-15px-20px``` or ```bs-padding_5px-10px-15px-20px```
## Width
-[7.1](#Width) **Width**: Set Width.

Using ```bs-w_value``` where ```value``` can be written as you write it usually. It can be in px, in %, etc

# License
[![N|Solid](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/)

Creative Commons License
ClaCss by Guillaume Bonnet [@idkn on Github](https://github.com/idkn) is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.

# Improvement
Check code. Write code. Push code.
