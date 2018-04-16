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

const LoginIn = (resolve) => {
  import('components/Account/LoginIn').then((module) => {
    resolve(module)
  })
}

const PhoneLoginIn = (resolve) => {
  import('components/Account/PhoneLoginIn').then((module) => {
    resolve(module)
  })
}

const PhoneSignUp = (resolve) => {
  import('components/Account/PhoneSignUp').then((module) => {
    resolve(module)
  })
}

const PhoneValidate = (resolve) => {
  import('components/Account/PhoneValidate').then((module) => {
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

const Friends = (resolve) => {
  import('components/Friends/Friends').then((module) => {
    resolve(module)
  })
}

const PushTweets = (resolve) => {
  import('components/Friends/PushTweets').then((module) => {
    resolve(module)
  })
}

const Tweets = (resolve) => {
  import('components/Friends/Tweets').then((module) => {
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
      path: '/signup/phonesignup',
      name: 'phoneSignup',
      component: PhoneSignUp
    },
    {
      path: '/signup/phonevalidate',
      name: 'phoneValidate',
      component: PhoneValidate
    },
    {
      path: '/loginin',
      name: 'loginin',
      component: LoginIn
    },
    {
      path: '/loginin/phonelogin',
      name: 'PhoneLoginIn',
      component: PhoneLoginIn
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
      name: 'Fans',
      component: Fans
    },
    {
      path: '/account/followers',
      name: 'Followers',
      component: Followers
    },
    {
      path: '/friends',
      name: 'Friends',
      component: Friends,
      redirect: '/friends/tweets',
      children: [
        {
          path: 'tweets',
          name: 'Tweets',
          component: Tweets
        },
        {
          path: 'pushtweets',
          name: 'pushtweets',
          component: PushTweets
        }
      ]
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
