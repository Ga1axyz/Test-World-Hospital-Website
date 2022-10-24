/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ga1axy_z
 * @Date: 2022-09-21 23:17:27
 * @LastEditors: Ga1axy_z
 * @LastEditTime: 2022-09-29 23:53:29
 */
new Vue({
    el: '#reservation',
    data: {
        departmentInfo: [
            {name: '内科',
             id: 'depart_0',
             detail: [  {name: '心血管内科',id: 'subdepart_0'},
                        {name: '消化内科',id: 'subdepart_1'},
                        {name: '呼吸内科',id: 'subdepart_2'},
                        {name: '内分泌代谢科',id: 'subdepart_3'},
                        {name: '肾脏内科',id: 'subdepart_4'},
                        {name: '血液病专科',id: 'subdepart_5'}],
             subAmount: 6,
            },
            {name: '外科',
             id: 'depart_1',
             detail: [  {name: '疼痛科',id: 'subdepart_6'},
                        {name: '脊柱外科',id: 'subdepart_7'},
                        {name: '泌尿外科',id: 'subdepart_8'},
                        {name: '神经外科',id: 'subdepart_9'},
                        {name: '骨外科',id: 'subdepart_10'}],
             subAmount: 5,
            },
            {name: '妇产科',
             id: 'depart_2',
             detail: [  {name: '妇科',id: 'subdepart_11'},
                        {name: '产科',id: 'subdepart_12'},
                        {name: '更年期门诊',id: 'subdepart_13'},
                        {name: '子宫专诊',id: 'subdepart_14'}],
             subAmount: 4,
            },
            {name: '儿科',
             id: 'depart_3',
             detail: ['门诊儿科','儿童哮喘专科','儿童血液专科','儿童生长发育专科','儿童消化肝病专科','儿童发育行为心理门诊'],
             subAmount: 6,
            },
            {name: '中医科',
             id: 'depart_4',
             detail: ['中医科','针灸科','中西结合科'],
             subAmount: 3,
            },
            {name: '健康护理科',
             id: 'depart_5',
             detail: ['减压护理门诊','伤口造口门诊','导管维护门诊','医学美容科'],
             subAmount: 4,
            },
        ],
        doctorInfo: [
            {name: '内科 / 心血管内科',
             id: 'subdepart_0',
             detail: [  {name: 'Sheldon',id: '0_0',state: '1',lever: '1',intro: '这是一段简短的医生介绍，包括擅长治疗方向、个人简介等'},
                        {name: 'Leonard',id: '0_1',state: '1',lever: '1',intro: '这是一段简短的医生介绍，包括擅长治疗方向、个人简介等'},
                        {name: 'Penny',id: '0_2',state: '1',lever: '2',intro: '这是一段简短的医生介绍，包括擅长治疗方向、个人简介等'},
                        {name: 'Howard',id: '0_3',state: '0',lever: '3',intro: '这是一段简短的医生介绍，包括擅长治疗方向、个人简介等'},
                        {name: 'Rajesh',id: '0_4',state: '1',lever: '3',intro: '这是一段简短的医生介绍，包括擅长治疗方向、个人简介等'},
                        {name: 'Dr.Bernadette',id: '0_5',state: '1',lever: '3',intro: '这是一段简短的医生介绍，包括擅长治疗方向、个人简介等'}],
            },
            {name: '内科 / 消化内科',
             id: 'subdepart_1',
             detail: [  {name: 'やまざき けんと',id: '1_0',state: '1',lever: '1',intro: '这是一段简短的医生介绍，包括擅长治疗方向、个人简介等'},
                        {name: 'つちや たお',id: '1_1',state: '1',lever: '1',intro: '这是一段简短的医生介绍，包括擅长治疗方向、个人简介等'},
                        {name: 'むらかみ にじろう',id: '1_2',state: '0',lever: '2',intro: '这是一段简短的医生介绍，包括擅长治疗方向、个人简介等'}],
            },
            {name: '内科 / 呼吸内科',
             id: 'subdepart_2',
             detail: [  {name: 'Науэль Перес Бискайарт',id: '2_0',state: '1',lever: '1',intro: '这是一段简短的医生介绍，包括擅长治疗方向、个人简介等'},
                        {name: 'Ларс Айдингер',id: '2_1',state: '1',lever: '3',intro: '这是一段简短的医生介绍，包括擅长治疗方向、个人简介等'}],
            },
            {name: '内科 / 内分泌代谢科',
             id: 'subdepart_3',
             detail: [  {name: 'Álvaro Morte',id: '3_0',state: '0',lever: '1',intro: '这是一段简短的医生介绍，包括擅长治疗方向、个人简介等'},
                        {name: 'Itziar Ituño',id: '3_0',state: '1',lever: '2',intro: '这是一段简短的医生介绍，包括擅长治疗方向、个人简介等'}],
            },
            {name: '内科 / 肾脏内科',
             id: 'subdepart_4',
             detail: [  {name: '狄仁杰',id: '4_0',state: '1',lever: '1',intro: '这是一段简短的医生介绍，包括擅长治疗方向、个人简介等'},
                        {name: '李元芳',id: '4_0',state: '1',lever: '1',intro: '这是一段简短的医生介绍，包括擅长治疗方向、个人简介等'}],
            },
            {name: '内科 / 血液病专科',
             id: 'subdepart_5',
             detail: [  {name: '주지훈',id: '5_0',state: '1',lever: '1',intro: '这是一段简短的医生介绍，包括擅长治疗方向、个人简介等'},
                        {name: '배두나',id: '5_1',state: '1',lever: '3',intro: '这是一段简短的医生介绍，包括擅长治疗方向、个人简介等'}],
            },
            {name: '外科 / 疼痛科',
             id: 'subdepart_6',
             detail: [  {name: 'Tony Stark',id: '6_0',state: '1',lever: '1',intro: '这是一段简短的医生介绍，包括擅长治疗方向、个人简介等'},
                        {name: 'Steve Rogers',id: '6_1',state: '0',lever: '2',intro: '这是一段简短的医生介绍，包括擅长治疗方向、个人简介等'},
                        {name: 'Natasha Romanoff',id: '6_2',state: '1',lever: '3',intro: '这是一段简短的医生介绍，包括擅长治疗方向、个人简介等'}],
            },
            {name: '外科 / 脊柱外科',
             id: 'subdepart_7',
             detail: [  {name: 'Clint Barton',id: '7_0',state: '1',lever: '1',intro: '这是一段简短的医生介绍，包括擅长治疗方向、个人简介等'},
                        {name: 'Bruce Banner',id: '7_0',state: '1',lever: '1',lever: '1',intro: '这是一段简短的医生介绍，包括擅长治疗方向、个人简介等'}],
            },
            {name: '外科 / 泌尿外科',
             id: 'subdepart_8',
             detail: [  {name: 'Thor',id: '8_0',state: '1',lever: '1',intro: '这是一段简短的医生介绍，包括擅长治疗方向、个人简介等'},
                        {name: 'Loki',id: '8_1',state: '0',lever: '1',intro: '这是一段简短的医生介绍，包括擅长治疗方向、个人简介等'}],
            },
            {name: '外科 / 神经外科',
             id: 'subdepart_9',
             detail: [  {name: 'Pepper Potts',id: '9_0',state: '1',lever: '1',intro: '这是一段简短的医生介绍，包括擅长治疗方向、个人简介等'},
                        {name: 'Nick Fury',id: '9_1',state: '1',lever: '2',intro: '这是一段简短的医生介绍，包括擅长治疗方向、个人简介等'}],
            },
            {name: '外科 / 骨外科',
             id: 'subdepart_10',
             detail: [  {name: 'Wanda Maximoff',id: '10_0',state: '1',lever: '1',intro: '这是一段简短的医生介绍，包括擅长治疗方向、个人简介等'},
                        {name: 'James Rhodes',id: '10_1',state: '1',lever: '3',intro: '这是一段简短的医生介绍，包括擅长治疗方向、个人简介等'}],
            },
        ],
        scheduleInfoAm: [
            {
                date: '2022-09-30',
                doctor: '0_0',
                currentBooked: 0,
                maxBooked: 5,
            },
            {
                date: '2022-10-01',
                doctor: '0_0',
                currentBooked: 5,
                maxBooked: 5,
            },
            {
                date: '2022-10-02',
                doctor: '0_0',
                currentBooked: 0,
                maxBooked: 5,
            },
            {
                date: '2022-10-03',
                doctor: '0_0',
                currentBooked: 5,
                maxBooked: 5,
            },
            {
                date: '2022-10-04',
                doctor: '0_0',
                currentBooked: 2,
                maxBooked: 5,
            },
            {
                date: '2022-10-05',
                doctor: '0_0',
                currentBooked: 0,
                maxBooked: 5,
            },
            {
                date: '2022-10-06',
                doctor: '0_0',
                currentBooked: 0,
                maxBooked: 0,
            },
        ],
        scheduleInfoPm: [
            {
                date: '2022-09-30',
                doctor: '0_0',
                currentBooked: 2,
                maxBooked: 2,
            },
            {
                date: '2022-10-01',
                doctor: '0_0',
                currentBooked: 5,
                maxBooked: 5,
            },
            {
                date: '2022-10-02',
                doctor: '0_0',
                currentBooked: 0,
                maxBooked: 5,
            },
            {
                date: '2022-10-03',
                doctor: '0_0',
                currentBooked: 0,
                maxBooked: 5,
            },
            {
                date: '2022-10-04',
                doctor: '0_0',
                currentBooked: 0,
                maxBooked: 5,
            },
            {
                date: '2022-10-05',
                doctor: '0_0',
                currentBooked: 0,
                maxBooked: 5,
            },
            {
                date: '2022-10-06',
                doctor: '0_0',
                currentBooked: 0,
                maxBooked: 0,
            },
        ],
        currentShowID: 'depart_0',       // 用于左侧导航栏子栏目的展示&折叠
        currentSubDepartmentID: '0',     // 用于获取用户选择的子科室 ID
        currentSubDepartment: { name: '内科 / 心血管内科',
                                id: 'subdepart_0',
                                detail: [  {name: 'Sheldon',id: '0_0',state: '1',lever: '1',intro: '这是一段简短的医生介绍，包括擅长治疗方向、个人简介等'},
                                           {name: 'Leonard',id: '0_1',state: '1',lever: '1',intro: '这是一段简短的医生介绍，包括擅长治疗方向、个人简介等'},
                                           {name: 'Penny',id: '0_2',state: '1',lever: '2',intro: '这是一段简短的医生介绍，包括擅长治疗方向、个人简介等'},
                                           {name: 'Howard',id: '0_3',state: '0',lever: '3',intro: '这是一段简短的医生介绍，包括擅长治疗方向、个人简介等'},
                                           {name: 'Rajesh',id: '0_4',state: '1',lever: '3',intro: '这是一段简短的医生介绍，包括擅长治疗方向、个人简介等'},
                                           {name: 'Dr.Bernadette',id: '0_5',state: '1',lever: '3',intro: '这是一段简短的医生介绍，包括擅长治疗方向、个人简介等'}],
                                },                      // doctorInfo 数组中对应当前选择项的对象，用于右侧卡片组的展示
        currentChosenSub: 'subdepart_-1',               // 用于当前左侧科室导航栏二级科室选中后改变背景颜色
        isReserve: false,                                // 用于切换 选择科室模块 与 挂号预约模块
        isPatientInfoExist: 0,                          // 用于切换显示 新增就诊人信息 与 修改就诊人信息，0 显示功能选择按钮，1 显示新增就诊人，2 显示查询就诊人信息，3 显示修改查询到的信息
        currentDoctor: { name: 'Sheldon', id: '0_0', state: '1', lever: '1', intro: '这是一段简短的医生介绍，包括擅长治疗方向、个人简介等'},      // 当前所选医生
        currentPatient: { name: '', nation: '', gender: '', cardType: '', cardNumber: '', birthday: '', telephone: ''},     // 用来记录当前就诊人
        searchPatient: { name: '', nation: '', gender: '', cardType: '', cardNumber: '', birthday: '', telephone: ''},      // 用来记录查询返回的就诊人信息
        updatePatient: { name: '', nation: '', gender: '', cardType: '', cardNumber: '', birthday: '', telephone: ''},      // 用来记录查询用户更新的就诊人信息
        userSubmitInfo: { name: '', cardType: '', cardNumber: ''},          // 用户在搜索就诊人信息时输入的数据
        isShowSearchResult: false,                      // 用于判断是否显示查询数据
        isShowSearchResultUpdate: false,                // 用于判断是否显示修改数据
        dateData: '',                                   // 保存 Date() 方法获取到的日期对象，值为当日日期
        currentBookedDate: '',                          // 保存当前选中的预约日期
        currentBookedAmPm: '',                          // 保存当前选中的是上午还是下午
        days: [],                                       // 保存从今日开始七天的日期
        isShowSubmitForm: false,                        // 用于挂号预约确认模态框新增或修改当前就诊人信息
        isShowSearchReservationResult: false,           // 用于切换显示预约记录
        searchReservation: [],                          // 用来记录查询到的挂号信息
    },
    methods: {
        clickWho: function(clickedBtn) {                            // 用于左侧导航栏子栏目的展示&折叠
            // 获取当前点击事件第一个子元素的ID
            this.currentShowID = clickedBtn.currentTarget.firstElementChild.getAttribute('getClickedId');
        },
        chooseWhichDepartment: function(clickedItem,index) {        // 用于切换右侧医生表格信息
            var subDepartmentID = clickedItem.currentTarget.getAttribute('getClickedId');
            this.currentSubDepartmentID = this.getSubIndex(subDepartmentID);
            this.currentChosenSub = 'subdepart_' + this.currentSubDepartmentID;
            this.currentSubDepartment = this.doctorInfo[this.currentSubDepartmentID];
            console.log(this.currentSubDepartment);
        },
        deleteReservation: function(clickedItem) {                  // 用于取消预约挂号
            var reservationRecordID = clickedItem.currentTarget.getAttribute('id');
            reservationRecordID = this.getSubIndex(reservationRecordID);
            this.searchReservation.splice(reservationRecordID,1);   // 用作演示，有bug，实际上得调用后端接口
            console.log(this.searchReservation);
        },
        getSubIndex: function(chosenId) {                           // 切割点击左侧列表得到的子科室对应ID，eg：subdepart_1，得到 1
            var idStr = chosenId.toString();
            var idStrPos = idStr.indexOf("_");
            var idStrLength = chosenId.length;
            return idStr.substr(idStrPos+1,idStrLength);
        },
        isReserving: function(docter) {                             // 切换 医生排班信息页面 与 选择医生页面
            this.isReserve = !this.isReserve;
            this.currentDoctor = docter;
            this.isPatientInfoExist = 0;
            // var dateData = new Date();      
            // this.dateInfo = dateData.toLocaleDateString();          // 获取当前数据，格式为 2022/9/27
            // this.dateInfo = this.dateInfo.replace("/","-");         // 常规的替换只能替换第一次匹配的字符串
            // this.dateInfo = this.dateInfo.replace(/\//g,"-");       // 而通过正则则可以替换所有匹配的字符串，\/ 为 / 加上 \ 转义符
            // console.log(this.dateInfo);
            scrollTo(0,0);                                          // 滚动到页面顶部
        },
        deletePatientInfo: function() {                             // 删除当前就诊人信息
            if(confirm("您确实要删除吗？")){
                this.resetCurrentPatient();
            }
        },
        savePatientInfo: function() {                               // 保存填写的就诊人信息
            this.isPatientInfoExist = 0;
        },
        resetCurrentPatient: function() {                           // 清空当前就诊人信息
            this.currentPatient = { name: '', nation: '', gender: '', cardType: '', cardNumber: '', birthday: '', telephone: ''};
        },
        searchDoc: function(clickedBtn) {                           // 根据关键字搜索科室或医生
        
        },
        searchPatientInfo: function() {                             // 根据用户输入的信息查找就诊人记录
            this.isShowSearchResult = true;
            this.searchPatient = { name: '查询返回的用户', nation: '汉族', gender: '男', cardType: '中华人民共和国居民身份证', cardNumber: '430430430430430430430', birthday: '20220927', telephone: '18318318318'};
        },
        searchReservationInfo: function() {                         // 根据用户输入的信息查找挂号记录
            this.isShowSearchReservationResult = true;
            this.searchReservation = [  { id:'0', department: '内科 / 心血管内科', doctor: 'Sheldon', date: '2022-09-28', ampm: 'am', patient: 'user' },
                                        { id:'1', department: '外科 / 疼痛科', doctor: 'Tony Stark', date: '2022-09-30', ampm: 'am', patient: 'user' },
                                        { id:'2', department: '内科 / 消化内科', doctor: 'つちや たお', date: '2022-10-02', ampm: 'pm', patient: 'user' },
            ];
        },
        choosePatientInfo: function() {                             // 将查询到的就诊人信息保存为当前就诊人信息
            this.isShowSearchResult = false;
            this.currentPatient = this.searchPatient;
            this.searchPatient = { name: '', nation: '', gender: '', cardType: '', cardNumber: '', birthday: '', telephone: ''};
            this.isPatientInfoExist = 0;
        },
        updatePatientInfo: function() {                             // 基于查询到的就诊人信息进一步更新
            this.isShowSearchResult = false;
            this.isPatientInfoExist = 3;
            this.updatePatient = this.searchPatient;
            this.searchPatient = { name: '', nation: '', gender: '', cardType: '', cardNumber: '', birthday: '', telephone: ''};
        },
        saveUpdatePatientInfo: function() {                        // 保存修改后的就诊人信息
            this.isShowSearchResult = false;
            this.isPatientInfoExist = 0;
            this.currentPatient = this.updatePatient;
            this.updatePatient = { name: '', nation: '', gender: '', cardType: '', cardNumber: '', birthday: '', telephone: ''};
        },
        saveReservationInfo: function() {                           // 保存预约挂号信息
            this.isShowSubmitForm = false;
            this.isShowSearchReservationResult = false;
        },
        getDayName: function(day) {                                 // 将一周中的第几天转换成中文的周几
            var day = parseInt(day);
            var dayName = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
            return dayName[day];
        },
        getWeekData: function(time) {
            var tempDate = time;
            var tableData = [];
            for (var i = 0; i < 7; i++) {
                var ymd = this.formatDate(tempDate);
                tableData.push({
                    'date': ymd,                                    // 完整日期，如 2022-09-28
                    'week': this.getDayName(tempDate.getDay()),     // 周几，如 周三
                    'shortDate': this.formatDate2(tempDate),        // 几月几日，如 9月27日
                });
                tempDate.setDate(tempDate.getDate() + 1);
            }
            this.days = tableData;
        },
        formatDate: function(date) {                                // 格式化日期数据，如 2022-09-27
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var month = (month < 10 ? '0' + month : month).toString();
            var day = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()).toString();
            return year + '-' + month + '-' + day;
        },
        formatDate2: function(date) {                               // 格式化日期数据，如 9月27日
            var month = date.getMonth() + 1;
            var month = month.toString();
            var day = date.getDate().toString();
            return month + '月' + day + '日';
        },
        getIndex: function(item, index, AmPm) {                     // 获取当前点击预约时间，如 2022-09-27 am
            this.currentBookedDate = item;
            this.currentBookedAmPm = AmPm;
            console.log(this.currentBookedDate);
            console.log(this.currentBookedAmPm);
        },
        resetSearchInfo: function() {                               // 将查询到的挂号信息清空
            this.isShowSearchReservationResult = true;
            this.searchReservation = [];
            this.userSubmitInfo  = { name: '', cardType: '', cardNumber: ''};
        }
    },
    mounted: function() {
        this.dateData = new Date();                                 // 获得当日的日期，Date 函数返回一个 Date 对象
        this.day = this.dateData.getDay();                          // 返回一周中的某一天 (0 ~ 6)
        this.date = this.dateData.getDate();                        // 返回一个月中的某一天 (1 ~ 31)
        this.month = this.dateData.getMonth() + 1;                  // 返回月份 (0 ~ 11)
        this.currentBookedDate = this.formatDate(this.dateData);    // 保存格式化后的当前日期，如 2022-09-28
        this.getWeekData(this.dateData);                            // 生成一周的日期数据
    },
})

// 自动弹出公告
$('#covid19-notice').modal();