//this takes your route function as input
const asyncHandler = (requestHandler) => {
    //returns a middleware functon
    return (req , res, next) => {
        //runs your async function safely
        Promise.resolve(requestHandler(req , res , next)).
        catch((err) => next(err))
    }
}
//asyncHandler is a wrapper function that takes in a function and returns a new function that handles the errors and passes them to the next middleware
//there are two types of asyncHandler => try and catch block ; promise based
export {asyncHandler}


/*
const asyncHandler = (fn) => async(req,res,next) => {
    try{
        await fn(req , res , next)
    }catch(error){
        res.status(error.code||500).json({
            success : false,
            message : error.message || "Internal Server Error"
        })
    }
}
*/