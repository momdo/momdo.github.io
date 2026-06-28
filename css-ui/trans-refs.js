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
"css-backgrounds-3": [
  'https://triple-underscore.github.io/css-backgrounds-ja.html',
  'https://jp.htmlspecs.com/css/css-backgrounds-3/'
],
"css-color-3": 'https://jp.htmlspecs.com/css/css-color-3/',
"css-values-3": [
  'https://momdo.github.io/css3-values/',
  'https://jp.htmlspecs.com/css/css-values-3/'
],
"css-writing-modes-3": [
  "https://triple-underscore.github.io/css-writing-modes-ja.html",
  'https://jp.htmlspecs.com/css/css-writing-modes-3/'
],
css2: 'https://ss1.xrea.com/momdo.s35.xrea.com/web-html-test/spec/CSS21/cover.html',
"css3-images": [
  "https://triple-underscore.github.io/css-images-ja.html",
  'https://jp.htmlspecs.com/css/css-images-3/'
],
html: [
  'https://momdo.github.io/html/',
  'https://triple-underscore.github.io/index.html#spec-list-html',
  'https://jp.htmlspecs.com/'
],
//png: 'http://www.milk-island.net/document/png/',
rfc2119: [
  'http://www.studyinghttp.net/rfc_ja/rfc2119',
  'http://www.cam.hi-ho.ne.jp/mendoxi/rfc/rfc2119j.html',
  'http://www.asahi-net.or.jp/~sd5a-ucd/rfc-j/rfc-2119j.html',
  'http://www.t-net.ne.jp/~cyfis/rfc/format/rfc2119_ja.html'
],
svg11: 'https://triple-underscore.github.io/SVG11/index.html',
svg2: [
  'https://triple-underscore.github.io/svg-misc-ja.html',
  'https://jp.htmlspecs.com/SVG2/'
],
"css-cascading-4": "https://jp.htmlspecs.com/css/css-cascade-4/",
"css-pseudo-4": [
  'https://triple-underscore.github.io/css-pseudo-ja.html',
  'https://jp.htmlspecs.com/css/css-pseudo-4/'
],
"css-transitions-1": [
  "https://triple-underscore.github.io/css-transitions-ja.html",
  'https://jp.htmlspecs.com/css/css-transitions-1/'
],
css1: 'http://www.doraneko.org/webauth/css1/19961217/Overview.html',
"css4-images": [
  "https://triple-underscore.github.io/css-images4-ja.html",
  'https://jp.htmlspecs.com/css/css-images-4/'
]

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
