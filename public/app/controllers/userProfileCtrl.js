
App.controller('userProfileCtrl',function($scope,$route, $location, UserSrv, SweetAlert ) {


  var ctrl = this ;
  ctrl.user = {} ;
  $scope.show = false ;
  $scope.myorders = [] ;
$scope.logged = true ;
//   ctrl.profilePicPath = "";
//   ctrl.coverPicPath = "";

  $scope.fetchPicsUser=function(){
    UserSrv.profile().then(function(response){
      if (response.data.success) {
       var UID = response.data.user._id;
       ctrl.profilePicPath = "../../../Users/" + UID + "/ProfilePicture";
       ctrl.coverPicPath = "../../../Users/" + UID + "/CoverPhoto ";
       //console.log(ctrl.profilePicPath);
       //console.log(ctrl.coverPicPath);
      }
     });
  };
$scope.fetchPicsUser();

$scope.ShowSessions = true ;
    UserSrv.profile().then(function(response) {
          //console.log(response.data);
        if (response.data.success && response.data.user.userType==='Client') {

             $scope.myProfile =  response.data ;
             ctrl.user = response.data;
             //console.log(ctrl.user.profile);
             var d = ctrl.user.profile.birthDate;
            //  console.log(d.day); // Hours
            //   console.log(d.getUTCMinutes());
            //   console.log(d.getUTCSeconds());
             var container = angular.element("main");
             var content = container.innerHTML;
             container.innerHTML = content;

          }
          else {
            $location.url('/unauth');
          }
          UserSrv.orders().then(function (response) {

            console.log(response);
              $scope.show = true ;
          });


        });

        UserSrv.orders().then(function (response) {
        if (response.data.success){
        $scope.myorders = response.data.orders;
        ctrl.user.orders = response.data.orders;
        console.log($scope.myorders);
        }
        });
    //////////////////////////////////////////////////

    $scope.clientSessions=[{}];
    $scope.sessionID="";
    $scope.day = {};
    $scope.month={};


      $scope.getSession=function(){
        UserSrv.schedule().then(function(response){
          if (response.data.success) {
           console.log(response.data);
            $scope.clientSessions=response.data.sessions.sessions;
          }
          else {
            $scope.ShowSessions = false;
          }
         });
      };

      $scope.parceDay=function(session){
        var date=session.timing;
        if(typeof date != "undefined"){
        var day=date.substring(8, 10);
          return day;
      }
      return 1 ;

    };

      $scope.parceMonth=function(session){

        var date=session.timing;
          if(typeof date != "undefined"){
        var month=date.substring(5, 7);
        console.log(month);
        switch (month) {
                case '01': return "Jan";
                case '02': return "Feb";
                case '03': return "Mar";
                case '04': return "Apr";
                case '05': return "May";
                case '06': return "Jun";
                case '07': return "Jul";
                case '08': return "Aug";
                case '09': return "Sep";
                case '10': return "Oct";
                case '11': return "Nov";
                case '12': return "Dec";
                default: return "Month";

            }
          }
      };

      $scope.unregister=function(ID){
        $scope.sessionID={sessionID:ID};
        UserSrv.unRegisterFromSession($scope.sessionID).then(function(response){
          console.log(response);
        $route.reload();
      });
    };



















    //////////////////////////////////////////////////

    ////////////////////////////////////////////////

    $scope.PDF = false;
    $scope.togglePDF = function() {
      console.log($scope.PDF);
      $scope.PDF = !$scope.PDF;
      console.log($scope.PDF);
    };

    /////////////////////////////////////////////
    $scope.ham = false;
    $scope.toggleHam = function() {
      console.log($scope.ham);
     $scope.ham = !$scope.ham;
      console.log($scope.ham);

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

    ////////////////////////////////////////////////
    $scope.orders = false;
    $scope.toggleOrders = function() {
      console.log($scope.orders);
     $scope.orders = !$scope.orders;
      console.log($scope.orders);

    };

    ////////////////////////////////////////////////




          $scope.trigger = 'hamburger';
          $scope.overlay = 'overlay';
          $scope.isClosed = false;

          $scope.triggerClick = function() {
            $scope.hamburger_cross();
          };

          $scope.hamburger_cross = function() {
            if (isClosed === true) {
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
$scope.refund = function (order) {
  order.orderID = order._id;
  UserSrv.refund(order).then(function (response) {
console.log(response);
  }) ;
};











  });
