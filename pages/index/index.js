//index.js
Page({
    data: {
        resData: []
    },
    onLoad: function() {
       
        wx.request({
            url: 'http://japi.juhe.cn/joke/content/text.from?key=\
            &page=1&pagesize=20',
            success: function(res) {
                console.log(res.data.result.data);
                this.setData({
                    resData: res.data.result.data
                })
            }
        })

    }

})
