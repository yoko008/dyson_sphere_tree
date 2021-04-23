<template>
    <div>
        <div>
            <!--如果是采集物品，显示红色tag-->
            <el-tag v-if="tree.info[dangqian].caiji==true" type="danger" size="mini">
                {{tree.name}}
                <span v-if="switchvalue.shuliang">*{{switchvalue.quzheng?Math.ceil(zongshuliang):zongshuliang}}</span>
            </el-tag>
            <!--如果是建筑，显示橙色tag-->
            <el-tag v-else-if="tree.jianzhu==true" type="warning" size="mini">
                {{tree.name}}
                <span v-if="switchvalue.shuliang">*{{switchvalue.quzheng?Math.ceil(zongshuliang):zongshuliang}}</span>
            </el-tag>
            <!--其他的显示普通tag-->
            <el-tag v-else size="mini">
                {{tree.name}}
                <span v-if="switchvalue.shuliang">*{{switchvalue.quzheng?Math.ceil(zongshuliang):zongshuliang}}</span>
            </el-tag>
            <!--显示多余产物-->
            <el-tag v-if="switchvalue.duoyu && tree.info[dangqian].duoyu!=undefined" type="info" size="mini">
                <span
                        v-for="item in tree.info[dangqian].duoyu"
                        :key="item.wupin">
                    {{item.wupin}}
                    <!--多余产物数量=单位多余产物数量/单位物品数量*总数量-->
                    <span v-if="switchvalue.shuliang">*
                        <span v-if="switchvalue.quzheng">{{Math.ceil(item.shuliang*zongshuliang/tree.info[dangqian].shuliang)}}</span>
                        <span v-else>{{item.shuliang*zongshuliang/tree.info[dangqian].shuliang}}</span>
                    </span>
                </span>
            </el-tag>
        </div>
        <!--是否显示合成设备-->
        <div v-if="switchvalue.shebei">
            <el-tag type="success" size="mini" effect="plain">
                {{tree.info[dangqian].leixing}}
                <!--1分钟产出所需合成设备数量=总数量/一台机器1分钟产出数量=总数量/（60/单位产物时间*单位产物数量）-->
                <span v-if="!tree.info[dangqian].caiji">
                    <span v-if="tree.info[dangqian].leixing=='制造台'">
                        <span v-if="switchvalue.zhizaotai==0.75">Mk.I</span>
                        <span v-if="switchvalue.zhizaotai==1">Mk.II</span>
                        <span v-if="switchvalue.zhizaotai==1.5">Mk.III</span>
                        *
                        <span v-if="switchvalue.quzheng">{{Math.ceil(zongshuliang/(60/tree.info[dangqian].shijian*tree.info[dangqian].shuliang*switchvalue.zhizaotai))}}</span>
                        <span v-else>{{zongshuliang/(60/tree.info[dangqian].shijian*tree.info[dangqian].shuliang*switchvalue.zhizaotai)}}</span>
                    </span>
                    <span v-else>
                        *
                        <span v-if="switchvalue.quzheng">{{Math.ceil(zongshuliang/(60/tree.info[dangqian].shijian*tree.info[dangqian].shuliang))}}</span>
                        <span v-else>{{zongshuliang/(60/tree.info[dangqian].shijian*tree.info[dangqian].shuliang)}}</span>
                    </span>
                </span>
                <span v-else-if="tree.info[dangqian].leixing=='采矿机'">
                    (矿脉*
                    <span v-if="switchvalue.quzheng">{{Math.ceil(zongshuliang/(60/tree.info[dangqian].shijian*tree.info[dangqian].shuliang))}}</span>
                    <span v-else>{{zongshuliang/(60/tree.info[dangqian].shijian*tree.info[dangqian].shuliang)}}</span>
                    )
                </span>
                <span v-else-if="tree.info[dangqian].leixing=='抽水设备'">
                    *
                    <span v-if="switchvalue.quzheng">{{Math.ceil(zongshuliang/(60/tree.info[dangqian].shijian*tree.info[dangqian].shuliang))}}</span>
                    <span v-else>{{zongshuliang/(60/tree.info[dangqian].shijian*tree.info[dangqian].shuliang)}}</span>
                </span>
                <span v-else-if="tree.info[dangqian].leixing=='抽油设备'">
                    (原油涌泉产量>
                    <span v-if="switchvalue.quzheng">{{Math.round(zongshuliang/60/1.5*100)/100}}</span>
                    <span v-else>{{zongshuliang/60/1.5}}</span>
                    /s)</span>
                <span v-else-if="tree.info[dangqian].leixing=='轨道采集器'">(效率未知)</span>
                <span v-else-if="tree.info[dangqian].leixing=='射线接收站'">(还没到这，知道的给我说说)</span>
                <span v-else-if="tree.info[dangqian].leixing=='手采'">(手动采集没效率，要不还是算了？)</span>
            </el-tag>
        </div>
        <!--提供切换合成方式按钮-->
        <div v-if="tree.info.length>1" style="white-space: nowrap;">
            <el-link type="primary" @click="qiehuanhechengfangshi(-1)"><i class="el-icon-caret-left"></i></el-link>
            <el-tag type="info" size="mini" effect="plain">{{tree.info[dangqian].zhushi}}</el-tag>
            <el-link type="primary" @click="qiehuanhechengfangshi(1)"><i class="el-icon-caret-right"></i></el-link>
        </div>
        <div v-if="tree.info[dangqian].yuanliao.length>1">丨</div>
        <div class="yuanliao">
            <!--遍历原料-->
            <div class="a" v-for="(item,index) in tree.info[dangqian].yuanliao" :key="index">
                <div v-if="index==0 && tree.info[dangqian].yuanliao.length>1" class="border-box">
                    <div style="width: 100%;"></div>
                    <div style="border-top:1px black solid;width: 100%;"></div>
                </div>
                <div v-else-if="index==tree.info[dangqian].yuanliao.length-1 && tree.info[dangqian].yuanliao.length>1"
                     class="border-box">
                    <div style="border-top:1px black solid;width: 100%;"></div>
                    <div style="width: 100%;"></div>
                </div>
                <div v-else-if="tree.info[dangqian].yuanliao.length==1" class="border-box">
                </div>
                <div v-else class="border-box">
                    <div style="border-top:1px black solid;width: 100%;"></div>
                </div>
                <div>丨</div>
                <!--shuliang:合成一个物品所需某项原料数量=单位原料数量/单位物品数量-->
                <!--zongshuliang:合成当前所有物品所需某项原料总数量=单位原料数量/单位物品数量*需合成的总数量-->
                <Tree :tree="item.wupin"
                      :shuliang="item.shuliang/tree.info[dangqian].shuliang"
                      :zongshuliang="item.shuliang * zongshuliang/tree.info[dangqian].shuliang"
                      :dangqian="0"
                      :switchvalue="switchvalue"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Tree",
        props: {
            tree: Object,
            shuliang: Number,
            zongshuliang: Number,
            dangqian: Number,
            switchvalue: Object
        },
        data: function () {
            return {}
        },
        mounted: function () {
        },
        methods: {
            qiehuanhechengfangshi: function (index) {
                let currentIndex = this.dangqian + index
                if (currentIndex < 0) {
                    this.dangqian = this.tree.info.length - 1
                } else if (currentIndex >= this.tree.info.length) {
                    this.dangqian = 0
                } else {
                    this.dangqian = currentIndex
                }
            }
        }
    }
</script>

<style scoped>
    .yuanliao {
        display: -webkit-flex; /* Safari */
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: nowrap;
    }

    .a {
        width: 100%;
    }

    .border-box {
        display: -webkit-flex; /* Safari */
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: nowrap;
    }
</style>