angular.module('testApp', [])

.directive("compareTo", [function() {
    return {
      require: "ngModel",
      scope: {
        otherModelValue: "=compareTo"
      },
      link: function(scope, element, attributes, ngModel) {

        ngModel.$validators.compareTo = function(modelValue) {
          return modelValue == scope.otherModelValue;
        };
      }
    };
 }])

.controller('testDemoCtrl', function($scope) {

	var myData=[];
	var empData=[];
	var skillData=[];

	$scope.empInfos = [{cname: 'Company Name', cAddr: 'Company Address', pnumber:'Phone Number'}];
	$scope.skillInfos = [{skname: 'Skill Name', yExp: 'Year of Experience' }];
	$scope.addInfo = function() {
		$scope.empInfos.push({cname: 'Company Name', cAddr: 'Company Address', pnumber:'Phone Number'});
		console.log($scope.empInfos);
	}
	$scope.addSkill = function() {
		$scope.skillInfos.push({skname: 'Skill Name', yExp: 'Year of Experience' });
		console.log($scope.skillInfos);
	}

	$scope.submit = function(isValid) {

		if(isValid) {

			for(i=0; i < $scope.empInfos.length; i++) {
			empData[i] = {
				cname: $scope.empInfos[i].cnameVal,
				cAddr: $scope.empInfos[i].cAddrVal,
				pnumber: $scope.empInfos[i].pnumberVal
			}
		}

		for(i=0; i<$scope.skillInfos.length; i++) {
			skillData[i] = {
				skname: $scope.skillInfos[i].sknameVal,
				yExp: $scope.skillInfos[i].yExpVal
			}
		}

		myData=[$scope.fname, $scope.lname, $scope.pbirth, $scope.dbirth, $scope.address, $scope.email, empData, skillData];
		console.log(angular.toJson(myData, true));

		}

		
	}






})
