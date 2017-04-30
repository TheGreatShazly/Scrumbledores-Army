App.controller ('ownerAnnouncementsCtrl',function($scope,$location,UserSrv, SweetAlert){

  var ctrl = this;
  ctrl.announcements = [];
$scope.show = false ;

$scope.checkAuth([$scope.userTypeOwner]);


    //loading notifications
    $scope.getNotifications();
      ////////////////////////////////////////////////
      $scope.isEditable = false;
      $scope.editableText = 'Commodo id natoque malesuada sollicitudin elit suscipit magna.';

      $scope.toggleEditable = function() {
       $scope.isEditable = !$scope.isEditable;
      };
      ////////////////////////////////////////////////
      $scope.ham = false;
      $scope.toggleHam = function() {
        console.log($scope.ham);
       $scope.ham = !$scope.ham;
        console.log($scope.ham);
        // updates ----------------
          $scope.getNotifications();
          };
      ////////////////////////////////////////////////

       $scope.search = false;
      $scope.toggleSearch = function() {
        console.log($scope.search);
       $scope.search = !$scope.search;
        console.log($scope.search);
      };
      ///////////////////////////////////////////////
      $scope.ncolor = '#C96666'; //to make new notification with a red color;
      $scope.notification = false;
      $scope.toggleNotification = function() {
        console.log($scope.notification);
       $scope.notification = !$scope.notification;
        console.log($scope.notification);
        $scope.readNotifications();

        var container = angular.element("mySidenav");
        var content = container.innerHTML;
        container.innerHTML = content;

        var container1 = angular.element("main");
        var content1= container1.innerHTML;
        container1.innerHTML = content1;



      };

      ///////////////////////////////////////////////
      $scope.chat = false;
      $scope.toggleChat = function() {
        console.log($scope.chat);
       $scope.chat = !$scope.chat;
        console.log($scope.chat);

      };
      ///////////////////////////////////////////////
      $scope.addReview = false;
                $scope.leaveReviews = function() {

                 $scope.addReview = !$scope.addReview

                };

                $scope.doneReviewing= function()
                {
                  $scope.addReview = !$scope.addReview
                }

                $scope.range = [1,2,3,4,5];

          $scope.update = function(value) {
            $scope.rate = value;
            if ($scope.onUpdate) {
              $scope.onUpdate({value: value});
            }
          };

      ////////////////////////////////////////////////
      $scope.trigger = 'hamburger';
            $scope.overlay = 'overlay';
            $scope.isClosed = false;

            $scope.triggerClick = function() {
              $scope.hamburger_cross();
            };

            $scope.hamburger_cross = function() {
              if (isClosed == true) {
                $scope.overlay.hide();
                $scope.trigger.removeClass('is-open');
                $scope.trigger.addClass('is-closed');
                $scope.isClosed = false;
              } else {
                $scope.overlay.show();
                $scope.trigger.removeClass('is-closed');
                $scope.trigger.addClass('is-open');
                $scope.isClosed = true;
              }
            };


  $scope.ownerAnnouncements = function () {
    UserSrv.announcements().then(function(response){
      if(response.data.success){
        ctrl.announcements = response.data.announcements;

        }
        $scope.show = true ;

      });
  }

  $scope.deleteAnnouncement = function (x) {
    UserSrv.removeAnnouncement(x).then(function(response){
        $scope.ownerAnnouncements();
        $location.url('/gymHomepage');
      });
  }

  $scope.loadNotifications = function () {
      console.log("loaded");
  }


  $scope.ownerAnnouncements();

});
