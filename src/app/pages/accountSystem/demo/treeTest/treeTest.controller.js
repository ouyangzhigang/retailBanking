'use strict';
module.exports = function TreeTestController() {
    var vm = this;
    vm.options = {
        treeData: [
            [{
                id: 1,
                title: 'a',
                parentID: ""
            }, {
                id: 2,
                title: 'a1',
                parentID: 1
            }, {
                id: 3,
                title: 'a11',
                parentID: 2
            }, {
                id: 4,
                title: 'a12',
                parentID: 2
            }, {
                id: 5,
                title: 'a2',
                parentID: 1
            }, {
                id: 6,
                title: 'a21',
                parentID: 5
            }],
            [{
                id: 1,
                title: 'a',
                parentID: ""
            }, {
                id: 2,
                title: 'a1',
                parentID: 1
            }, {
                id: 3,
                title: 'a11',
                parentID: 2
            }, {
                id: 4,
                title: 'a12',
                parentID: 2
            }, {
                id: 5,
                title: 'a2',
                parentID: 1
            }, {
                id: 6,
                title: 'a21',
                parentID: 5
            }]
        ],
        events: {
            beforeDrop: function(e) {
                console.log("拖动之后");
                //scope.beforedrop(e);
            },
            dragStart: function() {
                console.log("拖动之前");
            },
            dragMove: function() {
                console.log("aaa");
            }
        }
    }
};
