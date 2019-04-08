<!-- The ref attr used to find the swiper instance -->
<template>
  <div class="transfer-body">
    <Transfer
      :data="notSelectionData"
      :targetKeys="selectionData"
      filterable
      :filter-method="filterMethod"
      @on-change="handleChange2"
      :titles="titles"
      :selected-keys="selectedKeys"
    ></Transfer>
    <div label="xxx" v-for="(tag,i) in selectTags" :key="i">
      <Checkbox :value="tag.selection==1">
        <span>{{tag.name}}</span>
      </Checkbox>
    </div>
  </div>
</template>

<script>
export default {
  name: "carrousel",
  data() {
    return {
      selectedKeys: [],
      notSelectionData: [], // 未选择的数据
      selectionData: [], // 已经选择的数据
      titles: ["未选择的", "已经选择的"],
      selectTags: []
    };
  },
  methods: {
    getNotSelectData() {
      for (let i = 0; i <= demo.length - 1; i++) {
        let data = demo[i];
        this.notSelectionData.push({
          key: data.id,
          label: data.name,
          description: data.name,
          disabled: false
        });
      }
      console.log("dataList getNotSelectData", this.notSelectionData);
    },
    getSelectData() {
      for (let i = 0; i <= demo.length - 1; i++) {
        let data = demo[i];
        console.log("data.selection", data.selection == 1);
        if (data.selection == 1) {
          this.selectionData.push(data.id);
          data.tagS.forEach(tag => {
            this.selectTags.push(tag);
          });
        }
      }
      console.log("dataList getSelectData", this.selectionData);
    },

    handleChange2(newTargetKeys) {
      this.selectionData = newTargetKeys;
      console.log("selectedKeys", this.selectedKeys);
      this.changeTags();
    },
    // 显示选择的tags
    changeTags() {
      this.selectTags = [];
      let selectionData = this.selectionData;
      selectionData.forEach(id => {
        for (let i = 0; i <= demo.length - 1; i++) {
          let data = demo[i];
          if (data.id == id) {
            data.tagS.forEach(tag => {
              this.selectTags.push(tag);
            });
          }
        }
      });
    },
    filterMethod(data, query) {
      return data.label.indexOf(query) > -1;
    }
  },
  computed: {},
  mounted() {
    this.getNotSelectData(); // 未选择的数据
    this.getSelectData(); // 已经选择的数据
  }
};

const demo = [
  {
    id: 12, //字段id
    name: "贷款额度12", //字段名称
    actValue: "1000-5000", //字段实际值
    showIndex: 1, //是否首页展示 0：否 1:是
    selection: 0, //是否已经选中 0：否 1:是
    tagS: [
      {
        id: 5, //标签id
        name: "测试2", //标签名
        selection: 0 //是否已经选中 0：否 1:是
      },
      {
        id: 9,
        name: "打打",
        selection: 1
      }
    ]
  },
  {
    id: 13, //字段id
    name: "贷款额度13", //字段名称
    actValue: "1000-5000", //字段实际值
    showIndex: 0, //是否首页展示 0：否 1:是
    selection: 1, //是否已经选中 0：否 1:是
    tagS: [
      {
        id: 3, //标签id
        name: "13-测试2", //标签名
        selection: 1 //是否已经选中 0：否 1:是
      },
      {
        id: 1,
        name: "13-打打",
        selection: 0
      }
    ]
  },
  {
    id: 14, //字段id
    name: "贷款额度14", //字段名称
    actValue: "1000-5000", //字段实际值
    showIndex: 1, //是否首页展示 0：否 1:是
    selection: 0, //是否已经选中 0：否 1:是
    tagS: [
      {
        id: 5, //标签id
        name: "14-测试2", //标签名
        selection: 1 //是否已经选中 0：否 1:是
      },
      {
        id: 9,
        name: "14-打打",
        selection: 0
      },
      {
        id: 15, //标签id
        name: "14-测试2", //标签名
        selection: 1 //是否已经选中 0：否 1:是
      },
      {
        id: 19,
        name: "14-打打",
        selection: 1
      }
    ]
  }
];
</script>

<style scoped>
</style>