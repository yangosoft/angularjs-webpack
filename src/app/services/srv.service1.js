
import angular from 'angular';

const Service1 =
{
    service: function () {
        var shinyNewServiceInstance = {
            function1: function (value) {
                console.log("Function " + value);
            }
        };

        return shinyNewServiceInstance;
    }
};

export default Service1;
