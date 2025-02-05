function MM_swapImgRestore() {
    var e, n, t = document.MM_sr;
    for (e = 0; t && e < t.length && (n = t[e]) && n.oSrc; e++)
        n.src = n.oSrc
}
function MM_preloadImages() {
    var e = document;
    if (e.images) {
        e.MM_p || (e.MM_p = new Array);
        var n, t = e.MM_p.length, r = MM_preloadImages.arguments;
        for (n = 0; n < r.length; n++)
            0 != r[n].indexOf("#") && (e.MM_p[t] = new Image,
            e.MM_p[t++].src = r[n])
    }
}
function MM_findObj(e, n) {
    var t, r, o;
    for (n = n || document,
    0 < (t = e.indexOf("?")) && parent.frames.length && (n = parent.frames[e.substring(t + 1)].document,
    e = e.substring(0, t)),
    !(o = n[e]) && n.all && (o = n.all[e]),
    r = 0; !o && r < n.forms.length; r++)
        o = n.forms[r][e];
    for (r = 0; !o && n.layers && r < n.layers.length; r++)
        o = MM_findObj(e, n.layers[r].document);
    return !o && n.getElementById && (o = n.getElementById(e)),
    o
}
function MM_swapImage() {
    var e, n, t = 0, r = MM_swapImage.arguments;
    for (document.MM_sr = new Array,
    e = 0; e < r.length - 2; e += 3)
        null != (n = MM_findObj(r[e])) && ((document.MM_sr[t++] = n).oSrc || (n.oSrc = n.src),
        n.src = r[e + 2])
}
function display(e) {
    oObj = document.getElementById(e),
    oObj && (oObj.style.display = "inline")
}
function hide(e) {
    oObj = document.getElementById(e),
    oObj && (oObj.style.display = "none")
}
function getMn(e) {
    document.getElementById("mn" + e).className = "selectMN"
}
function getMnBG(e) {
    document.getElementById("mnbg" + e).className = "selectMNBG"
}
