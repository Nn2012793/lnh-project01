<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <my-bread>文章内容</my-bread>
      </div>
      <el-form label-width="80px" size="small">
        <el-form-item label="状态">
          <el-radio-group v-model="filterParams.status">
            <!-- 文章状态，0-草稿，1-待审核，2-审核通过，3-审核失败，4-已删除，不传为全部 -->
            <el-radio :label="null">全部</el-radio>
            <el-radio :label="0">草稿</el-radio>
            <el-radio :label="1">待审核</el-radio>
            <el-radio :label="2">审核通过</el-radio>
            <el-radio :label="3">审核失败</el-radio>
            <el-radio :label="4">已删除</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="频道">
          <el-select
            v-model="filterParams.channel_id"
            placeholder="请选择"
            clearable
            @change="changeChannel"
          >
            <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="起止时间">
          <el-date-picker
            v-model="dateArr"
            @change="changer"
            value-format="yyyy-MM-dd"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">筛选</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card>
      <div slot="header">根据筛条件共查到{{total}}条数据</div>
      <el-table :data="articles" style="width: 100%">
        <el-table-column label="封面">
          <template slot-scope="scope">
            <el-image
              style="width: 100px;
            height: 100px"
              :src="scope.row.cover.images[0]"
            >
              <div slot="error" class="image-slot">
                <img src="../../assets/error.gif" style="width:100px" />
              </div>
            </el-image>
          </template>
        </el-table-column>
        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column prop="address" label="状态">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.status===0" type="info">草稿</el-tag>
            <el-tag v-if="scope.row.status===1">待审核</el-tag>
            <el-tag v-if="scope.row.status===2" type="success">审核通过</el-tag>
            <el-tag v-if="scope.row.status===3" type="warning">审核失败</el-tag>
            <el-tag v-if="scope.row.status===4" type="danger">已删除</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="pubdate" label="发布时间"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="editArticle(scope.row.id)" type="primary" icon="el-icon-edit" circle plain></el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              plain
              @click="deletItem(scope.row.id)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        style="margin-top:15px;text-align:right"
        layout="prev, pager, next"
        @current-change="newPage"
        :total="total"
        :page-size="filterParams.perpage"
        :current-page="filterParams.page"
      ></el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [],
      filterParams: {
        status: null,
        channel_id: null,
        begin_pubdate: null,
        end_pubdate: null,
        page: 1,
        perpage: 20
      },
      dateArr: [],
      articles: [],
      total: 0
    }
  },
  created () {
    this.getChannelOptions()
    this.getArticle()
  },
  methods: {
    async getChannelOptions () {
      const {
        data: { data }
      } = await this.$http.get('channels')
      this.options = data.channels
    },
    async getArticle () {
      const {
        data: { data }
      } = await this.$http.get('articles', { params: this.filterParams })
      this.articles = data.results
      this.total = data.total_count
    },
    newPage (newpage) {
      this.filterParams.page = newpage
      this.getArticle()
    },
    search () {
      this.filterParams.page = 1
      this.getArticle()
    },
    changer (value) {
      if (!value) value = [null, null]
      this.filterParams.begin_pubdate = value[0]
      this.filterParams.end_pubdate = value[1]
    },
    changeChannel (value) {
      if (!value) this.filterParams.channel_id = null
    },
    async deletItem (id) {
      try {
        await this.$http.delete(`articles/${id}`)
        this.$message.success('删除成功')
        this.getArticle()
      } catch (e) {
        this.$message.error('删除失败')
      }
    },
    editArticle (id) {
      this.$router.push(`/publish?id=${id}`)
    }
  }
}
</script>

<style lang="less" scoped>
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>
