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
//css2: 'http://www.y-adagio.com/public/standards/tr_css2/toc.html',
css2: 'https://momdo.github.io/css2/Overview.html',
select: 'http://standards.mitsue.co.jp/resources/w3c/TR/css3-selectors/',

"compositing": "https://triple-underscore.github.io/compositing-ja.html",
"css-cascade-3": "https://triple-underscore.github.io/css3-cascade-ja.html",
//"css-color-4"

"css-fonts-3": "https://triple-underscore.github.io/css-fonts-ja.html",
"css-grid-1": "https://triple-underscore.github.io/css-grid-ja.html",

"css-style-attr": "https://triple-underscore.github.io/css-style-attr-ja.html",
"css-syntax-3": "https://triple-underscore.github.io/css-syntax-ja.html",
"css-ui-3": [ "https://momdo.github.io/css-ui/",
"https://triple-underscore.github.io/css-ui-ja.html",
],
"css-values-3": [ 'https://momdo.github.io/css3-values/',
	'https://triple-underscore.github.io/css-values-ja.html',
],
"css3-background": "https://triple-underscore.github.io/css-backgrounds-ja.html",
"css3-color":"http://standards.mitsue.co.jp/resources/w3c/TR/css3-color/",
"css3-conditional": "https://triple-underscore.github.io/css-conditional-ja.html",
"css3-images": 'https://triple-underscore.github.io/css-images-ja.html',
"css3-mediaqueries": "http://standards.mitsue.co.jp/resources/w3c/TR/css3-mediaqueries/",
"css3-multicol": "https://triple-underscore.github.io/css-multicol-ja.html",
"css3-namespace": [ "http://momdo.s35.xrea.com/web-html-test/spec/REC-css-namespaces-3-20140320.html",
"https://triple-underscore.github.io/css-namespaces-ja.html",
],
"css-flexbox-1": "https://triple-underscore.github.io/css-flexbox-ja.html",
//"css-masking-1"
"css-shapes-1": "https://triple-underscore.github.io/css-shapes-ja.html",
"css-text-decor-3": ["https://momdo.github.io/css-text-decor-3/",
"https://triple-underscore.github.io/css-text-ja.html"],
"css3-animations": "https://triple-underscore.github.io/css-animations-ja.html",
"css3-speech": "https://triple-underscore.github.io/css-speech-ja.html",
"css3-transforms": "https://triple-underscore.github.io/css-transforms-ja.html",
"css3-transitions": "https://triple-underscore.github.io/css-transitions-ja.html",
"selectors4": "https://triple-underscore.github.io/selectors4-ja.html",
"css-will-change-1": "https://triple-underscore.github.io/css-will-change-ja.html",
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
