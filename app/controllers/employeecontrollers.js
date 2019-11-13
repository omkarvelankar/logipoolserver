var myslQuery=require('../../config');
function getAllEmployee(req,res){
    var query= "SELECT `id`, `name`, `email`, `contact`, `gender`, `dob`, `designation`, `salary`, `address`, `status` FROM `employee` WHERE 1";

    myslQuery.executeQuery(query,function(error,result){
        if(error){
            return res.json({
                error:true,
                message:error
            });
        }
        else{
            return res.json({
                error:false,
                result:result
            });
        }
    });
}

module.exports={
    getAllEmployee:getAllEmployee
}