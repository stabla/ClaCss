// == ClaCss.js
//  A Basesign component
//
//  Write CSS with classes. Light. Fast. Flexible.
//
// Create by Guillaume Bonnet
// Follow me on Github : @idkn

// == structure variables
const   bs_ = 'bs-';
const   bs_hover = 'bsh-';
// property variable string
const   borderStr = 'border';
// property name's variables
const   conf = ['bg-c', 'c', 'f-s', 'f-w', 'f-f', 'ma', 'pa', 'h', 'w', 'po', 'o', 't', 'r', 'b', 'l', 't-a', 'v-a', 'd'],
        conf_equivalent = ['backgroundColor', 'color', 'fontSize', 'fontWeight', 'fontFamily', 'margin', 'padding', 'height', 'width', 'position', 'overflow', 'top', 'right', 'bottom', 'left', 'textAlign', 'verticalAlign', 'display'],
        border_arr = ['bo', 'bo-t', 'bo-r', 'bo-b', 'bo-l'],
        border_radius_arr = ['bora', 'bora-t', 'bora-tl', 'bora-tr', 'bora-r', 'bora-b', 'bora-bl', 'bora-br', 'bora-l'];

const   d = document;
const   empt = ' ';
const   underscore = '_';
const   sp_comma = "'";
const   comma = '"';
const   round_arr = ['', 'Top', 'Right', 'Bottom', 'Left'],
        round_arr_detailed = ['', 'Top', 'TopLeft', 'TopRight', 'Right', 'Bottom', 'BottomLeft', 'BottomRight', 'Left'];

var     s, sl, el, prperty, l, hoverOptions = 0;

// strip the two last letter of a string
const stripTwoLast = function(s) {
    return s.substring(0, s.length - 2);
}
// check if the last letter is 1
const checkIfMultiple = function(s) {
    return s.slice(-1) === '1';
}
// get position of an string in arr, or check if value exist in arr
const getPosFromArr = function(str, arr) {
    for(var i = 0; i < arr.length ; i++) {
        while(str == arr[i]) {
            return i;
        }
    }
}

// recognize property
const rP = function(str) {
    var a = [];
    for (var i = 0;; i++) {
        const charAtI = str.charAt(i);
        if (charAtI != underscore) {
            a.push(str.charAt(i));
        } else {
            break;
        }
    }
    return a.join('');
}
// check equality
const c = function(t, custom_length) {
    return (typeof custom_length !== 'undefined') 
            ? s.substring(0, custom_length) === t 
            : s.substring(0, l) === t;
    console.log('GROS FDP');
}
// change.
const ch = function(js, replace) {
    replace = (typeof replace !== 'undefined') 
                ? replace 
                : 0;
    var element = d.getElementsByClassName(el + s)[0],
        elementVal = s.substring(l + 1, sl);
    
    if(checkIfMultiple(elementVal)) {
        elementVal = stripTwoLast(elementVal);
        replace = 1;
    }
    
    if (hoverOptions === 1) {
        var oldValue = element.style[js];

        element.addEventListener('mouseover', function () {
            return this.style[js] = elementVal;
        });

        element.addEventListener('mouseout', function () {
            return this.style[js] = oldValue;
        });

    } else {
        if (replace == 1) {
            return element.style[js] = elementVal.split('-').join(' ');
        } else {
            return element.style[js] = elementVal;
        }
    }
}

// Go through property, get property, recognize it, and change style with ch()'s function.
const bsApply = function(s) {
    for (var i = 0;; i++) {
        var positionInConf = getPosFromArr(prperty, conf);
        
        if (getPosFromArr(prperty, conf) !== undefined) {
            if(prperty === 'f-a' || prperty === 'f-f' || prperty === 'ma' || prperty === 'pa') {
            ch(conf_equivalent[positionInConf], 1);
                break;
            } else {
            ch(conf_equivalent[positionInConf]);
                break;
            }
        } else {
            ch(prperty);
            break;
        }
    }
}

class hoverClass {
    recognize(el) {
        sl = s.length,
            prperty = rP(s),
            l = prperty.length;

        hoverOptions = 1;
        return bsApply(s);
        hoverOptions = 0;
    }
}

class r {
    recognize(el) {
        sl = s.length,
            prperty = rP(s),
            l = prperty.length;
        // analyse when it's for one complete side 
        const oneSide = function(str, val, opt) {
            var chIt = function (x) {
                    ch(str + x + val + opt)
                },
                itCh = function (x) {
                    ch(str + val + x + opt)
                }
            if (val === 'Top' || val === 'Bottom') {
                itCh('Left'), itCh('Right');
            }
            if (val === 'Right' || val === 'Left') {
                chIt('Top'), chIt('Bottom');
            }
        }
        // check if it's a property with top/right/bottom/left
        const checkLoop = function(ele, str_el, arr, opt, more) {
            opt = (typeof opt !== 'undefined') ? opt : '';
            more = (typeof more !== 'undefined') ? more : ''; // multiple means there's TopLeft/BottomRight options, it's activated. 
            for (var i = 0;; i++) {
                if (c(ele[i])) {
                    if (more === 'multiple' && getPosFromArr(arr[i], ['Top', 'Left', 'Bottom', 'Right']) !== undefined) {
                        oneSide(str_el, arr[i], opt);
                    } else {
                        ch(str_el + arr[i] + opt, 1);
                    }
                    break;
                }
            }
        }
        // si les deux premières lettres sont égale à bo
        if (c(border_arr[0] + '-', 3)) {
            checkLoop(border_arr, borderStr, round_arr);
        } else if (c(border_radius_arr[0], 4)) { // border-radius
            checkLoop(border_radius_arr, borderStr, round_arr_detailed, 'Radius', 'multiple');
        }
        return bsApply(s);
    }
}

var fillLetters = [],
    fillLettersH = [],
    resGrouped = [],
    resGroupedH = [],
    aPos = [],
    aPosH = [],
    strBody = d.body.innerHTML,
    pos, posH, cls;

const jAndR = function(type) {
    type = (typeof type !== 'undefined') ? type : '';
    type === 'hover' 
            ? s = resGroupedH = fillLettersH.join('') 
            : s = resGrouped = fillLetters.join('');
    
    if (type === 'hover') {
        cls = new hoverClass();
        cls.recognize(el);
        fillLettersH = resGroupedH = [];
    } else {
        cls = new r();
        cls.recognize(el);
        fillLetters = resGrouped = [];
    }
}

const checkPosi = function (str, p, ele, type) {
    var beforeStart = str.charAt(p - ele.length - 1),
        conditionEqualComaEmpt = beforeStart === comma || beforeStart === sp_comma || beforeStart === empt;

    if (conditionEqualComaEmpt) {
        for (var i = p;; i++) {
            var charAtI = str.charAt(i);
            if (charAtI != comma && charAtI != empt && charAtI != sp_comma) {
                type === 'hover' ?
                    fillLettersH.push(str.charAt(i)) : fillLetters.push(str.charAt(i));
            } else {
                break;
            }
        }
        type === 'hover' ? jAndR('hover') : jAndR();
    }
}

function findAndR(p, a, bs_el, type) {
    type = (typeof type !== 'undefined') ? type : '';
    (function () {
        for (i = 0; i < strBody.length; ++i) {
            while (p > -1) {
                a.push(p);
                p = strBody.indexOf(bs_el, p + 1);
            }
        }
    })();
    (function () {
        for (var i = 0; i < a.length; i++) {
            el = bs_el;
            checkPosi(strBody, a[i] + bs_el.length, bs_el, type);
        }
    })();
}

// to launch immediatly, get the position 'bs-' && 'bsh-'
(function () {
    pos = strBody.indexOf(bs_);
    pos_hover = strBody.indexOf(bs_hover);
})();
// Basic bs-
if (pos !== -1) {
    findAndR(pos, aPos, bs_, '');
}
// hover
if (pos_hover !== -1) {
    findAndR(pos_hover, aPosH, bs_hover, 'hover');
}
