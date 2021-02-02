<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="序号" width="95">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>

      <el-table-column align="center" label="文章ID" width="95">
        <template slot-scope="scope">
          {{ scope.row.blog_id }}
        </template>
      </el-table-column>

      <el-table-column label="文章标题" width="200">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>

      <el-table-column label="文章内容">
        <template slot-scope="scope">
          {{ scope.row.content }}
        </template>
      </el-table-column>

      <el-table-column label="作者ID" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.user_id }}</span>
        </template>
      </el-table-column>

      <el-table-column
        align="center"
        prop="created_at"
        label="发表时间"
        width="200"
      >
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.post_time }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="操作"
        align="center"
        width="230"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="{ row, $index }">
          <el-button type="primary" size="mini" @click="handleUpdate(row)">
            编辑
          </el-button>

          <!-- <el-button
            v-if="row.status != 'published'"
            size="mini"
            type="success"
            @click="handleModifyStatus(row, 'published')"
          >
            发布
          </el-button> -->

          <el-button
            v-if="row.status != 'deleted'"
            size="mini"
            type="danger"
            @click="handleDelete(row, $index)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { getList } from "@/api/table";

export default {

  data() {
    return {
      list: null,
      listLoading: true,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      this.axios
        .get("http://localhost:3000/blog/list")
        .then((res) => {
          this.list = res.data.blogs;
          this.listLoading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleDelete(row, index) {
      this.listLoading = true;
      this.$confirm("确定删除此篇文章?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.listLoading = true;
          let blog_id = row.blog_id;
          this.axios
        .post("http://localhost:3000/blog/deleteBlog",{
            blog_id:blog_id
        })
        .then((res) => {
          this.fetchData();
          this.listLoading = false;
        })
        .catch((err) => {
          console.log(err);
        });
        })

        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
