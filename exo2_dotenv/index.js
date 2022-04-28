const dotenv = require('dotenv');
dotenv.config();
if (process.env.UNEVARIABLE) {
    console.log(process.env.UNEVARIABLE);
}
else{
    console.log("Aucune variable d'environnement définie");
}