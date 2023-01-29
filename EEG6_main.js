

function checkQ1() {

	if (document.getElementById("q1a").checked == true && document.getElementById("q1b").checked == true && document.getElementById("q1c").checked == true && document.getElementById("q1d").checked == true && document.getElementById("q1e").checked == true) {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Correct! <br><br> Normal variants (like POSTS) come from the brain, while artifacts (like EKG artifact) comes from elsewhere but not from the brain.<br><br>POSTS can be unilateral or bilateral and typically appear in semirrhythmic runs, but can also appear in isolated instances. Their polarity is positive (pointing down in a referential montage).<br>";
		document.getElementById("after_submitQ1").style.background = "lightgreen";
		document.getElementById("afterQ1_picture").innerHTML = "Great job!";

	} else {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Not correct. <br><br> Make sure you checked all correct answers and unchecked all incorrect answers.";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("afterQ1_picture").innerHTML = "Try again!";

}


}






function checkQ2() {

	if (document.getElementById("q2a").checked == false && document.getElementById("q2b").checked == false && document.getElementById("q2c").checked == true && document.getElementById("q2d").checked == false && document.getElementById("q2e").checked == true) {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Correct! <br><br> An important part of EEG reading is recognizing in which stage of the sleep wake cycle you are. Pay attention to the eye blink artifacts (some of them marked by red arrows) and the muscle artifact (some of them marked by red rectangles). This EEG segment occurs during wakefulness. And POSTS do not happen during wakefulness.<br><br>POSTS can briefly appear in the initial portion of stage II sleep, but typically disappear in stage II sleep. What elements would you expect in stage II sleep? vertex waves and sleep spindles. None of those in this EEG segment.<br>";
		document.getElementById("answerQ2_picture").src = "EEG6_img/Q2.2.png";		
                document.getElementById("after_submitQ2").style.background = "lightgreen";
		document.getElementById("afterQ2_picture").innerHTML = "The triangular-shaped elements in the posterior channels are lambda waves (some of them marked by red circles). Lambda waves have the same morphology (triangular shaped) and location (occipital regions) than POSTS, but they occur only during wakefulness and they typically represent a patient who is scanning a pattern (reading, looking at a screen, looking at a pattern in the wall...). When you find lambda waves on the EEG, open the EEG video and you will often find the patient reading or paying visual attention to something.<br><br>Great job!";

	} else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Not correct. <br><br> Make sure you checked all correct answers and unchecked all incorrect answers.";
		document.getElementById("answerQ2_picture").src = "EEG6_img/Q2.2.png";	
		document.getElementById("after_submitQ2").style.background = "red";
		document.getElementById("afterQ2_picture").innerHTML = "What are the elements marked by red arrows? What stage of the sleep-wake cycle is this EEG segment on?<br><br>Try again!";

}


}








function checkQ3() {

	if (document.question3.question.value == "e") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Correct!! <br><br>This is eye blinking artifact, not an epileptiform discharge.<br><br>Pay attention to it: it only appears in the frontal channels and, despite having high amplitude, there is no electrical field in the neighboring channels. True, eye blinking artifact is usually bilateral (eyes usually roll up in the right and the left), but do all patients have two eyes?";
		document.getElementById("answerQ3_picture").src = "EEG6_img/Q3.2.png";	
		document.getElementById("answerQ3_picture2").src = "EEG6_img/Q3.3.png";	
		document.getElementById("answerQ3_picture3").src = "EEG6_img/Q3.4.png";	
		document.getElementById("after_submitQ3").style.background = "lightgreen";
		document.getElementById("afterQ3_picture").innerHTML = "The images above (same EEG segment in different montages) show other examples of eye blinking artifact. Eye blinking artifact is recognized by high amplitude deflection occurring only or predominantly in the frontal channels. Also, eyelid blinking artifact has no negative phase reversal (as opposed to epileptiform activity, which usually has it).<br><br> Great job!";

}	else {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "No.<br><br> Why do you think that is the correct answer? Can you find an electrical field for the discharge that makes anatomical sense?";
		document.getElementById("answerQ3_picture").src = "EEG6_img/Q3.2.png";	
		document.getElementById("answerQ3_picture2").src = "EEG6_img/Q3.3.png";	
		document.getElementById("answerQ3_picture3").src = "EEG6_img/Q3.4.png";	
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("afterQ3_picture").innerHTML = "<br><br> Above you have several examples of the same type of discharge in different montages. Do you recognize them now?<br><br>Try again!";

}

}








function checkQ4() {

	if (document.getElementById("q4a").checked == false && document.getElementById("q4b").checked == false && document.getElementById("q4c").checked == false && document.getElementById("q4d").checked == true && document.getElementById("q4e").checked == false) {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Correct! <br><br> The sharply contoured elements in this EEG tracing happen approximately 4 times in approximately half a second, which would give them an approximate frequency of 8 Hz (which make them less likely to be epileptiform discharges).<br><br>The electrical field involves only two electrodes: P7 and T7, without affecting other neighboring electrodes, which does not make a lot of anatomical sense (you would expect the electrical field of an epileptiform discharge to also affect some electrodes like C3 and P3).<br>";
		document.getElementById("answerQ4_picture").src = "EEG6_img/Q4.3.png";	
		document.getElementById("answerQ4_picture2").src = "EEG6_img/Q4.4.png";		
                document.getElementById("after_submitQ4").style.background = "lightgreen";
		document.getElementById("afterQ4_picture").innerHTML = "Their morphology is quite irregular and some have several 'peaks' of different voltage. Although that can occur in polyspikes, their morphology is quite unusual for an epileptiform discharge. These are artifacts, probably related to poor contact of the electrode P7 and T7 with the scalp.<br><br>Great job!";

	} else {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Not correct. <br><br> Make sure you checked all correct answers and unchecked all incorrect answers.";
		document.getElementById("answerQ4_picture").src = "EEG6_img/Q4.3.png";	
		document.getElementById("answerQ4_picture2").src = "";	
		document.getElementById("after_submitQ4").style.background = "red";
		document.getElementById("afterQ4_picture").innerHTML = "Where would you localize these EEG elements on the scalp?<br><br>Try again!";

}


}















function checkCC1() {

	if (document.CC1.CC1q1.value == "b" && document.CC1.CC1q2.value == "d") {
		document.getElementById("after_submitCC1").style.visibility = "visible";
		document.getElementById("answerCC1").innerHTML = "Correct!!<br><br>This segment of EEG is recorded during sleep. The sharply-contoured elements point down on a referential montage, so they are positive in the surface of the scalp.<br><br>Epileptiform discharges are generally surface negative. The presence of surface positive discharges should make you think of something different than epileptiform discharges.<br><br>Another rule of thumb is that if the frequency of a discharge is 6 Hz or more and does not evolve, it is probably some form of normal variant.<br><br>In particular, the elements in this case are 14 and 6, a normal variant characterized for a posterior temporal maximum, a small-amplitude sharply-contoured morphology, and a frequency of either 14 Hz or 6 Hz.<br><br>Another example of 14 and 6 is presented below:";
		document.getElementById("after_submitCC1").style.background = "lightgreen";
		document.getElementById("answerCC1_picture").src = "EEG6_img/CC1.3.png";
		document.getElementById("answerCC1_picture2").src = "EEG6_img/CC1.4.png";
		document.getElementById("afterCC1_picture").innerHTML = "Unfortunately, many times 14 and 6 are misclassified as epileptiform discharges and the patients are incorrectly treated with antiseizure medications.<br><br>A large part of becoming a good EEG reader is to recognize normal variants.<br><br>Great job!";

}	else {
		document.getElementById("after_submitCC1").style.visibility = "visible";
		document.getElementById("answerCC1").innerHTML = "No! <br><br>Another example of the same pattern is presented below:";
		document.getElementById("after_submitCC1").style.background = "red";
		document.getElementById("answerCC1_picture").src = "EEG6_img/CC1.3.png";
		document.getElementById("answerCC1_picture2").src = "EEG6_img/CC1.4.png";
		document.getElementById("afterCC1_picture").innerHTML = "Try again!";

}

}

