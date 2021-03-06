App.controller ('clientSessions',function($scope,$route,$location,UserSrv, SweetAlert){
  $scope.clientSessions=[{}];
  $scope.sessionID="";
  $scope.day;
  $scope.month;

  $scope.getSession=function(){
    UserSrv.getClientSessions().then(function(response){
       console.log(response.data.sessions.sessions);
        $scope.clientSessions=response.data.sessions.sessions;
    });
  }

  $scope.parceDay=function(session){
    var date=session.timing;
    console.log(date);
    var day=date.substring(8, 10);
    console.log(day);
    return day;
  }

  $scope.parceMonth=function(session){
    var date=session.timing;
    var month=date.substring(5, 7);
    console.log(month);
    switch (month) {
            case '01': return "Jan";
                break;
            case '02': return "Feb";
                break;
            case '03': return "Mar";
                 break;
            case '04': return "Apr";
                 break;
            case '05': return "May";
                  break;
            case '06': return "Jun";
                  break;
            case '07': return "Jul";
                  break;
            case '08': return "Aug";
                  break;
            case '09': return "Sep";
                  break;
            case '10': return "Oct";
                  break;
            case '11': return "Nov";
                      break;
            case '12': return "Dec";
                      break;
            default: return "Month"

        }
  };

  $scope.unregister=function(ID){
    $scope.sessionID={sessionID:ID};
    UserSrv.SessionUnregister($scope.sessionID).then(function(response){
      if (response.data.success){
        SweetAlert.swal({
           title: "Success",
           text: "Unregistered from Session successfully",
           type: "success",
           confirmButtonColor:'#14ad8f',
          confirmButtonText: "Go Back"
          },
        function(){
            location.reload() ;
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
  }
);
};

})
