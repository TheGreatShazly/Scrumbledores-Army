App.controller ('ViewSessionsCtrl',function($scope,$route,$location,UserSrv,AuthToken,SweetAlert){
//  $scope.userProfile = UserSrv.profile().then(fucntion(response));
  // console.log("profile" + $scope.userProfile);
$scope.show = false ;
  $scope.sessions=[];
  $scope.sessionID="";
  $scope.errMsg ="";
  $scope.showErrMsg=false;
  $scope.isOwner=false;
  $scope.selected = {} ;
  $scope.showSessions = false ;
  $scope.showSessions = false ;
  UserSrv.getAll().then(function(response) {
    for (var i = 0; i < response.data.business.length; i++) {
  if(AuthToken.getSelectedBusiness() === response.data.business[i].ownerID){
    $scope.selectedbusiness = response.data.business[i];
    // console.log($scope.userProfile);
    break;
  }
}
UserSrv.profile().then(function (response) {
  if (response.data.success){
$scope.userProfile= response.data.profile ;
$scope.userProfile.userType = response.data.user.userType ;
if($scope.userProfile._id===$scope.selectedbusiness._id){
$scope.isOwner=true;
}
}
$scope.show = true ;
  console.log($scope.isOwner);
  $scope.retrieveSessions();
    $scope.showSessions = true ;
});
});

  $scope.hideErr=function(){
    $scope.showErrMsg = false;
  };

  $scope.retrieveSessions=function(){
    console.log($scope.isOwner);
    if($scope.isOwner){
      console.log($scope.userProfile.ownerID);
      this.ownerID= $scope.userProfile.ownerID;
      UserSrv.sessions($scope.ownerID).then(function(response){
          console.log(response.data);
          console.log(response.data.success);
          $scope.sessions=response.data.sessions;
          $scope.showSessions = true ;
        });

    }
    else{
    //  console.log($scope.selectedbusiness.ownerID);
    //  this.ownerID=$scope.selectedbusiness.ownerID;
    //  UserSrv.businessSessions(ID).then(function(response){
    //    console.log(response.data.success);
    //    console.log(response.data.message);
    //    console.log(response.data.sessions);
    //      $scope.sessions=response.data.sessions;
    //    });
    UserSrv.getAll().then(function(response) {
      console.log(response.data);
      for (var i = 0; i < response.data.business.length; i++) {
    if(AuthToken.getSelectedBusiness() === response.data.business[i].ownerID){
      $scope.selected = response.data.business[i];

      break;
      }

    }
    $scope.sessions=$scope.selected.sessions;
    console.log($scope.selected);
        $scope.showSessions = true ;
});

      }
};


$scope.delSession= function(ID){
  $scope.sessionID={sessionID :ID};
  console.log($scope.sessionID);
  UserSrv.removeSession($scope.sessionID).then(function(response){
    console.log(response.data.success);
    console.log(response.data.message);
    if(response.data.success){
      $route.reload();
    } else{
      $scope.errMsg=response.data.message;
      $scope.showErrMsg=true;
      setTimeout(function(){
        $scope.showErrMsg = false;
      },800);
    }
  });
};


  $scope.join = function (ID) {
    SweetAlert.swal({
       title: "Noice",
       text: "Are you sure you want to subscribe ?",
       type: "info",
       showCancelButton: true,
       confirmButtonColor: "#14ad8f",confirmButtonText: "Yes , this may take some time ",
       cancelButtonText: "No",
       closeOnConfirm: true,
       closeOnCancel: true
     },
    function(isConfirm){
       if (isConfirm) {
         $scope.sessionID={sessionID:ID};
         console.log($scope.sessionID);
         if(typeof $scope.userProfile != 'undefined' && $scope.userProfile.userType===$scope.userTypeClient){
         UserSrv.JoinSession($scope.sessionID).then(function(response){
           $scope.errMsg=response.data.message;
           if (response.data.success){
           SweetAlert.swal({
              title: "Way to go",
              text: "Registered successfully",
              type: "success",
             confirmButtonColor: "#14ad8f",confirmButtonText: "Done"},function () {

         });

       }
       else {
         SweetAlert.swal({
              title: "Sorry",
              text: "Please make sure that you are Signed in to attend a session",
              type: "warning",
             confirmButtonColor: "#14ad8f",
             showCancelButton: true,
             confirmButtonText: "Sign in",
             cancelButtonText: "Cancel",
             closeOnConfirm: true,
             closeOnCancel: true
          },function (isConfirm) {
             if (isConfirm)
              $location.url('/login');
              else {

              }
           });

       }
     });
   }
     else
     {
       SweetAlert.swal({
          title: "Sorry",
          text: "something went wrong",
          type: "warning",
         confirmButtonColor: "#14ad8f",confirmButtonText: "Back"},function () {

         });
     }
   }
   });


};
  $scope.edit = function(ID){
    console.log(ID);
    AuthToken.setSession(ID);
   $location.url('/editSession');
 };

});
