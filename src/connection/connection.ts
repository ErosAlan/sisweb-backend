import { Sequelize } from "sequelize-typescript"; 
import { Empresa } from "../models/empresa"; 
import { Tier } from "../models/tier";

const connection = new Sequelize({ 
database: 'sisweb_db', 
dialect: 'postgres', 
username: 'sisweb_user', 
password: 'HDK#$%Ljkwerff.89', 
host: 'localhost',
storage: ':memory:', 
models: [ 
Empresa,
Tier
] 
}); 

async function connectionDB(){ 
try{ 
await connection.sync(); 
}catch(e){ 
console.log(e); 
} 
} 
export default connectionDB; 

