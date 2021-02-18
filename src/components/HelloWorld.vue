<template>
    <div class="hello">
        <div class="row" style="text-align: left;">
            <el-link href="https://github.com/yoko008/dyson_sphere_tree" target="_blank">源码地址</el-link>
            <el-link disabled target="_blank">丨</el-link>
            <el-link href="https://github.com/yoko008/dyson_sphere_tree/issues/new" target="_blank">数据报错/建议</el-link>
        </div>
        <div class="row">
            <template v-for="(item,index) in list">
                    <el-button style="margin-left: 1px;" size="mini" type="info" :key="index" plain>{{item.shouzimu}}</el-button>
                    <el-button style="margin-left: 1px;" v-for="(item2,index2) in item.wupin" :key="index2" size="mini" @click="getData(index,index2)">{{item2}}</el-button>
            </template>
        </div>
        <div class="row" style="text-align: left;">
            <el-switch
                    v-model="switchvalue.shuliang"
                    active-color="#13ce66"
                    inactive-color="#82848a">
            </el-switch>
            显示数量丨
            <el-switch
                    v-model="switchvalue.shebei"
                    active-color="#13ce66"
                    inactive-color="#82848a">
            </el-switch>
            显示设备丨
            <el-switch
                    v-model="switchvalue.duoyu"
                    active-color="#13ce66"
                    inactive-color="#82848a">
            </el-switch>
            显示额外产物<span v-if="switchvalue.shuliang">丨
            产物数量：</span>
            <el-input-number v-if="switchvalue.shuliang" size="mini" v-model="zongshuliang" :min="1" :max="10000"
                             label="产物数量"></el-input-number>
        </div>
        <div class="row" style="text-align: left;">
            图例：
            <el-tag size="mini">合成产物<span v-if="switchvalue.shuliang">*数量</span></el-tag>
            丨
            <el-tag type="danger" size="mini">采集物品<span
                    v-if="switchvalue.shuliang">*数量</span>
            </el-tag>
            <span>丨</span>
            <el-tag v-if="switchvalue.duoyu" type="info" size="mini"><span>
                    额外产物<span
                    v-if="switchvalue.shuliang">*数量</span></span>
            </el-tag>
            <span v-if="switchvalue.duoyu">丨</span>
            <el-tag v-if="switchvalue.shebei" type="success" size="mini">合成设备
            </el-tag>
            <span v-if="switchvalue.shebei">丨</span>
            <el-link type="primary"><i class="el-icon-caret-left"></i></el-link>
            <span style="font-size: 10px;color: #82848a;">当前合成方式</span>
            <el-link type="primary"><i class="el-icon-caret-right"></i></el-link>
        </div>
        <div style="display:inline-block;*display:inline;*zoom:1;" class="row">
            <Tree :tree="tree" :shuliang="1" :zongshuliang="zongshuliang" :dangqian="dangqian"
                  :switchvalue="switchvalue"/>
        </div>
    </div>
</template>

<script>
    import Tree from "@/components/Tree";

    export default {
        name: 'HelloWorld',
        components: {Tree},
        data: function () {
            return {
                list: [{"shouzimu": "A", wupin: []},
                    {"shouzimu": "B", wupin: ["玻璃"]},
                    {"shouzimu": "C", wupin: ["磁铁", "磁线圈", "齿轮", "超级磁场环", "处理器"]},
                    {"shouzimu": "D", wupin: ["电路板", "氘核燃料棒", "电动机", "电磁涡轮", "电浆激发器", "戴森球组件", "地基", "电磁矩阵"]},
                    {"shouzimu": "E", wupin: []},
                    {"shouzimu": "F", wupin: ["反物质", "反物质燃料棒"]},
                    {"shouzimu": "G", wupin: ["硅石", "高纯硅块", "高能石墨", "钢材", "光子合并器"]},
                    {"shouzimu": "H", wupin: []},
                    {"shouzimu": "I", wupin: []},
                    {"shouzimu": "J", wupin: ["精炼油", "晶格硅", "金刚石", "加力推进器", "结构矩阵"]},
                    {"shouzimu": "K", wupin: ["卡西米尔晶体", "框架材料", "空间翘曲器"]},
                    {"shouzimu": "L", wupin: ["棱镜", "硫酸", "粒子宽带", "粒子容器", "量子芯片"]},
                    {"shouzimu": "M", wupin: []},
                    {"shouzimu": "N", wupin: ["能量矩阵"]},
                    {"shouzimu": "O", wupin: []},
                    {"shouzimu": "P", wupin: []},
                    {"shouzimu": "Q", wupin: ["氢", "奇异物质"]},
                    {"shouzimu": "R", wupin: []},
                    {"shouzimu": "S", wupin: ["石材", "塑料", "石墨烯"]},
                    {"shouzimu": "T", wupin: ["铁块", "铜块", "钛块", "钛合金", "钛化玻璃", "钛晶石", "推进器", "碳纳米管", "太阳帆"]},
                    {"shouzimu": "U", wupin: []},
                    {"shouzimu": "V", wupin: []},
                    {"shouzimu": "W", wupin: ["位面过滤器", "物流运输机", "微晶原件"]},
                    {"shouzimu": "X", wupin: ["星际物流运输船", "小型运载火箭", "信息矩阵"]},
                    {"shouzimu": "Y", wupin: ["有机晶体", "液氢燃料棒", "引力透镜", "湮灭约束球", "引力矩阵", "宇宙矩阵"]},
                    {"shouzimu": "Z", wupin: ["重氢"]},
                    {"shouzimu": "矩阵", wupin: ["电磁矩阵", "能量矩阵", "结构矩阵", "信息矩阵", "引力矩阵", "宇宙矩阵"]}
                ],
                listDetail: [],
                tree: {
                    info: [
                        {
                            yuanliao: []
                        }
                    ]
                },
                dangqian: 0,
                switchvalue: {
                    shuliang: true,
                    shebei: true,
                    duoyu: true
                },
                zongshuliang: 1
            }
        },
            mounted: function () {
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
                        yuanliao: [{wupin: citie, shuliang: 1}, {wupin: tongkuai, shuliang: 1}],
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
                        leixing: leixing.choushuizhan,
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
                        yuanliao: [{wupin: jinglianyou, shuliang: 0.33}, {
                            wupin: {
                                name: "氢",
                                info: [{
                                    yuanliao: [],
                                    shijian: 0,
                                    leixing: leixing.weiding,
                                    caiji: false,
                                    shoucuo: false
                                }]
                            }, shuliang: 0.66
                        }],
                        shijian: 4,
                        leixing: leixing.jinglianshebei,
                        caiji: false,
                        shoucuo: false,
                        duoyu: [{wupin: "高能石墨", shuliang: 0.33}],
                        zhushi: "X射线裂解"
                    }, {
                        yuanliao: [{wupin: linjieguangzi, shuliang: 2 / 2}],
                        shijian: 2,
                        leixing: leixing.liziduizhuangji,
                        caiji: false,
                        shoucuo: false,
                        duoyu: [{wupin: "反物质", shuliang: 2 / 2}],
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
                        yuanliao: [{wupin: tiekuai, shuliang: 0.5}, {wupin: chilun, shuliang: 1}, {
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
                    name: "电浆发射器",
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
                this.listDetail=[[],
                    [boli],
                    [citie, cixianquan, chilun, chaojicichanghuan, chuliqi],
                    [dianluban, daoheranliaobang, diandongji, dianciwolun,dianjiangfasheqi, daisenqiuzujian, diji, diancijuzhen],
                    [],
                    [fanwuzhi, fanwuzhiranliaobang],
                    [guishi, gaochunguikuai,gaonengshimo, gangcai, guangzihebingqi],
                    [],
                    [],
                    [jinglianyou, jinggegui, jingangshi, jialituijinqi, jiegoujuzhen],
                    [kaximierjingti, kuangjiacailiao, kongjianqiaoquqi],
                    [lengjing, liusuan, lizikuandai, lizirongqi, liangzixinpian],
                    [],
                    [nengliangjuzhen],
                    [],
                    [],
                    [qing, qiyiwuzhi],
                    [],
                    [shicai, suliao, shimoxi],
                    [tiekuai, tongkuai, taikuai, taihejin, taihuaboli, taijingshi, tuijinqi, tannamiguan, taiyangfan],
                    [],
                    [],
                    [weimianguolvqi,wuliuyunshuji, weijingyuanjian],
                    [xingjiwuliuyunshuchuan, xiaoxingyunzaihuojian, xinxijuzhen],
                    [youjijingti, yeqingranliaobang, yinlitoujing, yanmieyueshuqiu, yinlijuzhen, yuzhoujuzhen],
                    [zhongqing],
                    [diancijuzhen, nengliangjuzhen, jiegoujuzhen, xinxijuzhen, yinlijuzhen, yuzhoujuzhen]
                ]
                this.tree = this.listDetail[1][0]
            }
        ,
            methods: {
                getData: function (index, index2) {
                    this.tree = this.listDetail[index][index2]
                    this.dangqian = 0
                }
            }
        }


</script>

<style scoped>
    .row {
        display: -webkit-flex; /* Safari */
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
    }

    .hang {

    }

    .row {
        margin: 10px 0px;
    }
</style>
