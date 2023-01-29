


function checkQ1() {

	if (document.getElementById("q1a").checked == false && document.getElementById("q1b").checked == false && document.getElementById("q1c").checked == true && document.getElementById("q1d").checked == false && document.getElementById("q1e").checked == false) {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Correct! <br><br> The posterior dominant rhythm disappears during stage I sleep and the lack of posterior dominant rhythm is one of the defining features of stage I sleep. <br><br>The characteristic eye movements of stage I are slow rowing eye movements as marked by red rectangles in the figures below. <br>";
		document.getElementById("after_submitQ1").style.background = "lightgreen";
		document.getElementById("answerQ1_picture").src = "EEG3_img/Q1.2.png";
		document.getElementById("answerQ1_picture2").src = "EEG3_img/Q1.3.png";
		document.getElementById("afterQ1_picture").innerHTML = "Rapid eye movements are the characteristic feature of rapid eye movement sleep. <br><br>Vertex waves appear typically in the midline and parasagittal regions and are approximately symmetric between the right and left hemispheres. <br><br>High-amplitude diffuse slow waves are the defining feature of stage III. Epileptiform activity tends to potentiate in both drowsiness (stage I) and stage II sleep.<br><br> Great job!";

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
		document.getElementById("answerQ2").innerHTML = "Correct!! <br><br> The transition from wakefulness to sleep is usually characterized by several periods in which the EEG goes from wakefulness to drowsiness and back to wakefulness several times before the patient enters deeper stages of sleep. It is also not unusual to briefly wake up briefly from deeper stages of sleep.";
		document.getElementById("after_submitQ2").style.background = "lightgreen";
		document.getElementById("answerQ2_picture").src = "";
		document.getElementById("afterQ2_picture").innerHTML = "<br><br> Great job!";

}	else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Not quite! <br><br> The transition from wakefulness to sleep is usually characterized by several periods in which the EEG goes from wakefulness to drowsiness and back to wakefulness several times before the patient enters deeper stages of sleep. It is also not unusual to briefly wake up briefly from deeper stages of sleep.";
		document.getElementById("after_submitQ2").style.background = "red";
		document.getElementById("answerQ2_picture").src = "";
		document.getElementById("afterQ2_picture").innerHTML = "<br><br> Try again!";

}

}








function checkQ3() {

	if (document.getElementById("q3a").checked == false && document.getElementById("q3b").checked == true && document.getElementById("q3c").checked == true && document.getElementById("q3d").checked == false && document.getElementById("q3e").checked == false) {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Correct! <br><br> There are sleep spindles in the midline and right parasagittal region. Asymmetric spindles can occur occasionally and be normal in patients up to 2 years of age as long as they even out from the right and left throughout the EEG. Below 2 years of age, spindles are abnormal if consistently asymmetric. After 2 years of age, spindles that appear asymmetric are always abnormal.<br><br>In patients younger than 2 years of age, sleep spindles can be very long encompassing several seconds.<br>";
		document.getElementById("after_submitQ3").style.background = "lightgreen"
		document.getElementById("answerQ3_picture").src = "EEG3_img/Q3.2.png";
		document.getElementById("answerQ3_picture2").src = "EEG3_img/Q3.3.png";
		document.getElementById("afterQ3_picture").innerHTML = "During the rest of the EEG this patient had sleep spindles appearing predominantly on the right hemisphere (main figure in the question), appearing predominantly on the left hemisphere (upper figure) and appearing bilaterally (lower figure). Therefore, the lateralization of spindles evened out and this is normal in a patient younger than 2 years of age.<br><br>Great job!";

	} else {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Not correct. <br><br> Make sure you checked all correct answers and unchecked all incorrect answers.";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("answerQ3_picture").src = "EEG3_img/Q3.2.png";
		document.getElementById("answerQ3_picture2").src = "EEG3_img/Q3.3.png";
		document.getElementById("afterQ3_picture").innerHTML = "What if you knew that during the rest of the EEG this patient had sleep spindles appearing predominantly on the right hemisphere (main figure in the question), appearing predominantly on the left hemisphere (upper figure) and appearing bilaterally (lower figure) and in the overall EEG they even out?<br><br>Try again!";

}


}








function checkQ4() {

	if (document.getElementById("q4a").checked == true && document.getElementById("q4b").checked == false && document.getElementById("q4c").checked == false && document.getElementById("q4d").checked == false && document.getElementById("q4e").checked == false) {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Correct! <br><br> This EEG segment corresponds to stage III sleep. It contains more than 20% of high-amplitude delta waves.<br>";
		document.getElementById("after_submitQ4").style.background = "lightgreen"
		document.getElementById("answerQ4_picture").src = "EEG3_img/Q4.2.png";
		document.getElementById("answerQ4_picture2").src = "EEG3_img/Q4.3.png";
		document.getElementById("afterQ4_picture").innerHTML = "There are also some sleep spindles, which are the characteristic feature of stage II sleep, but can also appear in stage III sleep (upper figure). The lower figure shows stage III without sleep spindles. Slow lateral eye movements are typical of drowsiness (stage I sleep). The posterior dominant rhythm only appears in wakefulness, not sleep. This patient is 1 year-old, so the asymmetric sleep spindle is normal as long as its lateralization evens out throughout the EEG.<br><br>Great job!";

	} else {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Not correct. <br><br> Make sure you checked all correct answers and unchecked all incorrect answers.";
		document.getElementById("after_submitQ4").style.background = "red";
		document.getElementById("answerQ4_picture").src = "EEG3_img/Q4.2.png";
		document.getElementById("answerQ4_picture2").src = "EEG3_img/Q4.3.png";
		document.getElementById("afterQ4_picture").innerHTML = "Try again!";

}


}








function checkCC1() {

	if (document.CC1.CC1q1.value == "c" && document.CC1.CC1q2.value == "e" && document.CC1.CC1q3.value == "b") {
		document.getElementById("after_submitCC1").style.visibility = "visible";
		document.getElementById("answerCC1").innerHTML = "Yes!! <br><br>The EEG shows frequent periods in which the voltage is zero or close to zero and there appears to be no brain activity.<br><br>This is called discontinuity: the brain activity is not always appearing continuously as it should, but comes and goes.<br><br>Discontinuity is an unspecific marker of moderate to severe encephalopathy of non-specific etiology which can be caused by traumatic brain injury, toxic-metabolic causes, medications, etc.<br><br>Discontinuity is never normal and in general it is a bad prognostic sign. However, if toxics or medications are the only cause for the discontinuity on EEG, as the toxic or medication decreases its concentration, the EEG can progressively become more continuous.";
		document.getElementById("after_submitCC1").style.background = "lightgreen";
		document.getElementById("afterCC1_picture").innerHTML = "Great job!";

}	else {
		document.getElementById("after_submitCC1").style.visibility = "visible";
		document.getElementById("answerCC1").innerHTML = "No!";
		document.getElementById("after_submitCC1").style.background = "red";
		document.getElementById("afterCC1_picture").innerHTML = "Try again!";

}

}








function checkCC2() {

	if (document.CC2.CC2q1.value == "c" && document.CC2.CC2q2.value == "a") {
		document.getElementById("after_submitCC2").style.visibility = "visible";
		document.getElementById("answerCC2").innerHTML = "Correct!! <br><br>This segment of EEG shows sleep at the beginning (do you see the sleep spindles?), then a period of a mixture of different frequencies, some of them of high amplitude, and finally, muscle artifact. This represents a transition from sleep to wakefulness and the burst of different frequencies is called hypnopompic hypersynchrony.<br><br>In children, hypnopompic hypersynchronies (transitions from sleep to wakefulness) and hypnagogic hypersynchrnonies (transitions from wakefulness to sleep) can appear very intimidating with a mixture of different elements and high-amplitude waves. They are completely normal, however.<br><br>Another example of normal hypnopompic hypersynchrony is presented below:";
		document.getElementById("after_submitCC2").style.background = "lightgreen";
		document.getElementById("answerCC2_picture").src = "EEG3_img/CC2.2.png";
		document.getElementById("afterCC2_picture").innerHTML = "Great job!";

}	else {
		document.getElementById("after_submitCC2").style.visibility = "visible";
		document.getElementById("answerCC2").innerHTML = "No! <br><br>Another example of the same pattern is presented below:";
		document.getElementById("after_submitCC2").style.background = "red";
		document.getElementById("answerCC2_picture").src = "EEG3_img/CC2.2.png";
		document.getElementById("afterCC2_picture").innerHTML = "Try again!";

}

}

