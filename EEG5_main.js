

function checkQ1() {

	if (document.getElementById("q1a").checked == false && document.getElementById("q1b").checked == true && document.getElementById("q1c").checked == true && document.getElementById("q1d").checked == false && document.getElementById("q1e").checked == true) {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Correct! <br><br> The presence of epileptiform discharges (of any type) in the EEG means that the patient has an increased predisposition to have seizures. That is common to all types of epileptiform activity. <br><br>There is a benefit, though, in identifying the types of epileptiform discharges: some types of epileptiform activity are more typical of some types of epilepsy syndromes, so identifying the type of epileptiform discharges may help identify some syndromes. <br><br>Although some types of epileptiform activity are more frequently seen as focal or generalized (for example, spike-wave complexes tend to be generalized, while sharp waves tend to be focal), any type of epileptiform activity can be focal or generalized.<br><br> The sharpness of epileptiform activity or the type of epileptiform activity do not determine the risk of epilepsy or its severity.<br>";
		document.getElementById("after_submitQ1").style.background = "lightgreen";
		document.getElementById("answerQ1_picture").src = "EEG5_img/Q1.2.png";
		document.getElementById("answerQ1_picture2").src = "EEG5_img/Q1.3.png";
		document.getElementById("afterQ1_picture").innerHTML = "Both sharply contoured epileptiform activity (upper figure) and less sharply contoured epileptiform activity (lower figure) mean a predisposition to have seizures. <br><br> No difference in risk or severity can be derived from the sharpness or type of epileptiform discharge (although the type of epilepsy syndrome can give information on risk and severity).<br><br>Great job!";

	} else {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Not correct. <br><br> Make sure you checked all correct answers and unchecked all incorrect answers.";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("afterQ1_picture").innerHTML = "Try again!";

}


}






function checkQ2() {

	if (document.question2.question.value == "b") {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Correct!! <br><br> It is important to be precise in the description of the EEG, but measuring every epileptiform discharge to classify it as a spike or sharp wave is an absurd waste of resources.<br><br>The narrower epileptiform discharges in the EEG segment in the figure are spikes and the wider ones are sharp waves. Therefore, describing the EEG as a combination of spikes and sharp waves is appropriate without detailing which epileptiform discharge is which.<br><br>There is no practical consequence of an epileptiform discharge being misclassifed as a spike if it is a sharp wave or viceversa. Do not spend much effort into differentiating between the two of them.";
		document.getElementById("after_submitQ2").style.background = "lightgreen";
		document.getElementById("answerQ2_picture").src = "";
		document.getElementById("afterQ2_picture").innerHTML = "<br><br> Great job!";

}	else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Not quite! <br><br> In an EEG there can be hundreds or thousands of epileptiform discharges. How much effort would it take to measure each of them? What would be the clinical advantage of such an approach?.";
		document.getElementById("after_submitQ2").style.background = "red";
		document.getElementById("answerQ2_picture").src = "";
		document.getElementById("afterQ2_picture").innerHTML = "<br><br> Try again!";

}

}








function checkQ3() {

	if (document.question3.question.value == "d") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Correct!! <br><br> 'Sharp' or 'sharps' are not appropriate EEG terms. They can refer to any of the above EEG elements presented in the answers and some more. Is your colleague referring to a sharp transient? To a sharp wave? To sharply contoured slowing? Who knows? Will a colleague from another hospital understand the same concept than your colleague is trying to convey? <br><br>Use unclear and non-standard terminology at your own risk (and more importantly, at the risk of your patients).<br><br> Better still, use standard non-ambiguous terminology that everybody will understand.";
		document.getElementById("after_submitQ3").style.background = "lightgreen";
		document.getElementById("afterQ3_picture").innerHTML = "<br><br> Great job!";

}	else {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "No.<br><br> Why do you think that is the correct answer? Can you find the definition of a 'sharp'?";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("afterQ3_picture").innerHTML = "<br><br> Try again!";

}

}



