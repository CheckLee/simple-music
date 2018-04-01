import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Account = (resolve) => {
  import('components/Account/Account').then((module) => {
    resolve(module)
  })
}

const UnLoginAccountCard = (resolve) => {
  import('components/Account/UnLoginAccountCard').then((module) => {
    resolve(module)
  })
}

const LoginedAccountCard = (resolve) => {
  import('components/Account/LoginedAccountCard').then((module) => {
    resolve(module)
  })
}

const Fans = (resolve) => {
  import('components/Fans/Fans').then((module) => {
    resolve(module)
  })
}

const Followers = (resolve) => {
  import('components/Followers/Followers').then((module) => {
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
      path: '/account',
      name: 'Account',
      component: Account,
      redirect: '/account/loginedaccount',
      children: [
        {
          path: 'unloginaccount',
          name: 'UnLoginAccount',
          component: UnLoginAccountCard
        },
        {
          path: 'loginedaccount',
          name: 'LoginedAccount',
          component: LoginedAccountCard
        }
      ]
    },
    {
      path: '/account/fans',
      name: 'fans',
      component: Fans
    },
    {
      path: '/account/followers',
      name: 'followers',
      component: Followers
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
