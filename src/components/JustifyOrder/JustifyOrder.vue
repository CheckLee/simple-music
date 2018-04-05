<template>
  <div class="justify-order" v-show="isJustifyOrder">
    <div class="header">
      <span class="title">调整栏目顺序</span>
      <span class="finish" @click="finish">完成</span>
    </div>
    <div class="tip">
      <i class="material-icons">lightbulb_outline</i>
      <span>想调整首页栏目的顺序？按住右边按钮拖动即可</span>
    </div>
    <section class="drag-wrapper">
      <draggable element="ul"
                 :options="dragOptions"
                 class="list-group"
                 v-model="orderList"
                 @start="drag=true" @end="drag=false">
        <transition-group type="transition" name="order">
          <li class="list-group-item" v-for="item in orderList" :key="item.order">
            {{ item.title }}
            <i class="material-icons handle">reorder</i>
          </li>
        </transition-group>
      </draggable>
    </section>
    <div class="footer">
      <span class="recovery-order" @click="recoveryOrder">恢复默认排序</span>
    </div>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  import { mapMutations } from 'vuex'
  export default {
    name: "justify-order",
    data() {
      return {
        dragOptions: {
          handle: '.handle',
          animation: 150,
          ghostClass: 'ghost',
          chosenClass: 'chosen'
        }
      }
    },
    computed: {
      isJustifyOrder() {
        return this.$store.state.isJustifyOrder
      },
      orderList: {
        get() {
          return this.$store.state.recommendOrderList
        },
        set(value) {
          this.$store.commit('SET_RECOMMEND_ORDER_LIST', value)
        }
      }
    },
    methods: {
      ...mapMutations({
        setJustifyOrder: 'SET_JUSTIFY_ORDER',
        setSortOrder: 'SET_SORT_ORDER'
      }),
      recoveryOrder() {
        /*this.orderList = this.orderList.sort((a, b) => {
          return a.order - b.order
        })*/
        this.setSortOrder()
      },
      finish() {
        this.setJustifyOrder()
      }
    },
    components: {
      draggable
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~assets/stylus/variable.styl"
  @import "JustifyOrder.styl"
</style>
