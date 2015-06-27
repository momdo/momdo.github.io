/*
  Japanese translation Reference
  2013-12-11 ver.
  (2015-06-27 customized. by https://github.com/momdo/momdo.github.io/pull/4)
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
HTML4: 'http://www.asahi-net.or.jp/~sd5a-ucd/rec-html401j/cover.html',
PNG: 'http://www.milk-island.net/document/png/',
RFC3986: 'http://www.eonet.ne.jp/~h-hash/rfc_ja/rfc3986.ja.html',
RFC2045: ['http://www.darts.jp/reference/rfc/rfc2045-jp.txt',
'http://www.t-net.ne.jp/~cyfis/rfc/mime/rfc2045_ja-1.html',
'http://hp.vector.co.jp/authors/VA014833/rfc2045J.html',
],
RFC2616: ['http://www.spencernetwork.org/reference/rfc2616-ja-HTTP1.1.txt',
'http://www.eonet.ne.jp/~h-hash/rfc_ja/rfc2616.ja.html',
'http://hp.vector.co.jp/authors/VA014833/rfc2045J.html',
],
rfc2119: [ 'http://www.ipa.go.jp/security/rfc/RFC2119JA.html',
          'http://www.studyinghttp.net/rfc_ja/rfc2119',
          'http://www.cam.hi-ho.ne.jp/mendoxi/rfc/rfc2119j.html',
          'http://www.asahi-net.or.jp/~sd5a-ucd/rfc-j/rfc-2119j.html',
          'http://www.t-net.ne.jp/~cyfis/rfc/format/rfc2119_ja.html'
],
RFC2318: ['http://www.cam.hi-ho.ne.jp/mendoxi/rfc/rfc2318j.html',
'http://www.7key.jp/rfc/rfc2318.html',
],
UAAG10: 'http://web.archive.org/web/20141006181205/http://fuji.u-shizuoka-ken.ac.jp/~ishikawa/uaag10-j.htm',
XML10: 'http://w4ard.eplusx.net/translation/W3C/REC-xml-20081126/',
CSS1: 'http://www.doraneko.org/webauth/css1/19961217/Overview.html',
CSS2: 'http://www.y-adagio.com/public/standards/tr_css2/toc.html',
css3color: 'http://standards.mitsue.co.jp/resources/w3c/TR/css3-color/',
CSS3SEL: 'http://standards.mitsue.co.jp/resources/w3c/TR/css3-selectors/',
CSS3SPEECH: 'http://www.hcn.zaq.ne.jp/___/WEB/css-speech-ja.html',
mediaq: 'http://standards.mitsue.co.jp/resources/w3c/TR/css3-mediaqueries/',
SVG11: 'http://www.hcn.zaq.ne.jp/___/SVG11-2nd/',
WCAG20: 'http://waic.jp/docs/WCAG20/Overview.html',
XHTML: 'http://msugai.fc2web.com/web/W3C/xhtml1SE/Cover.html',
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
