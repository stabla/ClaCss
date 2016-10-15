/* ClaCss.js | (c) 2016 Github @idkn | https://github.com/idkn/ClaCss */

// == structure variables
const BS = 'bs-';
const BSSC = 'sc-';
const BSUC = 'uc-';
// == property name's
const CONF = ['bg-c', 'c', 'f-s', 'f-w', 'f-f', 'ma', 'pa', 'h', 'w', 'po', 'o', 't', 'r', 'b', 'l', 't-a', 'v-a', 'd'];
const CONF_EQUIVALENT = ['backgroundColor', 'color', 'fontSize', 'fontWeight', 'fontFamily', 'margin', 'padding', 'height', 'width', 'position', 'overflow', 'top', 'right', 'bottom', 'left', 'textAlign', 'verticalAlign', 'display'];

const BORDER_ARR = ['bo', 'bo-t', 'bo-r', 'bo-b', 'bo-l'];
const BORDER_RADIUS_ARR = ['bora', 'bora-t', 'bora-tl', 'bora-tr', 'bora-r', 'bora-b', 'bora-bl', 'bora-br', 'bora-l'];

const ROUND_ARR = ['', 'Top', 'Right', 'Bottom', 'Left'];
const ROUND_ARR_DETAILED = ['', 'Top', 'TopLeft', 'TopRight', 'Right', 'Bottom', 'BottomLeft', 'BottomRight', 'Left'];

const d = document;
const EMPTNOSPACE = '';
const EMPTSPACE = ' ';
const UNDERSCORE = '_';
const COMMA = "'";
const DOUBLECOMMA = '"';

var cls, strBody;
var s, sl, el, prperty, prpl;
var hoverOptions = 0,
    existingConfig = false;

var propPositions = [];
var aPos = [];
var aPosSC = [];
var aPosUC = [];

var fillLetters = [];

// For custom config.
var conf_name = [];
var conf_name_value = [];

//  Functions
// strip the two last letter of a string
const stripTwoLast = function (s) {
    return s.substring(0, s.length - 2);
}
// check if the last letter is 1
const checkIfMultiple = function (s) {
    return s.slice(-1) === 'm';
}
// get position of an string in arr, or check if value exist in arr
const getPosFromArr = function (str, arr) {
    for (var i = 0; i < arr.length; i++) {
        while (str === arr[i]) {
            return i;
        }
    }
}
// recognize property
const rP = function (str) {
    var a = [];
    for (var i = 0;; i++) {
        const charAtI = str.charAt(i);
        if (charAtI != UNDERSCORE) {
            a.push(str.charAt(i));
        } else {
            break;
        }
    }
    return a.join('');
}
// check equality
const c = function (t, custom_length) {
    return (typeof custom_length !== 'undefined') 
        ? s.substring(0, custom_length) === t 
        : s.substring(0, prpl) === t;
}

const border_checking = function () {
    // analyse when it's for one complete side 
    const oneSide = function (str, val, opt) {
        var chIt = function (x) {
            ch(str + x + val + opt);
            },
            itCh = function (x) {
                ch(str + val + x + opt);
            }
        if (val === 'Top' || val === 'Bottom') {
            itCh('Left'), itCh('Right');
        }
        if (val === 'Right' || val === 'Left') {
            chIt('Top'), chIt('Bottom');
        }
    }
    // check if it's a property with top/right/bottom/left
    const checkLoop = function (ele, str_el, arr, opt, more) {
        opt = (typeof opt !== 'undefined') ? opt : '';
        more = (typeof more !== 'undefined') ? more : '';
        for (var i = 0;; i++) {
            if (c(ele[i])) {
                // multiple means there's TopLeft/BottomRight options, it's activated. 
                if (more === 'multiple' && getPosFromArr(arr[i], ['Top', 'Left', 'Bottom', 'Right']) !== undefined) {
                    oneSide(str_el, arr[i], opt);
                } else {
                    ch(str_el + arr[i] + opt, 1);
                }
                break;
            }
        }
    }
    // first two letters === bo-
    if (c(BORDER_ARR[0] + '-', 3)) {
        checkLoop(BORDER_ARR, 'border', ROUND_ARR);
    } else if (c(BORDER_RADIUS_ARR[0], 4)) { // === border-radius
        checkLoop(BORDER_RADIUS_ARR, 'border', ROUND_ARR_DETAILED, 'Radius', 'multiple');
    } else if (c(BORDER_ARR[0], 2)) { // === bo only 
        checkLoop(BORDER_ARR, 'border', ROUND_ARR);
    }
}

// regorup all element of an array
const regroup = function (arr) {
    return arr.join('');
}
// get true if my int is > of any element of an array
const getInferior = function (int, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (int > arr[i]) {
            return true;
        }
    }
}
const checkAllRule = function (str, p) {
    var n = [];
    for (var i = p;; i++) {
        var charAtI = str.charAt(i);
        if (charAtI != DOUBLECOMMA && charAtI != EMPTSPACE && charAtI != COMMA) {
            n.push(str.charAt(i));
        } else {
            break;
        }
    }
    return n;
}
const transformPositionToPositionAndValue = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        a = checkAllRule(strBody, arr[i]);
        arr[i] = regroup(a);
    }
    return arr;
}
const findFrom = function (int) {
    for (var i = int;; i--) {
        if (strBody.charAt(i) === '<') {
            return i;
            break;
        }
    }
}
const checkBetween = function (from, to, arr) {
    var n = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > from && arr[i] < to) {
            n.push(arr[i]);
        }
    }
    return n;
}
const checkClassesBefore = function (from, to, arr) {
    var n = [],
        partText = strBody.substring(from, to),
        whichWrd,
        wrdFilln = function () {
            var wrd = partText.indexOf(whichWrd)
            while (wrd > -1) {
                n.push(from + wrd);
                wrd = partText.indexOf(whichWrd, wrd + 1);
            }
        }
    whichWrd = s, wrdFilln();
    return n;
}

const trierArray = function (arr) {
    return arr.sort(function (a, b) {
        a - b;
    })
}
const filterBeforeAfter = function (p, el) {
    return (strBody.charAt(p - 1) === EMPTNOSPACE || strBody.charAt(p - 1) === EMPTSPACE || strBody.charAt(p - 1) === DOUBLECOMMA || strBody.charAt(p - 1) === COMMA);
}
// do change in JS.
const ch = function (js, replace) {
    replace = (typeof replace !== 'undefined') ? replace : 0;
    var element = d.getElementsByClassName(s)[0],
        elementVal = s.substring(prpl + 1, sl);

    if (s.substring(sl - 6, sl) === ':hover') {
        hoverOptions = 1;
        elementVal = s.substring(prpl + 1, sl - 6);
    }
    
    // check if there's TopLeft, or something similar.
    if (checkIfMultiple(elementVal)) {
        elementVal = stripTwoLast(elementVal);
        replace = 1;
    }
    // if useConf is activated.
    if (existingConfig !== false) {
        element = d.getElementsByClassName(el + existingConfig)[0];
    }

    if (js.substring(0, BS.length) === BS) {
        js = js.substring(3);
    }

    if (hoverOptions === 1) {
        var oldValue = element.style[js];

        element.addEventListener('mouseover', function () {
            return this.style[js] = elementVal;
        });
        element.addEventListener('mouseout', function () {
            return this.style[js] = oldValue;
        });
        hoverOptions = 0;
    } else {
        if (replace == 1) {
            return element.style[js] = elementVal.split('-').join(' ');
        } else {
            return element.style[js] = elementVal;
        }
    }
}

// Go through property, get property, recognize it, and change style with ch()'s function.
const bsApply = function (s) {
    for (var i = 0;; i++) {
        var positionInConf = getPosFromArr(prperty, CONF);
        
        if (getPosFromArr(prperty, CONF) !== undefined) {
            if (prperty === 'f-a' || prperty === 'f-f' || prperty === 'ma' || prperty === 'pa') {
                ch(CONF_EQUIVALENT[positionInConf], 1);
                break;
            } else {
                ch(CONF_EQUIVALENT[positionInConf]);
                break;
            }
        } else {
            ch(prperty);
            break;
        }
    }
}

class r {
    recognize() {
        sl = s.length;
        prperty = rP(s);
        prpl = prperty.length;

        if (c('bo', 2)) {
            border_checking();
        }
        return bsApply(s);
    }
}

const applyBS = function (str, p, type) {
    type = (typeof type !== 'undefined') ? type : '';
    s = regroup(fillLetters);

    cls = new r();
    if (type === 'saveConf') {
        for (var i = p;; i++) {
            var charAtI = str.charAt(i);
            var arr = [];
            if (charAtI === ">") {
                if (getInferior(i, propPositions)) {
                    arr = checkBetween(findFrom(i), p, propPositions);
                    arr = transformPositionToPositionAndValue(arr);
                    arr = arr.join(', ');


                    conf_name.push(s.substring(3));
                    conf_name_value.push(arr);
                    break;
                }

            }
        }
    } else if (type === 'useConf') {
        var x = getPosFromArr(s.substring(3), conf_name);
        cnv = conf_name_value[x], cnv = cnv.split(', ');

        for (var i = 0, a; i < cnv.length; i++) {
            s = a = cnv[i];
            el = BSUC;
            existingConfig = conf_name[x];
            sl = a.length;
            prperty = rP(a);
            prpl = prperty.length;

            border_checking();
            bsApply(a);

            existingConfig = false;
        }
    } else {
        cls.recognize();
    }
    fillLetters = [];
}

const captureRule = function (str, p, type) {
    fillLetters = checkAllRule(str, p);
    applyBS(str, p, type);
}
const doChangement = function (p, a, type) {
    if (a.length > 0) {
        for (var i = 0; i < a.length; i++) {
            captureRule(strBody, a[i], type);
        }
    }
}
// part of findWhereElementsAre()
const fillPlace = function (str, p, a, ele, type) {
    for (i = 0; i < strBody.length; ++i) {
        while (p > -1) {
            if (type === BS || type === 'saveConf' || type === 'useConf') {
                if (filterBeforeAfter(p, ele)) {
                    a.push(p);
                }
            } else {
                if (filterBeforeAfter(p, ele) && strBody.charAt(p + ele.length) === UNDERSCORE) {
                    a.push(p);
                }
            }
            p = strBody.indexOf(ele, p + 1);
        }
    }
}
//find all position where the ele are.
const findWhereElementsAre = function (p, a, ele, type) {
    type = (typeof type !== 'undefined') ? type : '';

    fillPlace(strBody, p, a, ele, type);
    return a;
}

const bs_launch = function () {
    strBody = d.body.innerHTML;

    // get position and fill array
    for (var i = 0; i < CONF.length; i++) {
        var p;
        var x = CONF[i];
        if (filterBeforeAfter(strBody.indexOf(x), x)) {
            p = strBody.indexOf(x);
            if (p !== -1) {
                // il y a bien rien devant la classe, donc c'est bien à changer.
                propPositions = findWhereElementsAre(p, aPos, x, '');
            }
        } else {
            continue;
        }
    }
    // get position of bs-
    if (strBody.indexOf(BS) !== -1) {
        aPos = [];
        aPos = findWhereElementsAre(strBody.indexOf(BS), aPos, BS, BS);
        propPositions = propPositions.concat(aPos);
    }
    // get posiiton(s) of border
    aPos = [];
    for (var i = 0; i < BORDER_ARR.length; i++) {
        var x = BORDER_ARR[i];
        if (strBody.indexOf(x) !== -1) {
            aPos = findWhereElementsAre(strBody.indexOf(x), aPos, x);
            propPositions = propPositions.concat(aPos);
        }
    }
    // get position(s) of border-radius
    aPos = [];
    for (var i = 0; i < BORDER_RADIUS_ARR.length; i++) {
        var x = BORDER_RADIUS_ARR[i];
        if (strBody.indexOf(x) !== -1) {
            aPos = findWhereElementsAre(strBody.indexOf(x), aPos, x);
            propPositions = propPositions.concat(aPos);
        }
    }
    // check for saveConf
    propPositions = trierArray(propPositions);
    if (strBody.indexOf(BSSC) !== -1) {
        findWhereElementsAre(strBody.indexOf(BSSC), aPosSC, BSSC, 'saveConf');
        doChangement(strBody.indexOf(BSSC), aPosSC, 'saveConf');
    }
    // check for useConf
    if (strBody.indexOf(BSUC) !== -1) {
        findWhereElementsAre(strBody.indexOf(BSUC), aPosUC, BSUC, 'useConf');
        doChangement(strBody.indexOf(BSUC), aPosUC, 'useConf');
    }
    // apply changement and style for all position. The last property is applied. 
    for (var i = 0; i < propPositions.length; i++) {
        fillLetters = checkAllRule(strBody, propPositions[i]);
        applyBS(strBody, propPositions[i], '');
    }
};

// Launch when DOM is loaded.
d.addEventListener("DOMContentLoaded", function (event) {
    bs_launch();
});
