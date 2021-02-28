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
    shexianjieshouzhan: "射线接收站",
    weiding: "未定"
}

const tiekuang = {
    name: "铁矿",
    info: [{
        yuanliao: [],
        shijian: 0,
        leixing: leixing.caijiqi,
        caiji: true,
        shoucuo: false
    }]
}
const tongkuang = {
    name: "铜矿",
    info: [{
        yuanliao: [],
        shijian: 0,
        leixing: leixing.caijiqi,
        caiji: true,
        shoucuo: false
    }]
}
const shikuang = {
    name: "石矿",
    info: [{
        yuanliao: [],
        shijian: 0,
        leixing: leixing.caijiqi,
        caiji: true,
        shoucuo: false
    }]
}
const guishi = {
    name: "硅石",
    info: [{
        yuanliao: [],
        shijian: 0,
        leixing: leixing.caijiqi,
        caiji: true,
        shoucuo: false,
        zhushi: "采集"
    }, {
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
        yuanliao: [],
        shijian: 0,
        leixing: leixing.caijiqi,
        caiji: true,
        shoucuo: false,
    }]
}
const gaochunguikuai = {
    name: "高纯硅块",
    info: [{
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
        yuanliao: [{wupin: tiekuang, shuliang: 1}],
        shijian: 1,
        leixing: leixing.yelianshebei,
        caiji: false,
        shoucuo: true
    }]

}
const cixianquan = {
    name: "磁线圈",
    a: 0,
    info: [{
        yuanliao: [{wupin: citie, shuliang: 1}, {wupin: tongkuai, shuliang: 0.5}],
        shijian: 1,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true
    }]
}
const diancijuzhen = {
    name: "电磁矩阵",
    info: [{
        yuanliao: [{wupin: cixianquan, shuliang: 1}, {wupin: dianluban, shuliang: 1}],
        shijian: 1,
        leixing: leixing.keyanshebei,
        caiji: false,
        shoucuo: true
    }]
}
const taishi = {
    name: "钛石",
    info: [{
        yuanliao: [],
        shijian: 0,
        leixing: leixing.caijiqi,
        caiji: true,
        shoucuo: false
    }]
}
const taikuai = {
    name: "钛块",
    info: [{
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
        yuanliao: [],
        shijian: 0,
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
        leixing: leixing.chouyouzhan,
        caiji: true,
        shoucuo: false,
    }]
}
const jinglianyou = {
    name: "精炼油",
    info: [{
        yuanliao: [{wupin: yuanyou, shuliang: 1}],
        shijian: 2,
        leixing: leixing.jinglianshebei,
        caiji: false,
        shoucuo: false,
        duoyu: [{wupin: "氢", shuliang: 0.5}]
    }]
}
const keranbing = {
    name: "可燃冰",
    info: [{
        yuanliao: [],
        shijian: 0,
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
        yuanliao: [{wupin: yuanyou, shuliang: 2}],
        shijian: 4,
        leixing: leixing.jinglianshebei,
        caiji: false,
        shoucuo: false,
        duoyu: [{wupin: "精炼油", shuliang: 2}],
        zhushi: "等离子精炼"
    }, {
        yuanliao: [{wupin: keranbing, shuliang: 2}],
        shijian: 2,
        leixing: leixing.jinglianshebei,
        caiji: false,
        shoucuo: false,
        duoyu: [{wupin: "石墨烯", shuliang: 2}],
        zhushi: "分解可燃冰"
    }, {
        yuanliao: [{wupin: jinglianyou, shuliang: 1/3}, {
            wupin: {
                name: "氢",
                info: [{
                    yuanliao: [],
                    shijian: 0,
                    leixing: leixing.weiding,
                    caiji: false,
                    shoucuo: false
                }]
            }, shuliang: 2/3
        }],
        shijian: 4,
        leixing: leixing.jinglianshebei,
        caiji: false,
        shoucuo: false,
        duoyu: [{wupin: "高能石墨", shuliang: 1/3}],
        zhushi: "X射线裂解"
    }, {
        yuanliao: [{wupin: linjieguangzi, shuliang: 1}],
        shijian: 2,
        leixing: leixing.liziduizhuangji,
        caiji: false,
        shoucuo: false,
        duoyu: [{wupin: "反物质", shuliang: 1}],
        zhushi: "质能储存"
    }]
}
const gaonengshimo = {
    name: "高能石墨",
    info: [{
        yuanliao: [{wupin: meikuang, shuliang: 2}],
        shijian: 2,
        leixing: leixing.yelianshebei,
        caiji: false,
        shoucuo: true,
        zhushi: "普通"
    }, {
        yuanliao: [{wupin: jinglianyou, shuliang: 1}, {wupin: qing, shuliang: 2}],
        shijian: 4,
        leixing: leixing.jinglianshebei,
        caiji: false,
        shoucuo: true,
        duoyu: [{wupin: "氢", shuliang: 3}],
        zhushi: "X射线裂解"
    }]
}
const suliao = {
    name: "塑料",
    info: [{
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
        yuanliao: [],
        shijian: 0,
        leixing: leixing.choushuizhan,
        caiji: true,
        shoucuo: false
    }]
}
const liusuan = {
    name: "硫酸",
    info: [{
        yuanliao: [{wupin: jinglianyou, shuliang: 1.5}, {wupin: shikuang, shuliang: 2}, {
            wupin: shui,
            shuliang: 1
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
        yuanliao: [{wupin: gaonengshimo, shuliang: 3}, {wupin: liusuan, shuliang: 1}],
        shijian: 3,
        leixing: leixing.huagongshebei,
        caiji: false,
        shoucuo: false,
        zhushi: "普通"
    }, {
        yuanliao: [{wupin: keranbing, shuliang: 1}],
        shijian: 1,
        leixing: leixing.jinglianshebei,
        caiji: false,
        shoucuo: false,
        duoyu: [{wupin: "氢", shuliang: 0.5}],
        zhushi: "高效"
    }]
}
const fenxingguishi = {
    name: "分形硅石",
    info: [{
        yuanliao: [],
        shijian: 0,
        leixing: leixing.caijiqi,
        caiji: true,
        shoucuo: false
    }]
}
const jinggegui = {
    name: "晶格硅",
    info: [{
        yuanliao: [{wupin: gaochunguikuai, shuliang: 1}],
        shijian: 2,
        leixing: leixing.yelianshebei,
        caiji: false,
        shoucuo: false,
        zhushi: "普通"
    }, {
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
        yuanliao: [{wupin: taikuai, shuliang: 1}, {wupin: gangcai, shuliang: 1}, {
            wupin: liusuan,
            shuliang: 2
        }],
        shijian: 3,
        leixing: leixing.yelianshebei,
        caiji: false,
        shoucuo: false,
    }]
}
const boli = {
    name: "玻璃",
    info: [{
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
        yuanliao: [],
        shijian: 0,
        leixing: leixing.caijiqi,
        caiji: true,
        shoucuo: false
    }]
}
const jingangshi = {
    name: "金刚石",
    info: [{
        yuanliao: [{wupin: gaonengshimo, shuliang: 1}],
        shijian: 2,
        leixing: leixing.yelianshebei,
        caiji: false,
        shoucuo: false,
        zhushi: "普通"
    }, {
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
        leixing: leixing.caijiqi,
        caiji: true,
        shoucuo: false
    }]
}
const zhiwuranliao = {
    name: "植物燃料",
    info: [{
        yuanliao: [],
        shijian: 0,
        leixing: leixing.caijiqi,
        caiji: true,
        shoucuo: false
    }]
}
const youjijingti = {
    name: "有机晶体",
    info: [{
        yuanliao: [],
        shijian: 0,
        leixing: leixing.caijiqi,
        caiji: true,
        shoucuo: false,
        zhushi: "采集"
    },{
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
        yuanliao: [{wupin: boli, shuliang: 1}, {wupin: taikuai, shuliang: 1}, {
            wupin: shui,
            shuliang: 1
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
        yuanliao: [{wupin: boli, shuliang: 1.5}],
        shijian: 1,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true,
    }]
}
const taijingshi = {
    name: "钛晶石",
    info: [{
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
        yuanliao: [{wupin: qing, shuliang: 2}],
        shijian: 1,
        leixing: leixing.liziduizhuangji,
        caiji: false,
        shoucuo: false,
        zhushi: "普通"
    }, {
        yuanliao: [{wupin: qing, shuliang: 100}],
        shijian: 1,
        leixing: leixing.fenliushebei,
        caiji: false,
        shoucuo: false,
        zhushi: "重氢分馏",
        duoyu: [{wupin: "氢", shuliang: 99}]
    }]
}
const dianjiangfasheqi = {
    name: "电浆激发器",
    info: [{
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
        yuanliao: [{wupin: shimoxi, shuliang: 1.5}, {wupin: taikuai, shuliang: 0.5}],
        shijian: 2,
        leixing: leixing.huagongshebei,
        caiji: false,
        shoucuo: false,
        zhushi: "普通"
    }, {
        yuanliao: [{wupin: cisunjiejing, shuliang: 1}],
        shijian: 2,
        leixing: leixing.huagongshebei,
        caiji: false,
        shoucuo: false,
        zhushi: "高效"
    }]
}
const lizikuandai = {
    name: "粒子宽带",
    info: [{
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
        yuanliao: [],
        shijian: 0,
        leixing: leixing.caijiqi,
        caiji: true,
        shoucuo: false
    }]
}
const lizirongqi = {
    name: "粒子容器",
    info: [{
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
        yuanliao: [{wupin: danjicishi, shuliang: 6}, {wupin: tongkuai, shuliang: 2}],
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
        yuanliao: [{wupin: lengjing, shuliang: 2}, {wupin: dianluban, shuliang: 1}],
        shijian: 3,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true,
        zhushi: "普通"
    }, {
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
        yuanliao: [{wupin: kaximierjingti, shuliang: 1}, {wupin: taihuaboli, shuliang: 2}],
        shijian: 12,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true,
    }]
}
const daoheranliaobang = {
    name: "氚核燃料棒",
    info: [{
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
        yuanliao: [{wupin: shimoxi, shuliang: 0.5}, {wupin: guangzihebingqi, shuliang: 0.5}],
        shijian: 2,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true,
    }]
}
const yanmieyueshuqiu = {
    name: "湮灭约束球",
    info: [{
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
        yuanliao: [{wupin: linjieguangzi, shuliang: 1}],
        shijian: 1,
        leixing: leixing.liziduizhuangji,
        caiji: false,
        shoucuo: false,
        duoyu: [{wupin: "氢", shuliang: 1}]
    }]
}
const fanwuzhiranliaobang = {
    name: "反物质燃料棒",
    info: [{
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
const nengliangjuzhen = {
    name: "能量矩阵",
    info: [{
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
        yuanliao: [{wupin: yinlitoujing, shuliang: 0.5}, {wupin: liangzixinpian, shuliang: 0.5}],
        shijian: 12,
        leixing: leixing.keyanshebei,
        caiji: false,
        shoucuo: true,
    }]
}
const yuzhoujuzhen = {
    name: "宇宙矩阵",
    info: [{
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
        yuanliao: [{wupin: yinlitoujing, shuliang: 1}],
        shijian: 10,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true,
        zhushi: "普通"
    }, {
        yuanliao: [{wupin: yinlijuzhen, shuliang: 0.125}],
        shijian: 1.25,
        leixing: leixing.zhizaotai,
        caiji: false,
        shoucuo: true,
        zhushi: "高效"
    }]
}

export default {
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
