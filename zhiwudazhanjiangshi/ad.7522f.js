
/** 360广告 */
function ad360() {
   
    var curGameName = '合成植物打僵尸'//游戏名称
    var gameDiv = '#GameDiv'//用于橱窗和Banner
    // AddCode Attr
    var isPopBanner = false
    var isPopShopWindow = false
    ////////////////////////////////////////////////////////////
    // 橱窗和Banner部分
    ////////////////////////////////////////////////////////////
    let doc = window.document;
    //橱窗 Div创建
    let shopWindowDiv = doc.createElement("div");
    shopWindowDiv.setAttribute("id", "frontAdBox");
    shopWindowDiv.setAttribute(
        "style",
        "position: fixed;top: 0;bottom: 0;left: 0;right: 0; background-color: rgba(0, 0, 0, 0.8); "
    );
    //Banner Div创建
    let bannerDiv = doc.createElement("div");
    bannerDiv.setAttribute("id", "feedAdBoxBottom");
    bannerDiv.setAttribute(
        "style",
        "overflow: auto;position: fixed;left: 0;right: 0;width: 360px;bottom: 0; margin: auto;",
    );
    //插入公共广告样式
    let styleAd = doc.createElement("style");
    styleAd.setAttribute("type", "text/css");
    let cssText = doc.createTextNode(
        "#frontAdBox div:first-child {position: absolute !important;top: 50%;left: 50%;transform: translate(-50%, -50%); #feedAdBoxBottom newsfeed {margin: 0 auto !important;}"
    );
    //2.添加广告和样式
    styleAd.appendChild(cssText);
    //添加样式文件, 此处建议将所有广告位置放置在主游戏所在dom区域范围内
    let gamebody = doc.querySelector(gameDiv);
    gamebody.appendChild(shopWindowDiv); gamebody.appendChild(bannerDiv); gamebody.appendChild(styleAd);

    var showShopWindow = () => {
        if (isPopShopWindow) {
            return
        }
        // console.log("1-isPopShopWindow=" + isPopShopWindow);
        isPopShopWindow = true;
        // console.log("2-isPopShopWindow=" + isPopShopWindow);
        MINIGAMEAD.renderShopWindow({
            showid: window.cid, //开屏橱窗广告位id
            adDomId: "frontAdBox", //广告区域domid
            width: window.innerHeight * 0.5625 * 0.65, //广告宽
            height: window.innerHeight * 0.5625 * 0.65, //广告高
            closeTimer: 2,
            onClose: () => {
                isPopShopWindow = false;
                // console.log("3-isPopShopWindow=" + isPopShopWindow); 
            },
        });
    }
    var showBanner = () =>{
        if (isPopBanner) {
            return
        }
        isPopBanner = true;
        MINIGAMEAD.renderInfoFlow({
            showid: window.bid, //banner信息流广告位id
            adDomId: "feedAdBoxBottom", //底部信息流广告区域domid
            width: "360", //广告宽
            onClose: () => {
                isPopBanner = false;
            }
        });
    }
    ////////////////////////////////////////////////////////////
    // 视频部分
    ////////////////////////////////////////////////////////////
    var RewardedVideoAd = null;
    /** 初始化激励视频 */
    var initAd = function () {
        // 视频初始化事件
        RewardedVideoAd = REWARD_VIDEO_AD.createRewardedVideoAd({
            adUnitId: window.vid
        });
        // 视频加载事件
        RewardedVideoAd.onLoad(() => {
        });
        // 视频加载错误事件
        RewardedVideoAd.onError(err => {
            console.error(err.errMsg);
        });
        // 视频关闭事件
        RewardedVideoAd.onClose(res => {
            if (res) {
                if (res.isEnded) {
                    window.videoPlayEnd && window.videoPlayEnd()// TODO 视频广告观看完成的奖励事件
                    window.videoPlayEnd = null
                } else {
                    window.videoClose && window.videoClose()//关闭视频事件（未播放完成）
                    window.videoClose = null
                }
            }
        });
    }
    /**
     * 播放激励视频接口 
     * @param {*} award 视频播放奖励
     * @param {*} close 关闭视频事件
     */
    window.playVideoAd = () => {
        RewardedVideoAd.show2()
    }
    /**
     * 埋点接口
     * @param {*} ep 360提供的打点
     * @param {*} btnName 按钮名称
     */
    window.btn_event = function (ep, btnName) {
        let gameId = window.gameId || 0;
        _qha('send', {
            et: 11, name: `${curGameName}按钮事件`, gameName: curGameName, gameId: gameId, btnId: btnName, ep: ep,
        });
    }

    ////////////////////////////////////////////
    // 广告函数调用
    ////////////////////////////////////////////
    initAd();
    showBanner();
    showShopWindow();
    setInterval(() => {
        showBanner();
        showShopWindow();
    }, (1000 * 60 * 3));
    document.getElementsByTagName("title")[0].innerText = `${curGameName}， 360小游戏，好玩的都在这`
}

/**
 * 避免覆盖之前的onload, html5有出现过覆盖onload导致报错
 * @param {*} func 
 */
function addLoadEvent(func) {
    //把现有的window.onload事件处理函数放到一个变量oldonload中
    var oldonload = window.onload;
    //如果这个处理函数上还没有绑定任何函数,就像平时一样把新函数添加给window.onload
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        //如果这个函数已经绑定了一个函数,就把新函数追加到window.onload的末尾
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

addLoadEvent(ad360)