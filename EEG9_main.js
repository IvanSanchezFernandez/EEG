
function checkQ1() {

	if (document.getElementById("q1a").checked == true && document.getElementById("q1b").checked == false && document.getElementById("q1c").checked == false && document.getElementById("q1d").checked == true && document.getElementById("q1e").checked == true && document.getElementById("q1f").checked == false) {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Exactly! <br><br> The beginning of this EEG segment shows eyeblink artifacts, muscle artifact, and a posterior dominant rhythm of approximately 9 Hz. This tells us that this EEG segment occurs during wakefulness.";
		document.getElementById("after_submitQ1").style.background = "lightgreen";
		document.getElementById("answerQ1_picture").src = "EEG9_img/Q1.2.png";
		document.getElementById("afterQ1_picture").innerHTML = "The repetitive flashing lights (marked by the red lines) tells us that this EEG segment occurs during photic stimulation.<br><br>The photic stimulation rhythm (15 Hz in this case) drives the rhythm in the posterior channels of the EEG. This is driving and it is completely normal.<br><br>Great job!";

	} else {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Not correct. <br><br>What are the red lines at 15 Hz? Pay attention to the rhythm in the posterior EEG channels.";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("answerQ1_picture").src = "EEG9_img/Q1.2.png";
		document.getElementById("afterQ1_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ2() {

	if (document.getElementById("q2a").checked == true && document.getElementById("q2b").checked == true && document.getElementById("q2c").checked == false && document.getElementById("q2d").checked == false && document.getElementById("q2e").checked == false && document.getElementById("q2f").checked == false) {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Correct! <br><br> This EEG contains beautiful vertex waves which are symmetric around the midline (red rectangle).<br><br>There are no spindles in this EEG segment and, therefore, it belongs to stage I sleep.<br><br>There are no epileptiform discharges in this EEG segment. Although vertex waves appear sharp and are easy to mistake for epileptiform discharges, their symmetry around the midline allows to differentiate them from epileptiform activity.";
		document.getElementById("after_submitQ2").style.background = "lightgreen";
		document.getElementById("answerQ2_picture").src = "EEG9_img/Q2.2.png";
		document.getElementById("afterQ2_picture").innerHTML = "Great job!";

	} else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Not correct. <br><br>Try to identify the elements marked by the red rectangle. What are they? What stage do they appear in?";
		document.getElementById("after_submitQ2").style.background = "red";
		document.getElementById("answerQ2_picture").src = "EEG9_img/Q2.2.png";
		document.getElementById("afterQ2_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ3() {

	if (document.getElementById("q3a").checked == true && document.getElementById("q3b").checked == false && document.getElementById("q3c").checked == true && document.getElementById("q3d").checked == true && document.getElementById("q3e").checked == true && document.getElementById("q3f").checked == false) {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Correct! <br><br> This EEG segment can be confusing. It contains beautiful vertex waves which are symmetric around the midline (vertical red rectangles) and some sleep spindles (vertical rounded red rectangle).<br><br>There is no epileptiform activity in this EEG segment.<br><br>What is the activity in the horizontal red rectangles? It looks like muscle artifact, which would occur during wakefulness, right?<br><br>It is just a bad electrode contact. It is most obvious at the T8 electrode. The poor electrode contact creates this pattern of spiky elements which mirror each other in a pattern similar to a traintrack. It just needs fixing the electrode contact with the scalp.";
		document.getElementById("after_submitQ3").style.background = "lightgreen";
		document.getElementById("answerQ3_picture").src = "EEG9_img/Q3.2.png";
		document.getElementById("answerQ3_picture2").src = "EEG9_img/Q3.3.png";
		document.getElementById("afterQ3_picture").innerHTML = "You can find another example of 'traintrack' artifact due to a bad electrode in the figure above.<br><br>Great job!";

	} else {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Not correct. <br><br>Try to identify the elements marked by the vertical red rectangles. What are they? What stage do they appear in?";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("answerQ3_picture").src = "EEG9_img/Q3.2.png";
		document.getElementById("answerQ3_picture2").src = "";
		document.getElementById("afterQ3_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ4() {

	if (document.getElementById("q4a").checked == false && document.getElementById("q4b").checked == true && document.getElementById("q4c").checked == false && document.getElementById("q4d").checked == true && document.getElementById("q4e").checked == true && document.getElementById("q4f").checked == true) {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Correct! <br><br> This EEG segment belongs to stage II sleep because it contains vertex waves and spindles (red rectangle). That defines stage II sleep.<br><br>Because vertex waves are sharply contoured, it is easy to miss epileptiform activity which appears near them. There are C4 spikes and sharp waves and less frequent C3/T7 sharp waves (red arrows), which make the EEG segment abnormal. This epileptiform activity breaks the rhythm, is sharply contoured, and some of the epileptiform discharges have a field that makes anatomical sense.";
		document.getElementById("after_submitQ4").style.background = "lightgreen";
		document.getElementById("answerQ4_picture").src = "EEG9_img/Q4.2.png";
		document.getElementById("afterQ4_picture").innerHTML = "Great job!";

	} else {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Not correct. <br><br>Try to identify the elements marked by the red rounded rectangle. What are they? What stage do they appear in?";
		document.getElementById("after_submitQ4").style.background = "red";
		document.getElementById("answerQ4_picture").src = "EEG9_img/Q4.2.png";
		document.getElementById("afterQ4_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ5() {

	if (document.getElementById("q5a").checked == false && document.getElementById("q5b").checked == false && document.getElementById("q5c").checked == false && document.getElementById("q5d").checked == false && document.getElementById("q5e").checked == false && document.getElementById("q5f").checked == true) {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Exactly! <br><br> This EEG segment contains generalized spike-wave complex. They pretty obviously break the rhythm. The parts of the EEG between the generalized spike-wave complexes do not present high-amplitude slow waves suggesting that this EEG segment does not belong to stage III sleep.<br><br>No need to call the rapid response team for this. This pattern is 'angry looking' and abnormal and demonstrates that this patient has a predisposition to have seizures, but what determines if a situation is an emergency that requires the rapid response team to respond immediately is the clinical presentation, not the EEG.";
		document.getElementById("after_submitQ5").style.background = "lightgreen";
		document.getElementById("answerQ5_picture").src = "EEG9_img/Q5.2.png";
		document.getElementById("afterQ5_picture").innerHTML = "The sharply-contoured elements are generalized spike-wave complexes, not vertex waves. Changing the voltage of the EEG segment shows that in this case, these generalized epileptiform discharges are frontal-predominant, which is common in generalized spike-wave complexes.<br><br>Nothing in this EEG segment suggest that we are in a period of photic stimulation.<br><br>Great job!";

	} else {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Not correct. <br><br>The key to identifying this EEG segment is to focus in the obvious elements which break the rhythm. What are they? Where is their predominant location?";
		document.getElementById("after_submitQ5").style.background = "red";
		document.getElementById("answerQ5_picture").src = "EEG9_img/Q5.2.png";
		document.getElementById("afterQ5_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ6() {

	if (document.getElementById("q6a").checked == true && document.getElementById("q6b").checked == false && document.getElementById("q6c").checked == false && document.getElementById("q6d").checked == false && document.getElementById("q6e").checked == true && document.getElementById("q6f").checked == false) {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "Yes! <br><br> This is a stereotypical EEG segment belonging to wakefulness. There are eyeblinking artifacts (red circles), muscle artifact (large red rectangles), and even a posterior dominant rhythm can be recognized (small red rectangle). Remember that for the posterior dominant rhythm to appear the patient has to be relaxed and with eyes closed.<br><br> No epileptiform activity.";
		document.getElementById("after_submitQ6").style.background = "lightgreen";
		document.getElementById("answerQ6_picture").src = "EEG9_img/Q6.2.png";
		document.getElementById("afterQ6_picture").innerHTML = "Great job!";

	} else {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "Not correct. <br><br>Try to identify the elements marked by the red rectangles and the red circles. What are they? What stage do they appear in?";
		document.getElementById("after_submitQ6").style.background = "red";
		document.getElementById("answerQ6_picture").src = "EEG9_img/Q6.2.png";
		document.getElementById("afterQ6_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ7() {

	if (document.getElementById("q7a").checked == false && document.getElementById("q7b").checked == false && document.getElementById("q7c").checked == true && document.getElementById("q7d").checked == false && document.getElementById("q7e").checked == true && document.getElementById("q7f").checked == true) {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "Correct! <br><br> This EEG segment contains a posterior dominant rhythm of approximately 9 Hz (marked by red rectangles). This is wakefulness. The posterior dominant rhythm only appears during wakefulness.";
		document.getElementById("after_submitQ7").style.background = "lightgreen";
		document.getElementById("answerQ7_picture").src = "EEG9_img/Q7.2.png";
		document.getElementById("afterQ7_picture").innerHTML = "There is also a C4 spike with a field to C3 (red arrows).<br><br>Great job!";

	} else {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "Not correct. <br><br>Try to identify the elements marked by the red rectangles. What are they? What stage do they appear in?";
		document.getElementById("after_submitQ7").style.background = "red";
		document.getElementById("answerQ7_picture").src = "EEG9_img/Q7.2.png";
		document.getElementById("afterQ7_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ8() {

	if (document.getElementById("q8a").checked == true && document.getElementById("q8b").checked == false && document.getElementById("q8c").checked == false && document.getElementById("q8d").checked == false && document.getElementById("q8e").checked == false && document.getElementById("q8f").checked == false) {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "Correct! <br><br> The undulating lines are sweat artifact. When a patient sweats, electrolytes form electrical bridges between the electrodes causing this very slow swaying of the electrode channels. Sweating is normal.<br><br>More examples of sweat artifact below:";
		document.getElementById("after_submitQ8").style.background = "lightgreen";
		document.getElementById("answerQ8_picture").src = "EEG9_img/Q8.2.png";
		document.getElementById("answerQ8_picture2").src = "EEG9_img/Q8.3.png";
		document.getElementById("afterQ8_picture").innerHTML = "Sweat artifact appears in all stages of the sleep-wake cycle because, well..., you can sweat at any point.<br><br>The way to distinguish sweat artifact is its very slow frequency. Each wave occupies 2 seconds or more. That is a very slow frequency that is not produced by any other of the typical EEG elements.<br><br>Great job!";

	} else {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "Not correct. <br><br>More examples of the same below. It appears as the EEG channels are not straight lines, but undulating. What is that?";
		document.getElementById("after_submitQ8").style.background = "red";
		document.getElementById("answerQ8_picture").src = "EEG9_img/Q8.2.png";
		document.getElementById("answerQ8_picture2").src = "EEG9_img/Q8.3.png";
		document.getElementById("afterQ8_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ9() {

	if (document.getElementById("q9a").checked == false && document.getElementById("q9b").checked == false && document.getElementById("q9c").checked == true && document.getElementById("q9d").checked == false && document.getElementById("q9e").checked == false && document.getElementById("q9f").checked == true) {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "Correct! <br><br> This EEG segment belongs to wakefulness with eye blinking artifact, some muscle artifact, and some segments with a posterior dominant rhythm. What is the element at Cz towards the middle of this EEG segment? It is sharply contoured. It breaks the rhythm. Is it a spike? The best way to figure it out is to see it from different perspectives (different montages):";
		document.getElementById("after_submitQ9").style.background = "lightgreen";
		document.getElementById("answerQ9_picture").src = "EEG9_img/Q9.2.png";
		document.getElementById("answerQ9_picture2").src = "EEG9_img/Q9.3.png";
		document.getElementById("answerQ9_picture3").src = "EEG9_img/Q9.4.png";
		document.getElementById("afterQ9_picture").innerHTML = "On transverse bipolar montage and in referential montage (nose reference) it is clear that it is a spike. In the nose-referential montage it even has a field to Pz, which makes anatomical sense. Epileptiform activity at Cz is difficult to recognize because the more EEG you read, the more you get used to 'supress' sharply contoured activity from the midline because it is normal during stages I and II of sleep (vertex waves).<br><br>Great job!";

	} else {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "Not correct. <br><br>Do you see anything that catches your attention at Cz? Is that a vertex wave? What is the sleep-wake stage of this EEG? See it in other montages as below";
		document.getElementById("after_submitQ9").style.background = "red";
		document.getElementById("answerQ9_picture").src = "EEG9_img/Q9.2.png";
		document.getElementById("answerQ9_picture2").src = "EEG9_img/Q9.3.png";
		document.getElementById("answerQ9_picture3").src = "EEG9_img/Q9.4.png";
		document.getElementById("afterQ9_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}










function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  
	if (ev.target.id == document.getElementById(data).getAttribute('data-div')) {
 		alert("That is correct!");
		ev.target.appendChild(document.getElementById(data));
}
	else {
     		alert("That association is wrong. Try again!");
  }

}




function checkQ10() {
		document.getElementById("after_submitQ10").style.visibility = "visible";
		document.getElementById("answerQ10").innerHTML = "Epileptiform activity is sharply contoured, breaks the rhythm, and has a field that makes anatomical sense. However, many artifacts break the rhythm and are sharply contoured also. Sometimes, the electrical field of an epileptiform discharge is not clearly seen. Remember, these are only rules of thumb.<br><br>If an element in the EEG does not break the rhythm (blends smoothly with the normal EEG rhythms) or has an electrical field that appears non-anatomical, probably it is not epileptiform activity.<br><br>Elements that only appear in one stage of the sleep-wake cycle are unlikely to be epileptiform discharges (for example, lambda waves which only appear in wakefulness or POSTs which only appear in early sleep).<br><br>If an element in the EEG appears rhythmic, look for the heart rhythm, a machine around the patient that has some rhythm to it, etc. If the rhythm is the same than in the EEG it is likely an artifact caused by that rhythm external to the brain.";
		document.getElementById("after_submitQ10").style.background = "lightgreen";	
}



