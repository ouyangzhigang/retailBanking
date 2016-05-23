'use strict';

var barOption = {
    grid: {
        left: '2%',
        right: '2%',
        bottom: '10%',
        top: '30%'
    },
    textStyle: {
        color: '#000',
        fontSize: 12,
        fonrWeight: 'bolder'
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        data: ['29.92', '10.71', '5.74', '14.16', '26.38', '8.38', '29.20', '33.41', '12.60', '24.50', '20.28', '2.28', '33.49', '39.60', '25.65', '34.15', '21.68', '19.32', '18.02', '35.23', '35.68', '15.05', '25.52', '25.94', '37.25', '33.43', '1.54', '8.74', '7.86', '11.56', '6.80', '32.83', '22.33', '0.92', '36.26', '19.27', '5.74', '12.39', '0.21', '23.27', '27.44', '2.02', '10.30', '38.88', '21.50', '5.30', '33.23', '1.40', '15.98', '20.21', '8.47', '26.80', '27.29', '35.33', '32.66', '3.26', '33.04', '29.22', '21.79', '5.72']
    }],
    yAxis: [{
        type: 'value',
        position: 'right',
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    }],
    series: [{
        type: 'bar',
        barCategoryGap: '60%',
        label: {
            normal: {
                show: false,
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                color: '#f58a33'
            }
        },
        data: ['29.92', '10.71', '5.74', '14.16', '26.38', '8.38', '29.20', '33.41', '12.60', '24.50', '20.28', '2.28', '33.49', '39.60', '25.65', '34.15', '21.68', '19.32', '18.02', '35.23', '35.68', '15.05', '25.52', '25.94', '37.25', '33.43', '1.54', '8.74', '7.86', '11.56', '6.80', '32.83', '22.33', '0.92', '36.26', '19.27', '5.74', '12.39', '0.21', '23.27', '27.44', '2.02', '10.30', '38.88', '21.50', '5.30', '33.23', '1.40', '15.98', '20.21', '8.47', '26.80', '27.29', '35.33', '32.66', '3.26', '33.04', '29.22', '21.79', '5.72']
    }]
};

var funnelOption = {
    title: {
        text: '漏斗图',
        subtext: '纯属虚构',
        left: 'left',
        top: 'bottom'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}%'
    },
    toolbox: {
        orient: 'vertical',
        top: 'center',
        feature: {
            dataView: {
                readOnly: false
            },
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['展现', '点击', '访问', '咨询', '订单']
    },
    calculable: true,
    series: [{
        name: '漏斗图',
        type: 'funnel',
        width: '40%',
        height: '45%',
        left: '5%',
        top: '50%',
        data: [{
            value: 60,
            name: '访问'
        }, {
            value: 30,
            name: '咨询'
        }, {
            value: 10,
            name: '订单'
        }, {
            value: 80,
            name: '点击'
        }, {
            value: 100,
            name: '展现'
        }]
    }]
};

var _funnelOption =  {
    title: {
        show: false,
        text: '漏斗图',
        subText: '漏斗图测试'
    },
    data: [{
        name: 'level1',
        value: [{
            name: '活动分配客户数',
            value: '270'
        }]
    }, {
        name: 'level2',
        value: [{
            name: '已处理客户数',
            value: '220'
        }]
    }, {
        name: 'level3',
        value: [{
            name: '已联系成功客户数',
            value: '150'
        }, {
            name: '联系失败客户数',
            value: '40'
        }, {
            name: '需再次联系客户数',
            value: '30'
        }]
    }, {
        name: 'level4',
        value: [{
            name: '感兴趣客户数',
            value: '80'
        }, {
            name: '不感兴趣客户数',
            value: '40'
        }, {
            name: '待定客户数',
            value: '30'
        }]
    }, {
        name: 'level5',
        value: [{
            name: '购买客户数',
            value: '40'
        }]
    }]
};

var options = {
    barOption: barOption,
    funnelOption: funnelOption,
    _funnelOption: _funnelOption
};

module.exports = options;
