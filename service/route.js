
const UserModel = require("../modal/user");
const ApiCount=require('../modal/count')

exports.add = async (req, res) => {
    try {
      console.log("body",req.body);
      const {name}=req.body
      await UserModel.updateMany({ name: name }, { 
        name:name,
        
      }, {upsert:true} )
     
      return "done"
      
    } catch (err) {
      console.log(err);
      const error = new Error(err);
      error.code = 500;
      throw error;
    }
  };

  exports.update = async (req, res) => {
    try {
      console.log("body",req.body);
      const {name,updatedName}=req.body
      const updated_Name = await UserModel.updateMany({ name: name }, { 
        name:updatedName,
        
      }, {upsert:true} )
      return updated_Name
      
    } catch (err) {
      console.log(err);
      const error = new Error(err);
      error.code = 500;
      throw error;
    }
  };

  exports.getdata = async (req, res) => {
      try {
        const count=await ApiCount.find()
        const user=await UserModel.find()
        return {user,count}
      } catch (err) {
        console.log(err);
        const error = new Error(err);
        error.code = 500;
        throw error;
      }
  }