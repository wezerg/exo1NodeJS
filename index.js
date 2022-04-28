const mavariable = process.env["MAVARIABLE"];
if(mavariable){
	console.log(mavariable);
}
else{
	console.log("Aucun variable d'environnement");
}
