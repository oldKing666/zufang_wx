//app.js
import { Token } from 'utils/token.js';
App({


  onLaunch: function () {
    var token = new Token();
    token.verify();


  },

  





  // globalData: {
  //   url:'http://zufang.xiaoxixi.store/index.php/api/v1/'
  // }
})