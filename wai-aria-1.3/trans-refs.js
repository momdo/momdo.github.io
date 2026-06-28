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
"accname-1-2": [
  'https://momdo.github.io/accname-1.2/', 
  'https://jp.htmlspecs.com/accname-1.2/'
],
"core-aam-1-2":'https://jp.htmlspecs.com/core-aam-1.2/',
dom: [
  'https://triple-underscore.github.io/DOM4-ja.html',
  'https://jp.htmlspecs.com/dom/'
],
"dpub-aria-1-0": 'https://momdo.github.io/dpub-aria-1.0/',
html: [
  'https://momdo.github.io/html/',
  'https://triple-underscore.github.io/#spec-list-html',
  'https://jp.htmlspecs.com/'
],
infra: [
  'https://jp.htmlspecs.com/infra/',
  'https://triple-underscore.github.io/infra-ja.html'
],
mathml3: 'http://takamu.sakura.ne.jp/mathml3-ja/index.html',
"permissions-policy":'https://jp.htmlspecs.com/permissions-policy/',
rfc2119: [
  'http://www.studyinghttp.net/rfc_ja/rfc2119',
  'http://www.cam.hi-ho.ne.jp/mendoxi/rfc/rfc2119j.html',
  'http://www.asahi-net.or.jp/~sd5a-ucd/rfc-j/rfc-2119j.html',
  'http://www.t-net.ne.jp/~cyfis/rfc/format/rfc2119_ja.html'
],
rfc3986: 'https://triple-underscore.github.io/rfc-others/RFC3986-ja.html',
rfc8174: 'http://www5d.biglobe.ne.jp/stssk/rfc/rfc8174j.html',
"selecotrs-4": [
  'https://jp.htmlspecs.com/css/selectors-4/',
  'https://triple-underscore.github.io/selectors4-ja.html'
],
svg2: [
  'https://triple-underscore.github.io/svg-misc-ja.html',
  'https://jp.htmlspecs.com/SVG2/'
],
"uievents-key": [
  'https://triple-underscore.github.io/uievents-key-ja.html',
  'https://jp.htmlspecs.com/uievents-key/',
],
webidl: [
  'https://triple-underscore.github.io/WebIDL-ja.html',
  'https://jp.htmlspecs.com/webidl/'
],
"xml-names": 'http://www.hcn.zaq.ne.jp/___/XML/Namespaces-ja.html',
"html-aria": [
  'https://momdo.github.io/html-aria/',
  'https://jp.htmlspecs.com/html-aria/'
],
"wai-aria-1-1": 'http://momdo.github.io/wai-aria/',
wcag21: 'https://waic.jp/docs/WCAG21/',
	};

	(function(){
		var id = "", dd = null, urlType = "";	// 変数の初期化
		var insertA = function(parent, href, text){	// a を挿入する手順
			var span = document.createElement("span"),
			a = document.createElement("a");

			span.className = "ref-secure";	// TODO: 適宜変更

			a.setAttribute("href", href);
      const title = new URL(href).hostname;
      a.setAttribute("title", title);
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
