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
css21: 'http://momdo.github.io/css2/cover.html',
"css-backgrounds-3": 'http://www.hcn.zaq.ne.jp/___/WEB/css-backgrounds-ja.html',
//css3color: 'http://standards.mitsue.co.jp/resources/w3c/TR/css3-color/',
//png: 'http://www.milk-island.net/document/png/',
"css-cascade-4": 'http://www.hcn.zaq.ne.jp/___/WEB/css-cascade-ja.html', //そのうち削除するかも
"css-images-3": 'http://www.hcn.zaq.ne.jp/___/WEB/css-images-ja.html',
"css-values-3":  'http://momdo.github.io/css3-values/',
"cssom-1": 'http://www.hcn.zaq.ne.jp/___/WEB/cssom-ja.html',
rfc2119: [ 'http://www.ipa.go.jp/security/rfc/RFC2119JA.html',
          'http://www.studyinghttp.net/rfc_ja/rfc2119',
          'http://www.cam.hi-ho.ne.jp/mendoxi/rfc/rfc2119j.html',
          'http://www.asahi-net.or.jp/~sd5a-ucd/rfc-j/rfc-2119j.html',
          'http://www.t-net.ne.jp/~cyfis/rfc/format/rfc2119_ja.html'
],
css1: 'http://www.doraneko.org/webauth/css1/19961217/Overview.html',
css2: 'https://momdo.github.io/css2/Overview.html',
svg11: 'http://www.hcn.zaq.ne.jp/___/SVG11-2nd/',
html: 'http://momdo.github.io/html/',
"css-pseudo-4": 'https://triple-underscore.github.io/css-pseudo-ja.html',
"css-transitions-1":'https://triple-underscore.github.io/css-transitions-ja.html',
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
