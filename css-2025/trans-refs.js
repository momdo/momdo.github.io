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

css2: 'https://momdo.github.io/css2/Overview.html',
//css2: 'https://momdo.github.io/css2/Overview.html',

"compositing": "https://triple-underscore.github.io/compositing-ja.html",
"css-backgrounds-3": "https://triple-underscore.github.io/css-backgrounds-ja.html",
"css-color-4": "https://triple-underscore.github.io/css-color-ja.html",
"css-color-5": "https://triple-underscore.github.io/css-color5-ja.html",
"css-conditional-3": "https://triple-underscore.github.io/css-conditional-ja.html",
"css-contain-2": "https://triple-underscore.github.io/css-contain-ja.html",
"css-counter-styles-3": "https://triple-underscore.github.io/css-counter-styles-ja.html",
"css-flexbox-1": "https://triple-underscore.github.io/css-flexbox-ja.html",
"css-fonts-3": "https://triple-underscore.github.io/css-fonts-ja.html",
"css-fonts-4": "https://triple-underscore.github.io/css-fonts4-ja.html",
"css-images-3": "https://triple-underscore.github.io/css-images-ja.html",
"css-images-4": "https://triple-underscore.github.io/css-images4-ja.html",
"css-position-3": "https://triple-underscore.github.io/css-position-ja.html",
"css-sizing-3": "https://triple-underscore.github.io/css-sizing-ja.html",
"css-style-attr": "https://triple-underscore.github.io/css-style-attr-ja.html",
"css-syntax-3": "https://triple-underscore.github.io/css-syntax-ja.html",
"css-text-4": "https://triple-underscore.github.io/css-text-ja.html",
"css-transforms-1": "https://triple-underscore.github.io/css-transforms-ja.html",
"css-transforms-2": "https://triple-underscore.github.io/css-transforms2-ja.html",
"css-ui-3": "https://momdo.github.io/css-ui/",
"css-variables-1": "https://triple-underscore.github.io/css-variables-ja.html",
"css-values-3": 'https://momdo.github.io/css3-values/',
"css-will-change-1": "https://triple-underscore.github.io/css-will-change-ja.html",
"css-writing-modes-3": "https://triple-underscore.github.io/css-writing-modes-ja.html",
"css3-namespace": [ "http://momdo.s35.xrea.com/web-html-test/spec/REC-css-namespaces-3-20140320.html",
"https://triple-underscore.github.io/css-namespaces-ja.html",
],
rfc2119: [ 'https://www.nic.ad.jp/ja/tech/ipa/RFC2119JA.html',
           'http://www.cam.hi-ho.ne.jp/mendoxi/rfc/rfc2119j.html',
           'http://www.asahi-net.or.jp/~sd5a-ucd/rfc-j/rfc-2119j.html',
           'http://www.t-net.ne.jp/~cyfis/rfc/format/rfc2119_ja.html'
],
"selectors-4": "https://triple-underscore.github.io/css-align-ja.html",
//
"css-align-3": "https://triple-underscore.github.io/css-align-ja.html",
"css-animations-1": "https://triple-underscore.github.io/css-animations-ja.html",
"css-cascade-5": "https://triple-underscore.github.io/css5-cascade-ja.html",
"css-color-adjust-1": "https://triple-underscore.github.io/css-color-adjust-ja.html",
"css-conditional-4": "https://triple-underscore.github.io/css-conditional4-ja.html",
"css-font-loading-3": "https://triple-underscore.github.io/css-font-loading-ja.html",
"css-grid-2": "https://triple-underscore.github.io/css-grid-ja.html",
"css-lists-3": "https://triple-underscore.github.io/css-lists-ja.html",
"css-logical-1": "https://triple-underscore.github.io/css-logical-ja.html",
"css-masking-1": "https://triple-underscore.github.io/css-masking-ja.html",
"css-scroll-anchoring-1": "https://triple-underscore.github.io/css-scroll-anchoring-ja.html",
"css-scroll-snap-1": "https://triple-underscore.github.io/css-scroll-snap-ja.html",
"css-scrollbars-1": "https://triple-underscore.github.io/css-scrollbars-ja.html",
"css-shapes-1": "https://triple-underscore.github.io/css-shapes-ja.html",
"css-speech-1": "https://triple-underscore.github.io/css-speech-ja.html",
"css-text-decor-3": ["https://momdo.github.io/css-text-decor-3/",
"https://triple-underscore.github.io/css-text-ja.html"],
"css-transitions-1": "https://triple-underscore.github.io/css-transitions-ja.html",
"css-view-transitions-1": "https://triple-underscore.github.io/css-transitions-ja.html",
"css-writing-modes-4": "https://triple-underscore.github.io/css-writing-modes-ja.html",
"cssom-1":"https://triple-underscore.github.io/cssom-ja.html",
"filter-effects-1": "https://triple-underscore.github.io/filter-effects-ja.html",
"motion-1": "https://triple-underscore.github.io/motion-ja.html",
"web-animations-1": "https://triple-underscore.github.io/web-animations-ja.html",
//
//"css-multicol-2": "https://triple-underscore.github.io/css-multicol-ja.html",
//"css-ui-4": "https://triple-underscore.github.io/css-ui-ja.html",
//"css-values-4":	'https://triple-underscore.github.io/css-values-ja.html',
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
