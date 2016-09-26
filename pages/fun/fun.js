Page({
    data: {
        resData: []
    },
    onLoad: function() {
      const that = this;
      //请求接口
      wx.request({
          url: 'http://v.juhe.cn/joke/randJoke.php?key=\
          &type=pic',
          success: function(res) {
              // console.log(res.data.result);
              that.setData({
                  resData: res.data.result
              })
          }
      })

    }

})
