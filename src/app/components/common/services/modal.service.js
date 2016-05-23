'use strict';

var _ = require('lodash');

module.exports = function ModalService($uibModal) {
    var modalInstance = {};
    var modalSymbolArr = [];

    var service = {
        modalInstance: modalInstance,           // modal实例
        modalSymbolArr: modalSymbolArr,         // modal实例Id
        showModal: showModal,                   // 打开Modal
        closeModal: closeModal,                 // 关闭Modal
        dismissModal: dismissModal,             // 消除Modal
        getLastModalId: getLastModalId          // 获取最后modal实例Id
        // dismissAllModal: dismissAllModal        // 消除所有Modal
    };

    return service;

    function showModal(params) {
        var modalParams = {};

        modalParams.template = '<cfo-modal>' + params.template + '</cfo-modal>';
        modalParams.controller = params.controller;
        if(params.controllerAs) {
            modalParams.controllerAs = params.controllerAs;
        }
        modalParams.size = params.size || 'lg';
        modalParams.backdrop = params.backdrop || 'static';

        if (!_.includes(modalSymbolArr, params.modalId)) {
            modalSymbolArr.push(params.modalId);
        }
        modalInstance[params.modalId] = $uibModal.open(modalParams);
    }

    // a method that can be used to close a modal, passing a result
    function closeModal(key) {
        modalInstance[key].close();
        delete modalInstance[key];
        modalSymbolArr.pop(key);
    }

    // a method taht can be used to dismiss a modal, passing a reason
    function dismissModal(key) {
        modalInstance[key].dismiss();
        delete modalInstance[key];
        modalSymbolArr.pop(key);
    }

    function getLastModalId() {
        var modalId = '';

        if (modalSymbolArr) {
            modalId = modalSymbolArr[modalSymbolArr.length - 1];
        }

        return modalId;
    }

    // function dismissAllModal() {
    //     $uibModal.dismissAll();
    //     modalSymbolArr.length = 0;
    //     modalInstance = {};
    // }
};
