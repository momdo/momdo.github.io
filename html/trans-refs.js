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
/*jslint browser: true*/
// DOM 構築後に実行
addEventListener("DOMContentLoaded", function(){
	// URL リスト
	// ID : {URL | [URL, ...]}, ...
	var refList = {
ABNF: 'http://www.cam.hi-ho.ne.jp/mendoxi/rfc/rfc5234j.html',
ABOUT: 'https://tex2e.github.io/rfc-translater/html/rfc6694.html',
APNG: 'https://pieceofnostalgia-bd472.firebaseapp.com/apng/APNG_Specification_jp.html',
ARIA: 'https://momdo.github.io/wai-aria-1.3/',
ARIAHTML: 'https://momdo.github.io/html-aria/',
ATAG: 'https://waic.jp/docs/ATAG20/',
ATOM: [ 'http://momdo.s35.xrea.com/web-html-test/spec/rfc4287j.html',
    'http://www.futomi.com/lecture/japanese/rfc4287.html',
    'http://www.7key.jp/rfc/4287/rfc4287.html'
],//RFC4287
BATTERY: 'https://triple-underscore.github.io/battery-ja.html',
CHARMOD: 'https://triple-underscore.github.io/charmod-ja.html',
COMPOSITE: 'https://triple-underscore.github.io/compositing-ja.html',
CONSOLE:'https://triple-underscore.github.io/console-ja.html',
COOKIES: 'https://triple-underscore.github.io/RFC6265-ja.html', //RFC6265
CSP: ['https://triple-underscore.github.io/CSP3-ja.html',
'https://hashedhyphen.github.io/webappsec-specjp/csp/index.html',],
CSS: 'https://momdo.github.io/css2/Overview.html',
CSSALIGN: 'https://triple-underscore.github.io/css-align-ja.html', 
CSSANIMATIONS: 'https://triple-underscore.github.io/css-animations-ja.html',
CSSATTR: 'https://triple-underscore.github.io/css-style-attr-ja.html',
CSSBG: 'https://triple-underscore.github.io/css-backgrounds-ja.html',
//CSSCASCADE: 'https://triple-underscore.github.io/css-cascade-ja.html',
CSSCONTAIN: 'https://triple-underscore.github.io/css-contain-ja.html',
CSSCOLOR: 'https://triple-underscore.github.io/css-color-ja.html',
CSSCOLORADJUST: 'https://triple-underscore.github.io/css-color-adjust-ja.html',
CSSDISPLAY: 'https://triple-underscore.github.io/css-display-ja.html',
CSSFONTLOAD: 'https://triple-underscore.github.io/css-font-loading-ja.html',
CSSFONTS: 'https://triple-underscore.github.io/css-fonts-ja.html',
CSSFLEXBOX: 'https://triple-underscore.github.io/css-flexbox-ja.html',
CSSGC: 'https://triple-underscore.github.io/css-content-ja.html',
CSSGRID: 'https://triple-underscore.github.io/css-grid-ja.html',
CSSIMAGES: 'https://triple-underscore.github.io/css-images-ja.html',
CSSIMAGES4: 'https://triple-underscore.github.io/css-images4-ja.html',
CSSINLINE: 'https://triple-underscore.github.io/css-inline-ja.html',
CSSLISTS: 'https://triple-underscore.github.io/css-lists-ja.html',
CSSLOGICAL: 'https://triple-underscore.github.io/css-logical-ja.html',
CSSMULTICOL: 'https://triple-underscore.github.io/css-multicol-ja.html',
CSSOM: 'https://triple-underscore.github.io/cssom-ja.html',
CSSOMVIEW: 'https://triple-underscore.github.io/cssom-view-ja.html',
CSSOVERFLOW: 'https://triple-underscore.github.io/css-overflow3-ja.html',
CSSPOSITION: 'https://triple-underscore.github.io/css-pseudo-ja.html',
CSSPSEUDO: 'https://triple-underscore.github.io/css-position-ja.html',
CSSRUBY: 'https://triple-underscore.github.io/css-ruby-ja.html',
CSSSCOPING: 'https://triple-underscore.github.io/css-scoping-ja.html',
CSSSIZING: 'https://triple-underscore.github.io/css-sizing-ja.html',
CSSSCROLLANCHORING: 'https://triple-underscore.github.io/css-scroll-anchoring-ja.html',
CSSTRANSITIONS: 'https://triple-underscore.github.io/css-transitions-ja.html',
CSSUI: 'https://triple-underscore.github.io/css-ui-ja.html',
CSSSYNTAX: 'https://triple-underscore.github.io/css-syntax-ja.html',
//CSSTEXT: 'https://triple-underscore.github.io/css-text-ja.html',
CSSVALUES: 'https://triple-underscore.github.io/css-values-ja.html',
CSSWM: 'https://triple-underscore.github.io/css-writing-modes-ja.html',
    //'http://suzukima.github.io/css-ja/css3-writing-modes/', //writing modes
DOM: 'https://triple-underscore.github.io/DOM4-ja.html',
DOMPARSING: 'https://triple-underscore.github.io/DOM-Parsing-ja.html',
ECMA262: 'http://tsofthome.appspot.com/ecmascript.html',
ENCODING: 'https://triple-underscore.github.io/Encoding-ja.html',
FETCH: 'https://triple-underscore.github.io/Fetch-ja.html',
FETCHMETADATA: 'https://triple-underscore.github.io/webappsec-fetch-metadata-ja.html',
FILEAPI: 'https://triple-underscore.github.io/File_API-ja.html',
FILTERS: 'https://triple-underscore.github.io/filter-effects-ja.html',
FULLSCREEN: 'https://triple-underscore.github.io/fullscreen-ja.html',
GEOMETRY: 'https://triple-underscore.github.io/geometry-ja.html',
HRT: 'https://triple-underscore.github.io/hr-time-ja.html',
HTTP:  'https://triple-underscore.github.io/RFC723X-ja.html',
INDEXEDDB: 'https://triple-underscore.github.io/IndexedDB-ja.html',
INFRA: 'https://triple-underscore.github.io/infra-ja.html',
INTERSECTIONOBSERVER: 'https://triple-underscore.github.io/IntersectionObserver-ja.html',
JAVASCRIPT: 'https://triple-underscore.github.io/javascript-ja.html',
JLREQ: 'http://www.w3.org/TR/jlreq/ja/',
JSON: 'http://www.asahi-net.or.jp/~ax2s-kmtn/internet/rfc8259j.html', //RFC8259
LONGTASK: 'https://triple-underscore.github.io/longtasks-ja.html',
MAILTO: 'https://tex2e.github.io/rfc-translater/html/rfc6068.html', //RFC6068
MANIFEST: 'https://triple-underscore.github.io/appmanifest-ja.html',
MATHML: 'http://takamu.sakura.ne.jp/mathml3-ja/index.html',
MEDIAFRAG: 'https://www.asahi-net.or.jp/~ax2s-kmtn/internet/media/REC-media-frags-10-20120925.html',
REPORTING: 'https://triple-underscore.github.io/reporting1-ja.html',
MIMESNIFF: 'https://triple-underscore.github.io/mimesniff-ja.html',
MIX: 'https://triple-underscore.github.io/webappsec-mixed-content-ja.html',
//MQ: 'https://triple-underscore.github.io/mediaqueries4-ja.html',
NAVIGATIONTIMING: 'https://triple-underscore.github.io/navigation-timing-ja.html',
OPENSEARCH: 'https://sites.google.com/site/tsukamoto/doc/opensearch/spec-1-1-draft4',
ORIGIN:[ 'https://triple-underscore.github.io/RFC6454-ja.html',
 'http://www.ipa.go.jp/security/rfc/RFC6454JA.html'
], //RFC6454
PAINTTIMING: 'https://triple-underscore.github.io/paint-timing-ja.html',
PAYMENTREQUEST: 'https://www.asahi-net.or.jp/~ax2s-kmtn/internet/payment/REC-payment-request-20220908.html',
PERFORMANCETIMELINE: 'https://triple-underscore.github.io/performance-timeline-ja.html',
PERMISSIONSPOLICY: 'https://triple-underscore.github.io/webappsec-permissions-policy-ja.html',
//PNG: 'https://web.archive.org/web/20150701124151/http://www.milk-island.net/document/png/', //URL消失,部分訳
//POINTEREVENTS: 'https://triple-underscore.github.io/pointerevents3-ja.html',
PRELOAD: 'https://triple-underscore.github.io/preload-ja.html',
REFERRERPOLICY: 'https://triple-underscore.github.io/webappsec-referrer-policy-ja.html',
REQUESTIDLECALLBACK: 'https://triple-underscore.github.io/requestidlecallback-ja.html',
RESOURCETIMING:' https://triple-underscore.github.io/resource-timing-ja.html',
RESOURCEHINTS: 'https://triple-underscore.github.io/resource-hints-ja.html',
RFC1034:  'http://srgia.com/docs/rfc1034j.html',
RFC1123:[ 'http://hp.vector.co.jp/authors/VA002682/rfc1123j.htm',
          'http://www2s.biglobe.ne.jp/~hig/tcpip/HostReq_Appl.html'
],

RFC2046: [ 'http://www.y-adagio.com/public/standards/tr_mime-p2_2046/toc.htm',
           'http://www.t-net.ne.jp/~cyfis/rfc/mime/rfc2046_ja-1.html',
           'http://jbpe.tripod.com/rfcj/rfc2046.j.sjis.txt',
           'http://www.akanko.net/marimo/data/rfc/rfc2046-jp.txt',
],
RFC2119: [ 'http://www.ipa.go.jp/security/rfc/RFC2119JA.html',
           'http://www.studyinghttp.net/rfc_ja/rfc2119',
           'http://www.cam.hi-ho.ne.jp/mendoxi/rfc/rfc2119j.html',
           'http://www.asahi-net.or.jp/~sd5a-ucd/rfc-j/rfc-2119j.html',
           'http://www.t-net.ne.jp/~cyfis/rfc/format/rfc2119_ja.html'
],
RFC2318: [ 'http://www.cam.hi-ho.ne.jp/mendoxi/rfc/rfc2318j.html',
           'http://suika.fam.cx/~wakaba/wiki/sw/n/RFC%202318',
           'http://www.7key.jp/rfc/rfc2318.html',
],
RFC2483: 'https://tex2e.github.io/rfc-translater/html/rfc2483.html',
RFC2397: [ 'http://d.hatena.ne.jp/tily/20071103/p1',
           'http://www.darts.jp/reference/rfc/rfc2397-jp.txt',
],
RFC5545: 'https://tex2e.github.io/rfc-translater/html/rfc5545.html',
RFC3490: 'http://www.jdna.jp/survey/rfc/rfc3490j.html',
RFC3629: [ 'http://www5d.biglobe.ne.jp/~stssk/rfc/rfc3629j.html',
           'http://www.akanko.net/marimo/data/rfc/rfc3629-jp.txt'
],
RFC3676: 'https://tex2e.github.io/rfc-translater/html/rfc3676.html',
RFC9239: 'https://tex2e.github.io/rfc-translater/html/rfc9239.html',
RFC4337: 'https://tex2e.github.io/rfc-translater/html/rfc4337.html',
RFC7595: 'https://tex2e.github.io/rfc-translater/html/rfc7595.html',
RFC5322: 'http://srgia.com/docs/rfc5322j.html',
         //  'http://www.hde.co.jp/rfc/rfc5322_ja.txt'
RFC6381: 'https://tex2e.github.io/rfc-translater/html/rfc6381.html',
RFC6266: 'https://tex2e.github.io/rfc-translater/html/rfc6266.html',
RFC6350: 'https://tex2e.github.io/rfc-translater/html/rfc6350.html',
RFC6596: 'https://tex2e.github.io/rfc-translater/html/rfc6596.html',
RFC6903: 'https://tex2e.github.io/rfc-translater/html/rfc6903.html',
RFC7034: 'https://tex2e.github.io/rfc-translater/html/rfc7034.html',
RFC7303: 'https://tex2e.github.io/rfc-translater/html/rfc7303.html',
RFC7578: 'https://tex2e.github.io/rfc-translater/html/rfc7578.html',
RFC8297: 'https://tex2e.github.io/rfc-translater/html/rfc8297.html',
SCREENORIENTATION: 'https://triple-underscore.github.io/screen-orientation-ja.html',
"SECURE-CONTEXTS": 'https://triple-underscore.github.io/webappsec-secure-contexts-ja.html',
SELECTION: 'https://triple-underscore.github.io/selection-api-ja.html',
SELECTORS: 'https://triple-underscore.github.io/selectors4-ja.html',
           //'http://www.y-adagio.com/public/standards/css3-selectors/',
SMS: 'https://tex2e.github.io/rfc-translater/html/rfc5724.html', //RFC5724
"STRUCTURED-FIELDS": 'https://triple-underscore.github.io/http-header-structure-ja.html',
SRI: 'https://triple-underscore.github.io/webappsec-subresource-integrity-ja.html',
STORAGE: 'https://triple-underscore.github.io/WebStorage-ja.html',
SVG: 'https://triple-underscore.github.io/svg-misc-ja.html',
SW: 'https://triple-underscore.github.io/service-workers-ja.html',
TOUCH: 'https://triple-underscore.github.io/touch-events-ja.html',
UAAG: 'https://imagedrive.github.io/TR/UAAG20/',
UIEVENTS: 'https://triple-underscore.github.io/uievents-ja.html',
URL: 'https://triple-underscore.github.io/URL-ja.html',
URN: 'https://tex2e.github.io/rfc-translater/html/rfc8141.html', //RFC8141
UTF7: 'http://soft.bko.to/rfc/rfc2152jp.txt', //RFC2152
WCAG: 'https://waic.jp/translations/WCAG21/', //WCAG21
WEBANIMATIONS: 'https://triple-underscore.github.io/web-animations-ja.html',
WEBAUDIO: 'https://g200kg.github.io/web-audio-api-ja/',
WEBIDL: 'https://triple-underscore.github.io/WebIDL-ja.html',
WEBLINK: 'https://triple-underscore.github.io/http-web-linking-ja.html',
WEBSOCKETS: 'https://triple-underscore.github.io/WebSocket-ja.html',
WORKLETS: 'https://triple-underscore.github.io/worklets-ja.html',
WSP: 'https://triple-underscore.github.io/RFC6455-ja.html',//RGC6455
XHR: 'https://triple-underscore.github.io/XHR-ja.html',
XML: 'http://w4ard.eplusx.net/translation/W3C/REC-xml-20081126/',
XMLNS: 'https://triple-underscore.github.io/xml-names-ja.html',
XMLSSPI: 'https://triple-underscore.github.io/xml-stylesheet-ja.html',
XPATH10: 'http://www.doraneko.org/xml/xpath10/19991116/',
XSLT10: [ 'http://www.y-adagio.com/public/standards/tr_xslt10/toc.htm',
          //'http://www.infoteria.com/jp/contents/xml-data/REC-xslt-19991116-jpn.htm',
          'https://triple-underscore.github.io/XML/xslt10-ja.html'
],
// JIS対応 URL, JIS番号
ISO3166 : ['https://www.jisc.go.jp/app/jis/general/GnrJISSearch.html','JIS X 0304'],
ISO8601 : ['https://www.jisc.go.jp/app/jis/general/GnrJISSearch.html','JIS X 0301'],
	};

	(function(){
		var id = "", dd = null, urlType = "";	// 変数の初期化
		var insertA = function(parent, href, text){	// a を挿入する手順
			var span = document.createElement("span"),
			    a = document.createElement("a");

			span.className = "ref-secure";	// TODO: 適宜変更

			a.setAttribute("href", href);
			a.appendChild(document.createTextNode(text));
			if(text.match(/訳$/) || text.match(/1$/) || text.match(/^JIS/)){ //最初だけ（強引に）マッチング
            	span.appendChild(document.createElement("br"));
			}
			span.setAttribute("style", "margin-right:1ex;");
			span.appendChild(a);
			return parent.nextElementSibling.appendChild(span); //parent.appendChild(span);
		};

		for(id in refList){	// リストを巡回
                                        
			if(refList.hasOwnProperty(id)){	// "おまじない"
				if(dd = document.getElementById("refs" + id) ) { // 当該 ID を持つ要素があることを最初に確認

                    urlType = typeof refList[id];
					if(urlType === typeof ""){	// URL が1個だけのとき
                        if (id === "HTTP") {
                            insertA(dd.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling, refList[id], "日本語訳"); //面妖な…
                        }
                        else {
    						insertA(dd, refList[id], "日本語訳");                        
                        }
					} else if(urlType === typeof []){	// URL が複数あるとき
                    //console.log(refList[id][0]);
                        if (id.match(/^ISO/)) { //雑なマッチング
                            insertA(dd, refList[id][0], "JIS検索 規格番号: "+refList[id][1]);
                        }
                        else {
						    refList[id].forEach(function(url, key){	// URL の複数指定を巡回
							    insertA(dd, url, "日本語訳" + (key + 1).toString());
                            });
                        }
					}
				}
			}
		}
	})();
}, false);
