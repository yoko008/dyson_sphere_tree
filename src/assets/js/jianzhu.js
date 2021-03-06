import zujian from "@/assets/js/zujian"

const dianliganyingta = {
    jianzhu: true, name: "电力感应塔",
    info: [{
        shuliang:1,
        yuanliao: [{wupin: zujian.tiekuai, shuliang: 2}, {wupin: zujian.cixianquan, shuliang: 1}],
        shijian: 1,
        leixing: zujian.leixing.zhizaotai
    }]
}
const wuxianshudianta = {
    jianzhu: true, name: "无线输电塔",
    info: [{
        shuliang:1,
        yuanliao: [{wupin: dianliganyingta, shuliang: 1}, {wupin: zujian.dianjiangfasheqi, shuliang: 3}],
        shijian: 3,
        leixing: zujian.leixing.zhizaotai
    }]
}
const weixingpeidianzhan = {
    jianzhu: true, name: "微型配电站",
    info: [{
        shuliang:1,
        yuanliao: [{wupin: wuxianshudianta, shuliang: 1}, {
            wupin: zujian.chaojicichanghuan,
            shuliang: 10
        }, {wupin: zujian.kuangjiacailiao, shuliang: 2}],
        shijian: 5,
        leixing: zujian.leixing.zhizaotai
    }]
}
const fengliwolunji = {
    jianzhu: true, name: "风力涡轮机",
    info: [{
        shuliang:1,
        yuanliao: [{wupin: zujian.tiekuai, shuliang: 6}, {wupin: zujian.chilun, shuliang: 1}, {
            wupin: zujian.cixianquan,
            shuliang: 3
        }],
        shijian: 4,
        leixing: zujian.leixing.zhizaotai
    }]
}
const huolifadianchang = {
    jianzhu: true, name: "火力发电厂",
    info: [{
        shuliang:1,
        yuanliao: [{wupin: zujian.tiekuai, shuliang: 10}, {wupin: zujian.shicai, shuliang: 4}, {
            wupin: zujian.chilun,
            shuliang: 4
        }, {wupin: zujian.cixianquan, shuliang: 4}],
        shijian: 5,
        leixing: zujian.leixing.zhizaotai
    }]
}
const taiyangnengban = {
    jianzhu: true, name: "太阳能板",
    info: [{
        shuliang:1,
        yuanliao: [{wupin: zujian.tongkuai, shuliang: 6}, {
            wupin: zujian.gaochunguikuai,
            shuliang: 6
        }, {wupin: zujian.dianluban, shuliang: 4}],
        shijian: 5,
        leixing: zujian.leixing.zhizaotai
    }]
}
const xudianqi = {
    jianzhu: true, name: "蓄电器",
    info: [{
        shuliang:1,
        yuanliao: [{wupin: zujian.tiekuai, shuliang: 6}, {
            wupin: zujian.chaojicichanghuan,
            shuliang: 6
        }, {wupin: zujian.jinggegui, shuliang: 4}],
        shijian: 5,
        leixing: zujian.leixing.zhizaotai
    }]
}
const shexianjieshouzhan = {
    jianzhu: true, name: "射线接收站",
    info: [{
        shuliang:1,
        yuanliao: [{wupin: zujian.gangcai, shuliang: 20}, {
            wupin: zujian.gaochunguikuai,
            shuliang: 20
        }, {wupin: zujian.guangzihebingqi, shuliang: 10}, {
            wupin: zujian.chuliqi,
            shuliang: 5
        }, {wupin: zujian.chaojicichanghuan, shuliang: 20}],
        shijian: 8,
        leixing: zujian.leixing.zhizaotai
    }]
}
const weixingjubianfadianzhan = {
    jianzhu: true, name: "微型聚变发电站",
    info: [{
        shuliang:1,
        yuanliao: [{wupin: zujian.taihejin, shuliang: 12}, {
            wupin: zujian.chaojicichanghuan,
            shuliang: 10
        }, {wupin: zujian.tannamiguan, shuliang: 8}, {wupin: zujian.chuliqi, shuliang: 4}],
        shijian: 10,
        leixing: zujian.leixing.zhizaotai
    }]
}
const nengliangshuniu = {
    jianzhu: true, name: "能量枢纽",
    info: [{
        shuliang:1,
        yuanliao: [{wupin: zujian.taihejin, shuliang: 40}, {
            wupin: zujian.gangcai,
            shuliang: 40
        }, {wupin: zujian.chuliqi, shuliang: 40}, {wupin: zujian.lizirongqi, shuliang: 8}],
        shijian: 15,
        leixing: zujian.leixing.zhizaotai
    }]
}
const renzaohengxing = {
    jianzhu: true, name: "人造恒星",
    info: [{
        shuliang:1,
        yuanliao: [{wupin: zujian.taihejin, shuliang: 20}, {
            wupin: zujian.kuangjiacailiao,
            shuliang: 20
        }, {wupin: zujian.yanmieyueshuqiu, shuliang: 10}, {wupin: zujian.liangzixinpian, shuliang: 10}],
        shijian: 30,
        leixing: zujian.leixing.zhizaotai
    }]
}
const chuansongdai = {
    jianzhu: true, name: "传送带",
    info: [{
        shuliang:3,
        yuanliao: [{wupin: zujian.tiekuai, shuliang: 2}, {wupin: zujian.chilun, shuliang: 1}],
        shijian: 1,
        leixing: zujian.leixing.zhizaotai
    }]
}
const gaosuchuansongdai = {
    jianzhu: true, name: "传送带（高速）",
    info: [{
        shuliang:3,
        yuanliao: [{wupin: chuansongdai, shuliang: 3}, {wupin: zujian.dianciwolun, shuliang: 1}],
        shijian: 1,
        leixing: zujian.leixing.zhizaotai
    }]
}
const jisuchuansongdai = {
    jianzhu: true, name: "传送带（极速）",
    info: [{
        shuliang:3,
        yuanliao: [{wupin: gaosuchuansongdai, shuliang: 3}, {
            wupin: zujian.chaojicichanghuan,
            shuliang: 1
        }, {wupin: zujian.shimoxi, shuliang: 1 }],
        shijian: 1 ,
        leixing: zujian.leixing.zhizaotai
    }]
}
const sixiangfenliuqi = {
    jianzhu: true, name: "四向分流器",
    info: [{
        shuliang:1,
        yuanliao: [{wupin: zujian.tiekuai, shuliang: 3}, {wupin: zujian.chilun, shuliang: 2}, {
            wupin: zujian.dianluban,
            shuliang: 1
        }],
        shijian: 2,
        leixing: zujian.leixing.zhizaotai
    }]
}
const xiaoxingchuwucang = {
    jianzhu: true, name: "小型储物仓",
    info: [{
        shuliang:1,
        yuanliao: [{wupin: zujian.tiekuai, shuliang: 4}, {wupin: zujian.shicai, shuliang: 4}],
        shijian: 2,
        leixing: zujian.leixing.zhizaotai
    }]
}
const daxingchuwucang = {
    jianzhu: true, name: "大型储物仓",
    info: [{
        shuliang:1,
        yuanliao: [{wupin: zujian.gangcai, shuliang: 8}, {wupin: zujian.shicai, shuliang: 8}],
        shijian: 4,
        leixing: zujian.leixing.zhizaotai
    }]
}
const chuyeguan = {
    jianzhu: true, name: "储液罐",
    info: [{
        shuliang:1,
        yuanliao: [{wupin: zujian.tiekuai, shuliang: 8}, {wupin: zujian.shicai, shuliang: 4}, {
            wupin: zujian.boli,
            shuliang: 4
        }],
        shijian: 2,
        leixing: zujian.leixing.zhizaotai
    }]
}
const dianciguidaotansheqi = {
    jianzhu: true, name: "电磁轨道弹射器",
    info: [{
        shuliang:1,
        yuanliao: [{wupin: zujian.gangcai, shuliang: 20}, {wupin: zujian.chilun, shuliang: 20}, {
            wupin: zujian.chuliqi,
            shuliang: 5
        }, {wupin: zujian.chaojicichanghuan, shuliang: 10}],
        shijian: 6,
        leixing: zujian.leixing.zhizaotai
    }]
}
const xingxingneiwuliuyunshuzhan = {
    jianzhu: true, name: "行星内物流运输站",
    info: [{
        shuliang:1,
        yuanliao: [{wupin: zujian.gangcai, shuliang: 40}, {wupin: zujian.taikuai, shuliang: 40}, {
            wupin: zujian.chuliqi,
            shuliang: 40
        }, {wupin: zujian.lizirongqi, shuliang: 20}],
        shijian: 20,
        leixing: zujian.leixing.zhizaotai
    }]
}
const weixingliziduizhuangji = {
    jianzhu: true, name: "微型粒子对撞机",
    info: [{
        shuliang:1,
        yuanliao: [{wupin: zujian.taihejin, shuliang: 20}, {
            wupin: zujian.kuangjiacailiao,
            shuliang: 20
        }, {wupin: zujian.chaojicichanghuan, shuliang: 50}, {
            wupin: zujian.shimoxi,
            shuliang: 10
        }, {wupin: zujian.chuliqi, shuliang: 8}],
        shijian: 15,
        leixing: zujian.leixing.zhizaotai
    }]
}
const fenjianqi = {
    jianzhu: true, name: "分拣器",
    info: [{
        shuliang:1,
        yuanliao: [{wupin: zujian.tiekuai, shuliang: 1}, {wupin: zujian.dianluban, shuliang: 1}],
        shijian: 1,
        leixing: zujian.leixing.zhizaotai
    }]
}
const gaosufenjianqi = {
    jianzhu: true, name: "分拣器（高速）",
    info: [{
        shuliang:2,
        yuanliao: [{wupin: fenjianqi, shuliang: 2}, {wupin: zujian.diandongji, shuliang: 1}],
        shijian: 1,
        leixing: zujian.leixing.zhizaotai
    }]
}
const jisufenjianqi = {
    jianzhu: true, name: "分拣器（极速）",
    info: [{
        shuliang:2,
        yuanliao: [{wupin: gaosufenjianqi, shuliang: 2}, {wupin: zujian.dianciwolun, shuliang: 1}],
        shijian: 1,
        leixing: zujian.leixing.zhizaotai
    }]
}
const caikuangji = {
    jianzhu: true, name: "采矿机",
    info: [{
        shuliang:1,
        yuanliao: [{wupin: zujian.tiekuai, shuliang: 4}, {
            wupin: zujian.dianluban,
            shuliang: 2
        }, {wupin: zujian.cixianquan, shuliang: 2}, {wupin: zujian.chilun, shuliang: 2}],
        shijian: 3,
        leixing: zujian.leixing.zhizaotai
    }]
}
const choushuizhan = {
    jianzhu: true, name: "抽水站",
    info: [{
        shuliang:1,
        yuanliao: [{wupin: zujian.tiekuai, shuliang: 8}, {wupin: zujian.shicai, shuliang: 4}, {
            wupin: zujian.diandongji,
            shuliang: 4
        }, {wupin: zujian.dianluban, shuliang: 2}],
        shijian: 4,
        leixing: zujian.leixing.zhizaotai
    }]
}
const yuanyoucuiquzhan = {
    jianzhu: true, name: "原油萃取站",
    info: [{
        shuliang:1,
        yuanliao: [{wupin: zujian.gangcai, shuliang: 12}, {
            wupin: zujian.shicai,
            shuliang: 12
        }, {wupin: zujian.dianluban, shuliang: 6}, {wupin: zujian.dianjiangfasheqi, shuliang: 4}],
        shijian: 8,
        leixing: zujian.leixing.zhizaotai
    }]
}
const yuanyoujinglianchang = {
    jianzhu: true, name: "原油精炼厂",
    info: [{
        shuliang:1,
        yuanliao: [{wupin: zujian.gangcai, shuliang: 10}, {
            wupin: zujian.shicai,
            shuliang: 10
        }, {wupin: zujian.dianluban, shuliang: 6}, {wupin: zujian.dianjiangfasheqi, shuliang: 6}],
        shijian: 6,
        leixing: zujian.leixing.zhizaotai
    }]
}
const chuizhifashejing = {
    jianzhu: true, name: "垂直发射井",
    info: [{
        shuliang:1,
        yuanliao: [{wupin: zujian.taihejin, shuliang: 80}, {
            wupin: zujian.kuangjiacailiao,
            shuliang: 30
        }, {wupin: zujian.yinlitoujing, shuliang: 20}, {wupin: zujian.liangzixinpian, shuliang: 10}],
        shijian: 30,
        leixing: zujian.leixing.zhizaotai
    }]
}
const xingjiwuliuyunshuzhan = {
    jianzhu: true, name: "星际物流运输站",
    info: [{
        shuliang:1,
        yuanliao: [{wupin: xingxingneiwuliuyunshuzhan, shuliang: 1}, {
            wupin: zujian.taihejin,
            shuliang: 40
        }, {wupin: zujian.lizirongqi, shuliang: 20}],
        shijian: 30,
        leixing: zujian.leixing.zhizaotai
    }]
}

const zhizaotaimk1 = {
    jianzhu: true, name: "制造台Mk.I",
    info: [{
        shuliang:1,
        yuanliao: [{wupin: zujian.tiekuai, shuliang: 4}, {wupin: zujian.chilun, shuliang: 8}, {
            wupin: zujian.dianluban,
            shuliang: 4
        }],
        shijian: 2,
        leixing: zujian.leixing.zhizaotai
    }]
}
const zhizaotaimk2 = {
    jianzhu: true, name: "制造台Mk.II",
    info: [{
        shuliang:1,
        yuanliao: [{wupin: zhizaotaimk1, shuliang: 1}, {wupin: zujian.shimoxi, shuliang: 8}, {
            wupin: zujian.chuliqi,
            shuliang: 4
        }],
        shijian: 3,
        leixing: zujian.leixing.zhizaotai
    }]
}
const zhizaotaimk3 = {
    jianzhu: true, name: "制造台Mk.III",
    info: [{
        shuliang:1,
        yuanliao: [{wupin: zhizaotaimk2, shuliang: 1}, {
            wupin: zujian.lizikuandai,
            shuliang: 8
        }, {wupin: zujian.liangzixinpian, shuliang: 2}],
        shijian: 4,
        leixing: zujian.leixing.zhizaotai
    }]
}

const dianhuronglu = {
    jianzhu: true, name: "电弧熔炉",
    info: [{
        shuliang:1,
        yuanliao: [{wupin: zujian.tiekuai, shuliang: 4}, {wupin: zujian.shicai, shuliang: 2}, {
            wupin: zujian.dianluban,
            shuliang: 4
        }, {wupin: zujian.cixianquan, shuliang: 2}],
        shijian: 3,
        leixing: zujian.leixing.zhizaotai
    }]
}
const fenliuta = {
    jianzhu: true, name: "分馏塔",
    info: [{
        shuliang:1,
        yuanliao: [{wupin: zujian.gangcai, shuliang: 8}, {wupin: zujian.shicai, shuliang: 4}, {
            wupin: zujian.boli,
            shuliang: 4
        }, {wupin: zujian.chuliqi, shuliang: 1}],
        shijian: 3,
        leixing: zujian.leixing.zhizaotai
    }]
}
const huagongchang = {
    jianzhu: true, name: "化工厂",
    info: [{
        shuliang:1,
        yuanliao: [{wupin: zujian.gangcai, shuliang: 8}, {wupin: zujian.shicai, shuliang: 8}, {
            wupin: zujian.boli,
            shuliang: 8
        }, {wupin: zujian.dianluban, shuliang: 2}],
        shijian: 5,
        leixing: zujian.leixing.zhizaotai
    }]
}
const juzhenyanjiuzhan = {
    jianzhu: true, name: "矩阵研究站",
    info: [{
        shuliang:1,
        yuanliao: [{wupin: zujian.tiekuai, shuliang: 8}, {wupin: zujian.boli, shuliang: 4}, {
            wupin: zujian.dianluban,
            shuliang: 4
        }, {wupin: zujian.cixianquan, shuliang: 4}],
        shijian: 3,
        leixing: zujian.leixing.zhizaotai
    }]
}
const guidaocaijiqi = {
    jianzhu: true, name: "轨道采集器",
    info: [{
        shuliang:1,
        yuanliao: [{wupin: xingjiwuliuyunshuzhan, shuliang: 1}, {
            wupin: zujian.chaojicichanghuan,
            shuliang: 50
        }, {wupin: zujian.jialituijinqi, shuliang: 20}, {wupin: xudianqi, shuliang: 20}],
        shijian: 30,
        leixing: zujian.leixing.zhizaotai
    }]
}
export default {
    dianliganyingta,
    wuxianshudianta,
    weixingpeidianzhan,
    fengliwolunji,
    huolifadianchang,
    taiyangnengban,
    xudianqi,
    shexianjieshouzhan,
    weixingjubianfadianzhan,
    nengliangshuniu,
    renzaohengxing,
    chuansongdai,
    gaosuchuansongdai,
    jisuchuansongdai,
    sixiangfenliuqi,
    xiaoxingchuwucang,
    daxingchuwucang,
    chuyeguan,
    dianciguidaotansheqi,
    xingxingneiwuliuyunshuzhan,
    weixingliziduizhuangji,
    fenjianqi,
    gaosufenjianqi,
    jisufenjianqi,
    caikuangji,
    choushuizhan,
    yuanyoucuiquzhan,
    yuanyoujinglianchang,
    chuizhifashejing,
    xingjiwuliuyunshuzhan,
    zhizaotaimk1,
    zhizaotaimk2,
    zhizaotaimk3,
    dianhuronglu,
    fenliuta,
    huagongchang,
    juzhenyanjiuzhan,
    guidaocaijiqi
}
