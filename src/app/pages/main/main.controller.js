module.exports = function() {
    var vm = this;
    vm.concernContent = [{
        name: '首页',
        src: 'home-icon.png'
    }, {
        name: '我的客户',
        src: 'customer-icon.png'
    }, {
        name: '我的营销',
        src: 'promotion-icon.png'
    }, {
        name: '我的业绩',
        src: 'achievement-icon.png'
    }, {
        name: '我的工具',
        src: 'tool-icon.png'
    }];

    vm.menus = [{
        title: '组件',
        state: 'component'
    }, {
        title: '员工转推介',
        state: 'customer'
    }, {
        title: '机构转推介',
        state: 'organization'
    }, {
        title: '转推介查询',
        state: 'recommend'
    }, {
        title: '营销活动开展',
        state: 'marketActivity'
    }, {
        title: '目标客户搜索',
        state: 'targetCustomer'
    }];

    vm.wizardItems = [{
        title:'工作台',
        state:'workspace'
    },{
        title:'工作台2',
        state:'workspace2',
        isActive:true
    }];

    //主导航
    vm.menuNav = [{
        title: '客户',
        state: '',
        items: [{
            title: '客户联络',
            state: ''
        },{
            title: '客户挽留',
            state: ''
        },{
            title: '潜在客户管理',
            state: '',
            items:[{
                title: '呵呵',
                state: ''
            },{
                title: '嘻嘻',
                state: ''
            }]
        },{
            title: '客户分组',
            state: ''
        },{
            title: '客户分配',
            state: ''
        },{
            title: '客户申领',
            state: ''
        },{
            title: '客户平移',
            state: ''
        },{
            title: '客户代管',
            state: ''
        }]
    },{
        title: '营销',
        state: '',
        items:[{
            title: '目标客户探索',
            state: '',
            items:[{
                title: '新增目标客户探索',
                state: '',
                items:[
                    {
                        title: 'a',
                        state: ''
                    },{
                        title: 'b',
                        state: ''
                    }
                ]
            },{
                title: '目标客户探索管理'
            }]
        },{
            title: '筛选客户模板管理',
            state: ''
        },{
            title: '创建营销活动',
            state: ''
        },{
            title: '营销活动管理',
            state: ''
        },{
            title: '营销活动监控及评价',
            state: ''
        },{
            title: '营销活动进展监控',
            state: ''
        },{
            title: '营销活动评价',
            state: '',
            items:[
              {
                title: '转推介查询',
                state: '',
              },{
                title: '过渡营销控制',
                state: ''
            }]
        }]
    },{
        title: '产品',
        state: '',
        items:[{
            title: '产品目录管理',
            state: ''
        },{
            title: '产品信息查询',
            state: '',
            items:[
            {
                title: '产品组合管理',
                state: '',
                items: [{
                    title: '产品组合新增',
                    state: ''
                },{
                    title: '产品组合查询',
                    state: ''
                }]
            },{
                title: '产品电子手册',
                state: ''
            }]
        }]
    },{
        title: '财富管理',
        state: '',
        items:[{
            title: '快速规划',
            state: ''
        },{
            title: '综合规划',
            state: ''
        },{
            title: '财务健康诊断',
            state: ''
        },{
            title: '财务目标',
            state: ''
        },{
            title: '全产投资组合建议',
            state: ''
        },{
            title: '综合保险规划',
            state: ''
        },{
            title: '基金投资组合建议',
            state: ''
        },{
            title: '报告中心',
            state: ''
        },{
            title: '投资组合监控',
            state: ''
        },{
            title: '全资产投资组合绩效',
            state: ''
        }]
    },{
        title: '业绩与报表',
        state: '',
        items:[{
            title: '过程管理指标分析',
            state: '',
            items:[{
                title: '工作任务处理过程报表',
                state: ''
            },{
                title: '工作任务处理明细',
                state: ''
            },{
                title: '机构转推介报表',
                state: ''
            },{
                title: '员工转推介报表',
                state: ''
            },{
                title: '客户接触管理类报表',
                state: ''
            },{
                title: '个人客户大额资金流动统计表',
                state: ''
            }]
        },{
            title: '业绩管理指标分析',
            state: '',
            items:[{
                title: '规模类指标一览表(机构)',
                state: ''
            },{
                title: '规模类指标一览表(员工)',
                state: ''
            },{
                title: '流量类指标一览表(机构)',
                state: ''
            },{
                title: '流量类指标一览表(员工)',
                state: ''
            },{
                title: '规模类指标任务完成率一览表(机构)',
                state: ''
            },{
                title: '规模类指标任务完成率一览表(员工)',
                state: ''
            },{
                title: '流量类指标任务完成率一览表(机构)',
                state: ''
            },{
                title: '规模类指标任务完成率一览表(员工)',
                state: ''
            },{
                title: '规模类归属关系',
                state: ''
            },{
                title: '流量类业务归属关系',
                state: ''
            },{
                title: '客户签约类归属关系',
                state: ''
            }]
        },{
            title: '专业队伍评级分析',
            state: '',
            items:[{
                title: '客户经理动态评级排名',
                state: ''
            },{
                title: '理财经理动态评级排名',
                state: ''
            },{
                title: '大堂经理动态评级排名',
                state: ''
            }]
        },{
            title: '业绩考核基数管理',
            state: '',
            items:[{
                title: '创建考核指标基数',
                state: ''
            },{
                title: '考核指标基数管理',
                state: ''
            }]
        }]
    },{
        title: '资讯',
        state: '',
        items:[{
            title: '新增栏目',
            state: ''
        },{
            title: '栏目管理',
            state: ''
        }]
    },{
        title: '基础管理',
        state: '',
        items:[{
            title: '增值服务预约申请',
            state: ''
        },{
            title: '增值服务预约查询',
            state: ''
        }]
    }];
};
