'use strict';

var treeHtml = require('./tree.html');

module.exports = function tree() {
    var directive = {
        restrict: 'AE',
        template: treeHtml,
        scope: {
            options: '=',
            beforedrop:'&',
            treeoptions:"="
        },
        link: linkFunc
    };

    return directive;

    function linkFunc(scope) {
        var _this = null;
        scope.options.data=[];
        for(var i in scope.options.treeData){
            if(!scope.options.treeData[i].parentID){
                var result=loadTree(scope.options.treeData[i],"");
                scope.options.data.push(result[0]);
            }
        }
        scope.treeRemove = function() {
            _this.remove();
        };
        scope.newSubItem = function() {
            var nodeData = _this.$modelValue;
            if(!nodeData.nodes){
                nodeData.nodes=[];
            }
            nodeData.nodes.push({
                id: nodeData.id * 10 + nodeData.nodes.length,
                title: nodeData.title + '.' + (nodeData.nodes.length + 1),
                nodes: []
            });
        };
        scope.onNodes = function() {
            _this = this;
        };
        scope.selected=function(event){
            console.log(event);
        }
        //右键菜单显示的时候，回调的函数
        scope.onShow = function() {
            //console.log(_this);
        };
        //右键菜单关闭的时候，回调的函数
        scope.onClose = function() {
            //console.log(_this);
        };
    }
    function loadTree(data,parentID) {
        var  result  = [],temp;
        for (var  i  in  data) {        
            if (data[i].parentID ==parentID) {            
                result.push(data[i]);            
                temp  =  loadTree(data, data[i].id);                       
                if (temp.length > 0) {                
                    data[i].nodes = temp;            
                }                   
            }           
        }    
        return result;
    }
};
