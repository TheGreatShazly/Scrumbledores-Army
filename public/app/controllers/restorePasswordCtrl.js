App.controller ('restorePasswordCtrl',function($scope,$location,UserSrv, SweetAlert){
$scope.password = {} ;
$scope.show = true ;
$scope.renewPassword = function () {
if ($scope.comparePasswords($scope.password.password1, $scope.password.password2) && $scope.validatePassword($scope.password.password1)) {
    UserSrv.restorePassword($scope.password).then(function(response) {
        console.log(response);
        if (response.data.success){
          SweetAlert.swal({
             title: "Success",
             text: "Password changed successfully",
             type: "success",
             confirmButtonColor:'#14ad8f',
            confirmButtonText: "Go Back"
            },
          function(){
              $location.url('/login') ;
          });

        }
        else {
          SweetAlert.swal({
             title: "Failure",
             text: response.data.message,
             type: "warning",
            confirmButtonText: "Try Again"
          });
        }
    });

} else {
  SweetAlert.swal({
     title: "Failure",
     text: response.data.message,
     type: "warning",
    confirmButtonText: "Try Again"
  });
}
} ;
});
