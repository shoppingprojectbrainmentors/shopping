app.factory("adminFactory",function($http,$q){
    var obj ={
        doAjaxCall(URL,adminObj){
            console.log("inside ajax call admin object is " );
            console.log(adminObj);
            var deferObject=$q.defer();
            $http.post(URL,adminObj).then(function(data){
                deferObject.resolve(data);
            },
                function(error){
                    deferObject.reject(error);
                
            });

            return deferObject.promise
        }
    
    };
    return obj;
})