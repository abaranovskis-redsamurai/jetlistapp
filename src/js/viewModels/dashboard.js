/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojlistview', 'ojs/ojmodel', 'ojs/ojbutton', 'ojs/ojgauge'],
 function(oj, ko, $) {

    function DashboardViewModel() {
      var self = this;

      var prodArray = [
                    {prodNr: '1', amount: 25, productName: 'Syrup', productTitle: 'Glucose-Fructose syrup', productCode: '76391', usageRatio: 10, stockQuantity: 150, orderQuantity: 30},
                    {prodNr: '2', amount: 80, productName: 'Juice', productTitle: 'Natural cold pressed juice', productCode: '86402', usageRatio: 30, stockQuantity: 230, orderQuantity: 1500},
                    {prodNr: '3', amount: 50, productName: 'Pectin', productTitle: 'Extracted from citrus fruits', productCode: '75201', usageRatio: 55, stockQuantity: 40, orderQuantity: 10},
                    {prodNr: '4', amount: 40, productName: 'Fructose/Sugar', productTitle: 'Derived from sugar cane, sugar beets, and maize', productCode: '83419', usageRatio: 25, stockQuantity: 250, orderQuantity: 150},
                    {prodNr: '5', amount: 10, productName: 'Citric Acid', productTitle: 'Extracted from lemons and limes', productCode: '54814', usageRatio: 99, stockQuantity: 110, orderQuantity: 11}];
      self.datasource = new oj.ArrayTableDataSource(prodArray, {idAttribute: 'prodNr'});

      self.changeHandler = function (page, event) {

      };

      // Below are a subset of the ViewModel methods invoked by the ojModule binding
      // Please reference the ojModule jsDoc for additionaly available methods.

      /**
       * Optional ViewModel method invoked when this ViewModel is about to be
       * used for the View transition.  The application can put data fetch logic
       * here that can return a Promise which will delay the handleAttached function
       * call below until the Promise is resolved.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @return {Promise|undefined} - If the callback returns a Promise, the next phase (attaching DOM) will be delayed until
       * the promise is resolved
       */
      self.handleActivated = function(info) {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @param {boolean} info.fromCache - A boolean indicating whether the module was retrieved from cache.
       */
      self.handleAttached = function(info) {
        // Implement if needed
      };


      /**
       * Optional ViewModel method invoked after the bindings are applied on this View.
       * If the current View is retrieved from cache, the bindings will not be re-applied
       * and this callback will not be invoked.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       */
      self.handleBindingsApplied = function(info) {
        // Implement if needed
      };

      /*
       * Optional ViewModel method invoked after the View is removed from the
       * document DOM.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @param {Array} info.cachedNodes - An Array containing cached nodes for the View if the cache is enabled.
       */
      self.handleDetached = function(info) {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constrcuted
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new DashboardViewModel();
  }
);
