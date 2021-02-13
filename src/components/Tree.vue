<template>
    <div>
        <div>
            <!--<el-badge :value="1" class="item" type="primary">-->
            <el-tag v-if="tree.info[dangqian].caiji==true" type="danger" size="mini">{{tree.name}}
                <!--*{{shuliang}}({{zongshuliang}})--></el-tag>
            <el-tag v-else size="mini">{{tree.name}}<!--*{{shuliang}}({{zongshuliang}})--></el-tag>
            <el-tag v-if="tree.info[dangqian].duoyu!=undefined" type="info" size="mini"><span
                    v-for="item in tree.info[dangqian].duoyu"
                    :key="item.wupin">{{item.wupin}}</span>
            </el-tag>
            <!--</el-badge>-->
            <!--<span v-if="tree.info[dangqian].duoyu!=undefined">{{tree.info[dangqian].duoyu[0].wupin}}*{{tree.info[dangqian].duoyu[0].shuliang}}</span>-->
        </div>
        <!--<div v-if="tree.info.length>1">
            <span v-for="(item,index) in tree.info" :key="index">
                <el-link type="primary" v-if="dangqian!=index" @click="qiehuanhechengfangshi(item,index)">{{item.zhushi}}</el-link>
                <el-link disabled v-else>{{item.zhushi}}</el-link>
            </span>
        </div>-->
        <div v-if="tree.info.length>1" style="white-space: nowrap;">
            <el-link type="primary" @click="qiehuanhechengfangshi(-1)"><i class="el-icon-caret-left"></i></el-link>
            <span style="font-size: 10px;color: #82848a;">{{tree.info[dangqian].zhushi}}</span>
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
                <Tree :tree="item.wupin" :shuliang="item.shuliang" :zongshuliang="item.shuliang * shuliang"
                      :dangqian="0"/>
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