
function checkQ1() {

	if (document.getElementById("q1a").checked == true && document.getElementById("q1b").checked == false && document.getElementById("q1c").checked == false && document.getElementById("q1d").checked == true && document.getElementById("q1e").checked == false && document.getElementById("q1f").checked == false) {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Exactly! <br><br> The beginning of this EEG segment has a couple of eyeblink artifacts and, after the second eyeblink artifact, the patient remains with eyes closed and a beautiful posterior dominant rhythm is seen.";
		document.getElementById("after_submitQ1").style.background = "lightgreen";
		document.getElementById("answerQ1_picture").src = "EEG8_img/Q1.2.png";
		document.getElementById("afterQ1_picture").innerHTML = "The first eyeblink artifact is marked with an arrow. The posterior dominant rhythm is marked with red rectangles.<br><br>The posterior dominant rhythm is mildly asymmetric (higher amplitude on the right side) but still within normal limits.<br><br>Great job!";

	} else {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Not correct. <br><br>Try to identify the elements marked by the red rectangles. What are they? What stage do they appear in?";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("answerQ1_picture").src = "EEG8_img/Q1.2.png";
		document.getElementById("afterQ1_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ2() {

	if (document.getElementById("q2a").checked == false && document.getElementById("q2b").checked == true && document.getElementById("q2c").checked == false && document.getElementById("q2d").checked == false && document.getElementById("q2e").checked == true && document.getElementById("q2f").checked == true) {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Correct! <br><br> This EEG contains beautiful vertex waves which are symmetric around the midline (big red rectangle) and some sleep spindles (small red rectangles).<br><br>Apart from that normal activity which defines stage II sleep, there are C4 spikes and sharp waves (red arrows). This epileptiform activity breaks the rhythm and is sharply contoured.";
		document.getElementById("after_submitQ2").style.background = "lightgreen";
		document.getElementById("answerQ2_picture").src = "EEG8_img/Q2.2.png";
		document.getElementById("afterQ2_picture").innerHTML = "Great job!";

	} else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Not correct. <br><br>Try to identify the elements marked by the red rectangles. What are they? What stage do they appear in?";
		document.getElementById("after_submitQ2").style.background = "red";
		document.getElementById("answerQ2_picture").src = "EEG8_img/Q2.2.png";
		document.getElementById("afterQ2_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ3() {

	if (document.getElementById("q3a").checked == true && document.getElementById("q3b").checked == true && document.getElementById("q3c").checked == false && document.getElementById("q3d").checked == true && document.getElementById("q3e").checked == true && document.getElementById("q3f").checked == false) {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Correct! <br><br> This EEG contains beautiful vertex waves which are symmetric around the midline (big red rectangle) and some sleep spindles (small red rectangles).<br><br>There is no epileptiform activity in this EEG segment.";
		document.getElementById("after_submitQ3").style.background = "lightgreen";
		document.getElementById("answerQ3_picture").src = "EEG8_img/Q3.2.png";
		document.getElementById("afterQ3_picture").innerHTML = "Great job!";

	} else {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Not correct. <br><br>Try to identify the elements marked by the red rectangles. What are they? What stage do they appear in?";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("answerQ3_picture").src = "EEG8_img/Q3.2.png";
		document.getElementById("afterQ3_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ4() {

	if (document.getElementById("q4a").checked == false && document.getElementById("q4b").checked == false && document.getElementById("q4c").checked == true && document.getElementById("q4d").checked == false && document.getElementById("q4e").checked == false && document.getElementById("q4f").checked == true) {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Correct! <br><br> This EEG segment is mostly high-amplitude (look at the blue scale measuring voltage) slow waves (marked by red circles). That defines stage III sleep.<br><br>There are P7 spikes (red arrows), which make the EEG segment abnormal. This epileptiform activity breaks the rhythm and is sharply contoured.";
		document.getElementById("after_submitQ4").style.background = "lightgreen";
		document.getElementById("answerQ4_picture").src = "EEG8_img/Q4.2.png";
		document.getElementById("afterQ4_picture").innerHTML = "Great job!";

	} else {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Not correct. <br><br>Try to identify the elements marked by the red circles. What are they? What stage do they appear in?";
		document.getElementById("after_submitQ4").style.background = "red";
		document.getElementById("answerQ4_picture").src = "EEG8_img/Q4.2.png";
		document.getElementById("afterQ4_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ5() {

	if (document.getElementById("q5a").checked == true && document.getElementById("q5b").checked == false && document.getElementById("q5c").checked == false && document.getElementById("q5d").checked == false && document.getElementById("q5e").checked == true && document.getElementById("q5f").checked == false) {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Exactly! <br><br> The parts marked within the red rectangles (and most of this EEG segment) are muscle artifact. Rhythmic muscle artifact mostly in the temporal regions occurs while chewing because masticatory muscles contract and relax rhythmically. It is called 'chewing artifact' and when you see it once you will never miss it anymore: it has a very typical appearance.<br><br>No need to call the rapid response team for this. If you see the video corresponding to EEG segments with chewing artifact you will most likely see the patient eating.";
		document.getElementById("after_submitQ5").style.background = "lightgreen";
		document.getElementById("answerQ5_picture").src = "EEG8_img/Q5.2.png";
		document.getElementById("afterQ5_picture").innerHTML = "Muscle artifact occurs only in wakefulness (an exception being babies, who can still suck milk while falling asleep or sleep).<br><br>Great job!";

	} else {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Not correct. <br><br>The key to identifying this EEG segment is to realize that the elements in the elongated red rectangles are the same than the elements in the short red rectangles. What are they? What stage do they appear in?";
		document.getElementById("after_submitQ5").style.background = "red";
		document.getElementById("answerQ5_picture").src = "EEG8_img/Q5.2.png";
		document.getElementById("afterQ5_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ6() {

	if (document.getElementById("q6a").checked == false && document.getElementById("q6b").checked == false && document.getElementById("q6c").checked == false && document.getElementById("q6d").checked == false && document.getElementById("q6e").checked == true && document.getElementById("q6f").checked == true) {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "Yes! <br><br> At the beginning of the EEG segment there is some muscle artifact. Then, there is a well-formed posterior dominant rhythm. There are even small eyeblink artifacts towards the end of the EEG segment. These are elements typical of wakefulness.<br><br>There are also C4 sharp waves (marked by red arrows). This epileptiform activity breaks the rhythm and is sharply contoured, although the electric field is not particularly well seen here.";
		document.getElementById("after_submitQ6").style.background = "lightgreen";
		document.getElementById("answerQ6_picture").src = "EEG8_img/Q6.2.png";
		document.getElementById("afterQ6_picture").innerHTML = "Great job!";

	} else {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "Not correct. <br><br>Try to identify the elements marked by the red rectangles and the red circles. What are they? What stage do they appear in?";
		document.getElementById("after_submitQ6").style.background = "red";
		document.getElementById("answerQ6_picture").src = "EEG8_img/Q6.2.png";
		document.getElementById("afterQ6_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ7() {

	if (document.getElementById("q7a").checked == true && document.getElementById("q7b").checked == false && document.getElementById("q7c").checked == true && document.getElementById("q7d").checked == false && document.getElementById("q7e").checked == true && document.getElementById("q7f").checked == false) {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "Correct! <br><br> This is a normal EEG segment during stage III sleep, defined by generalized slow waves (marked by red circles) occupying most of the EEG tracing. During stage III sleep some sleep spindles (red rectangles) can be seen.";
		document.getElementById("after_submitQ7").style.background = "lightgreen";
		document.getElementById("answerQ7_picture").src = "EEG8_img/Q7.2.png";
		document.getElementById("afterQ7_picture").innerHTML = "Great job!";

	} else {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "Not correct. <br><br>Try to identify the elements marked by the red rectangles. What are they? What stage do they appear in?";
		document.getElementById("after_submitQ7").style.background = "red";
		document.getElementById("answerQ7_picture").src = "EEG8_img/Q7.2.png";
		document.getElementById("afterQ7_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ8() {

	if (document.getElementById("q8a").checked == true && document.getElementById("q8b").checked == false && document.getElementById("q8c").checked == true && document.getElementById("q8d").checked == false && document.getElementById("q8e").checked == false && document.getElementById("q8f").checked == false) {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "Correct! <br><br> This is a normal EEG segment during wakefulness, with eyeblink artifact (in red circles). The elements marked within the red rectangles are other artifact (lateral eye movement artifact).";
		document.getElementById("after_submitQ8").style.background = "lightgreen";
		document.getElementById("answerQ8_picture").src = "EEG8_img/Q8.2.png";
		document.getElementById("afterQ8_picture").innerHTML = "Great job!";

	} else {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "Not correct. <br><br>Try to identify the elements marked within the red circles. What are they? What stage do they appear in?";
		document.getElementById("after_submitQ8").style.background = "red";
		document.getElementById("answerQ8_picture").src = "EEG8_img/Q8.2.png";
		document.getElementById("afterQ8_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ9() {

	if (document.getElementById("q9a").checked == true && document.getElementById("q9b").checked == false && document.getElementById("q9c").checked == true && document.getElementById("q9d").checked == false && document.getElementById("q9e").checked == false && document.getElementById("q9f").checked == false) {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "Correct! <br><br> This is a normal EEG segment during wakefulness, with a posterior dominant rhythm (in red rectangles). What is that thing in the frontal leads? That is eye flutter: if you open the video for EEG segments like this you will see the patient's eyelids moving fast and rhythmically. As with the chewing artifact, once you see it, you will always recognize it.";
		document.getElementById("after_submitQ9").style.background = "lightgreen";
		document.getElementById("answerQ9_picture").src = "EEG8_img/Q9.2.png";
		document.getElementById("afterQ9_picture").innerHTML = "Great job!";

	} else {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "Not correct. <br><br>Try to identify the elements marked within the red rectangles. What are they? What stage do they appear in?";
		document.getElementById("after_submitQ9").style.background = "red";
		document.getElementById("answerQ9_picture").src = "EEG8_img/Q9.2.png";
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
		document.getElementById("answerQ10").innerHTML = "Wakefulness: posterior dominant rythm, eyelid blinking artifact, and muscle artifact.<br><br>Drowsiness (stage I sleep): vertex waves, slow lateral eye movements.<br><br>Stage II sleep: vertex waves, spindles.<br><br>Stage III sleep: diffuse slow waves, spindles also seen.";
		document.getElementById("after_submitQ10").style.background = "lightgreen";	
}



