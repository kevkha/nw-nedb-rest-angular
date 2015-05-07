'use strict';

angular.module('demo', ['ngResource', 'ngAnimate'])
  .factory('contactsDB', function($resource) {
    return $resource('/contacts/:id',
      {id: '@id'}, {
        get: {method: 'GET', isArray: true },
        add: {method: 'POST'},
        delete: {method: 'DELETE'}
      }
    );
  })
  .factory('Window', function() {
    var gui = require('nw.gui');
    return gui.Window.get()
  })
  .controller('WindowToolbar', ['$scope', 'Window', function($scope, Window) {
    $scope.windowMinimize = function() {
      Window.minimize();
    };

    $scope.windowToggleFullscreen = function() {
      Window.toggleFullscreen();
    };

    $scope.windowClose = function() {
      Window.close();
    };
  }])
  .controller('Listing', ['$scope', 'contactsDB', function($scope, contactsDB) {
    contactsDB.get(function(data) {
      $scope.contacts = data;
    });

    $scope.addcontact = function() {
      var contact = {
        fname: $scope.newContact.fname,
        lname: $scope.newContact.lname
      };
      contactsDB.add(contact, function(data) {
        contact._id = data._id;
        $scope.contacts.push(contact);
        $scope.newContact = {
          fname: null,
          lname: null
        }
      });
    };

    $scope.removecontact = function (contact) {
      contactsDB.delete({id:contact._id}, function() {
        $scope.contacts.splice($scope.contacts.indexOf(contact), 1);
      })
    };
  }]);

