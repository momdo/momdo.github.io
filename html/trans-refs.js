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
ATOM: [ 'http://momdo.s35.xrea.com/web-html-test/spec/rfc4287j.html',
	'http://www.futomi.com/lecture/japanese/rfc4287.html',
	'http://www.7key.jp/rfc/4287/rfc4287.html'
],//RFC4287
COOKIES: 'http://www.hcn.zaq.ne.jp/___/WEB/RFC6265-ja.html', //RFC6265
CORS: 'http://www.hcn.zaq.ne.jp/___/WEB/Fetch-ja.html',
CSS: 'http://momdo.s35.xrea.com/web-html-test/spec/CSS21/cover.html',
CSSATTR: 'http://standards.mitsue.co.jp/public/standards/css-style-attr/',
CSSANIMATIONS: 'http://www.hcn.zaq.ne.jp/___/WEB/css-animations-ja.html',
CSSCOLOR: 'http://standards.mitsue.co.jp/resources/w3c/TR/css3-color/',
CSSFONTS: 'http://www.hcn.zaq.ne.jp/___/WEB/css-fonts-ja.html',
CSSIMAGES: 'http://momdo.s35.xrea.com/web-html-test/spec/CR-css3-images-20120417.html',
CSSOM: 'http://www.hcn.zaq.ne.jp/___/WEB/cssom-ja.html',
CSSOMVIEW: 'http://www.hcn.zaq.ne.jp/___/WEB/cssom-view-ja.html',
CSSWM: [ 'http://www.hcn.zaq.ne.jp/___/WEB/css-writing-modes-ja.html',
	'http://suzukima.github.io/css-ja/css3-writing-modes/', //writing modes
],
CSSTRANSITIONS: 'http://www.hcn.zaq.ne.jp/___/WEB/css-transitions-ja.html',
CSSSCOPED: 'http://www.hcn.zaq.ne.jp/___/WEB/css-cascade-ja.html', //そのうち削除するかも
CSSVALUES: [ 'http://momdo.s35.xrea.com/web-html-test/spec/CR-css3-values-20130404.html',
	'http://www.hcn.zaq.ne.jp/___/WEB/css-values-ja.html',
],
CSSUI: 'http://momdo.s35.xrea.com/web-html-test/spec/WD-css3-ui-20120117.html',
DOM: 'http://www.hcn.zaq.ne.jp/___/WEB/DOM4-ja.html',
DOMEVENTS: 'http://www.y-adagio.com/public/standards/tr_dom2_events/expanded-toc.html', //DOM2 Event
ECMA262: 'http://tsofthome.appspot.com/ecmascript.html',
ENCODING: 'http://www.hcn.zaq.ne.jp/___/WEB/Encoding-ja.html',
FILEAPI:  'http://www.hcn.zaq.ne.jp/___/WEB/File_API-ja.html',
HTML4: 'http://www.asahi-net.or.jp/~sd5a-ucd/rec-html401j/cover.html',
HTML5: 'http://momdo.github.io/html5/Overview.html',
HTMLALTTECHS: 'http://momdo.github.io/html-alt-techniques/',
HTMLDIFF: 'http://momdo.github.io/html5-diff/',
//HTMLDIFF: ['http://www.html5.jp/trans/w3c_differences.html', //obs.
//'http://standards.mitsue.co.jp/resources/w3c/TR/html5-diff/', //obs.
//],
HTTP: [ 'http://www.hcn.zaq.ne.jp/___/WEB/RFC2616-ja.html',
'http://suika.fam.cx/~wakaba/wiki/sw/n/RFC%202616'
], //RFC2616 - old version.
HTTPS:[ 'http://suika.fam.cx/~wakaba/wiki/sw/n/RFC%202818',
        'http://www.ipa.go.jp/security/rfc/RFC2818JA.html',
        'http://www.studyinghttp.net/rfc_ja/rfc2818'
],//RFC2818
JLREQ: 'http://www.w3.org/TR/jlreq/ja/',
JSON: 'http://www.7key.jp/rfc/rfc4627.html', //RFC4627
MQ:   'http://standards.mitsue.co.jp/standards/css3-mediaqueries/',
OPENSEARCH: 'https://sites.google.com/site/tsukamoto/doc/opensearch/spec-1-1-draft4',
ORIGIN:[ 'http://www.hcn.zaq.ne.jp/___/WEB/RFC6454-ja.html',
 'http://www.ipa.go.jp/security/rfc/RFC6454JA.html'
], //RFC6454
PNG: 'http://www.milk-island.net/document/png/',
POLYGLOT: 'http://momdo.s35.xrea.com/web-html-test/spec/CR-html-polyglot-20140717.html',
RFC1034:  'http://srgia.com/docs/rfc1034j.html',
RFC1123:[ 'http://hp.vector.co.jp/authors/VA002682/rfc1123j.htm',
          'http://www2s.biglobe.ne.jp/~hig/tcpip/HostReq_Appl.html'
],
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
RFC2237: [ 'http://www.cam.hi-ho.ne.jp/mendoxi/rfc/rfc2237j.html',
           'http://jbpe.tripod.com/rfcj/rfc2237.j.sjis.txt',
],
RFC2246: [ 'http://www.ipa.go.jp/security/rfc/RFC2246-00JA.html',
           'http://www7b.biglobe.ne.jp/~k-west/SSLandTLS/rfc2246-Ja.txt',
],
RFC2313:   'http://www7b.biglobe.ne.jp/~k-west/SSLandTLS/rfc2313-Ja.txt',
RFC2318: [ 'http://www.cam.hi-ho.ne.jp/mendoxi/rfc/rfc2318j.html',
           'http://suika.fam.cx/~wakaba/wiki/sw/n/RFC%202318',
           'http://www.7key.jp/rfc/rfc2318.html',
],
RFC2388: [ 'http://www.studyinghttp.net/rfc_ja/rfc2388',
           'http://suika.fam.cx/~wakaba/wiki/sw/n/RFC%202388',
           'http://hp.vector.co.jp/authors/VA014833/rfc2388J.html',
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
SDP: 'http://www.softfront.co.jp/tech/ietfdoc/trans/rfc4566j.txt', //RFC4566
SDPOFFERANSWER: 'http://www.softfront.co.jp/tech/ietfdoc/trans/rfc3264j.txt', //RFC3264
SELECTORS: [ 'http://www.hcn.zaq.ne.jp/___/WEB/selectors4-ja.html',
             'http://www.y-adagio.com/public/standards/css3-selectors/',
],
SVG: 'http://www.hcn.zaq.ne.jp/___/SVG11-2nd/',
TYPEDARRAY: 'http://www.hcn.zaq.ne.jp/___/WEB/TypedArray-ja.html',
URL: 'http://www.hcn.zaq.ne.jp/___/WEB/URL-ja.html',
UTF7: 'http://soft.bko.to/rfc/rfc2152jp.txt', //RFC2152
WCAG: 'http://waic.jp/docs/WCAG20/Overview.html', //WCAG20
WCAG20: 'http://waic.jp/docs/WCAG20/Overview.html',
WEBSOCKET:[ 'http://www.hcn.zaq.ne.jp/___/WEB/WebSocket-ja.html',
            'http://www.html5.jp/trans/w3c_websockets.html'
],
WEBWORKERS: 'http://www.hcn.zaq.ne.jp/___/WEB/Workers-ja.html',
WEBIDL: 'http://www.hcn.zaq.ne.jp/___/WEB/WebIDL-ja.html',
WSP: 'http://www.hcn.zaq.ne.jp/___/WEB/RFC6455-ja.html',//RGC6455
XHR: 'http://www.hcn.zaq.ne.jp/___/WEB/XHR-ja.html',
XHTML1: 'http://msugai.fc2web.com/web/W3C/xhtml1SE/Cover.html',
XHTMLMOD: 'http://msugai.fc2web.com/web/W3C/XHTMLMOD/Overview.html',
XML: 'http://w4ard.eplusx.net/translation/W3C/REC-xml-20081126/',
XMLBASE: 'http://www.toyfish.net/docs/xmlbase/',
XMLNS: 'http://www.hcn.zaq.ne.jp/___/XML/Namespaces-ja.html',
XPATH10: 'http://www.doraneko.org/xml/xpath10/19991116/',
XSLT10: [ 'http://www.y-adagio.com/public/standards/tr_xslt10/toc.htm',
          'http://www.infoteria.com/jp/contents/xml-data/REC-xslt-19991116-jpn.htm',
          'http://www.hcn.zaq.ne.jp/___/XML/xslt10-ja.html'
],
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
