<template>
   <div class="app-container">
      <el-form :model="queryParams" ref="queryRef" :inline="true" v-show="showSearch" label-width="68px">
         <el-form-item label="节点名称" prop="postName">
            <el-input v-model="queryParams.name" placeholder="请输入节点名称" clearable @keyup.enter="getList" />
         </el-form-item>
         <el-form-item label="节点名称" prop="postName">
            <el-input v-model="queryParams.addr" placeholder="请输入节点IP" clearable @keyup.enter="getList" />
         </el-form-item>
         <el-form-item>
            <el-button type="primary" icon="Search" @click="getList">搜索</el-button>
            <el-button icon="Refresh" @click="resetQuery">重置</el-button>
            <el-button type="primary" icon="Key" @click="handleSubmit">订阅</el-button>
         </el-form-item>
      </el-form>

      <el-table v-loading="loading" :data="nodeList" stripe @selection-change="handleSelectionChange"
         style="width: 100%">
         <el-table-column type="selection" width="55">
         </el-table-column>
         <el-table-column prop="ps" label="名称" show-overflow-tooltip width="250"> </el-table-column>
         <el-table-column prop="add" label="地址" width="350" show-overflow-tooltip> </el-table-column>
         <el-table-column prop="port" label="端口" width="100"> </el-table-column>
         <el-table-column prop="s" align="center" label="延迟(ms)" min-width="100"> </el-table-column>
         <el-table-column label="操作" align="center" width="150" class-name="small-padding fixed-width">
            <template #default="scope">
               <el-button type="text" icon="Promotion" @click="handleClick(scope.row)">选中</el-button>
               <el-button type="text" icon="Odometer" @click="handleS(scope.row)">测速</el-button>
            </template>
         </el-table-column>
      </el-table>

      <el-dialog :title="title" v-model="open" width="500px" append-to-body>
         <el-input v-model.trim="subscribeUrl" placeholder="请输入订阅地址" />
         <template #footer>
            <div class="dialog-footer">
               <el-button type="primary" @click="submitForm">确 定</el-button>
               <el-button @click="cancel">取 消</el-button>
            </div>
         </template>
      </el-dialog>
   </div>
</template>

<script setup name="Node">
import { listNode, click, ping, subscribe } from "@/api/agent/node";

const { proxy } = getCurrentInstance();

const nodeList = ref([]);
const loading = ref(true);
const ids = ref([]);
const showSearch = ref(true);
const single = ref(true);
const multiple = ref(true);
const open = ref(false);
const title = ref("")
const subscribeUrl = ref("")

const data = reactive({
   form: {},
   queryParams: {
      name: undefined,
      addr: undefined,
   },
});

const { queryParams, form, rules } = toRefs(data);

function getList() {
   loading.value = true;
   listNode(queryParams.value).then((response) => {
      nodeList.value = response.data;
      loading.value = false;
   });
}

/** 重置按钮操作 */
function resetQuery() {
   proxy.resetForm("queryRef");
   getList();
}
/** 多选框选中数据 */
function handleSelectionChange(selection) {
   ids.value = selection.map((item) => item.key);
   single.value = selection.length != 1;
   multiple.value = !selection.length;
}

function handleS(row) {
   ping(row.key).then(res => {

   })
}

function cancel(params) {
   open.value = false;
   title.value = "";
   subscribeUrl.value = ""
}

function handleSubmit() {
   open.value = true;
   subscribeUrl.value = ""
   title.value = "更新订阅";
}

function submitForm() {
   subscribe({url: subscribeUrl.value}).then(res => {
      proxy.$modal.msgSuccess("更新成功");
      open.value = false;
      getList();  
   })
}

function handleClick(row) {
   click().then(res => {

   })
}

getList();
</script>
