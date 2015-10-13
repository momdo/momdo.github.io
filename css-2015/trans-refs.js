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
css21: 'http://momdo.github.io/css2/cover.html',
select: 'http://standards.mitsue.co.jp/resources/w3c/TR/css3-selectors/',

"compositing": "http://www.hcn.zaq.ne.jp/___/WEB/compositing-ja.html",
"css-cascade-3": "http://www.hcn.zaq.ne.jp/___/WEB/css3-cascade-ja.html",
//"css-color-4"
"css-conditional-3": "http://www.hcn.zaq.ne.jp/___/WEB/css3-conditional-ja.html",
//"css-counter-styles-3"
"css-fonts-3": "http://www.hcn.zaq.ne.jp/___/WEB/css-fonts-ja.html",
//"css-style-attr"
"css-syntax-3": "http://www.hcn.zaq.ne.jp/___/WEB/css-syntax-ja.html",
"css-ui-3": [ "http://momdo.github.io/css-ui/",
"http://www.hcn.zaq.ne.jp/___/WEB/css-ui-ja.html",
],
"css-values": [ 'http://momdo.github.io/css3-values/',
	'http://www.hcn.zaq.ne.jp/___/WEB/css-values-ja.html',
],
"css3-background": "http://www.hcn.zaq.ne.jp/___/WEB/css-backgrounds-ja.html",
"css3-color":"http://standards.mitsue.co.jp/resources/w3c/TR/css3-color/",
"css3-images": 'http://www.hcn.zaq.ne.jp/___/WEB/css-images-ja.html',
"css3-mediaqueries": "http://standards.mitsue.co.jp/resources/w3c/TR/css3-mediaqueries/",
"css3-multicol": "http://www.hcn.zaq.ne.jp/___/WEB/css-multicol-ja.html",
"css3-namespace": [ "http://momdo.s35.xrea.com/web-html-test/spec/REC-css-namespaces-3-20140320.html",
"http://www.hcn.zaq.ne.jp/___/WEB/css-namespaces-ja.html",
],
"css-flexbox-1": "http://www.hcn.zaq.ne.jp/___/WEB/css-flexbox-ja.html",
//"css-masking-1"
//"css-shapes-1"
"css-text-decor-3": "http://momdo.s35.xrea.com/web-html-test/spec/CR-css-text-decor-3-20130801.html",
"css3-animations": "http://www.hcn.zaq.ne.jp/___/WEB/css-animations-ja.html",
"css3-speech": "http://www.hcn.zaq.ne.jp/___/WEB/css-speech-ja.html",
"css3-transforms": "http://www.hcn.zaq.ne.jp/___/WEB/css-transforms-ja.html",
"css3-transitions": "http://www.hcn.zaq.ne.jp/___/WEB/css-transitions-ja.html",

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
