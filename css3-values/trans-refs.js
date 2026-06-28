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
"css-2023": 'https://momdo.github.io/css-2023/',
"css-cascade-5": [
  'https://triple-underscore.github.io/css-cascade-ja.html',
  'https://jp.htmlspecs.com/css/css-cascade-5/'
],
"css-color-5": [
  'https://triple-underscore.github.io/css-color5-ja.html',
  'https://jp.htmlspecs.com/css/css-color-5/'
],
"css-counter-styles-3": [
  'https://triple-underscore.github.io/css-counter-styles-ja.html',
  'https://jp.htmlspecs.com/css/css-counter-styles-3/',
],
"css-display-3": [
  'https://triple-underscore.github.io/css-display-ja.html',
  'https://jp.htmlspecs.com/css/css-display-3/'
],
"css-fonts-4": [
  'https://triple-underscore.github.io/css-fonts4-ja.html',
  'https://jp.htmlspecs.com/css/css-fonts-4/'
],
"css-images-4": [
  'https://triple-underscore.github.io/css-images4-ja.html',
  'https://jp.htmlspecs.com/css/css-images-4/'
],
"css-sizing-3": [
  'https://triple-underscore.github.io/css-sizing-ja.html',
  'https://jp.htmlspecs.com/css/css-sizing-3/'
],
"css-syntax-3": [
  'https://triple-underscore.github.io/css-syntax-ja.html',
  'https://jp.htmlspecs.com/css/css-syntax-3/'
],
css2: 'https://ss1.xrea.com/momdo.s35.xrea.com/web-html-test/spec/CSS21/cover.html',
css22: [
  'https://momdo.github.io/css2/cover.html',
  'https://jp.htmlspecs.com/css/css22/'
],
"css3-background": [
  'https://triple-underscore.github.io/css-backgrounds-ja.html',
  'https://jp.htmlspecs.com/css/css-backgrounds-3/'
],
"css3-fonts": [
  'https://triple-underscore.github.io/css-fonts-ja.html',
  'https://jp.htmlspecs.com/css/css-fonts-3/'
],
"css3color": 'https://jp.htmlspecs.com/css/css-color-3/',
"css3page": [
  'https://triple-underscore.github.io/css-page-ja.html',
  'https://jp.htmlspecs.com/css/css-page-3/'
],
cssom: [
  'https://triple-underscore.github.io/cssom-ja.html',
  'https://jp.htmlspecs.com/css/cssom-1/'
],
infra: [
  'https://triple-underscore.github.io/infra-ja.html',
  'https://jp.htmlspecs.com/infra/'
],
"mediaqueries-5": [
  'https://triple-underscore.github.io/mediaqueries-ja.html',
  'https://jp.htmlspecs.com/css/mediaqueries-5/'
],
rfc2119: [ 'http://www.ipa.go.jp/security/rfc/RFC2119JA.html',
          'http://www.studyinghttp.net/rfc_ja/rfc2119',
          'http://www.cam.hi-ho.ne.jp/mendoxi/rfc/rfc2119j.html',
          'http://www.asahi-net.or.jp/~sd5a-ucd/rfc-j/rfc-2119j.html',
          'http://www.t-net.ne.jp/~cyfis/rfc/format/rfc2119_ja.html'
],
"selectors-3": 'https://jp.htmlspecs.com/css/selectors-3/',
"selectors-4": [
  'https://triple-underscore.github.io/selectors4-ja.html',
  'https://jp.htmlspecs.com/css/selectors-4/'
],
"url": [
  'https://triple-underscore.github.io/URL-ja.html',
  'https://jp.htmlspecs.com/url/'
],
//info
"css-animations-1": [
  'https://triple-underscore.github.io/css-animations-ja.html',
  'https://jp.htmlspecs.com/css/css-animations-1/'
],
"css-box-4": [
  'https://triple-underscore.github.io/css-box-ja.html',
  'https://jp.htmlspecs.com/css/css-box-4/'
],
"css-break-3": 'https://triple-underscore.github.io/css-break-ja.html',
"css-cascade-3": 'https://jp.htmlspecs.com/css/css-cascade-3/',
"css-color-4": [
  'https://triple-underscore.github.io/css-color-ja.html',
  'https://jp.htmlspecs.com/css/css-color-4/'
],
"css-easing-1": 'https://jp.htmlspecs.com/css/css-easing-1/',
"css-grid-1": 'https://jp.htmlspecs.com/css/css-grid-1/',
"css-grid-2": [
  'https://jp.htmlspecs.com/css/css-grid-2/',
  'https://triple-underscore.github.io/css-grid-ja.html'
],
"css-overflow-3": [
  'https://triple-underscore.github.io/css-overflow-ja.html',
  'https://jp.htmlspecs.com/css/css-overflow-3/'
],
"css-text-3": 'https://jp.htmlspecs.com/css/css-text-3/',
"css-text-4": [
  'https://triple-underscore.github.io/css-text-ja.html',
  'https://jp.htmlspecs.com/css/css-text-4/'
],
"css-text-decor-4": [
  'https://triple-underscore.github.io/css-text-decor-ja.html',
  'https://jp.htmlspecs.com/css/css-text-decor-4/'
],
"css-transforms-1": [
  'https://triple-underscore.github.io/css-transitions-ja.html',
  'https://jp.htmlspecs.com/css/css-transforms-1/'
],
"css-ui-4": [
  'https://triple-underscore.github.io/css-ui-ja.html',
  'https://jp.htmlspecs.com/css/css-ui-4/'
],
"css-values-4": [
  'https://triple-underscore.github.io/css-values-ja.html',
  'https://jp.htmlspecs.com/css/css-values-4/'
],
"css-values-5": [
  'https://triple-underscore.github.io/css-values5-ja.html',
  'https://jp.htmlspecs.com/css/css-values-5/'
],
html: [
  'https://momdo.github.io/html/',
  'https://triple-underscore.github.io/index.html#spec-list-html',
  'https://jp.htmlspecs.com/'
],
mediaq: 'https://jp.htmlspecs.com/css/mediaqueries-4/',
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
