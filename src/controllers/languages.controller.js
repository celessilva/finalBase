import {getConnection} from "./../database/database";
//GET 
const getLanguages= async(req,res) =>{
  try{
   const connection=await getConnection();
   const result=await connection.query("SELECT id,nombre,programadores FROM lenguajes");
    res.json(result);
  }
  catch(error){
   res.status(500);        
   res.send(error.message);  //error 500 es un error de servidor

  }
  
 
  };
  // GET por id
  const getLanguage= async(req,res) =>{
    try{
     console.log(req.params);
     const {id}=req.params;
     const connection=await getConnection();
     const result=await connection.query("SELECT id,nombre,programadores FROM lenguajes WHERE id =?",id);
      res.json(result);
    }
    catch(error){
     res.status(500);        
     res.send(error.message);
  
    }
  }
//ADD agregar
  const addLanguage =  async(req,res) =>{
    try{
      const {nombre,programadores}=req.body;
if(nombre==undefined || programadores==undefined){
   res.status(400).json({message:"no es valido"});
}
//por las dudas revisar este if
       const language= {nombre,programadores};
       const connection=await getConnection();
       const result=await connection.query("INSERT INTO lenguajes SET ?", language);
       res.json({message:"informacion agregada exitosamente"});
  
    }
        catch(error){
        res.status(500);        
        res.send(error.message);  
  
      }
    };
  //DELETE borrar 
  const deleteLanguage= async(req,res) =>{
    try{
     const {id}=req.params;
     const connection=await getConnection();
     const result=await connection.query("DELETE FROM lenguajes WHERE id= ?" ,id);
      res.json(result);
    }
    catch(error){
     res.status(500);        
     res.send(error.message);  //error 500 es un error de servidor
  
    }
    
   
    };

//UPDATE actualizar
const updateLanguage= async(req,res) =>{
  try{
   const {id}=req.params;
   const {nombre,programadores}=req.body;

   if(id==undefined || nombre==undefined || programadores==undefined){
    res.status(400).json({message:"no es valido"});
 }
   const language= {id,nombre,programadores};
   const connection=await getConnection();
   const result=await connection.query("UPDATE lenguajes SET ? WHERE id=?" ,[language,id]);
    res.json(result);
  }
  catch(error){
   res.status(500);        
   res.send(error.message);  //error 500 es un error de servidor

  }
  
 
  };


  export const methods = {
    getLanguages,
    getLanguage,
    addLanguage,
    updateLanguage,
    deleteLanguage
  };




  //graciasssss DIOSSSSSSSSSSSSSSSSSSSSSSSSS