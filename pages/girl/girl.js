Page({
    data: {
        resData: []
    },
    onReady: function() {
      const that = this;
      //请求接口
      wx.request({
          url: 'http://gank.io/api/random/data/%E7%A6%8F%E5%88%A9/25',
          success: function(res) {
              console.log(res.data.results);
              that.setData({
                  resData: res.data.results
              })
          }
      })

    }

})
