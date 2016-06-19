/*
  Japanese translation Reference
  2013-12-11 ver. (script version)
  2014-10-16 Updated (URL data)

  Copyright (c) 2013
      Makoto Mizukami,
        <http://makotom.org/>
      momdo
        <http://momdo.s35.xrea.com/>.

  licence: GNU-GPL-3.0-or-later
  // @source: http://www.gnu.org/licenses/gpl-3.0.html
*/

// DOM 構築後に実行
addEventListener("DOMContentLoaded", function(){
	// URL リスト
	// ID : {URL | [URL, ...]}, ...
	var refList = {
ARIA: 'https://momdo.github.io/wai-aria-1.1/',
ARIAHTML: 'https://momdo.github.io/html-aria/',
ATOM: [ 'http://momdo.s35.xrea.com/web-html-test/spec/rfc4287j.html',
    'http://www.futomi.com/lecture/japanese/rfc4287.html',
    'http://www.7key.jp/rfc/4287/rfc4287.html'
],//RFC4287
COOKIES: 'https://triple-underscore.github.io/RFC6265-ja.html', //RFC6265
CSP: ['https://triple-underscore.github.io/CSP3-ja.html',
'https://hashedhyphen.github.io/webappsec-specjp/csp/index.html',],
CORS: 'https://triple-underscore.github.io/Fetch-ja.html',
CSS: 'https://momdo.github.io/css2/Overview.html',
CSSATTR: 'https://triple-underscore.github.io/css-style-attr-ja.html',
CSSANIMATIONS: 'https://triple-underscore.github.io/css-animations-ja.html',
CSSBG: 'https://triple-underscore.github.io/css-backgrounds-ja.html',
CSSCASCADE: 'https://triple-underscore.github.io/css-cascade-ja.html',
CSSCOLOR: 'http://standards.mitsue.co.jp/resources/w3c/TR/css3-color/',
CSSFONTLOAD: 'https://triple-underscore.github.io/css-font-loading-ja.html',
CSSFONTS: 'https://triple-underscore.github.io/css-fonts-ja.html',
CSSIMAGES: 'http://momdo.s35.xrea.com/web-html-test/spec/CR-css3-images-20120417.html',
CSSOM: 'https://triple-underscore.github.io/cssom-ja.html',
CSSOMVIEW: 'https://triple-underscore.github.io/cssom-view-ja.html',
CSSOVERFLOW: 'https://triple-underscore.github.io/css-overflow3-ja.html',
CSSTRANSITIONS: 'https://triple-underscore.github.io/css-transitions-ja.html',
CSSUI: ['https://momdo.github.io/css-ui/',
    'https://triple-underscore.github.io/css-ui-ja.html',
],
CSSSYNTAX: 'https://triple-underscore.github.io/css-syntax-ja.html',
CSSTEXT: 'https://triple-underscore.github.io/css-text-ja.html',
CSSVALUES: [ 'http://momdo.s35.xrea.com/web-html-test/spec/CR-css3-values-20130404.html',
    'https://triple-underscore.github.io/css-values-ja.html',
],
CSSWM: 'https://triple-underscore.github.io/css-writing-modes-ja.html',
    //'http://suzukima.github.io/css-ja/css3-writing-modes/', //writing modes
DOM: 'https://triple-underscore.github.io/DOM4-ja.html',
DOMEVENTS: 'http://www.y-adagio.com/public/standards/tr_dom2_events/expanded-toc.html', //DOM2 Event
ECMA262: 'http://tsofthome.appspot.com/ecmascript.html',
ENCODING: 'https://triple-underscore.github.io/Encoding-ja.html',
FETCH: 'https://triple-underscore.github.io/Fetch-ja.html',
FILEAPI:  'https://triple-underscore.github.io/File_API-ja.html',
HTTP:  'https://triple-underscore.github.io/RFC723X-ja.html',
JAVASCRIPT: 'https://triple-underscore.github.io/javascript-ja.html',
JLREQ: 'http://www.w3.org/TR/jlreq/ja/',
//JSON: 'http://www.7key.jp/rfc/rfc4627.html', //RFC4627
MQ: 'https://triple-underscore.github.io/mediaqueries4-ja.html',
OPENSEARCH: 'https://sites.google.com/site/tsukamoto/doc/opensearch/spec-1-1-draft4',
ORIGIN:[ 'https://triple-underscore.github.io/RFC6454-ja.html',
 'http://www.ipa.go.jp/security/rfc/RFC6454JA.html'
], //RFC6454
//PNG: 'http://www.milk-island.net/document/png/', URL消失
RFC1034:  'http://srgia.com/docs/rfc1034j.html',
RFC1123:[ 'http://hp.vector.co.jp/authors/VA002682/rfc1123j.htm',
          'http://www2s.biglobe.ne.jp/~hig/tcpip/HostReq_Appl.html'
],

RFC2046:[ 'http://www.y-adagio.com/public/standards/tr_mime-p2_2046/toc.htm',
          'http://www.t-net.ne.jp/~cyfis/rfc/mime/rfc2046_ja-1.html',
          'http://jbpe.tripod.com/rfcj/rfc2046.j.sjis.txt',
          'http://www.akanko.net/marimo/data/rfc/rfc2046-jp.txt',
],
RFC2119:[ 'http://www.ipa.go.jp/security/rfc/RFC2119JA.html',
          'http://www.studyinghttp.net/rfc_ja/rfc2119',
          'http://www.cam.hi-ho.ne.jp/mendoxi/rfc/rfc2119j.html',
          'http://www.asahi-net.or.jp/~sd5a-ucd/rfc-j/rfc-2119j.html',
          'http://www.t-net.ne.jp/~cyfis/rfc/format/rfc2119_ja.html'
],
RFC2318: [ 'http://www.cam.hi-ho.ne.jp/mendoxi/rfc/rfc2318j.html',
           'http://suika.fam.cx/~wakaba/wiki/sw/n/RFC%202318',
           'http://www.7key.jp/rfc/rfc2318.html',
],
RFC2397: [ 'http://d.hatena.ne.jp/tily/20071103/p1',
           'http://www.darts.jp/reference/rfc/rfc2397-jp.txt',
],
RFC3490:   'http://www.jdna.jp/survey/rfc/rfc3490j.html',
RFC3629:[  'http://www5d.biglobe.ne.jp/~stssk/rfc/rfc3629j.html',
           'http://www.akanko.net/marimo/data/rfc/rfc3629-jp.txt'
],
RFC4329:   'http://suika.fam.cx/~wakaba/wiki/sw/n/RFC%204329',
RFC4648:   'http://www5d.biglobe.ne.jp/~stssk/rfc/rfc4648j.html',
RFC5280:   'http://www.ipa.go.jp/security/rfc/RFC5280-00JA.html',
RFC5322: [ 'http://srgia.com/docs/rfc5322j.html',
           'http://www.hde.co.jp/rfc/rfc5322_ja.txt'
],
SELECTORS: 'https://triple-underscore.github.io/selectors4-ja.html',
           //'http://www.y-adagio.com/public/standards/css3-selectors/',
SVG: 'http://www.hcn.zaq.ne.jp/___/SVG11-2nd/',
SVGTINY12: 'http://www.hcn.zaq.ne.jp/___/SVGTiny12/', 
URL: 'https://triple-underscore.github.io/URL-ja.html',
UTF7: 'http://soft.bko.to/rfc/rfc2152jp.txt', //RFC2152
WCAG: 'http://waic.jp/docs/WCAG20/Overview.html', //WCAG20
WCAG20: 'http://waic.jp/docs/WCAG20/Overview.html',
WEBIDL: 'https://triple-underscore.github.io/WebIDL-ja.html',
WSP: 'https://triple-underscore.github.io/RFC6455-ja.html',//RGC6455
XHR: 'https://triple-underscore.github.io/XHR-ja.html',
XML: 'http://w4ard.eplusx.net/translation/W3C/REC-xml-20081126/',
XMLNS: 'http://www.hcn.zaq.ne.jp/___/XML/Namespaces-ja.html',
XPATH10: 'http://www.doraneko.org/xml/xpath10/19991116/',
XSLT10: [ 'http://www.y-adagio.com/public/standards/tr_xslt10/toc.htm',
          'http://www.infoteria.com/jp/contents/xml-data/REC-xslt-19991116-jpn.htm',
          'http://www.hcn.zaq.ne.jp/___/XML/xslt10-ja.html'
],
/* //古い（すでにリファレンスにない）RFC
RFC1321:[ 'http://www.ipa.go.jp/security/rfc/RFC1321JA.html',
          'http://www.t-net.ne.jp/~cyfis/rfc/algorithm/rfc1321_ja.html',
          'http://srgia.com/docs/rfc1321j.html',
          'http://www.akanko.net/marimo/data/rfc/rfc1321-jp.txt',
],
RFC1345:  'http://www.asahi-net.or.jp/~bd9y-ktu/htmlrel_f/dtd_f/rfc_f/rfc1345j.html',
RFC1468:[ 'http://yasu.asuka.net/translations/RFC1468.html',
          'http://www.t-net.ne.jp/~cyfis/rfc/char/rfc1468_ja.html',
          'http://jbpe.tripod.com/rfcj/rfc1468.j.sjis.txt',
          'http://www.cam.hi-ho.ne.jp/mendoxi/rfc/rfc1468j.html',
          'http://www.imasy.or.jp/~yotti/rfc1468ej.txt'
],
RFC1554:[ 'http://www.cam.hi-ho.ne.jp/mendoxi/rfc/rfc1554j.html',
          'http://www.imasy.or.jp/~yotti/rfc1554ej.txt',
          'http://www.imasy.or.jp/~yotti/rfc1554jp.txt',
],
RFC1557:  'http://www.cam.hi-ho.ne.jp/mendoxi/rfc/rfc1557j.html',
RFC1842:  'http://www.cam.hi-ho.ne.jp/mendoxi/rfc/rfc1842j.html',
RFC1922:  'http://www.akanko.net/marimo/data/rfc/rfc1922-jp.txt',
RFC2045:[ 'http://www.akanko.net/marimo/data/rfc/rfc2045-jp.txt',
          'http://hp.vector.co.jp/authors/VA014833/rfc2045J.html',
],
RFC2237: [ 'http://www.cam.hi-ho.ne.jp/mendoxi/rfc/rfc2237j.html',
           'http://jbpe.tripod.com/rfcj/rfc2237.j.sjis.txt',
],
RFC2246: [ 'http://www.ipa.go.jp/security/rfc/RFC2246-00JA.html',
           'http://www7b.biglobe.ne.jp/~k-west/SSLandTLS/rfc2246-Ja.txt',
],
RFC2313:   'http://www7b.biglobe.ne.jp/~k-west/SSLandTLS/rfc2313-Ja.txt',
RFC2388: [ 'http://www.studyinghttp.net/rfc_ja/rfc2388',
           'http://suika.fam.cx/~wakaba/wiki/sw/n/RFC%202388',
           'http://hp.vector.co.jp/authors/VA014833/rfc2388J.html',
],
*/
	};

	(function(){
		var id = "", dd = null, urlType = "";	// 変数の初期化
		var insertA = function(parent, href, text){	// a を挿入する手順
			var span = document.createElement("span"),
			a = document.createElement("a");

			span.className = "ref-secure";	// TODO: 適宜変更

			a.setAttribute("href", href);
			a.appendChild(document.createTextNode(text));
			if(text.match(/訳$/) || text.match(/1$/)){ //最初だけ（強引に）マッチング
            	span.appendChild(document.createElement("br"));
			}
			span.setAttribute("style", "margin-right:5px;");
			span.appendChild(a);
			return parent.nextElementSibling.appendChild(span); //parent.appendChild(span);
		};

		for(id in refList){	// リストを巡回
			if(refList.hasOwnProperty(id)){	// "おまじない"
				if(dd = document.getElementById("refs" + id) ) {	// 当該 ID を持つ要素があることを最初に確認
					urlType = typeof refList[id];

					if(urlType === typeof ""){	// URL が1個だけのとき
						insertA(dd, refList[id], "日本語訳");
					}else if(urlType === typeof []){	// URL が複数あるとき
						refList[id].forEach(function(url, key){	// URL の複数指定を巡回
							insertA(dd, url, "日本語訳" + (key + 1).toString());
						});
					}
				}
				else if(dd = document.getElementById("bib-" + id)) { // もっとマシなやり方なかったのかこれorz
					urlType = typeof refList[id];
					
					if(urlType === typeof ""){
						insertA(dd, refList[id], "日本語訳");
					}else if(urlType === typeof []){
						refList[id].forEach(function(url, key){
							insertA(dd, url, "日本語訳" + (key + 1).toString());
						});
					}
				}
			}
		}
	})();
}, false);
