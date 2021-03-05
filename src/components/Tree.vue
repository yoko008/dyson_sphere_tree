<template>
    <div>
        <div>
            <el-tag v-if="tree.info[dangqian].caiji==true" type="danger" size="mini">{{tree.name}}<span
                    v-if="switchvalue.shuliang">*{{zongshuliang}}</span>
            </el-tag>
            <el-tag v-else-if="tree.jianzhu==true" type="warning" size="mini">{{tree.name}}<span
                    v-if="switchvalue.shuliang">*{{zongshuliang}}</span>
            </el-tag>
            <el-tag v-else size="mini">{{tree.name}}<span v-if="switchvalue.shuliang">*{{zongshuliang}}</span></el-tag>
            <el-tag v-if="switchvalue.duoyu && tree.info[dangqian].duoyu!=undefined " type="info" size="mini"><span
                    v-for="item in tree.info[dangqian].duoyu"
                    :key="item.wupin">{{item.wupin}}<span
                    v-if="switchvalue.shuliang">*{{item.shuliang*zongshuliang}}</span></span>
            </el-tag>
        </div>
        <div v-if="switchvalue.shebei">
            <el-tag type="success" size="mini" effect="plain">{{tree.info[dangqian].leixing}}
                <span v-if="!tree.info[dangqian].caiji">*{{zongshuliang/(60/tree.info[dangqian].shijian*tree.info[dangqian].shuliang)}}</span>
            </el-tag>
        </div>
        <div v-if="tree.info.length>1" style="white-space: nowrap;">
            <el-link type="primary" @click="qiehuanhechengfangshi(-1)"><i class="el-icon-caret-left"></i></el-link>
            <el-tag type="info" size="mini" effect="plain">{{tree.info[dangqian].zhushi}}</el-tag>
            <el-link type="primary" @click="qiehuanhechengfangshi(1)"><i class="el-icon-caret-right"></i></el-link>
        </div>
        <div v-if="tree.info[dangqian].yuanliao.length>1">丨</div>
        <div class="yuanliao">
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