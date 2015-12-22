function calcolostipendionetto()
{

	var redditoComplessivo=document.getElementById("redditoComplessivo").value;
	redditoComplessivo=redditoComplessivo.toString().replace(',','.');

	var indiceRegione=document.getElementById("regione").selectedIndex;
	var regione=document.getElementById("regione").options[indiceRegione].value;

	var indiceCarico=document.getElementById("carico").selectedIndex;
	var carico=document.getElementById("carico").options[indiceCarico].value;
	
	var figliInferiore=document.getElementById("figliInferiore").value;
	
	var figliSuperiore=document.getElementById("figliSuperiore").value;

	var figliHandicapInferiore=document.getElementById("figliHandicapInferiore").value;
	
	var figliHandicapSuperiore=document.getElementById("figliHandicapSuperiore").value;
	
	var percentuale=document.getElementById("percentuale").value;
	
	var familiari=document.getElementById("familiari").value;
	
	var mensilita=document.getElementById("mensilita").value;
	
	var giorni=document.getElementById("giorni").value;
	
	var indiceTempoDerminato=document.getElementById("tempoDerminato").selectedIndex;
	var tempoDerminato=document.getElementById("tempoDerminato").options[indiceTempoDerminato].value;
	
	if(redditoComplessivo==""){
			document.getElementById("errorStipendioNetto").innerHTML="Inserisci il tuo stipendio correttamente.";
	}
	else if(redditoComplessivo<0){
			document.getElementById("errorStipendioNetto").innerHTML="Inserisci il tuo stipendio correttamente.";
	}
	else if(redditoComplessivo<20){
			document.getElementById("errorStipendioNetto").innerHTML="Inserisci il tuo stipendio correttamente.";
	}
	else{
			document.getElementById("errorStipendioNetto").innerHTML="";
			if((figliInferiore<0)||(figliInferiore>20)){
				document.getElementById("errorStipendioNetto").innerHTML="Inserisci correttamente il numero di figli.";
			}
			else{
				document.getElementById("errorStipendioNetto").innerHTML="";
				if((figliSuperiore<0)||(figliSuperiore>20)){
					document.getElementById("errorStipendioNetto").innerHTML="Inserisci correttamente il numero di figli.";
				}
				else{
					document.getElementById("errorStipendioNetto").innerHTML="";
					if((percentuale<0)||(percentuale>100)){
						document.getElementById("errorStipendioNetto").innerHTML="Inserisci correttamente il percentuale carico figli.";
					}
					else{
						document.getElementById("errorStipendioNetto").innerHTML="";
						if((figliHandicapInferiore<0)||(figliHandicapInferiore>20)){
							document.getElementById("errorStipendioNetto").innerHTML="Inserisci correttamente il numero di figli portatori di handicap.";
						}
						else{
							document.getElementById("errorStipendioNetto").innerHTML="";
							if((figliHandicapSuperiore<0)||(figliHandicapSuperiore>20)){
								document.getElementById("errorStipendioNetto").innerHTML="Inserisci correttamente il numero di figli portatori di handicap.";
							}
							else{
								document.getElementById("errorStipendioNetto").innerHTML="";
								if((familiari<0)||(familiari>20)){
									document.getElementById("errorStipendioNetto").innerHTML="Inserisci correttamente il numero di altri familiari a carico.";
								}
								else{
									document.getElementById("errorStipendioNetto").innerHTML="";
									if((mensilita<0)||(mensilita>20)){
										document.getElementById("errorStipendioNetto").innerHTML="Inserisci correttamente il numero di mensilità.";
									}
									else{
										document.getElementById("errorStipendioNetto").innerHTML="";
										if((giorni<20)||(giorni>366)){
											document.getElementById("errorStipendioNetto").innerHTML="Inserisci correttamente il numero di giorni di lavoro dipendente.";
										}
										else{
											document.getElementById("errorStipendioNetto").innerHTML="";
											var contributoINPS=redditoComplessivo*0.0919;
											var redditoImponibile=redditoComplessivo-contributoINPS;	
											
											/*Tabla estatal*/
											var IRPEFlordaEstatal=0;
											if(redditoImponibile<8000){
											}
											else if(redditoImponibile<15001){
												IRPEFlordaEstatal=redditoImponibile*0.23;
											}
											else if(redditoImponibile<28001){
												IRPEFlordaEstatal=3450+(redditoImponibile-15000)*0.27;
											}
											else if(redditoImponibile<55001){
												IRPEFlordaEstatal=6960+(redditoImponibile-28001)*0.38;
											}
											else if(redditoImponibile<75001){
												IRPEFlordaEstatal=17220+(redditoImponibile-55001)*0.41;
											}
											else if(redditoImponibile>=75001){
												IRPEFlordaEstatal=25420+(redditoImponibile-75001)*0.43;
											}
											
											/*Tabla Regionale*/
											var IRPEFlordaRegionale=0;
											if(regione=="abruzzo"){
												IRPEFlordaRegionale=redditoImponibile*1.4/100;
											}
											else if(regione=="basilicata"){
												IRPEFlordaRegionale=redditoImponibile*0.9/100;
											}
											else if(regione=="calabria"){
												IRPEFlordaRegionale=redditoImponibile*1.4/100;
											}
											else if(regione=="campania"){
												IRPEFlordaRegionale=redditoImponibile*1.4/100;
											}
											else if(regione=="emiliaRomagna"){
												if(redditoImponibile<15001){
													IRPEFlordaRegionale=redditoImponibile*1.1/100;
												}
												else if(redditoImponibile<20001){
													IRPEFlordaRegionale=redditoImponibile*1.2/100-15000*0.1/100;
												}
												else if(redditoImponibile<25001){
													IRPEFlordaRegionale=redditoImponibile*1.3/100-15000*0.2/100-5000*0.1/100;
												}
												else if(redditoImponibile>=25001){
													IRPEFlordaRegionale=redditoImponibile*1.4/100-15000*0.3/100-5000*0.2/100-5000*0.1/100;
												}
											}
											else if(regione=="friuliVenezia"){
												IRPEFlordaRegionale=redditoImponibile*0.9/100;
											}
											else if(regione=="lazio"){
												IRPEFlordaRegionale=redditoImponibile*1.4/100;
											}
											else if(regione=="liguria"){
												if(redditoImponibile<25001){
													IRPEFlordaRegionale=redditoImponibile*0.9/100;
												}
												else if(redditoImponibile>=25001){
													IRPEFlordaRegionale=redditoImponibile*1.4/100-25000*0.5/100;
												}
											}
											else if(regione=="lombardia"){
												if(redditoImponibile<15493.72){
													IRPEFlordaRegionale=redditoImponibile*0.9/100;
												}
												else if(redditoImponibile<30987.42){
													IRPEFlordaRegionale=15493.71*0.9/100+(redditoImponibile-15493.72)*1.3/100;
												}
												else if(redditoImponibile>=30987.42){
													IRPEFlordaRegionale=15493.71*0.9/100+(30987.41-15493.71)*1.3/100+(redditoImponibile-30987.41)*1.4/100;
												}
											}
											else if(regione=="marche"){
												if(redditoImponibile<=15500){
													IRPEFlordaRegionale=redditoImponibile*0.9/100;
												}
												else if(redditoImponibile<=31000){
													IRPEFlordaRegionale=15500*0.9/100+(redditoImponibile-15500)*1.2/100;
												}
												else if(redditoImponibile>31000){
													IRPEFlordaRegionale=15500*0.9/100+(31000-15500)*1.2/100+(redditoImponibile-31000)*1.4/100;
												}
											}
											else if(regione=="molise"){
												IRPEFlordaRegionale=redditoImponibile*1.4/100;
											}
											else if(regione=="piemonte"){
												if(redditoImponibile<=15000){
													IRPEFlordaRegionale=redditoImponibile*0.9/100;
												}
												else if(redditoImponibile<=22000){
													IRPEFlordaRegionale=15000*0.9/100+(redditoImponibile-15000)*1.2/100;
												}
												else if(redditoImponibile>22000){
													IRPEFlordaRegionale=15000*0.9/100+(22000-15000)*1.2/100+(redditoImponibile-22000)*1.4/100;
												}
											}
											else if(regione=="bolzano"){
												IRPEFlordaRegionale=redditoImponibile*0.9/100;
											}
											else if(regione=="puglia"){
												if(redditoImponibile<=28000){
													IRPEFlordaRegionale=redditoImponibile*0.9/100;
												}
												else if(redditoImponibile>28000){
													IRPEFlordaRegionale=28000*0.9/100+(redditoImponibile-28000)*1.4/100;
												}
											}
											else if(regione=="sardegna"){
												IRPEFlordaRegionale=redditoImponibile*0.9/100;
											}
											else if(regione=="sicilia"){
												IRPEFlordaRegionale=redditoImponibile*1.4/100;
											}
											else if(regione=="toscana"){
												IRPEFlordaRegionale=redditoImponibile*0.9/100;
											}
											else if(regione=="trentino"){
												IRPEFlordaRegionale=redditoImponibile*0.9/100;
											}
											else if(regione=="umbria"){
												if(redditoImponibile<=15000){
													IRPEFlordaRegionale=redditoImponibile*0.9/100;
												}
												else if(redditoImponibile>15000){
													IRPEFlordaRegionale=15000*0.9/100+(redditoImponibile-15000)*1.1/100;
												}
											}
											else if(regione=="aosta"){
												IRPEFlordaRegionale=redditoImponibile*0.9/100;
											}
											else if(regione=="veneto"){
												if(redditoImponibile<=29500){
													IRPEFlordaRegionale=redditoImponibile*0.9/100;
												}
												else if(redditoImponibile>29500){
													IRPEFlordaRegionale=29500*0.9/100+(redditoImponibile-29500)*1.4/100;
												}
											}
											
											/*Tabla Comunale*/
											var IRPEFlordaComunale=redditoImponibile*0.2/100;
											
											/*IRPEFlorda*/
											var IRPEFlorda=IRPEFlordaEstatal+IRPEFlordaRegionale+IRPEFlordaComunale;
											
											/*DETRAZIONI*/
											/*Lavoro dipendente*/
											var deduccion1=0;
											if(redditoImponibile<8000){
												deduccion1=1840*giorni/360;
											}
											else if(redditoImponibile<=15000){
												deduccion1=1338+502*(15000-redditoImponibile)/7000;
												deduccion1=deduccion1*giorni/360;
											}
											else if(redditoImponibile<=55000){
												deduccion1=1338*(55000-redditoImponibile)/40000*giorni/360;
												if((redditoImponibile>23000)&&(redditoImponibile<=24000)){
													deduccion1=deduccion1+10;
												}
												else if((redditoImponibile>24000)&&(redditoImponibile<=25000)){
													deduccion1=deduccion1+20;
												}
												else if((redditoImponibile>25000)&&(redditoImponibile<=26000)){
													deduccion1=deduccion1+30;
												}
												else if((redditoImponibile>26000)&&(redditoImponibile<=27700)){
													deduccion1=deduccion1+40;
												}
												else if((redditoImponibile>27700)&&(redditoImponibile<=28000)){
													deduccion1=deduccion1+25;
												}
											}
											/*Conjuge*/
											var deduccion2=0;
											if(carico=="si"){
												if(redditoImponibile<15000){
													deduccion2=800-110*redditoImponibile/15000;
													deduccion2=deduccion2*giorni/360;
												}
												else if(redditoImponibile<=40000){
													deduccion2=690;
													deduccion2=deduccion2*giorni/360;
													if((redditoImponibile>29000)&&(redditoImponibile<=29200)){
														deduccion2=deduccion2+10;
													}
													else if((redditoImponibile>29200)&&(redditoImponibile<=34700)){
														deduccion2=deduccion2+20;
													}
													else if((redditoImponibile>34700)&&(redditoImponibile<=35000)){
														deduccion2=deduccion2+30;
													}
													else if((redditoImponibile>35000)&&(redditoImponibile<=35100)){
														deduccion2=deduccion2+20;
													}
													else if((redditoImponibile>35100)&&(redditoImponibile<=35200)){
														deduccion2=deduccion2+10;
													}
												}
												else if(redditoImponibile<=80000){
													deduccion2=690*(80000-redditoImponibile)/40000;
													deduccion2=deduccion2*giorni/360;
												}
											}
											/*Hijos a cargo*/
											var figli=figliInferiore+figliSuperiore;
											var figliHandicap=figliHandicapInferiore+figliHandicapSuperiore;
											var detrazioneBase=0;
											var deduccion3=0;
											if(figli>3){
												detrazioneBase=figliInferiore*1000+figliSuperiore*1100+figliHandicap*220;
												detrazioneBase=detrazioneBase*percentuale/100;
												deduccion3=detrazioneBase*(95000+15000*(figli-1)-redditoImponibile)/(95000+15000*(figli-1));
											}
											else if(figli<=3){
												detrazioneBase=figliInferiore*800+figliSuperiore*900+figliHandicap*220;
												detrazioneBase=detrazioneBase*percentuale/100;
												deduccion3=detrazioneBase*(95000+15000*(figli-1)-redditoImponibile)/(95000+15000*(figli-1));
											}
											/*Famiglie Numerose*/
											var deduccion4=0;
											if(figli>=4){
												deduccion4=1200*percentuale/100;
												}
											/*Altri Familiari*/
											var deduccion5=750*familiari*(80000-redditoImponibile)/80000;											
											
											/*RESULTADOS*/
											var deduccion=deduccion1+deduccion2+deduccion3+deduccion4+deduccion5;
											var IRPEFnetta=IRPEFlorda-deduccion;
											if(IRPEFnetta<0){
												IRPEFnetta=0;
											}
											document.getElementById("impostaNetta").value=Math.round(IRPEFnetta*100)/100;
											var stipendioAnuale=redditoImponibile-IRPEFnetta;
											document.getElementById("stipendioAnuale").value=Math.round(stipendioAnuale*100)/100;
											var stipendioMensuale=stipendioAnuale/mensilita;
											document.getElementById("stipendioMensile").value=Math.round(stipendioMensuale*100)/100;
											document.getElementById("mensajeMeses").innerHTML=" ("+mensilita+" mensilità)";
											
											document.getElementById("ej1").value=Math.round(redditoImponibile*100)/100;
											document.getElementById("ej2").value=Math.round(IRPEFlorda*100)/100;
											document.getElementById("ej3").value=Math.round(deduccion*100)/100;
											
											
										}
									}
								}
							}
						}
					}
				}
			}
	}
}
