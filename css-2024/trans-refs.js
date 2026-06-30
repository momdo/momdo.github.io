/*
  Japanese translation Reference
  2013-12-11 ver.
  (2015-06-24 customized.)

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
//normative
"compositing": "https://triple-underscore.github.io/compositing-ja.html",
"css-backgrounds-3": [
  'https://triple-underscore.github.io/css-backgrounds-ja.html',
  'https://jp.htmlspecs.com/css/css-backgrounds-3/'
],
"css-box-3": [
  'https://triple-underscore.github.io/css-sizing-ja.html',
  'https://jp.htmlspecs.com/css/css-box-3/'
],
"css-cascade-4": "https://jp.htmlspecs.com/css/css-cascade-4/",
"css-color-4": [
  'https://triple-underscore.github.io/css-color-ja.html',
  'https://jp.htmlspecs.com/css/css-color-4/'
],
"css-color-5": [
  "https://triple-underscore.github.io/css-color5-ja.html",
  'https://jp.htmlspecs.com/css/css-color-5/'
],
"css-conditional-3": [
  "https://triple-underscore.github.io/css-conditional-ja.html",
  'https://jp.htmlspecs.com/css/css-conditional-3/'
],
"css-conditional-5": [
  "https://triple-underscore.github.io/css-conditional5-ja.html",
  'https://jp.htmlspecs.com/css/css-conditional-5/'
],
"css-contain-1": 'https://jp.htmlspecs.com/css/css-contain-1/',
"css-contain-2": [
  "https://triple-underscore.github.io/css-contain-ja.html",
  'https://jp.htmlspecs.com/css/css-contain-2/'
],
"css-counter-styles-3":  [
  'https://triple-underscore.github.io/css-counter-styles-ja.html',
  'https://jp.htmlspecs.com/css/css-counter-styles-3/',
],
"css-display-3": 'https://jp.htmlspecs.com/css/css-display-3/',
"css-easing-1": 'https://jp.htmlspecs.com/css/css-easing-1/',
"css-env-1": 'https://jp.htmlspecs.com/css/css-env-1/',
"css-flexbox-1": 'https://jp.htmlspecs.com/css/css-flexbox-1/',
"css-fonts-3": 'https://jp.htmlspecs.com/css/css-fonts-3/',
"css-fonts-4": [
  'https://triple-underscore.github.io/css-fonts4-ja.html',
  'https://jp.htmlspecs.com/css/css-fonts-4/'
],
"css-images-3": [
  "https://triple-underscore.github.io/css-images-ja.html",
  'https://jp.htmlspecs.com/css/css-images-3/'
],
"css-images-4": [
  "https://triple-underscore.github.io/css-images4-ja.html",
  'https://jp.htmlspecs.com/css/css-images-4/'
],
"css-inline-3": [
  'https://triple-underscore.github.io/css-inline-ja.html',
  'https://jp.htmlspecs.com/css/css-inline-3/'
],
"css-multicol-1": 'https://jp.htmlspecs.com/css/css-multicol-1/',
"css-position-3": [
  "https://triple-underscore.github.io/css-position-ja.html",
  'https://jp.htmlspecs.com/css/css-position-3/'
],
"css-pseudo-4": [
  'https://triple-underscore.github.io/css-pseudo-ja.html',
  'https://jp.htmlspecs.com/css/css-pseudo-4/'
],
"css-sizing-3": [
  "https://triple-underscore.github.io/css-sizing-ja.html",
  'https://jp.htmlspecs.com/css/css-sizing-3/'
],
"css-sizing-4": 'https://jp.htmlspecs.com/css/css-sizing-4/', 
"css-style-attr": [
  "https://triple-underscore.github.io/css-style-attr-ja.html",
  'https://jp.htmlspecs.com/css/css-style-attr/'
],
"css-syntax-3": [
  "https://triple-underscore.github.io/css-syntax-ja.html",
  'https://jp.htmlspecs.com/css/css-syntax-3/'
],
"css-text-3": "https://jp.htmlspecs.com/css/css-text-3/",
"css-text-4": [
  "https://triple-underscore.github.io/css-text-ja.html",
  'https://jp.htmlspecs.com/css/css-text-4/'
],
"css-text-decor-4": [
  "https://triple-underscore.github.io/css-text-decor-ja.html",
  'https://jp.htmlspecs.com/css/css-text-decor-4/'
],
"css-transforms-1": [
  "https://triple-underscore.github.io/css-transforms-ja.html",
  'https://jp.htmlspecs.com/css/css-transforms-1/'
],
"css-transforms-2": [
  "https://triple-underscore.github.io/css-transforms2-ja.html",
  'https://jp.htmlspecs.com/css/css-transforms-2/'
],
"css-ui-3": [
  "https://momdo.github.io/css-ui/",
  'https://jp.htmlspecs.com/css/css-ui-3/'
],
"css-ui-4": [
  'https://triple-underscore.github.io/css-ui-ja.html',
  'https://jp.htmlspecs.com/css/css-ui-4/'
],
"css-values-3": [
  'https://momdo.github.io/css3-values/',
  'https://jp.htmlspecs.com/css/css-values-3/'
],
"css-values-5":	[
  'https://triple-underscore.github.io/css-values5-ja.html',
  'https://jp.htmlspecs.com/css/css-values-5/'
],
"css-variables-1": [
  "https://triple-underscore.github.io/css-variables-ja.html",
  'https://jp.htmlspecs.com/css/css-variables-1/'
],
"css-will-change-1": [
  "https://triple-underscore.github.io/css-will-change-ja.html",
  'https://jp.htmlspecs.com/css/css-will-change-1/'
],
"css-writing-modes-3": [
  "https://triple-underscore.github.io/css-writing-modes-ja.html",
  'https://jp.htmlspecs.com/css/css-writing-modes-3/'
],
css2: 'https://ss1.xrea.com/momdo.s35.xrea.com/web-html-test/spec/CSS21/cover.html',
"css3-mediaqueries": 'https://jp.htmlspecs.com/css/mediaqueries-3/',
"css3-namespace": [
  "https://ss1.xrea.com/momdo.s35.xrea.com/web-html-test/spec/REC-css-namespaces-3-20140320.html",
  "https://triple-underscore.github.io/css-namespaces-ja.html",
  'https://jp.htmlspecs.com/css/css-namespaces-3/'
],
"mediaqueries-5": 'https://jp.htmlspecs.com/css/mediaqueries-5/',
rfc2119: [
  'https://www.nic.ad.jp/ja/tech/ipa/RFC2119JA.html',
  'http://www.cam.hi-ho.ne.jp/mendoxi/rfc/rfc2119j.html',
  'http://www.asahi-net.or.jp/~sd5a-ucd/rfc-j/rfc-2119j.html',
  'http://www.t-net.ne.jp/~cyfis/rfc/format/rfc2119_ja.html'
],
"selectors-3": 'https://jp.htmlspecs.com/css/selectors-3/',
"selectors-4": [
  "https://triple-underscore.github.io/css-align-ja.html",
  'https://jp.htmlspecs.com/css/selectors-4/'
],
//infomative
"css-align-3": [
  "https://triple-underscore.github.io/css-align-ja.html",
  'https://jp.htmlspecs.com/css/css-align-3/'
],
"css-animations-1": [
  "https://triple-underscore.github.io/css-animations-ja.html",
  'https://jp.htmlspecs.com/css/css-animations-1/'
],
"css-break-3": "https://jp.htmlspecs.com/css/css-break-3/",
"css-cascade-3": "https://jp.htmlspecs.com/css/css-cascade-3/",
"css-cascade-5": [
  'https://triple-underscore.github.io/css-cascade-ja.html',
  'https://jp.htmlspecs.com/css/css-cascade-5/',
],
"css-color-3": 'https://jp.htmlspecs.com/css/css-color-3/',
"css-color-adjust-1": [
  "https://triple-underscore.github.io/css-color-adjust-ja.html",
  'https://jp.htmlspecs.com/css/css-color-adjust-1/'
],
"css-conditional-4": [
  "https://triple-underscore.github.io/css-conditional4-ja.html",
  'https://jp.htmlspecs.com/css/css-conditional-4/'
],
"css-font-loading-3": [
  "https://triple-underscore.github.io/css-font-loading-ja.html",
  'https://jp.htmlspecs.com/css/css-font-loading/'
],
"css-grid-1": "https://jp.htmlspecs.com/css/css-grid-1/",
"css-grid-2": [
  "https://triple-underscore.github.io/css-grid-ja.html",
  'https://jp.htmlspecs.com/css/css-grid-2/'
],
"css-lists-3": [
  "https://triple-underscore.github.io/css-lists-ja.html",
  'https://jp.htmlspecs.com/css/css-lists-3/'
],
"css-logical-1": [
  "https://triple-underscore.github.io/css-logical-ja.html",
  'https://jp.htmlspecs.com/css/css-logical-1/'
],
"css-masking-1": [
  "https://triple-underscore.github.io/css-masking-ja.html",
  'https://jp.htmlspecs.com/css/css-masking-1/'
],
"css-scroll-anchoring-1": [
  "https://triple-underscore.github.io/css-scroll-anchoring-ja.html",
  'https://jp.htmlspecs.com/css/css-scroll-anchoring-1/'
],
"css-scroll-snap-1": [
  "https://triple-underscore.github.io/css-scroll-snap-ja.html",
  'https://jp.htmlspecs.com/css/css-scroll-snap-1/'
],
"css-scrollbars-1": [
  "https://triple-underscore.github.io/css-scrollbars-ja.html",
  'https://jp.htmlspecs.com/css/css-scrollbars-1/'
],
"css-shapes-1": [
  "https://triple-underscore.github.io/css-shapes-ja.html",
  'https://jp.htmlspecs.com/css/css-shapes-1/'
],
"css-speech-1": [
  "https://triple-underscore.github.io/css-speech-ja.html",
  'https://jp.htmlspecs.com/css/css-speech-1/'
],
"css-text-3": 'https://jp.htmlspecs.com/css/css-text-3/',
"css-text-decor-3": [
  "https://momdo.github.io/css-text-decor-3/",
  'https://jp.htmlspecs.com/css/css-text-decor-3/'
],
"css-transitions-1": [
  "https://triple-underscore.github.io/css-transitions-ja.html",
  'https://jp.htmlspecs.com/css/css-transitions-1/'
],
"css-view-transitions-1": [
  "https://triple-underscore.github.io/css-transitions-ja.html",
  'https://jp.htmlspecs.com/css/css-view-transitions-1/'
],
"css-writing-modes-4": [
  "https://triple-underscore.github.io/css-writing-modes-ja.html",
  'https://jp.htmlspecs.com/css/css-writing-modes-4/'
],
"cssom-1": [
  "https://triple-underscore.github.io/cssom-ja.html",
  'https://jp.htmlspecs.com/css/cssom-1/'
],
"cssom-view-1": [
  "https://triple-underscore.github.io/cssom-view-ja.html",
  'https://jp.htmlspecs.com/css/cssom-view/'
],
"filter-effects-1": [
  "https://triple-underscore.github.io/filter-effects-ja.html",
  'https://jp.htmlspecs.com/css/filter-effects-1/'
],
"geometry-1": [
  "https://triple-underscore.github.io/geometry-ja.html",
  'https://jp.htmlspecs.com/css/geometry-1/'
],
"mediaqueries-4": "https://jp.htmlspecs.com/css/mediaqueries-4/",
"motion-1": [
  "https://triple-underscore.github.io/motion-ja.html",
  'https://jp.htmlspecs.com/css/motion-1/'
],
"resize-observer-1": 'https://jp.htmlspecs.com/resize-observer/',
"web-animations-1": [
  "https://triple-underscore.github.io/web-animations-ja.html",
  'https://jp.htmlspecs.com/css/web-animations-1/'
],
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
			if(text.match(/訳$/) || text.match(/1$/)){ //最初だけ（強引に）マッチング
            	span.appendChild(document.createElement("br"));
			}
			span.setAttribute("style", "margin-right:5px;");
			span.appendChild(a);
			return parent.nextElementSibling.appendChild(span); //parent.appendChild(span);
		};

		for(id in refList){	// リストを巡回
			if(refList.hasOwnProperty(id)){	// "おまじない"
				if(dd = document.getElementById("biblio-" + id)){	// 当該 ID を持つ要素があることを最初に確認
					urlType = typeof refList[id];

					if(urlType === typeof ""){	// URL が1個だけのとき
						insertA(dd, refList[id], "日本語訳");
					}else if(urlType === typeof []){	// URL が複数あるとき
						refList[id].forEach(function(url, key){	// URL の複数指定を巡回
							insertA(dd, url, "日本語訳" + (key + 1).toString());
						});
					}
				}
			}
		}
	})();
}, false);
