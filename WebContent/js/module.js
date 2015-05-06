var app = angular.module("app", []);
app.controller("HelloController", function($scope) {
	$scope.greeting = {
		text : 'Hello'
	};
});
app.controller("CartController", function($scope) {
	$scope.items = [ {
		title : 'Paint pots',
		quantity : 8,
		price : 3.95
	}, {
		title : 'Polka dots',
		quantity : 17,
		price : 12.95
	}, {
		title : 'Pebbles',
		quantity : 5,
		price : 6.95
	} ];
	$scope.remove = function(index) {
		$scope.items.splice(index, 1);
	};
	$scope.total = function() {
		var sum=0;
		var it=$scope.items;
		for(var i=0;i<it.length;i++){
			sum+=it[i].price*it[i].quantity;
		}
		return sum;
	}
});