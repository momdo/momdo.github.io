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
ARIAHTML: [
  'https://momdo.github.io/html-aria/',
  'https://jp.htmlspecs.com/html-aria/'
],
ATAG: 'https://waic.jp/docs/ATAG20/',
ATOM: [ 
  'https://ss1.xrea.com/momdo.s35.xrea.com/web-html-test/spec/rfc4287j.html',
  'http://www.7key.jp/rfc/4287/rfc4287.html'
],//RFC4287
BATTERY: [
  'https://triple-underscore.github.io/battery-ja.html',
  'https://jp.htmlspecs.com/battery-status/'
],
BCP47: [
  'http://www.studyinghttp.net/rfc_ja/rfc2119',
  'http://www.cam.hi-ho.ne.jp/mendoxi/rfc/rfc2119j.html',
  'http://www.asahi-net.or.jp/~sd5a-ucd/rfc-j/rfc-2119j.html',
  'http://www.t-net.ne.jp/~cyfis/rfc/format/rfc2119_ja.html'
],
CHARMOD: [
  'https://triple-underscore.github.io/charmod-ja.html',
  'https://jp.htmlspecs.com/charmod-norm/'
],
"CLIPBOARD-APIS": 'https://jp.htmlspecs.com/clipboard-apis/',
COMPOSITE: [
  'https://triple-underscore.github.io/compositing-ja.html',
  'https://jp.htmlspecs.com/css/compositing-1/'
],
COMPUTEPRESSURE: 'https://jp.htmlspecs.com/compute-pressure/',
CONSOLE: [
  'https://triple-underscore.github.io/console-ja.html',
  'https://jp.htmlspecs.com/console/'
],
COOKIES: [
  'https://triple-underscore.github.io/RFC6265-ja.html', 
  'https://jp.htmlspecs.com/http/draft-ietf-httpbis-rfc6265bis.html'
], //RFC6265
COOKIESTORE: 'https://jp.htmlspecs.com/cookiestore/',
CREDMAN: 'https://jp.htmlspecs.com/credential-management-1/',
CSP: [
  'https://triple-underscore.github.io/CSP3-ja.html',
  'https://hashedhyphen.github.io/webappsec-specjp/csp/index.html',
  'https://jp.htmlspecs.com/CSP3/'
],
CSS: [
  'https://momdo.github.io/css2/Overview.html',
  'https://jp.htmlspecs.com/css/css22/'
],
CSSALIGN: [
  'https://triple-underscore.github.io/css-align-ja.html', 
  'https://jp.htmlspecs.com/css/css-align-3/'
],
CSSANCHOR: [
  'https://triple-underscore.github.io/css-anchor-position-ja.html',
  'https://jp.htmlspecs.com/css/css-anchor-position-1/'
],
CSSANIMATIONS: [
  'https://triple-underscore.github.io/css-animations-ja.html',
  'https://jp.htmlspecs.com/css/css-animations-1/'
],
CSSATTR: [
  "https://triple-underscore.github.io/css-style-attr-ja.html",
  'https://jp.htmlspecs.com/css/css-style-attr/'
],
CSSBG: [
  'https://triple-underscore.github.io/css-backgrounds-ja.html',
  'https://jp.htmlspecs.com/css/css-backgrounds-3/'
],
CSSBOX: [
  'https://triple-underscore.github.io/css-sizing-ja.html',
  'https://jp.htmlspecs.com/css/css-box-3/'
],
CSSCASCADE: "https://jp.htmlspecs.com/css/css-cascade-4/",
//CSSCASCADE: 'https://triple-underscore.github.io/css-cascade-ja.html',
CSSCONTAIN: [
  'https://triple-underscore.github.io/css-contain-ja.html',
  'https://jp.htmlspecs.com/css/css-contain-2/'
],
CSSCOLOR: [
  'https://triple-underscore.github.io/css-color-ja.html',
  'https://jp.htmlspecs.com/css/css-color-4/'
],
CSSCOLORADJUST: [
  "https://triple-underscore.github.io/css-color-adjust-ja.html",
  'https://jp.htmlspecs.com/css/css-color-adjust-1/'
],
CSSDEVICEADAPT: 'https://jp.htmlspecs.com/css/css-viewport-1/',
CSSDISPLAY: [
  'https://triple-underscore.github.io/css-display-ja.html',
  'https://jp.htmlspecs.com/css/css-display-4/'
],
CSSFONTLOAD: [
  'https://triple-underscore.github.io/css-font-loading-ja.html',
  'https://jp.htmlspecs.com/css/css-font-loading/'
],
CSSFONTS: [
  'https://triple-underscore.github.io/css-fonts-ja.html',
  'https://jp.htmlspecs.com/css/css-fonts-4/'
],
CSSFORMS: [
  'https://triple-underscore.github.io/css-forms-ja.html',
  'https://jp.htmlspecs.com/css/css-forms-1/'
],
CSSFLEXBOX: [
  'https://triple-underscore.github.io/css-flexbox-ja.html',
  'https://jp.htmlspecs.com/css/css-flexbox-1/'
],
CSSGAPS: 'https://jp.htmlspecs.com/css/css-gaps-1/',
CSSGC: [
  'https://triple-underscore.github.io/css-content-ja.html',
  'https://jp.htmlspecs.com/css/css-content-3/'
],
CSSGRID: [
  'https://triple-underscore.github.io/css-grid-ja.html',
  'https://jp.htmlspecs.com/css/css-grid-2/'
],
CSSIMAGES: [
  'https://triple-underscore.github.io/css-images-ja.html',
  'https://jp.htmlspecs.com/css/css-images-3/'
],
CSSIMAGES4: [
  'https://triple-underscore.github.io/css-images4-ja.html',
  'https://jp.htmlspecs.com/css/css-images-4/'
],
CSSINLINE: [
  'https://triple-underscore.github.io/css-inline-ja.html',
  'https://jp.htmlspecs.com/css/css-inline-3/'
],
CSSLISTS: [
  'https://triple-underscore.github.io/css-lists-ja.html',
  'https://jp.htmlspecs.com/css/css-lists-3/'
],
CSSLOGICAL: [
  'https://triple-underscore.github.io/css-logical-ja.html',
  'https://jp.htmlspecs.com/css/css-logical-1/'
],
CSSMULTICOL: 'https://jp.htmlspecs.com/css/css-multicol-1/',
//'https://triple-underscore.github.io/css-multicol-ja.html',
CSSOM: [
  'https://triple-underscore.github.io/cssom-ja.html',
  'https://jp.htmlspecs.com/css/cssom-1/'
],
CSSOMVIEW: [
  "https://triple-underscore.github.io/cssom-view-ja.html",
  'https://jp.htmlspecs.com/css/cssom-view/'
],
CSSOVERFLOW: [
  'https://triple-underscore.github.io/css-overflow-ja.html',
  'https://jp.htmlspecs.com/css/css-overflow-3/'
],
CSSPAINT: [
  'https://triple-underscore.github.io/css-paint-api-ja.html',
  'https://jp.htmlspecs.com/css/css-paint-api-1/'
],
CSSPOSITION: [
  'https://triple-underscore.github.io/css-position-ja.html',
  'https://jp.htmlspecs.com/css/css-position-3/'
],
CSSPSEUDO: [
  'https://triple-underscore.github.io/css-pseudo-ja.html',
  'https://jp.htmlspecs.com/css/css-pseudo-4/'
],
CSSRUBY: [
  'https://triple-underscore.github.io/css-ruby-ja.html',
  'https://jp.htmlspecs.com/css/css-ruby-1/'
],
CSSSCOPING: [
  'https://triple-underscore.github.io/css-scoping-ja.html',
  'https://jp.htmlspecs.com/css/css-scoping-1/'
],
CSSSIZING: [
  'https://triple-underscore.github.io/css-sizing-ja.html',
  'https://jp.htmlspecs.com/css/css-sizing-3/'
],
CSSSCROLLANCHORING: [
  'https://triple-underscore.github.io/css-scroll-anchoring-ja.html',
  'https://jp.htmlspecs.com/css/css-scroll-anchoring-1/'
],
CSSSYNTAX: [
  'https://triple-underscore.github.io/css-syntax-ja.html',
  'https://jp.htmlspecs.com/css/css-syntax-3/'
],
CSSTRANSITIONS: [
  'https://triple-underscore.github.io/css-transitions-ja.html',
  'https://jp.htmlspecs.com/css/css-transitions-1/'
],
CSSTABLE: 'https://jp.htmlspecs.com/css/css-tables-3/',
CSSTEXT: 'https://jp.htmlspecs.com/css/css-text-3/',
//'https://triple-underscore.github.io/css-text-ja.html',
CSSVALUES: [
  'https://triple-underscore.github.io/css-values-ja.html',
  'https://jp.htmlspecs.com/css/css-values-4/'
],
CSSVIEWTRANSITIONS: 'https://jp.htmlspecs.com/css/css-view-transitions-1/',
CSSUI: [
  'https://triple-underscore.github.io/css-ui-ja.html',
  'https://jp.htmlspecs.com/css/css-ui-4/'
],
CSSWM: [
  'https://triple-underscore.github.io/css-writing-modes-ja.html',
  'https://jp.htmlspecs.com/css/css-writing-modes-4/'
],
DEVICEPOSTURE: 'https://jp.htmlspecs.com/device-posture/',
DOM: [
  'https://triple-underscore.github.io/DOM4-ja.html',
  'https://jp.htmlspecs.com/dom/'
],
DOMPARSING: [
  'https://triple-underscore.github.io/DOM-Parsing-ja.html',
  'https://jp.htmlspecs.com/dom-parsing/'
],
//ECMA262: 'http://tsofthome.appspot.com/ecmascript.html',
ENCODING: [
  'https://triple-underscore.github.io/Encoding-ja.html',
  'https://jp.htmlspecs.com/encoding/'
],
FETCH: [
  'https://triple-underscore.github.io/Fetch-ja.html',
  'https://jp.htmlspecs.com/fetch/'
],
FETCHMETADATA: [
  'https://triple-underscore.github.io/webappsec-fetch-metadata-ja.html',
  'https://jp.htmlspecs.com/fetch-metadata/'
],
FILEAPI: [
  'https://triple-underscore.github.io/File_API-ja.html',
  'https://jp.htmlspecs.com/FileAPI/'
],
FILTERS: [
  'https://triple-underscore.github.io/filter-effects-ja.html',
  'https://jp.htmlspecs.com/css/filter-effects-1/'
],
FULLSCREEN: [
  'https://triple-underscore.github.io/fullscreen-ja.html',
  'https://jp.htmlspecs.com/fullscreen/'
],
GEOMETRY: [
  'https://triple-underscore.github.io/geometry-ja.html',
  'https://jp.htmlspecs.com/css/geometry-1/'
],
HRT: [
  'https://triple-underscore.github.io/hr-time-ja.html',
  'https://jp.htmlspecs.com/hr-time-3/'
],
HTMLAAM: 'https://jp.htmlspecs.com/html-aam-1.0/',
HTTP:  'https://triple-underscore.github.io/RFC723X-ja.html',
INDEXEDDB: [
  'https://triple-underscore.github.io/IndexedDB-ja.html',
  'https://jp.htmlspecs.com/IndexedDB/'
],
INFRA: [
  'https://triple-underscore.github.io/infra-ja.html',
  'https://jp.htmlspecs.com/infra/'
],
INTERSECTIONOBSERVER: [
  'https://triple-underscore.github.io/IntersectionObserver-ja.html',
  'https://jp.htmlspecs.com/intersection-observer/'
],
RESIZEOBSERVER: 'https://jp.htmlspecs.com/resize-observer/',
JAVASCRIPT: 'https://ecma262.com/j',
JLREQ: 'http://www.w3.org/TR/jlreq/ja/',
JSON: 'http://www.asahi-net.or.jp/~ax2s-kmtn/internet/rfc8259j.html', //RFC8259
LONGTASKS: [
  'https://triple-underscore.github.io/longtasks-ja.html',
  'https://jp.htmlspecs.com/longtasks-1/'
],
LONGANIMATIONFRAMES: [
  'https://triple-underscore.github.io/long-animation-frames-ja.html',
  'https://jp.htmlspecs.com/long-animation-frames/'
],
MAILTO: 'https://tex2e.github.io/rfc-translater/html/rfc6068.html', //RFC6068
MANIFEST: [
  'https://triple-underscore.github.io/appmanifest-ja.html',
  'https://jp.htmlspecs.com/manifest-app-info/'
],
MATHML: [
  'https://takamu.sakura.ne.jp/mathml-core-ja/',
  'https://jp.htmlspecs.com/mathml-core/'
],
MEDIAFRAG: 'https://www.asahi-net.or.jp/~ax2s-kmtn/internet/media/REC-media-frags-10-20120925.html',
MEDIASOURCE: 'https://jp.htmlspecs.com/media-source-2/',
MEDIASTREAM: 'https://jp.htmlspecs.com/mediacapture-streams/',
REPORTING: [
  'https://triple-underscore.github.io/reporting1-ja.html',
  'https://jp.htmlspecs.com/reporting-1/'
],
MIMESNIFF: [
  'https://triple-underscore.github.io/mimesniff-ja.html',
  'https://jp.htmlspecs.com/mimesniff/'
],
MIX: [
  'https://triple-underscore.github.io/webappsec-mixed-content-ja.html',
  'https://jp.htmlspecs.com/mixed-content/'
],
MQ: 'https://jp.htmlspecs.com/css/mediaqueries-4/',
NAVIGATIONTIMING: [
  'https://triple-underscore.github.io/navigation-timing-ja.html',
  'https://jp.htmlspecs.com/navigation-timing-2/'
],

ORIGIN: [
  'https://triple-underscore.github.io/RFC6454-ja.html',
  'https://jp.htmlspecs.com/web-origin/'
], //RFC6454
PAINTTIMING: [
  'https://triple-underscore.github.io/paint-timing-ja.html',
  'https://jp.htmlspecs.com/paint-timing/'
],
PAYMENTREQUEST: [
  'https://www.asahi-net.or.jp/~ax2s-kmtn/internet/payment/REC-payment-request-20220908.html',
  'https://jp.htmlspecs.com/payment-request/'
],
PERFORMANCETIMELINE: [
  'https://triple-underscore.github.io/performance-timeline-ja.html',
  'https://jp.htmlspecs.com/performance-timeline/'
],
PERMISSIONSPOLICY: [
  'https://triple-underscore.github.io/webappsec-permissions-policy-ja.html',
  'https://jp.htmlspecs.com/permissions-policy/'
],
PICTUREINPICTURE: 'https://jp.htmlspecs.com/picture-in-picture/',
POINTEREVENTS: 'https://jp.htmlspecs.com/pointerevents4/',
POINTERLOCK: 'https://jp.htmlspecs.com/pointerlock/',
PREFETCH: 'https://jp.htmlspecs.com/prefetch/',
"PRERENDERING-REVAMPED": 'https://jp.htmlspecs.com/prerendering/',
PRESENTATION: 'https://jp.htmlspecs.com/presentation-api/',
REFERRERPOLICY: [
  'https://triple-underscore.github.io/webappsec-referrer-policy-ja.html',
  'https://jp.htmlspecs.com/referrer-policy/'
],
REQUESTIDLECALLBACK: [
  'https://triple-underscore.github.io/requestidlecallback-ja.html',
  'https://jp.htmlspecs.com/requestidlecallback/'
],
RESOURCETIMING: [
  'https://triple-underscore.github.io/resource-timing-ja.html',
  'https://jp.htmlspecs.com/resource-timing/'
],
RFC1034:  'http://srgia.com/docs/rfc1034j.html',
RFC1123:[ 'http://hp.vector.co.jp/authors/VA002682/rfc1123j.htm',
          'http://www2s.biglobe.ne.jp/~hig/tcpip/HostReq_Appl.html'
],

RFC2046: [ 'http://www.y-adagio.com/public/standards/tr_mime-p2_2046/toc.htm',
           'http://www.t-net.ne.jp/~cyfis/rfc/mime/rfc2046_ja-1.html',
           'http://jbpe.tripod.com/rfcj/rfc2046.j.sjis.txt',
           'http://www.akanko.net/marimo/data/rfc/rfc2046-jp.txt',
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
SCREENORIENTATION: [
  'https://triple-underscore.github.io/screen-orientation-ja.html',
  'https://jp.htmlspecs.com/screen-orientation/'
],
"SECURE-CONTEXTS": [
  'https://triple-underscore.github.io/webappsec-secure-contexts-ja.html',
  'https://jp.htmlspecs.com/secure-contexts/'
],
SELECTION: [
  'https://triple-underscore.github.io/selection-api-ja.html',
  'https://jp.htmlspecs.com/selection-api/'
],
SELECTORS: [
  'https://triple-underscore.github.io/selectors4-ja.html',
  'https://jp.htmlspecs.com/css/selectors-4/'
],
SMS: 'https://tex2e.github.io/rfc-translater/html/rfc5724.html', //RFC5724
"STRUCTURED-FIELDS": [
  'https://triple-underscore.github.io/http-header-structure-ja.html',
  'https://jp.htmlspecs.com/http/rfc9651.html'
],
SRI: [
  'https://triple-underscore.github.io/webappsec-subresource-integrity-ja.html',
  'https://jp.htmlspecs.com/sri/'
],
STORAGE: [
  'https://triple-underscore.github.io/WebStorage-ja.html',
  'https://jp.htmlspecs.com/storage/'
],
SVG: [
  'https://triple-underscore.github.io/svg-misc-ja.html',
  'https://jp.htmlspecs.com/SVG2/'
],
SW: [
  'https://triple-underscore.github.io/service-workers-ja.html',
  'https://jp.htmlspecs.com/service-workers/'
],
TOUCH: 'https://triple-underscore.github.io/touch-events-ja.html',
"TRUSTED-TYPES": 'https://jp.htmlspecs.com/trusted-types/',
UAAG: 'https://imagedrive.github.io/TR/UAAG20/',
UIEVENTS: [
  'https://triple-underscore.github.io/uievents-ja.html',
  'https://jp.htmlspecs.com/uievents/'
],
URL: [
  'https://triple-underscore.github.io/URL-ja.html',
  'https://jp.htmlspecs.com/url/'
],
URLPATTERN: [
  'https://triple-underscore.github.io/urlpattern-ja.html',
  'https://jp.htmlspecs.com/urlpattern/'
],
URN: 'https://tex2e.github.io/rfc-translater/html/rfc8141.html', //RFC8141
UTF7: 'http://soft.bko.to/rfc/rfc2152jp.txt', //RFC2152
WASMJS: 'https://jp.htmlspecs.com/wasm-js-api-2/',
WCAG: 'https://waic.jp/translations/WCAG21/', //WCAG21
WEBANIMATIONS: [
  'https://triple-underscore.github.io/web-animations-ja.html',
  'https://jp.htmlspecs.com/css/web-animations-1/'
],
WEBAUDIO: 'https://g200kg.github.io/web-audio-api-ja/',
WEBAUTHN: 'https://jp.htmlspecs.com/webauthn-3/',
WEBCRYPTO: 'https://jp.htmlspecs.com/webcrypto-2/',
WEBDRIVER: 'https://jp.htmlspecs.com/webdriver2/',
WEBDRIVERBIDI: 'https://jp.htmlspecs.com/webdriver-bidi/',
WEBGL: 'https://jp.htmlspecs.com/webgl2/',
WEBGPU: 'https://jp.htmlspecs.com/webgpu/',
WEBIDL: [
  'https://triple-underscore.github.io/WebIDL-ja.html',
  'https://jp.htmlspecs.com/webidl/'
],
WEBLINK: [
  'https://triple-underscore.github.io/http-web-linking-ja.html',
  'https://jp.htmlspecs.com/http/rfc8288.html'
],
WEBLOCKS: 'https://jp.htmlspecs.com/web-locks/',
WEBNFC: 'https://jp.htmlspecs.com/web-nfc/',
WEBSOCKETS: [
  'https://triple-underscore.github.io/WebSocket-ja.html',
  'https://jp.htmlspecs.com/websockets/'
],
WEBTRANSPORT: [
  'https://triple-underscore.github.io/webtransport-ja.html',
  'https://jp.htmlspecs.com/webtransport/'
],
//WSP: 'https://triple-underscore.github.io/RFC6455-ja.html',//RFC6455
XHR: [
  'https://triple-underscore.github.io/XHR-ja.html',
  'https://jp.htmlspecs.com/xhr/'
],
XML: 'http://w4ard.eplusx.net/translation/W3C/REC-xml-20081126/',
XMLNS: 'https://triple-underscore.github.io/xml-names-ja.html',
XMLSSPI: 'https://triple-underscore.github.io/xml-stylesheet-ja.html',
XPATH10: 'http://www.doraneko.org/xml/xpath10/19991116/',
XSLT10: [ 'http://www.y-adagio.com/public/standards/tr_xslt10/toc.htm',
          //'http://www.infoteria.com/jp/contents/xml-data/REC-xslt-19991116-jpn.htm',
          'https://triple-underscore.github.io/XML/xslt10-ja.html'
],
// JIS対応 URL, JIS番号
ISO3166: ['https://www.jisc.go.jp/app/jis/general/GnrJISSearch.html','JIS X 0304'],
ISO8601: ['https://www.jisc.go.jp/app/jis/general/GnrJISSearch.html','JIS X 0301'],
	};

	(function(){
		var id = "", dd = null, urlType = "";	// 変数の初期化
		var insertA = function(parent, href, text){	// a を挿入する手順
			var span = document.createElement("span"),
			    a = document.createElement("a");

			span.className = "ref-secure";	// TODO: 適宜変更

			a.setAttribute("href", href);
      const title = new URL(href).hostname;
      a.setAttribute("title", title);
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
