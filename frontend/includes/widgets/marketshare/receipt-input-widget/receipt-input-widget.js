/**
 * Copyright 2015 Alexander Wilden
 * Released under the MIT license.
 */
define( [
   'angular',
   'laxar-patterns'
], function( ng, patterns ) {
   'use strict';

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   Controller.$inject = [ '$scope', 'axEventBus' ];

   function Controller( $scope, eventBus ) {
      
      $scope.model = {
         formDisabled: false,
         receipt: {
            amount: 0,
            comment: ''
         }
      };
      
      var addReceiptPublisher = patterns.actions.publisherForFeature( $scope, 'addReceipt', {
         onComplete: function() {
            $scope.model.formDisabled = false;
         },
         onSuccess: function() {
            $scope.model.receipt = {
               amount: 0,
               comment: ''
            };
         }
      } );
      
      $scope.actions = {
         
         addReceipt: function() {
            addReceiptPublisher( $scope.model.receipt );
         }
         
      };
      
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   return ng.module( 'receiptInputWidget', [] ).controller( 'ReceiptInputWidgetController', Controller );

} );
