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
html4: 'http://www.asahi-net.or.jp/~sd5a-ucd/rec-html401j/cover.html',
html5: 'http://momdo.github.io/html5/Overview.html',
rfc2119: [ 'http://www.ipa.go.jp/security/rfc/RFC2119JA.html',
    'http://www.studyinghttp.net/rfc_ja/rfc2119',
    'http://www.cam.hi-ho.ne.jp/mendoxi/rfc/rfc2119j.html',
    'http://www.asahi-net.or.jp/~sd5a-ucd/rfc-j/rfc-2119j.html',
    'http://www.t-net.ne.jp/~cyfis/rfc/format/rfc2119_ja.html'
],
"css3-selectors": 'http://standards.mitsue.co.jp/resources/w3c/TR/css3-selectors/',
xml10spec: 'http://w4ard.eplusx.net/translation/W3C/REC-xml-20081126/',
xmlinfoset: 'http://www.doraneko.org/xml/infoset/20040204/Overview.html',
xmlns: 'https://triple-underscore.github.io/XML/xml-ns-ja.html',
xpath: 'http://www.doraneko.org/xml/xpath10/19991116/Overview.html',

"css2-1": ['http://momdo.s35.xrea.com/web-html-test/spec/CSS21/cover.html','https://momdo.github.io/css2/Overview.html'],
"rdfa-lite": 'http://www.asahi-net.or.jp/~ax2s-kmtn/internet/rdf/REC-rdfa-lite-20120607.html',
xhtml10: 'http://msugai.fc2web.com/web/W3C/xhtml1SE/Cover.html',
xslt10: 'https://triple-underscore.github.io/XML/xslt10-ja.html',
xul: 'https://developer.mozilla.org/ja/docs/XUL',
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
			return parent.parentNode.nextElementSibling.appendChild(span); 
		};

		for(id in refList){	// リストを巡回
			if(refList.hasOwnProperty(id)){	// "おまじない"
				if(dd = document.getElementById(id)){	// 当該 ID を持つ要素があることを最初に確認
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
