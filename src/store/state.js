const state = {
  // 用户 state
  // 调用接口后存储登录当前用户信息
  currentUser: {
    uid: ''
  },
  maxAge: 7*24*60*60*100,
  isLogin: true,

  //界面 state
  // Recommend 页面顺序列表
  recommendOrderList: [
    {
      name: 'recommend-list',
      title: '推荐歌单',
      order: 1
    },
    {
      name: 'broadcast',
      title: '独家放送',
      order: 2
    },
    {
      name: 'radio',
      title: '主播电台',
      order: 3
    },
    {
      name: 'latest-music',
      title: '最新音乐',
      order: 4
    },
    {
      name: 'selected-columns',
      title: '精选专栏',
      order: 5
    },
  ],
  // 判断是否排序
  isJustifyOrder: false,

  // 音乐 state
  // 判断播放器状态
  isPlayer: false,
  // 判断 FM 状态
  isFM: false,
  //FM 播放列表
  FMPlayList: [],
  // 判断右上角按钮 当前状态
  currentPlayer: true,
  // 判断当前是否在播放音乐
  isPlaying: false
}

export default state
