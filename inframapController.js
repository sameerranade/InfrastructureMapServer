/**
 * Created by sameer on 12/14/15.
 */
angular.module('opsmonitor',[])
    .controller('inframapController', function($scope, $http) {
        $scope.myData = null;
        $http.
            get('http://10.48.128.177:3000/api').
            success(function (res) {
                $scope.myData = res;

                //Campus Names
                $scope.campusName0 = res[0].campusName;
                $scope.campusName1 = res[1].campusName;
                $scope.campusName2 = res[2].campusName;
                $scope.campusName3 = res[3].campusName;
                $scope.campusName4 = res[4].campusName;
                $scope.campusName5 = res[5].campusName;
                $scope.campusName6 = res[6].campusName;
                $scope.campusName7 = res[7].campusName;
                $scope.campusName8 = res[8].campusName;
                $scope.campusName9 = res[9].campusName;
                $scope.campusName10 = res[10].campusName;
                $scope.campusName11 = res[11].campusName;
                $scope.campusName12 = res[12].campusName;
                $scope.campusName13 = res[13].campusName;
                $scope.campusName14 = res[14].campusName;
                $scope.campusName15 = res[15].campusName;


                $scope.dcName0 = res[0].dcName;
                $scope.dcName1 = res[1].dcName;
                $scope.dcName2 = res[2].dcName;
                $scope.dcName3 = res[3].dcName;
                $scope.dcName4 = res[4].dcName;
                $scope.dcName5 = res[5].dcName;
                $scope.dcName6 = res[6].dcName;
                $scope.dcName7 = res[7].dcName;
                $scope.dcName8 = res[8].dcName;
                $scope.dcName9 = res[9].dcName;
                $scope.dcName10 = res[10].dcName;
                $scope.dcName11 = res[11].dcName;
                $scope.dcName12 = res[12].dcName;
                $scope.dcName13 = res[13].dcName;
                $scope.dcName14 = res[14].dcName;
                $scope.dcName15 = res[15].dcName;


                $scope.dcLocation0 = res[0].location;
                $scope.dcLocation1 = res[1].location;
                $scope.dcLocation2 = res[2].location;
                $scope.dcLocation3 = res[3].location;
                $scope.dcLocation4 = res[4].location;
                $scope.dcLocation5 = res[5].location;
                $scope.dcLocation6 = res[6].location;
                $scope.dcLocation7 = res[7].location;
                $scope.dcLocation8 = res[8].location;
                $scope.dcLocation9 = res[9].location;
                $scope.dcLocation10 = res[10].location;
                $scope.dcLocation11 = res[11].location;
                $scope.dcLocation12 = res[12].location;
                $scope.dcLocation13 = res[13].location;
                $scope.dcLocation14 = res[14].location;
                $scope.dcLocation15 = res[15].location;

                $scope.brandInfo0 = res[0].brandName;
                $scope.brandInfo1 = res[1].brandName;
                $scope.brandInfo2 = res[2].brandName;
                $scope.brandInfo3 = res[3].brandName;
                $scope.brandInfo4 = res[4].brandName;
                $scope.brandInfo5 = res[5].brandName;
                $scope.brandInfo6 = res[6].brandName;
                $scope.brandInfo7 = res[7].brandName;
                $scope.brandInfo8 = res[8].brandName;
                $scope.brandInfo9 = res[9].brandName;
                $scope.brandInfo10 = res[10].brandName;
                $scope.brandInfo11 = res[11].brandName;
                $scope.brandInfo12 = res[12].brandName;
                $scope.brandInfo13 = res[13].brandName;
                $scope.brandInfo14 = res[14].brandName;
                $scope.brandInfo15 = res[15].brandName;
            });
    });