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
"css3-selectors": 'http://standards.mitsue.co.jp/resources/w3c/TR/css3-selectors/',
dom: 'https://triple-underscore.github.io/DOM4-ja.html',
html5: 'http://momdo.github.io/html5/Overview.html',
MathML3: ['http://takamu.sakura.ne.jp/mathml3-ja/index.html',
'http://washitake.com/MathML/ver3/'],
"owl-features": 'http://www.asahi-net.or.jp/~ax2s-kmtn/internet/rec-owl-features-20040210.html',
"rdf-concepts": 'http://www.asahi-net.or.jp/~ax2s-kmtn/internet/rdf/rdf-concepts.html',
"rdf-schema": 'http://www.asahi-net.or.jp/~ax2s-kmtn/internet/rdf/REC-rdf-schema-20140225.html',
RFC3986: 'https://triple-underscore.github.io/rfc-others/RFC3986-ja.html',
SVG2: 'https://triple-underscore.github.io/svg-misc-ja.html',
"wai-aria-1.0": 'http://momdo.github.io/wai-aria/',
"wai-aria-practices-1.1": 'https://waic.jp/docs/2019/NOTE-wai-aria-practices-1.1-20190207/',
WCAG20: 'http://waic.jp/docs/WCAG20/Overview.html',
xhtml11: ['http://msugai.fc2web.com/web/W3C/XHTML11/xhtml11.html',
    'http://www.doraneko.org/webauth/xhtml11/20010531/Overview.html'],
"xml-names": 'https://triple-underscore.github.io/xml-names-ja.html',
RFC2119: [ 'http://www.ipa.go.jp/security/rfc/RFC2119JA.html',
    'http://www.studyinghttp.net/rfc_ja/rfc2119',
    'http://www.cam.hi-ho.ne.jp/mendoxi/rfc/rfc2119j.html',
    'http://www.asahi-net.or.jp/~sd5a-ucd/rfc-j/rfc-2119j.html',
    'http://www.t-net.ne.jp/~cyfis/rfc/format/rfc2119_ja.html'
],

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
				if(dd = document.getElementById("bib-" + id)){	// 当該 ID を持つ要素があることを最初に確認
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
