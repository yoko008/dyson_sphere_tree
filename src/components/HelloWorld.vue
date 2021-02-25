<template>
    <div class="hello">
        <div class="row" style="text-align: left;">
            <el-link href="https://github.com/yoko008/dyson_sphere_tree" target="_blank">源码地址</el-link>
            <el-link disabled target="_blank">丨</el-link>
            <el-link href="https://github.com/yoko008/dyson_sphere_tree/issues/new" target="_blank">数据报错/建议</el-link>
        </div>
        <el-tabs tab-position="right" style="height: 200px;">
            <el-tab-pane label="组件">
                <div class="row">
                    <template v-for="(item,index) in list">
                        <el-button style="margin-left: 1px;" size="mini" type="info" :key="index" plain>
                            {{item.shouzimu}}
                        </el-button>
                        <el-button style="margin-left: 1px;" v-for="(item2,index2) in item.wupin" :key="index2"
                                   size="mini"
                                   @click="getData(index,index2)">{{item2}}
                        </el-button>
                    </template>
                </div>
            </el-tab-pane>
            <el-tab-pane label="建筑">
                <div class="row">
                    <template v-for="(item,index) in jianzhu_list">
                        <el-button style="margin-left: 1px;" size="mini" type="info" :key="index" plain>
                            {{item.shouzimu}}
                        </el-button>
                        <el-button style="margin-left: 1px;" v-for="(item2,index2) in item.wupin" :key="index2"
                                   size="mini"
                                   @click="getjianzhuData(index,index2)">{{item2}}
                        </el-button>
                    </template>
                </div>
            </el-tab-pane>
        </el-tabs>

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
    import zujian from "@/assets/js/zujian";
    import jianzhu from "@/assets/js/jianzhu";

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
                listDetail: [[],
                    [zujian.boli],
                    [zujian.citie, zujian.cixianquan, zujian.chilun, zujian.chaojicichanghuan, zujian.chuliqi],
                    [zujian.dianluban, zujian.daoheranliaobang, zujian.diandongji, zujian.dianciwolun, zujian.dianjiangfasheqi, zujian.daisenqiuzujian, zujian.diji, zujian.diancijuzhen],
                    [],
                    [zujian.fanwuzhi, zujian.fanwuzhiranliaobang],
                    [zujian.guishi, zujian.gaochunguikuai, zujian.gaonengshimo, zujian.gangcai, zujian.guangzihebingqi],
                    [],
                    [],
                    [zujian.jinglianyou, zujian.jinggegui, zujian.jingangshi, zujian.jialituijinqi, zujian.jiegoujuzhen],
                    [zujian.kaximierjingti, zujian.kuangjiacailiao, zujian.kongjianqiaoquqi],
                    [zujian.lengjing, zujian.liusuan, zujian.lizikuandai, zujian.lizirongqi, zujian.liangzixinpian],
                    [],
                    [zujian.nengliangjuzhen],
                    [],
                    [],
                    [zujian.qing, zujian.qiyiwuzhi],
                    [],
                    [zujian.shicai, zujian.suliao, zujian.shimoxi],
                    [zujian.tiekuai, zujian.tongkuai, zujian.taikuai, zujian.taihejin, zujian.taihuaboli, zujian.taijingshi, zujian.tuijinqi, zujian.tannamiguan, zujian.taiyangfan],
                    [],
                    [],
                    [zujian.weimianguolvqi, zujian.wuliuyunshuji, zujian.weijingyuanjian],
                    [zujian.xingjiwuliuyunshuchuan, zujian.xiaoxingyunzaihuojian, zujian.xinxijuzhen],
                    [zujian.youjijingti, zujian.yeqingranliaobang, zujian.yinlitoujing, zujian.yanmieyueshuqiu, zujian.yinlijuzhen, zujian.yuzhoujuzhen],
                    [zujian.zhongqing],
                    [zujian.diancijuzhen, zujian.nengliangjuzhen, zujian.jiegoujuzhen, zujian.xinxijuzhen, zujian.yinlijuzhen, zujian.yuzhoujuzhen]
                ],
                jianzhu_list: [{"shouzimu": "A", wupin: []},
                    {"shouzimu": "B", wupin: []},
                    {"shouzimu": "C", wupin: ["传送带", "传送带（高速）", "传送带（极速）", "储液罐", "采矿机", "抽水站", "垂直发射井"]},
                    {"shouzimu": "D", wupin: ["电力感应塔", "大型储物仓", "电磁轨道弹射器", "电弧熔炉"]},
                    {"shouzimu": "E", wupin: []},
                    {"shouzimu": "F", wupin: ["风力涡轮机", "分拣器", "分拣器（高速）", "分拣器（极速）", "分馏塔"]},
                    {"shouzimu": "G", wupin: ["轨道采集器"]},
                    {"shouzimu": "H", wupin: ["火力发电厂", "化工厂"]},
                    {"shouzimu": "I", wupin: []},
                    {"shouzimu": "J", wupin: ["矩阵研究站"]},
                    {"shouzimu": "K", wupin: []},
                    {"shouzimu": "L", wupin: []},
                    {"shouzimu": "M", wupin: []},
                    {"shouzimu": "N", wupin: ["能量枢纽"]},
                    {"shouzimu": "O", wupin: []},
                    {"shouzimu": "P", wupin: []},
                    {"shouzimu": "Q", wupin: []},
                    {"shouzimu": "R", wupin: ["人造恒星"]},
                    {"shouzimu": "S", wupin: ["射线接收站", "四向分流器"]},
                    {"shouzimu": "T", wupin: ["太阳能板"]},
                    {"shouzimu": "U", wupin: []},
                    {"shouzimu": "V", wupin: []},
                    {"shouzimu": "W", wupin: ["无线输电塔", "微型配电站", "微型聚变发电站", "微型粒子对撞机"]},
                    {"shouzimu": "X", wupin: ["蓄电器", "小型储物仓", "行星内物流运输站", "星际物流运输站"]},
                    {"shouzimu": "Y", wupin: ["原油萃取站", "原油精炼厂"]},
                    {"shouzimu": "Z", wupin: ["制造台Mk.I", "制造台Mk.II", "制造台Mk.III"]},
                ],
                jianzhu_listDetail: [[],
                    [],
                    [jianzhu.chuansongdai, jianzhu.gaosuchuansongdai, jianzhu.jisuchuansongdai, jianzhu.chuyeguan, jianzhu.caikuangji, jianzhu.choushuizhan, jianzhu.chuizhifashejing],
                    [jianzhu.dianliganyingta, jianzhu.daxingchuwucang, jianzhu.dianciguidaotansheqi, jianzhu.dianhuronglu],
                    [],
                    [jianzhu.fengliwolunji, jianzhu.fenjianqi, jianzhu.gaosufenjianqi, jianzhu.jisufenjianqi, jianzhu.fenliuta],
                    [jianzhu.guidaocaijiqi],
                    [jianzhu.huolifadianchang, jianzhu.huagongchang],
                    [],
                    [jianzhu.juzhenyanjiuzhan],
                    [],
                    [],
                    [],
                    [jianzhu.nengliangshuniu],
                    [],
                    [],
                    [],
                    [jianzhu.renzaohengxing],
                    [jianzhu.shexianjieshouzhan, jianzhu.sixiangfenliuqi],
                    [jianzhu.taiyangnengban],
                    [],
                    [],
                    [jianzhu.wuxianshudianta, jianzhu.weixingpeidianzhan, jianzhu.weixingjubianfadianzhan, jianzhu.weixingliziduizhuangji],
                    [jianzhu.xudianqi, jianzhu.xiaoxingchuwucang, jianzhu.xingxingneiwuliuyunshuzhan, jianzhu.xingjiwuliuyunshuzhan],
                    [jianzhu.yuanyoucuiquzhan, jianzhu.yuanyoujinglianchang],
                    [jianzhu.zhizaotaimk1, jianzhu.zhizaotaimk2, jianzhu.zhizaotaimk3]
                ],
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
            this.tree = this.listDetail[1][0]
        }
        ,
        methods: {
            getData: function (index, index2) {
                this.tree = this.listDetail[index][index2]
                this.dangqian = 0
            },
            getjianzhuData: function (index, index2) {
                this.tree = this.jianzhu_listDetail[index][index2]
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
