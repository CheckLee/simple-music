import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Account = (resolve) => {
  import('components/Account.vue').then((module) => {
    resolve(module)
  })
}

const FoundMusic = (resolve) => {
  import('components/FoundMusic/FoundMusic').then((module) => {
    resolve(module)
  })
}
const Radio = (resolve) => {
  import('components/Radio/Radio').then((module) => {
    resolve(module)
  })
}
const Rank = (resolve) => {
  import('components/Rank/Rank').then((module) => {
    resolve(module)
  })
}
const Recommend = (resolve) => {
  import('components/Recommend/Recommend').then((module) => {
    resolve(module)
  })
}
const SongList = (resolve) => {
  import('components/SongList/SongList').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/foundmusic/recommend'
    },
    {
      path: '/Account',
      name: 'Account',
      component: Account
    },
    {
      path: '/foundmusic',
      name: 'FoundMusic',
      component: FoundMusic,
      children: [
        {
          path: 'recommend',
          name: 'Recommend',
          component: Recommend
        },
        {
          path: 'songlist',
          name: 'SongList',
          component: SongList
        },
        {
          path: 'radio',
          name: 'Radio',
          component: Radio
        },
        {
          path: 'rank',
          name: 'Rank',
          component: Rank
        }
      ]
    }
  ]
})
