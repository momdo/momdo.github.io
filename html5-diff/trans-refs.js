/*
  Japanese translation Reference

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
CSSOM: 'http://www.hcn.zaq.ne.jp/___/WEB/cssom-ja.html',
DOM: 'http://www.hcn.zaq.ne.jp/___/WEB/DOM4-ja.html',

DOMEVENTS: 'http://www.y-adagio.com/public/standards/tr_dom2_events/expanded-toc.html', //DOM2 Event
HTML: 'https://momdo.github.io/html/',
HTML4: 'http://www.asahi-net.or.jp/~sd5a-ucd/rec-html401j/cover.html',
HTML5: 'https://momdo.github.io/html5/Overview.html',

XHTML1: 'http://msugai.fc2web.com/web/W3C/xhtml1SE/Cover.html',
XML: 'http://w4ard.eplusx.net/translation/W3C/REC-xml-20081126/',
XMLNS: 'https://triple-underscore.github.io/XML/xml-ns-ja.html',
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
				if(dd = document.getElementById("refs" + id) ) {	// 当該 ID を持つ要素があることを最初に確認
					urlType = typeof refList[id];

					if(urlType === typeof ""){	// URL が1個だけのとき
						insertA(dd, refList[id], "日本語訳");
					}else if(urlType === typeof []){	// URL が複数あるとき
						refList[id].forEach(function(url, key){	// URL の複数指定を巡回
							insertA(dd, url, "日本語訳" + (key + 1).toString());
						});
					}
				}
				else if(dd = document.getElementById("bib-" + id)) { // もっとマシなやり方なかったのかこれorz
					urlType = typeof refList[id];
					
					if(urlType === typeof ""){
						insertA(dd, refList[id], "日本語訳");
					}else if(urlType === typeof []){
						refList[id].forEach(function(url, key){
							insertA(dd, url, "日本語訳" + (key + 1).toString());
						});
					}
				}
			}
		}
	})();
}, false);
