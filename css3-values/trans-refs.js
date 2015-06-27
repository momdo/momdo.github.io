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
css3bg: 'http://www.hcn.zaq.ne.jp/___/WEB/css-backgrounds-ja.html',
css3cascade: 'http://www.hcn.zaq.ne.jp/___/WEB/css-cascade-ja.html',
css3color: 'http://standards.mitsue.co.jp/resources/w3c/TR/css3-color/',
css3namespace: 'http://momdo.s35.xrea.com/web-html-test/spec/REC-css-namespaces-3-20140320.html',
css3page: 'http://www.hcn.zaq.ne.jp/___/WEB/css-page-ja.html',
css3syn: 'http://www.hcn.zaq.ne.jp/___/WEB/css-syntax-ja.html',
"compositing-1": 'http://www.hcn.zaq.ne.jp/___/WEB/compositing-ja.html',
"css-animations-1": 'http://www.hcn.zaq.ne.jp/___/WEB/css-animations-ja.html',
"css-break-3": 'http://www.hcn.zaq.ne.jp/___/WEB/css-break-ja.html',
"css-cascade-4": 'http://www.hcn.zaq.ne.jp/___/WEB/css-cascade-ja.html',
"css-fonts-3": 'http://www.hcn.zaq.ne.jp/___/WEB/css-fonts-ja.html',
"css-images-3": 'http://www.hcn.zaq.ne.jp/___/WEB/css-images-ja.html',
"css-text-3": 'http://www.hcn.zaq.ne.jp/___/WEB/css-text-ja.html',
"css-text-decor-3": 'http://momdo.s35.xrea.com/web-html-test/spec/CR-css-text-decor-3-20130801.html',
"css-transitions-1": 'http://www.hcn.zaq.ne.jp/___/WEB/css-transitions-ja.html',
"css-ui-3": ['http://momdo.github.io/css-ui/',
    'http://www.hcn.zaq.ne.jp/___/WEB/css-ui-ja.html',
],
"dom-ls": 'http://www.hcn.zaq.ne.jp/___/WEB/DOM4-ja.html',
"mediaqueries-4": 'http://www.hcn.zaq.ne.jp/___/WEB/mediaqueries4-ja.html',

"mediaq": 'http://standards.mitsue.co.jp/resources/w3c/TR/css3-mediaqueries/',


"cssom-1": 'http://www.hcn.zaq.ne.jp/___/WEB/cssom-ja.html',
rfc2119: [ 'http://www.ipa.go.jp/security/rfc/RFC2119JA.html',
          'http://www.studyinghttp.net/rfc_ja/rfc2119',
          'http://www.cam.hi-ho.ne.jp/mendoxi/rfc/rfc2119j.html',
          'http://www.asahi-net.or.jp/~sd5a-ucd/rfc-j/rfc-2119j.html',
          'http://www.t-net.ne.jp/~cyfis/rfc/format/rfc2119_ja.html'
],
"selectors-4": 'http://www.hcn.zaq.ne.jp/___/WEB/selectors4-ja.html',

"url": 'http://www.hcn.zaq.ne.jp/___/WEB/URL-ja.html',
	};

	(function(){
		var id = "", dd = null, urlType = "";	// 変数の初期化
		var insertA = function(parent, href, text){	// a を挿入する手順
			var span = document.createElement("span"),
			a = document.createElement("a");

			span.className = "ref-secure";	// TODO: 適宜変更

			a.setAttribute("href", href);
			a.appendChild(document.createTextNode(text));

			span.setAttribute("style", "margin-right:5px;");
			span.appendChild(a);

			return parent.appendChild(span);
		};

		for(id in refList){	// リストを巡回
			if(refList.hasOwnProperty(id)){	// "おまじない"
				if(dd = document.getElementsByName("ref-" + id.toUpperCase())[0]){	// 当該 ID を持つ要素があることを最初に確認
					dd = dd.parentNode.parentNode.nextElementSibling;
					urlType = typeof refList[id];

					dd.appendChild(document.createElement("br"));
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
