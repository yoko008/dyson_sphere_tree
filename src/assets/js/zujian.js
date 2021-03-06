const leixing = {
    yelianshebei: "冶炼设备",
    zhizaotai: "制造台",
    keyanshebei: "科研设备",
    caijiqi: "采矿机",
    choushuizhan: "抽水设备",
    chouyouzhan: "抽油设备",
    jinglianshebei: "精炼设备",
    huagongshebei: "化工设备",
    fenliushebei: "分馏设备",
    liziduizhuangji: "粒子对撞机",
    guidaocaijiqi: "轨道采集器",
    shexianjieshouzhan: "射线接收站",
    shoucai: "手采",
    weiding: "-"
}

const tiekuang = {
    name: "铁矿",
    info: [{
        shuliang:45,
        yuanliao: [],
        shijian: 60,
        leixing: leixing.caijiqi,
        caiji: true,
        shoucuo: false
    }]
}
const tongkuang = {
    name: "铜矿",
    info: [{
        shuliang:45,
        yuanliao: [],
        shijian: 60,
        leixing: leixing.caijiqi,
        caiji: true,
        shoucuo: false
    }]
}
const shikuang = {
    name: "石矿",
    info: [{
        shuliang:45,
        yuanliao: [],
        shijian: 60,
        leixing: leixing.caijiqi,
        caiji: true,
        shoucuo: false
    }]
}
const guishi = {
    name: "硅石",
    info: [{
        shuliang:45,
        yuanliao: [],
        shijian: 60,
        leixing: leixing.caijiqi,
        caiji: true,
        shoucuo: false,
        zhushi: "采集"
    }, {
        shuliang: 1,
        yuanliao: [{wupin: shikuang, shuliang: 10}],
        shijian: 10,
        leixing: leixing.yelianshebei,
        caiji: false,
        shoucuo: false,
        zhushi: "冶炼"
    }]
}
const guangshanshi = {
    name: "光栅石",
    info: [{
        shuliang:45,
        yuanliao: [],
        shijian: 60,
        leixing: leixing.caijiqi,
        caiji: true,
        shoucuo: false,
    }]
}
const gaochunguikuai = {
    name: "高纯硅块",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: guishi, shuliang: 2}],
        shijian: 2,
        leixing: leixing.yelianshebei,
        caiji: false,
        shoucuo: true
    }]
}
const tiekuai = {
    name: "铁块",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: tiekuang, shuliang: 1}],
        shijian: 1,
        leixing: leixing.yelianshebei,
        caiji: false,
        shoucuo: true
    }]

}
const tongkuai = {
    name: "铜块",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: tongkuang, shuliang: 1}],
        shijian: 1,
        leixing: leixing.yelianshebei,
        caiji: false,
        shoucuo: true
    }]

}
const dianluban = {
    name: "电路板",
    info: [{
        shuliang: 2,
        yuanliao: [{wupin: tiekuai, shuliang: 2}, {wupin: tongkuai, shuliang: 1}],
        shijian: 1,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true
    }]

}
const citie = {
    name: "磁铁",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: tiekuang, shuliang: 1}],
        shijian: 1,
        leixing: leixing.yelianshebei,
        caiji: false,
        shoucuo: true
    }]

}
const cixianquan = {
    name: "磁线圈",
    info: [{
        shuliang: 2,
        yuanliao: [{wupin: citie, shuliang: 2}, {wupin: tongkuai, shuliang: 1}],
        shijian: 1,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true
    }]
}
const diancijuzhen = {
    name: "电磁矩阵",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: cixianquan, shuliang: 1}, {wupin: dianluban, shuliang: 1}],
        shijian: 3,
        leixing: leixing.keyanshebei,
        caiji: false,
        shoucuo: true
    }]
}
const taishi = {
    name: "钛石",
    info: [{
        shuliang:45,
        yuanliao: [],
        shijian: 60,
        leixing: leixing.caijiqi,
        caiji: true,
        shoucuo: false
    }]
}
const taikuai = {
    name: "钛块",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: taishi, shuliang: 2}],
        shijian: 2,
        leixing: leixing.yelianshebei,
        caiji: false,
        shoucuo: true
    }]
}

const shicai = {
    name: "石材",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: shikuang, shuliang: 1}],
        shijian: 1,
        leixing: leixing.yelianshebei,
        caiji: false,
        shoucuo: true
    }]
}
const meikuang = {
    name: "煤矿",
    info: [{
        shuliang:45,
        yuanliao: [],
        shijian: 60,
        leixing: leixing.caijiqi,
        caiji: true,
        shoucuo: false,
    }]
}
const yuanyou = {
    name: "原油",
    info: [{
        yuanliao: [],
        shijian: 0,
        beilv:1.5,
        leixing: leixing.chouyouzhan,
        caiji: true,
        shoucuo: false,
    }]
}
const jinglianyou = {
    name: "精炼油",
    info: [{
        shuliang: 2,
        yuanliao: [{wupin: yuanyou, shuliang: 2}],
        shijian: 4,
        leixing: leixing.jinglianshebei,
        caiji: false,
        shoucuo: false,
        duoyu: [{wupin: "氢", shuliang: 1}]
    }]
}
const keranbing = {
    name: "可燃冰",
    info: [{
        shuliang:45,
        yuanliao: [],
        shijian: 60,
        leixing: leixing.caijiqi,
        caiji: true,
        shoucuo: false
    }]
}
const linjieguangzi = {
    name: "临界光子",
    info: [{
        yuanliao: [],
        shijian: 0,
        leixing: leixing.shexianjieshouzhan,
        caiji: true,
        shoucuo: false
    }]
}
const qing = {
    name: "氢",
    info: [{
        shuliang:45,
        yuanliao: [],
        shijian: 60,
        leixing: leixing.guidaocaijiqi,
        caiji: true,
        shoucuo: false,
        zhushi: "采集"
    },{
        shuliang: 1,
        yuanliao: [{wupin: yuanyou, shuliang: 2}],
        shijian: 4,
        leixing: leixing.jinglianshebei,
        caiji: false,
        shoucuo: false,
        duoyu: [{wupin: "精炼油", shuliang: 2}],
        zhushi: "等离子精炼"
    }, {
        shuliang: 1,
        yuanliao: [{wupin: keranbing, shuliang: 2}],
        shijian: 2,
        leixing: leixing.jinglianshebei,
        caiji: false,
        shoucuo: false,
        duoyu: [{wupin: "石墨烯", shuliang: 2}],
        zhushi: "分解可燃冰"
    }, {
        shuliang: 3,
        yuanliao: [{wupin: jinglianyou, shuliang: 1}, {
            wupin: {
                name: "氢",
                info: [{
                    yuanliao: [],
                    shijian: 0,
                    leixing: leixing.weiding,
                    caiji: true,
                    shoucuo: false
                }]
            }, shuliang: 2
        }],
        shijian: 4,
        leixing: leixing.jinglianshebei,
        caiji: false,
        shoucuo: false,
        duoyu: [{wupin: "高能石墨", shuliang: 1}],
        zhushi: "X射线裂解"
    }, {
        shuliang: 2,
        yuanliao: [{wupin: linjieguangzi, shuliang: 2}],
        shijian: 2,
        leixing: leixing.liziduizhuangji,
        caiji: false,
        shoucuo: false,
        duoyu: [{wupin: "反物质", shuliang: 2}],
        zhushi: "质能储存"
    }]
}
const gaonengshimo = {
    name: "高能石墨",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: meikuang, shuliang: 2}],
        shijian: 2,
        leixing: leixing.yelianshebei,
        caiji: false,
        shoucuo: true,
        zhushi: "普通"
    }, {
        shuliang: 1,
        yuanliao: [{wupin: jinglianyou, shuliang: 1}, {wupin: qing, shuliang: 2}],
        shijian: 4,
        leixing: leixing.jinglianshebei,
        caiji: false,
        shoucuo: false,
        duoyu: [{wupin: "氢", shuliang: 3}],
        zhushi: "X射线裂解"
    }]
}
const suliao = {
    name: "塑料",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: jinglianyou, shuliang: 2}, {wupin: gaonengshimo, shuliang: 1}],
        shijian: 3,
        leixing: leixing.huagongshebei,
        caiji: false,
        shoucuo: false,
    }]
}
const shui = {
    name: "水",
    info: [{
        shuliang: 75,
        yuanliao: [],
        shijian: 60,
        leixing: leixing.choushuizhan,
        caiji: true,
        shoucuo: false
    }]
}
const liusuan = {
    name: "硫酸",
    info: [{
        shuliang: 4,
        yuanliao: [{wupin: jinglianyou, shuliang: 6}, {wupin: shikuang, shuliang: 8}, {
            wupin: shui,
            shuliang: 4
        }],
        shijian: 6,
        leixing: leixing.huagongshebei,
        caiji: false,
        shoucuo: false,
    }]
}
const shimoxi = {
    name: "石墨烯",
    info: [{
        shuliang: 2,
        yuanliao: [{wupin: gaonengshimo, shuliang: 3}, {wupin: liusuan, shuliang: 1}],
        shijian: 3,
        leixing: leixing.huagongshebei,
        caiji: false,
        shoucuo: false,
        zhushi: "普通"
    }, {
        shuliang: 2,
        yuanliao: [{wupin: keranbing, shuliang: 2}],
        shijian: 2,
        leixing: leixing.huagongshebei,
        caiji: false,
        shoucuo: false,
        duoyu: [{wupin: "氢", shuliang: 1}],
        zhushi: "高效"
    }]
}
const fenxingguishi = {
    name: "分形硅石",
    info: [{
        shuliang:45,
        yuanliao: [],
        shijian: 60,
        leixing: leixing.caijiqi,
        caiji: true,
        shoucuo: false
    }]
}
const jinggegui = {
    name: "晶格硅",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: gaochunguikuai, shuliang: 1}],
        shijian: 2,
        leixing: leixing.yelianshebei,
        caiji: false,
        shoucuo: false,
        zhushi: "普通"
    }, {
        shuliang: 1,
        yuanliao: [{wupin: fenxingguishi, shuliang: 1}],
        shijian: 4,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: false,
        zhushi: "高效"
    }]
}
const gangcai = {
    name: "钢材",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: tiekuai, shuliang: 3}],
        shijian: 3,
        leixing: leixing.yelianshebei,
        caiji: false,
        shoucuo: false,
    }]
}
const taihejin = {
    name: "钛合金",
    info: [{
        shuliang: 4,
        yuanliao: [{wupin: taikuai, shuliang: 4}, {wupin: gangcai, shuliang: 4}, {
            wupin: liusuan,
            shuliang: 8
        }],
        shijian: 12,
        leixing: leixing.yelianshebei,
        caiji: false,
        shoucuo: false,
    }]
}
const boli = {
    name: "玻璃",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: shikuang, shuliang: 2}],
        shijian: 2,
        leixing: leixing.yelianshebei,
        caiji: false,
        shoucuo: true,
    }]
}
const jinbolikuangshi = {
    name: "金伯利矿石",
    info: [{
        shuliang:45,
        yuanliao: [],
        shijian: 60,
        leixing: leixing.caijiqi,
        caiji: true,
        shoucuo: false
    }]
}
const jingangshi = {
    name: "金刚石",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: gaonengshimo, shuliang: 1}],
        shijian: 2,
        leixing: leixing.yelianshebei,
        caiji: false,
        shoucuo: false,
        zhushi: "普通"
    }, {
        shuliang: 1,
        yuanliao: [{wupin: jinbolikuangshi, shuliang: 1}],
        shijian: 2,
        leixing: leixing.yelianshebei,
        caiji: false,
        shoucuo: false,
        zhushi: "高效"
    }]
}
const mucai = {
    name: "木材",
    info: [{
        yuanliao: [],
        shijian: 0,
        leixing: leixing.shoucai,
        caiji: true,
        shoucuo: false
    }]
}
const zhiwuranliao = {
    name: "植物燃料",
    info: [{
        yuanliao: [],
        shijian: 0,
        leixing: leixing.shoucai,
        caiji: true,
        shoucuo: false
    }]
}
const youjijingti = {
    name: "有机晶体",
    info: [{
        shuliang:45,
        yuanliao: [],
        shijian: 60,
        leixing: leixing.caijiqi,
        caiji: true,
        shoucuo: false,
        zhushi: "采集"
    }, {
        shuliang: 1,
        yuanliao: [{wupin: suliao, shuliang: 2}, {wupin: jinglianyou, shuliang: 1}, {
            wupin: shui,
            shuliang: 1
        }],
        shijian: 6,
        leixing: leixing.huagongshebei,
        caiji: false,
        shoucuo: false,
        zhushi: "普通"
    }, {
        shuliang: 1,
        yuanliao: [{wupin: mucai, shuliang: 20}, {wupin: zhiwuranliao, shuliang: 30}, {
            wupin: shui,
            shuliang: 10
        }],
        shijian: 6,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: false,
        zhushi: "原始"
    }]
}
const yeqingranliaobang = {
    name: "液氢燃料棒",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: taikuai, shuliang: 1}, {wupin: qing, shuliang: 5}],
        shijian: 3,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true,
    }]
}
const chilun = {
    name: "齿轮",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: tiekuai, shuliang: 1}],
        shijian: 1,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true,
    }]
}
const diandongji = {
    name: "电动机",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: tiekuai, shuliang: 2}, {wupin: chilun, shuliang: 1}, {
            wupin: cixianquan,
            shuliang: 1
        }],
        shijian: 2,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true,
    }]
}
const taihuaboli = {
    name: "钛化玻璃",
    info: [{
        shuliang: 2,
        yuanliao: [{wupin: boli, shuliang: 2}, {wupin: taikuai, shuliang: 2}, {
            wupin: shui,
            shuliang: 2
        }],
        shijian: 5,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true,
    }]
}
const lengjing = {
    name: "棱镜",
    info: [{
        shuliang: 2,
        yuanliao: [{wupin: boli, shuliang: 3}],
        shijian: 2,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true,
    }]
}
const taijingshi = {
    name: "钛晶石",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: youjijingti, shuliang: 1}, {wupin: taikuai, shuliang: 3}],
        shijian: 4,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true,
    }]
}
const tuijinqi = {
    name: "推进器",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: gangcai, shuliang: 2}, {wupin: tongkuai, shuliang: 3}],
        shijian: 4,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true,
    }]
}
const dianciwolun = {
    name: "电磁涡轮",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: diandongji, shuliang: 2}, {wupin: cixianquan, shuliang: 2}],
        shijian: 2,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true,
    }]
}
const jialituijinqi = {
    name: "加力推进器",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: taihejin, shuliang: 5}, {wupin: dianciwolun, shuliang: 5}],
        shijian: 6,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true,
    }]
}
const zhongqing = {
    name: "重氢",
    info: [{
        shuliang: 5,
        yuanliao: [{wupin: qing, shuliang: 10}],
        shijian: 5,
        leixing: leixing.liziduizhuangji,
        caiji: false,
        shoucuo: false,
        zhushi: "普通"
    }, {
        shuliang: 1,
        yuanliao: [{wupin: qing, shuliang: 100}],
        shijian: 0,
        leixing: leixing.fenliushebei,
        caiji: false,
        shoucuo: false,
        zhushi: "重氢分馏",
        duoyu: [{wupin: "氢", shuliang: 99}]
    },{
        shuliang:1,
        yuanliao: [],
        shijian: 60,
        leixing: leixing.guidaocaijiqi,
        caiji: true,
        shoucuo: false,
        zhushi: "采集"
    }]
}
const dianjiangfasheqi = {
    name: "电浆激发器",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: cixianquan, shuliang: 4}, {wupin: lengjing, shuliang: 2}],
        shijian: 2,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true,
    }]
}
const chaojicichanghuan = {
    name: "超级磁场环",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: dianciwolun, shuliang: 2}, {wupin: citie, shuliang: 3}, {
            wupin: gaonengshimo,
            shuliang: 1
        }],
        shijian: 3,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true,
    }]
}
const cisunjiejing = {
    name: "刺笋结晶",
    info: [{
        yuanliao: [],
        shijian: 0,
        leixing: leixing.weiding,
        caiji: true,
        shoucuo: false,
    }]
}
const tannamiguan = {
    name: "碳纳米管",
    info: [{
        shuliang: 2,
        yuanliao: [{wupin: shimoxi, shuliang: 3}, {wupin: taikuai, shuliang: 1}],
        shijian: 4,
        leixing: leixing.huagongshebei,
        caiji: false,
        shoucuo: false,
        zhushi: "普通"
    }, {
        shuliang: 2,
        yuanliao: [{wupin: cisunjiejing, shuliang: 2}],
        shijian: 4,
        leixing: leixing.huagongshebei,
        caiji: false,
        shoucuo: false,
        zhushi: "高效"
    }]
}
const lizikuandai = {
    name: "粒子宽带",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: tannamiguan, shuliang: 2}, {wupin: jinggegui, shuliang: 2}, {
            wupin: suliao,
            shuliang: 1
        }],
        shijian: 8,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true,
    }]
}
const kaximierjingti = {
    name: "卡西米尔晶体",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: taijingshi, shuliang: 1}, {wupin: shimoxi, shuliang: 2}, {
            wupin: qing,
            shuliang: 12
        }],
        shijian: 4,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true,
        zhushi: "普通"
    }, {
        shuliang: 1,
        yuanliao: [{wupin: guangshanshi, shuliang: 6}, {wupin: shimoxi, shuliang: 2}, {
            wupin: qing,
            shuliang: 12
        }],
        shijian: 4,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: false,
        zhushi: "高效"
    }]
}
const danjicishi = {
    name: "单极磁石",
    info: [{
        shuliang:45,
        yuanliao: [],
        shijian: 60,
        leixing: leixing.caijiqi,
        caiji: true,
        shoucuo: false
    }]
}
const lizirongqi = {
    name: "粒子容器",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: dianciwolun, shuliang: 2}, {wupin: tongkuai, shuliang: 2}, {
            wupin: shimoxi,
            shuliang: 2
        }],
        shijian: 4,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true,
        zhushi: "普通"
    }, {
        shuliang: 1,
        yuanliao: [{wupin: danjicishi, shuliang: 10}, {wupin: tongkuai, shuliang: 2}],
        shijian: 4,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: false,
        zhushi: "高效"
    }]
}
const kuangjiacailiao = {
    name: "框架材料",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: tannamiguan, shuliang: 4}, {
            wupin: taihejin,
            shuliang: 1
        }, {wupin: gaochunguikuai, shuliang: 1}],
        shijian: 6,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true,
    }]
}
const weijingyuanjian = {
    name: "微晶元件",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: gaochunguikuai, shuliang: 2}, {wupin: tongkuai, shuliang: 1}],
        shijian: 2,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true,
    }]
}
const chuliqi = {
    name: "处理器",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: dianluban, shuliang: 2}, {wupin: weijingyuanjian, shuliang: 2}],
        shijian: 3,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true,
    }]
}
const wuliuyunshuji = {
    name: "物流运输机",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: tiekuai, shuliang: 5}, {wupin: chuliqi, shuliang: 2}, {
            wupin: tuijinqi,
            shuliang: 2
        }],
        shijian: 4,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true,
    }]
}
const xingjiwuliuyunshuchuan = {
    name: "星际物流运输船",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: taihejin, shuliang: 10}, {wupin: chuliqi, shuliang: 10}, {
            wupin: jialituijinqi,
            shuliang: 2
        }],
        shijian: 6,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true,
    }]
}

const guangzihebingqi = {
    name: "光子合并器",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: lengjing, shuliang: 2}, {wupin: dianluban, shuliang: 1}],
        shijian: 3,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true,
        zhushi: "普通"
    }, {
        shuliang: 1,
        yuanliao: [{wupin: guangshanshi, shuliang: 1}, {wupin: dianluban, shuliang: 1}],
        shijian: 3,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: false,
        zhushi: "高效"
    }]
}
const weimianguolvqi = {
    name: "位面过滤器",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: kaximierjingti, shuliang: 1}, {wupin: taihuaboli, shuliang: 2}],
        shijian: 12,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true,
    }]
}
const daoheranliaobang = {
    name: "氘核燃料棒",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: taihejin, shuliang: 1}, {wupin: zhongqing, shuliang: 10}, {
            wupin: chaojicichanghuan,
            shuliang: 1
        }],
        shijian: 6,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true,
    }]
}
const qiyiwuzhi = {
    name: "奇异物质",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: lizirongqi, shuliang: 2}, {wupin: tiekuai, shuliang: 2}, {
            wupin: zhongqing,
            shuliang: 10
        }],
        shijian: 8,
        leixing: leixing.liziduizhuangji,
        caiji: false,
        shoucuo: false,
    }]
}
const yinlitoujing = {
    name: "引力透镜",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: jingangshi, shuliang: 4}, {wupin: qiyiwuzhi, shuliang: 1}],
        shijian: 6,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true,
    }]
}
const taiyangfan = {
    name: "太阳帆",
    info: [{
        shuliang: 2,
        yuanliao: [{wupin: shimoxi, shuliang: 1}, {wupin: guangzihebingqi, shuliang: 1}],
        shijian: 4,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true,
    }]
}
const yanmieyueshuqiu = {
    name: "湮灭约束球",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: lizirongqi, shuliang: 1}, {wupin: chuliqi, shuliang: 1}],
        shijian: 20,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true,
    }]
}
const liangzixinpian = {
    name: "量子芯片",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: chuliqi, shuliang: 2}, {wupin: weimianguolvqi, shuliang: 2}],
        shijian: 6,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true,
    }]
}
const fanwuzhi = {
    name: "反物质",
    info: [{
        shuliang: 2,
        yuanliao: [{wupin: linjieguangzi, shuliang: 2}],
        shijian: 2,
        leixing: leixing.liziduizhuangji,
        caiji: false,
        shoucuo: false,
        duoyu: [{wupin: "氢", shuliang: 2}]
    }]
}
const fanwuzhiranliaobang = {
    name: "反物质燃料棒",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: fanwuzhi, shuliang: 10}, {wupin: qing, shuliang: 10}, {
            wupin: yanmieyueshuqiu,
            shuliang: 1
        }, {wupin: taihejin, shuliang: 1}],
        shijian: 12,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: false,
    }]
}
const daisenqiuzujian = {
    name: "戴森球组件",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: kuangjiacailiao, shuliang: 3}, {wupin: taiyangfan, shuliang: 3}, {
            wupin: chuliqi,
            shuliang: 3
        }],
        shijian: 8,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true,
    }]
}
const xiaoxingyunzaihuojian = {
    name: "小型运载火箭",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: daisenqiuzujian, shuliang: 2}, {wupin: daoheranliaobang, shuliang: 2}, {
            wupin: liangzixinpian,
            shuliang: 2
        }],
        shijian: 6,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true,
    }]
}
const nengliangjuzhen = {
    name: "能量矩阵",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: gaonengshimo, shuliang: 2}, {wupin: qing, shuliang: 2}],
        shijian: 6,
        leixing: leixing.keyanshebei,
        caiji: false,
        shoucuo: true,
    }]
}
const jiegoujuzhen = {
    name: "结构矩阵",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: jingangshi, shuliang: 1}, {wupin: taijingshi, shuliang: 1}],
        shijian: 8,
        leixing: leixing.keyanshebei,
        caiji: false,
        shoucuo: true,
    }]
}
const xinxijuzhen = {
    name: "信息矩阵",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: chuliqi, shuliang: 2}, {wupin: lizikuandai, shuliang: 1}],
        shijian: 10,
        leixing: leixing.keyanshebei,
        caiji: false,
        shoucuo: true,
    }]
}
const yinlijuzhen = {
    name: "引力矩阵",
    info: [{
        shuliang: 2,
        yuanliao: [{wupin: yinlitoujing, shuliang: 1}, {wupin: liangzixinpian, shuliang: 1}],
        shijian: 24,
        leixing: leixing.keyanshebei,
        caiji: false,
        shoucuo: true,
    }]
}
const yuzhoujuzhen = {
    name: "宇宙矩阵",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: diancijuzhen, shuliang: 1}, {
            wupin: nengliangjuzhen,
            shuliang: 1
        }, {wupin: jiegoujuzhen, shuliang: 1}, {
            wupin: xinxijuzhen,
            shuliang: 1
        }, {wupin: yinlijuzhen, shuliang: 1}, {wupin: fanwuzhi, shuliang: 1}],
        shijian: 15,
        leixing: leixing.keyanshebei,
        caiji: false,
        shoucuo: false,
    }]
}
const diji = {
    name: "地基",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: shicai, shuliang: 3}, {wupin: gangcai, shuliang: 1}],
        shijian: 1,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true,
    }]
}
const kongjianqiaoquqi = {
    name: "空间翘曲器",
    info: [{
        shuliang: 1,
        yuanliao: [{wupin: yinlitoujing, shuliang: 1}],
        shijian: 10,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true,
        zhushi: "普通"
    }, {
        shuliang: 8,
        yuanliao: [{wupin: yinlijuzhen, shuliang: 1}],
        shijian: 10,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true,
        zhushi: "高效"
    }]
}

export default {
    leixing,
    boli,
    citie, cixianquan, chilun, chaojicichanghuan, chuliqi,
    dianluban, daoheranliaobang, diandongji, dianciwolun, dianjiangfasheqi, daisenqiuzujian, diji, diancijuzhen,
    fanwuzhi, fanwuzhiranliaobang,
    guishi, gaochunguikuai, gaonengshimo, gangcai, guangzihebingqi,
    jinglianyou, jinggegui, jingangshi, jialituijinqi, jiegoujuzhen,
    kaximierjingti, kuangjiacailiao, kongjianqiaoquqi,
    lengjing, liusuan, lizikuandai, lizirongqi, liangzixinpian,
    nengliangjuzhen,
    qing, qiyiwuzhi,
    shicai, suliao, shimoxi,
    tiekuai, tongkuai, taikuai, taihejin, taihuaboli, taijingshi, tuijinqi, tannamiguan, taiyangfan,
    weimianguolvqi, wuliuyunshuji, weijingyuanjian,
    xingjiwuliuyunshuchuan, xiaoxingyunzaihuojian, xinxijuzhen,
    youjijingti, yeqingranliaobang, yinlitoujing, yanmieyueshuqiu, yinlijuzhen, yuzhoujuzhen,
    zhongqing,
}
