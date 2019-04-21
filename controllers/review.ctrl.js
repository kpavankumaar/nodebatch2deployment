const ReviewSvc = require("../services/review.svc")
var reviewCtrl = {
    get  : async function(req,res){
        try{
            let reviews = await ReviewSvc.get();
            res.status(200);
            res.json(reviews);
        }
        catch(err){
            res.status(500);
            res.send("internal server error ");
        }
    },
    save : async function(req,res){
        console.log("*************",req.body);
        try{
            let savedReview = await ReviewSvc.save(req.body);
            console.log(savedReview);
            res.status(201);
            res.json(savedReview);
        }
        catch(err){
            console.log("*************",err);
            res.status(500);
            res.send(err);
        }
    }
}
module.exports = reviewCtrl;
