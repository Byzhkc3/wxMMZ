//index.js
Page({
    data: {
        resData: []
    },
    onLoad: function() {
      const that = this;
      //请求接口
      wx.request({
          url: 'http://japi.juhe.cn/joke/content/text.from?key=\
          &page=1&pagesize=20',
          success: function(res) {
            //   console.log(res.data.result.data);
              that.setData({
                  resData: res.data.result.data
              })
          }
      })

    }

})
