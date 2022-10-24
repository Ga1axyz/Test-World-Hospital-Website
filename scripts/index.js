// index.html 背景图片响应式变化
new Vue({
    el: '#home',
    data: {
        home_pic_url: "../images/bg_pic2.png",
        currentID: 2,
    },
    methods: {
        change_bg_pic: function() {
            this.currentID ++;
            if(this.currentID == 4)
                this.currentID = 1;
            //判断是否宽屏
            var winWide = window.screen.width;
            var wideScreen = true;
            if (winWide >= 633) {
                wideScreen = true; 
            } else {
                wideScreen = false;
            }
            if(wideScreen)
                this.home_pic_url = '../images/bg_pic' + this.currentID + '.png';
            else
                this.home_pic_url = '../images/bg_pic' + this.currentID + '_sm.png';
        },
        go_reservation: function() {
            window.location.href = '../reservation.html';
        }
    },
    mounted(){
        //在mounted 声明周期中创建定时器
        const timer = setInterval(()=>{
            this.change_bg_pic()
        }, 10000)
        // 通过$once来监听定时器
        this.$once('hook:beforeDestroy',()=>{
            // 在页面销毁时，销毁定时器
            clearInterval(timer)
        })
    }
})