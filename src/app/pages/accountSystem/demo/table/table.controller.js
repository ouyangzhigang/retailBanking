'use strict';

module.exports = function TableController(uiGridConstants) {
    console.log("我进来了");
        var vm=this;
        vm.gridOptions = {
            enableRowSelection: false,
            enableRowHeaderSelection: false,
            enableColumnMenus:false,
            columnDefs:[
              {
                name: '客户姓名1',
                enableSorting:false,//能否排序
                field:"customerName"
            }, {
                name: '性别',
                enableCellEdit:false,//是否编辑
                field:"sex"
            }, {
                name: '证件类型',
                field:"identification"
            }, {
                name: '出生日期',
                field:"birthday"
            }, {
                name: '联系电话',
                field:"mobile"
            }, {
                name: '邮箱地址',
                field:"email"
            }, {
                name: '地址',
                field:"address"
            }],
            data:[{
                "customerName": "张三",
                "sex": "男",
                "identification": "身份证",
                "birthday": "1990/1/15",
                "mobile": "17751751911",
                "email": "chi_zhenming@qq.com",
                "address": "江苏省南京市雨花台"
            }, {
                "customerName": "张三",
                "sex": "男",
                "identification": "身份证",
                "birthday": "1990/1/15",
                "mobile": "17751751911",
                "email": "chi_zhenming@qq.com",
                "address": "江苏省南京市雨花台"
            },{
                "customerName": "张三",
                "sex": "男",
                "identification": "身份证",
                "birthday": "1990/1/15",
                "mobile": "17751751911",
                "email": "chi_zhenming@qq.com",
                "address": "江苏省南京市雨花台"
            },{
                "customerName": "张三",
                "sex": "男",
                "identification": "身份证",
                "birthday": "1990/1/15",
                "mobile": "17751751911",
                "email": "chi_zhenming@qq.com",
                "address": "江苏省南京市雨花台"
            },{
                "customerName": "张三",
                "sex": "男",
                "identification": "身份证",
                "birthday": "1990/1/15",
                "mobile": "17751751911",
                "email": "chi_zhenming@qq.com",
                "address": "江苏省南京市雨花台"
            },{
                "customerName": "张三",
                "sex": "男",
                "identification": "身份证",
                "birthday": "1990/1/15",
                "mobile": "17751751911",
                "email": "chi_zhenming@qq.com",
                "address": "江苏省南京市雨花台"
            },{
                "customerName": "张三",
                "sex": "男",
                "identification": "身份证",
                "birthday": "1990/1/15",
                "mobile": "17751751911",
                "email": "chi_zhenming@qq.com",
                "address": "江苏省南京市雨花台"
            },{
                "customerName": "张三",
                "sex": "男",
                "identification": "身份证",
                "birthday": "1990/1/15",
                "mobile": "17751751911",
                "email": "chi_zhenming@qq.com",
                "address": "江苏省南京市雨花台"
            },{
                "customerName": "张三",
                "sex": "男",
                "identification": "身份证",
                "birthday": "1990/1/15",
                "mobile": "17751751911",
                "email": "chi_zhenming@qq.com",
                "address": "江苏省南京市雨花台"
            },{
                "customerName": "张三",
                "sex": "男",
                "identification": "身份证",
                "birthday": "1990/1/15",
                "mobile": "17751751911",
                "email": "chi_zhenming@qq.com",
                "address": "江苏省南京市雨花台"
            }]
        };
    }
