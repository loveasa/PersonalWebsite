<template>
  <div class="components-container">

    <div class="editor-container" style="padding: 20px">
      <div class="inputDeep" style="margin-bottom: 20px; display: flex">
        <el-tag type="success">标题</el-tag>
        <el-input v-model="input" placeholder="请输入内容"></el-input><br />
      </div>

      <el-tag type="danger">正文</el-tag>
      <markdown-editor
        ref="markdownEditor"
        v-model="content"
        :language="language"
        height="300px"
      />
    </div>

    <el-button
      style="margin: 20px"
      type="primary"
      icon="el-icon-document"
      @click="PostEssay"
    >
      发布
    </el-button>
  </div>
</template>

<script>
import MarkdownEditor from "@/components/MarkdownEditor";

const content = `
**This is test**

* vue
* element
* webpack

`;
export default {
  // name: "PostEssay",
  components: { 
    MarkdownEditor 
    },
  data() {
    return {
      content: content,
      msg: "",
      input: "",
      languageTypeList: {
        en: "en_US",
        zh: "zh_CN",
        es: "es_ES",
      },
    };
  },
  computed: {
    language() {
      return this.languageTypeList["en"];
    },
  },
  methods: {
    PostEssay() {
      if (this.input.trim() == "") {
        this.$message({
          showClose: true,
          message: "题目不能为空",
          type: "warning",
        });
      } else {
        this.msg = this.$refs.markdownEditor.getHtml();
        this.axios
          .post("http://localhost:3000/blog/post", {
            title: this.input,
            content: this.msg,
          })
          .then((res) => {
            alert("发表成功");
            this.html = "";
            this.content = "";
            this.input = "";
          });
      }
    },
  },
};
</script>

<style scoped>
.inputDeep >>> .el-input__inner {
  border: 0;
  border-bottom: 1px solid #ccc;
}
</style>