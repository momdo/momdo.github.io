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
"compositing-1": 'https://triple-underscore.github.io/compositing-ja.html',
"css-backgrounds-3": 'https://triple-underscore.github.io/css-backgrounds-ja.html',
"css-cascade-4": 'https://triple-underscore.github.io/css-cascade-ja.html',
"css-color-3": 'http://standards.mitsue.co.jp/resources/w3c/TR/css3-color/',
"css-color-4": 'https://triple-underscore.github.io/css-color-ja.html',
"css-counter-styles-3": 'https://triple-underscore.github.io/css-counter-styles-ja.html',
"css-display-3": 'https://triple-underscore.github.io/css-display-ja.html',
"css-images-3": 'https://triple-underscore.github.io/css-images-ja.html',
//overflow-4
"css-writing-modes-3": "https://triple-underscore.github.io/css-writing-modes-ja.html",
css21: 'https://momdo.github.io/css2/cover.html',
"css3-fonts": 'https://triple-underscore.github.io/css-fonts-ja.html',
//CSS3-IMAGES
//CSS3COLOR
css3namespace: 'http://momdo.s35.xrea.com/web-html-test/spec/REC-css-namespaces-3-20140320.html',
css3page: 'https://triple-underscore.github.io/css-page-ja.html',
css3syn: 'https://triple-underscore.github.io/css-syntax-ja.html',
"cssom": 'https://triple-underscore.github.io/cssom-ja.html',
rfc2119: [ 'http://www.ipa.go.jp/security/rfc/RFC2119JA.html',
          'http://www.studyinghttp.net/rfc_ja/rfc2119',
          'http://www.cam.hi-ho.ne.jp/mendoxi/rfc/rfc2119j.html',
          'http://www.asahi-net.or.jp/~sd5a-ucd/rfc-j/rfc-2119j.html',
          'http://www.t-net.ne.jp/~cyfis/rfc/format/rfc2119_ja.html'
],
"selectors-4": 'https://triple-underscore.github.io/selectors4-ja.html',
"url": 'https://triple-underscore.github.io/URL-ja.html',
//"whatwg-dom": 'https://triple-underscore.github.io/DOM4-ja.html',

"css-animations-1": 'https://triple-underscore.github.io/css-animations-ja.html',
"css-break-3": 'https://triple-underscore.github.io/css-break-ja.html',
"css-text-3": 'https://triple-underscore.github.io/css-text-ja.html',
"css-text-decor-3": ['https://momdo.github.io/css-text-decor-3/', 'https://triple-underscore.github.io/css-text-ja.html'],
"css-transitions-1": 'https://triple-underscore.github.io/css-transitions-ja.html',
"css-ui-3": ['https://momdo.github.io/css-ui/',
    'https://triple-underscore.github.io/css-ui-ja.html',
],
"html": 'https://momdo.github.io/html/',
"mediaq": 'http://standards.mitsue.co.jp/resources/w3c/TR/css3-mediaqueries/',

//"mediaqueries-4": 'https://triple-underscore.github.io/mediaqueries4-ja.html',

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
