/**
 * Created by sameer on 12/14/15.
 */
angular.module('opsmonitor',[])
    .controller('inframapController', function($scope, $http) {
        $scope.myData = null;
        $http.
            get('http://192.168.0.2:3000/auth').
            success(function (res) {
                $scope.myData = res;

                $scope.type0 = res.services[1].type;
                $scope.type1 = res.services[2].type;
                $scope.type2 = res.services[3].type;
                $scope.type3 = res.services[4].type;
                $scope.type4 = res.services[5].type;
                $scope.type5 = res.services[6].type;

                $scope.ip0 = res.services[1].url;
                $scope.ip1 = res.services[2].url;
                $scope.ip2 = res.services[3].url;
                $scope.ip3 = res.services[4].url;
                $scope.ip4 = res.services[5].url;
                $scope.ip5 = res.services[6].url;


            });
    });