const mongoose=require('mongoose')

url="mongodb+srv://Piyu1cbz:Piyu1cbz@mydatabase.bvhet.mongodb.net/?retryWrites=true&w=majority&appName=MyDatabase"

const db=mongoose.connect(url).
then(()=>{console.log("Database Connected Success");
})
.catch((err)=>{console.log("An Eror Occured",err)})

module.exports=db