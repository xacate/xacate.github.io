System.register("chunks:///_virtual/en.ts",["cc"],(function(e){var n;return{setters:[function(e){n=e.cclegacy}],execute:function(){n._RF.push({},"8d3fd8RbONOrLMvzqwd1SG2","en",void 0);var a=window,t=e("languages",{cension:"Entertainment",sport:"Sports",casual:"Casual",store:"Store",exchange:"Exchange",token:"Airdrop",wheel:"Wheel",loading:"The spacecraft is adjusting its landing posture, please wait a moment",clickText:"Click any area to continue..."});a.languages||(a.languages={}),a.languages.en=t,n._RF.pop()}}}));

System.register("chunks:///_virtual/es.ts",["cc"],(function(e){var a;return{setters:[function(e){a=e.cclegacy}],execute:function(){a._RF.push({},"441b8hNrM1Oq7DCo9ZDrdVT","es",void 0);var n=window,t=e("languages",{cension:"Entretenimiento",sport:"Deportes",casual:"Casual",store:"Tienda",exchange:"Intercambio",token:"Airdrop",wheel:"Ruleta",loading:"The spacecraft is adjusting its landing posture, please wait a moment",clickText:"Haga clic en cualquier área para continuar..."});n.languages||(n.languages={}),n.languages.es=t,a._RF.pop()}}}));

System.register("chunks:///_virtual/resources",["./en.ts","./es.ts","./zhHans.ts"],(function(){return{setters:[null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/zhHans.ts",["cc"],(function(e){var n;return{setters:[function(e){n=e.cclegacy}],execute:function(){n._RF.push({},"f7e626jgt5NSI45moLdouw9","zhHans",void 0);var a=window,s=e("languages",{cension:"娛樂",sport:"體育",casual:"休閒",store:"商城",exchange:"交易所",token:"空投",wheel:"轉盤",loading:"飞船正在调整降落姿势请稍等",clickText:"點擊任意區域繼續..."});a.languages||(a.languages={}),a.languages.zhHans=s,n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/resources', 'chunks:///_virtual/resources'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});