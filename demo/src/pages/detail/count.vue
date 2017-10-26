<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2>数据统计</h2>
      <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
    </div>
    <div class="sales-board-form">
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          产品类型：
        </div>
        <div class="sales-board-line-right">
          <validTime :selections="buyTypes" @on-change="onChange('buyType',$event)"></validTime>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          适用地区：
        </div>
        <div class="sales-board-line-right">
          <selection :selections="districts" @on-change="onChange('area',$event)"></selection>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          有效时间：
        </div>
        <div class="sales-board-line-right">
          半年
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          总价：
        </div>
        <div class="sales-board-line-right">
          {{price}}
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">&nbsp;</div>
        <div class="sales-board-line-right">
          <div class="button" @click="buy">
            立即购买
          </div>
        </div>
      </div>
    </div>
    <div class="sales-board-des">
      <h2>产品说明</h2>
      <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>

      <table class="sales-board-table">
        <tbody>
        <tr class="ui-table-row">
          <td class="col-first">
            <div class="intro-pic">
              <label>安全安保</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>办公文教</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>彩票</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>车辆物流</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>成人用品</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>出版传媒</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>电脑硬件</label>
            </div>
          </td>
        </tr>
        <tr class="ui-table-row">
          <td class="col-first">
            <div class="intro-pic">
              <label>电子电工</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>房地产建筑装修</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>分类平台</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>服装鞋帽</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>箱包饰品</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>化工原料制品</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>机械设备</label>
            </div>
          </td>
        </tr>
        <tr class="ui-table-row">
          <td class="col-first">
            <div class="intro-pic">
              <label>家庭日用品</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>家用电器</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>教育培训</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>节能环保</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>金融服务</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>礼品</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>旅游住宿</label>
            </div>
          </td>
        </tr>
        <tr class="ui-table-row">
          <td class="col-first">
            <div class="intro-pic">
              <label>美容化妆</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>母婴护理</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>农林牧渔</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>软件</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>商务服务</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>生活服务</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>食品保健品</label>
            </div>
          </td>
        </tr>
        <tr class="ui-table-row">
          <td class="col-first">
            <div class="intro-pic">
              <label>手机数码</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>通讯服务设备</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>网络服务</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>医疗服务</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>游戏</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>运动休闲娱乐</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>招商加盟</label>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <mydiaLog :is-show="isShow" @on-close="closeDialog">
      <table class="buy-dialog-table">
        <tr>
          <th>产品类型</th>
          <th>适用地区</th>
          <th>总价</th>
        </tr>
        <tr>
          <td>{{ buyType.label }}</td>
          <td>{{ area.label }}</td>
          <td>{{ price }}</td>
        </tr>
      </table>
      <h3 class="buy-dialog-title">请选择银行</h3>
      <bankChooser @on-change="onChangeBanks"></bankChooser>
      <div class="button buy-dialog-btn" @click="configBuy">确定购买</div>
    </mydiaLog>
    <mydiaLog :is-Show="isShowErrDialog" @on-close="hideErrDialog">
      支付成功!
    </mydiaLog>
    <checkOrder :is-show-check-dialog="isShowCheckDialog" @on-close-check-dialog="hideCheckOrder"></checkOrder>
  </div>
</template>

<script>
  import validTime from '../../components/base/validTime.vue'
  import selection from '../../components/base/selection.vue'
  import diaLog from './../../components/base/diaLog.vue'
  import bankChooser from './../../components/bankChooser.vue'
  import checkOrder from './../../components/checkOrder.vue'
  import _ from 'lodash'
  export default {
    components: {
      validTime,
      selection,
      mydiaLog:diaLog,
      bankChooser,
      checkOrder
    },
    methods:{
      onChange (attr,val) {
        this[attr]=val
        this.getPrice()
      },
      getPrice () {
        let reqParams = {
          buyType: this.buyType.value,
          area: this.area.value,
        }
        this.$http.get('/Vue-demo/db.json', reqParams)
          .then((res) => {
          this.price=res.data.getPrice.amount

      })
      },
      buy(){
        this.isShow=true
      },
      closeDialog(){
        this.isShow=!this.isShow
      },
      hideErrDialog(){
        this.isShowErrDialog=false
      },
      hideCheckOrder(){
        this.isShowCheckDialog=false
      },
      onChangeBanks(banks){
        this.bankId = banks.id
        console.log(this.bankId)
      },
      configBuy(){
        let reqParams = {
          buyType: this.buyType.value,
          area: this.area.value,
          bankId:this.bankId,
        }
        this.$http.get('/Vue-demo/db.json', reqParams)
          .then((res) => {
          this.orderId=res.data.createOrder.orderId
        this.isShowCheckDialog=true
        this.isShow=false
        console.log(this.orderId)
      },(err) =>{
          this.isShow=false
          this.isShowErrDialog= true
        })
      }
    },
    data () {
      return {
        buyType: {},
        area:{},
        price:222,
        isShow:false,
        bankId:null,
        orderId: null,
        isShowCheckDialog:false,
        isShowErrDialog: false,
        buyTypes: [
          {
            label: '红色版',
            value: 0
          },
          {
            label: '绿色版',
            value: 1
          },
          {
            label: '紫色版',
            value: 2
          }
        ],
        districts: [
          {
            label: '北京',
            value: 0
          },
          {
            label: '上海',
            value: 1
          },
          {
            label: '广州',
            value: 2
          },
          {
            label: '天津',
            value: 3
          },
          {
            label: '武汉',
            value: 4
          },
          {
            label: '重庆',
            value: 5
          },
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .buy-dialog-title {
    font-size: 16px;
    font-weight: bold;
  }
  .buy-dialog-btn {
    margin-top: 20px;
  }
  .buy-dialog-table {
    width: 100%;
    margin-bottom: 20px;
  }
  .buy-dialog-table td,
  .buy-dialog-table th{
    border: 1px solid #e3e3e3;
    text-align: center;
    padding: 5px 0;
  }
  .buy-dialog-table th {
    background: #4fc08d;
    color: #fff;
    border: 1px solid #4fc08d;
  }
  .buy-dialog-table span {
    padding: 0px 5px 0px 5px;
  }
</style>
