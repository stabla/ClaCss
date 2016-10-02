// == ClaCss.js
//  A Basesign component
//
//  Write CSS with classes. Light. Fast. Flexible.
//
// Create by Guillaume Bonnet
// Follow me on Github : @idkn


const bs_ = "bs-";

const   border_arr = ['border', 'border-t', 'border-r', 'border-b', 'border-l'],
        bgcol = 'bg-c',
        color = 'c',
        ftsz = 't-size',
        ftwt = 't-weight',
        mrgn = 'margin',
        pddng = 'padding',
        height = 'h',
        width = 'w';

const   bgcol_l = bgcol.length,
        col_l = color.length,
        ftsz_l = ftsz.length,
        ftwt_l = ftwt.length,
        mrgn_l = mrgn.length,
        pddng_l = pddng.length,
        height_l = height.length,
        width_l = width.length;

const d = document;

const   empt = ' ',
        comma = '"',
        sp_comma = "'",
        round_arr = ['','Top','Right','Bottom','Left'];

var b = false;
var arrPos = [],
    strBody = d.body.innerHTML,
    pos;

var fillWithLetters = [],
    resultRegrouped = [];

class r {
    recognize(s) {
        var sl = s.length;

        // condition
        function c(l, t) {
            return s.substring(0, l) === t;
        }

        // change
        function ch(l, js, replace) {
            replace = (typeof replace !== 'undefined') ? replace : 0;
            if (replace == 1) {
                return d.getElementsByClassName(bs_ + s)[0].style[js] = s.substring(l + 1, sl).split('-').join(' ');
            } else {
                return d.getElementsByClassName(bs_ + s)[0].style[js] = s.substring(l + 1, sl);
            }
        }
        
        for(var i = 0; i < 5; i++) {
            if (c(border_arr[i].length, border_arr[i])) {
                ch(border_arr[i].length, border_arr[0] + round_arr[i], 1);
            }
        }
        if (c(ftsz_l, ftsz)) {
            ch(ftsz_l, 'fontSize')
            
        }
        if (c(col_l, color)) {
            ch(col_l, 'color');
        }
        if (c(bgcol_l, bgcol)) {
            ch(bgcol_l, 'backgroundColor');
        }
        if (c(pddng_l, pddng)) {
            ch(pddng_l, 'padding', 1);
        }
        if (c(mrgn_l, mrgn)) {
            ch(mrgn_l, 'margin', 1);
        }
        if (c(width_l, width)) {
            ch(width_l, 'width');
        }
        if (c(height_l, height)) {
            ch(height_l, 'height');
        }
        if(c(ftwt_l, ftwt)) {
            ch(ftwt_l, 'fontWeight');
        }
        

    }
}

function posConfig(val) {
    pos = strBody.indexOf(val);
}
// to launch immediatly
function findClasses(string, find, position) {
    for (i = 0; i < string.length; ++i) {
        while (position > -1) {
            arrPos.push(position);
            position = string.indexOf(find, position + 1);
        }
    }
}
function joinAndRecognize(arrLetters, arrResult) {
    resultRegrouped = fillWithLetters.join('');

    var c = new r();
    c.recognize(resultRegrouped);
    
    fillWithLetters = [],
    resultRegrouped = [];
}
function checkPosition(string, pos) {
    for (var i = pos; b != true; i++) {
        var charAtI = string.charAt(i);
        if (charAtI != comma && charAtI != empt && charAtI != sp_comma) {
            fillWithLetters.push(string.charAt(i));
        } else {
            b = true;
        }
    }
    joinAndRecognize(fillWithLetters, resultRegrouped);
}
function doAllCheck(array) {
    for (var i = 0; i < array.length; i++) {
        b = false;
        checkPosition(strBody, array[i] + bs_.length);
    }
}

// conf
posConfig(bs_);
findClasses(strBody, bs_, pos);

doAllCheck(arrPos);
