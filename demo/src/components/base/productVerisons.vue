<template>
  <div class="chooser-component">
    <ul class="chooser-list">
      <li v-for="(item,index) in selections"
          @click="toggleSelection(index)"
          :title="item.label"
          :class="{active: checkActive(index)}">{{item.label}}</li>
    </ul>
  </div>
  </div>
</template>
<script>
  import _ from 'lodash'
  export default {
    data(){
      return {
        nowIndex:[0]
      }
    },
    methods: {
      toggleSelection (index) {
        if(this.nowIndex.indexOf(index) ===-1) {
          this.nowIndex.push(index)
        }
        else {
          this.nowIndex = _.remove(this.nowIndex, (id) => {
              return id !== index
            })
        }
        let nowObjArray = _.map(this.nowIndex, (id) => {
            return this.selections[id]
          })
        this.$emit('on-change', nowObjArray)
      },
      checkActive (index) {
        return this.nowIndex.indexOf(index) !== -1
      }
    },
    props: {
      selections: {
        type:Array,
        default: [{
          label: 'test',
          value:0
        }]
      }
    }
  }
</script>
<style scoped>
  .chooser-component {
    position: relative;
    display: inline-block;
  }
  .chooser-list li{
    display: inline-block;
    border: 1px solid #e3e3e3;
    height: 25px;
    line-height: 25px;
    padding: 0 8px;
    margin-right: 5px;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
  }
  .chooser-list li.active {
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
  }
</style>
