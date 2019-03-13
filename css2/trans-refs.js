/*
  Japanese translation Reference
  2013-12-11 ver.
  (2016-10-07 customized for CSS2.)

  Copyright (c) 2013, 2016
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
RFC3986: 'https://triple-underscore.github.io/RFC3986-ja.html',
RFC2045:[ 'http://www.akanko.net/marimo/data/rfc/rfc2045-jp.txt',
          'http://hp.vector.co.jp/authors/VA014833/rfc2045J.html',
],
RFC2119: [ 'http://www.ipa.go.jp/security/rfc/RFC2119JA.html',
    'http://www.studyinghttp.net/rfc_ja/rfc2119',
    'http://www.cam.hi-ho.ne.jp/mendoxi/rfc/rfc2119j.html',
    'http://www.asahi-net.or.jp/~sd5a-ucd/rfc-j/rfc-2119j.html',
    'http://www.t-net.ne.jp/~cyfis/rfc/format/rfc2119_ja.html'
],
2318: [ 'http://www.cam.hi-ho.ne.jp/mendoxi/rfc/rfc2318j.html',
           'http://suika.fam.cx/~wakaba/wiki/sw/n/RFC%202318',
           'http://www.7key.jp/rfc/rfc2318.html',
],
CSS:[ 'https://momdo.github.io/css-2015/',
      'https://triple-underscore.github.io/css-2015-ja.html',
],
CSS3COLOR: 'http://standards.mitsue.co.jp/resources/w3c/TR/css3-color/',
CSS3SEL: 'http://standards.mitsue.co.jp/resources/w3c/TR/css3-selectors/',
CSS3SPEECH: 'https://triple-underscore.github.io/css-speech-ja.html',
MEDIAQ: 'http://standards.mitsue.co.jp/resources/w3c/TR/css3-mediaqueries/',
SVG11: 'https://triple-underscore.github.io/SVG11/',
WCAG20: 'http://waic.jp/docs/WCAG20/Overview.html',
XHTML: 'http://msugai.fc2web.com/web/W3C/xhtml1SE/Cover.html',
XMLNAMESPACES: 'http://www.hcn.zaq.ne.jp/___/XML/Namespaces-ja.html',
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
			return parent.parentNode.parentNode.nextElementSibling.appendChild(span); //parent.appendChild(span);
		};

		for(id in refList){	// リストを巡回
			if(refList.hasOwnProperty(id)){	// "おまじない"
				if(dd = document.getElementsByName("ref-" + id)[0]){	// 当該 ID を持つ要素があることを最初に確認
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
