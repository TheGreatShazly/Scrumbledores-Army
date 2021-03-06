angular.module ('appRoutes',['ngRoute'])
.config (function($routeProvider,$locationProvider){
$routeProvider.when('/' , {
  templateUrl : 'app/views/pages/main.html',
  controller: 'indexCtrl'
})
 .when ('/login' ,{
   templateUrl : 'app/views/pages/login.html',
   controller :  'LoginCtrl',
   controllerAs : 'Login'
 }).
 when ('/register',{
   templateUrl : 'app/views/pages/register.html'
 })
 .when('/about',{
   templateUrl : 'app/views/pages/about.html',

 })
 .when('/memberships',{
   templateUrl : 'app/views/pages/memberships.html',

 })
 .when('/stripe',{
   templateUrl : 'app/views/pages/stripe2.html'
 })
 .when('/faqs',{
   templateUrl : 'app/views/pages/faqs.html'
 })
 .when('/forgotPassword',{
   templateUrl:'app/views/pages/forgotPassword.html',
   controller: 'forgotPasswordCtrl'
 })
 .when('/changePassword',{
    templateUrl:'app/views/pages/changePassword.html'
 })
 .when('/editOwnerProfile',{
   templateUrl:'app/views/pages/editOwnerProfile.html',
   controller : 'editOwnerProfileCtrl',
   controllerAs:'EOPCtrl'
 })
 .when('/schedule',{
   templateUrl:'app/views/pages/schedule.html',
   controller: 'scheduleCtrl'
  })
  .when('/addSession',{
    templateUrl:'app/views/pages/addSession.html',
    controller: 'AddSessionCtrl'
  })
  .when('/editSession',{
    templateUrl:'app/views/pages/editSession.html',
    controller: 'editSessionsCtrl'
  })
 .when('/addProducts',{
   templateUrl:'app/views/pages/addProducts.html' ,
   controller : 'addProductCtrl'
 })
 .when('/editUserProfile',{
   templateUrl:'app/views/pages/editUserProfile.html' ,
   controller : 'editUserProfileCtrl',
   controllerAs:'EUPCtrl'
 })
 .when('/adminpage' , {
    templateUrl:'app/views/pages/adminapprove.html',
    controller:'adminCtrl',
    controllerAs:'admin'
 })
 .when('/GymHomepage',{
   templateUrl:'app/views/pages/GymHomepage.html',
      controller:'gymHomepageCtrl',
      controllerAs:'ghCtrl'
 })
 .when('/renew',{
   templateUrl:'app/views/pages/renewPassword.html',
   controller : 'restorePasswordCtrl'
 })
  .when('/ownerProfile',{
    templateUrl:'app/views/pages/ownerProfile.html',
    controller:'ownerProfileCtrl',
    controllerAs:'oPCtrl'

  })
  .when('/products',{
    templateUrl:'app/views/pages/products.html',
    controller: "productsCtrl"
  })
  .when('/renewPassword',{
    templateUrl:'app/views/pages/renewPassword.html'
  })
  .when('/reviews',{
    templateUrl:'app/views/pages/reviews.html',
    controller :'reviewsCtrl',
    controllerAs:'RC'
  })
  .when('/sessions',{
    templateUrl:'app/views/pages/sessions.html',
      controller:'ViewSessionsCtrl'
  })
  .when('/trainers',{
    templateUrl:'app/views/pages/trainers.html'
  })
  .when('/userProfile',{
    templateUrl:'app/views/pages/userProfile.html',
    controller : 'userProfileCtrl' ,
    controllerAs:'uPCtrl'
  })
  .when('/notFound',{
    templateUrl:'app/views/pages/notFound.html',
    controller:'dummy'
  })
  .when('/unauth',{
    templateUrl:'app/views/pages/unauth.html',
    controller:'dummy'
  })
  .when('/videos',{
    templateUrl:'app/views/pages/videos.html',
    controller:'dummy'
  })
.when('/gymSum',{
    templateUrl:'app/views/pages/gymssum.html',
    controller:'gymSumCtrl',
    controllerAs:'gSCtrl'
  })
  .when('/addAnnouncement',{
  templateUrl:'app/views/pages/addAnnouncement.html',
  controller:'AddAnnouncementsCtrl',
  controllerAs:'aACtrl'
  })
  .when('/contactUs',{
    templateUrl:'app/views/pages/contactUs.html',
    controller : 'contactUsCtrl',
    controllerAs : 'con'
  })
  .when('/addAnnouncementAdmin',{
    templateUrl:'app/views/pages/addAnnouncementsAdmin.html',
    controller : 'addAnnouncementsAdminCtrl',
    controllerAs:'Add'
  })
  .when('/paymentMethods',{
    templateUrl:'app/views/pages/paymentMethods.html',
    controller : 'paymentMethodsCtrl',
    controllerAs : 'pay'
  })
  .when('/myCart',{
    templateUrl:'app/views/pages/myCart.html',
    controller : 'myCartCtrl',
    controllerAs : 'cart'
  })
  .when('/myWallet',{
    templateUrl:'app/views/pages/myWallet.html',
    controller : 'myCartCtrl',
    controllerAs : 'cart'
  })
  .when('/cash',{
    templateUrl:'app/views/pages/COD.html',
    controller:'myCartCtrl',
    controllerAs:'cart'
  })
  .when ('/memberships',{
    templateUrl:'app/views/pages/memberships.html',
    controller:'membershipCtrl'

  })
  .when ('/addMembership',{
    templateUrl:'app/views/pages/addMembership.html',
    controller:'membershipCtrl'

  })

  .when ('/addNutritionPlan',{
    templateUrl:'app/views/pages/addNutritionPlan.html',
    controller:'aNPCtrl'

  })

  .when('/stripe',{
    templateUrl:'app/views/pages/stripe.html',
    controller:'stripeCtrl'
  })
  .otherwise ({redirectTo:'/notFound'}) ;

 $locationProvider.html5Mode({
   enable :true ,
   requireBase :false
 });
});
