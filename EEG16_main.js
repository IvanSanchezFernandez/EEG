

function checkQ1() {

	if (document.question1.question.value == "d") {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Correct!! <br><br>This is one of the most common artifacts.<br><br>This is chewing artifact and occurs every time the patient eats something.<br><br>You can recognize the artifact as semirrhytmic muscle artifact most prominent in the bitemporal regions (where the masticatory muscles are). When in doubt, open the video file and you will see your patient eating something.<br><br>This is one of the artifacts that you should recognize immediately: its pattern is very characteristic and it appears in most EEGs. Below is another example of chewing artifact.";
		document.getElementById("after_submitQ1").style.background = "lightgreen";
		document.getElementById("answerQ1_picture").src = "EEG16_img/Q1.2.png";
		document.getElementById("afterQ1_picture").innerHTML = "Great job!";

}	else {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "What can be causing semirrhythmic muscle artifact in the bitemporal regions? What muscles are there? What can cause semirrhythmic activation of these muscles? You can see another example of the same pattern below.";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("answerQ1_picture").src = "EEG16_img/Q1.2.png";
		document.getElementById("afterQ1_picture").innerHTML = "Try again!";

}

}








function checkQ2() {

	if (document.getElementById("q2a").checked == false && document.getElementById("q2b").checked == true && document.getElementById("q2c").checked == false && document.getElementById("q2d").checked == false && document.getElementById("q2e").checked == true) {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Correct! <br><br>There is frequent artifact at T8. This type of artifact is sometimes called 'pop' artifact and it is thought to be due to sudden release of electric static charge because of poor electrode contact. This pattern, which sometimes is called 'traintrack artifact' for its resemblance to a traintrack, can be confused with spikes or even with a seizure. The main differentiating feature is its strict location in a single electrode with no adjacent field. Its non-physiological morphology also helps.<br><br> There is also muscle artifact at T7.<br><br>Below you can find an example of the type of artifact that results when electrode contact goes really bad: there are wide and abrupt non-physiological fluctuations in amplitude limited to a single electrode (C3 in this case).";
		document.getElementById("after_submitQ2").style.background = "lightgreen";
		document.getElementById("answerQ2_picture").src = "EEG16_img/Q2.2.png";
		document.getElementById("answerQ2_picture2").src = "EEG16_img/Q2.3.png";
		document.getElementById("afterQ2_picture").innerHTML = "Learn this artifact. It appears in most EEGS. It also has a practical application: because you know that the affected electrode is a bad contact, any deflection suggestive of epileptiform discharge or seizure that appears later in the bad electrode is probably an artifact, nothing coming from the brain.<br><br>Great job!";

	} else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Not correct. Examples of a similar situation are presented below.";
		document.getElementById("after_submitQ2").style.background = "red";
		document.getElementById("answerQ2_picture").src = "EEG16_img/Q2.2.png";
		document.getElementById("answerQ2_picture2").src = "EEG16_img/Q2.3.png";
		document.getElementById("afterQ2_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ3() {

	if (document.question3.question.value == "c") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Correct!! <br><br>The pattern of slow waves symmetrically affecting the frontal channels with almost no field is very characteristic of repetitive eye movements. If you open the video during one of these episodes, you will see the patient's eyes repetitively moving in the vertical direction.";
		document.getElementById("after_submitQ3").style.background = "lightgreen";
		document.getElementById("afterQ3_picture").innerHTML = "Great job!";

}	else {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Clue: what sensory organ is just below the frontal lobe?";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("afterQ3_picture").innerHTML = "Try again!";

}

}








function checkQ4() {

	if (document.question4.question.value == "f") {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Correct!! <br><br>The rhythmic activity suggests some repetitive generator. There is abrupt onset and end of the rhythmic activity. There is no evolution of this rhythmic activity. In small children you will see some caregiver on the video patting the child. This can be extremely difficult to differentiate from a seizure when the rhythmicity speeds up and slows down: always look at the video in these cases.<br><br>Abrupt onset and end and (in most cases) no evolution in frequency, amplitude, or spread should make you think of patting artifact, like in the example below:";
		document.getElementById("after_submitQ4").style.background = "lightgreen";
		document.getElementById("answerQ4_picture").src = "EEG16_img/Q4.2.png";
		document.getElementById("afterQ4_picture").innerHTML = "And, of course, look at the video. Great job!";

}	else {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Another example below:";
		document.getElementById("after_submitQ4").style.background = "red";
		document.getElementById("answerQ4_picture").src = "EEG16_img/Q4.2.png";
		document.getElementById("afterQ4_picture").innerHTML = "Try again!";

}

}








function checkQ5() {

	if (document.getElementById("q5a").checked == false && document.getElementById("q5b").checked == false && document.getElementById("q5c").checked == false && document.getElementById("q5d").checked == true && document.getElementById("q5e").checked == true) {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Exactly! <br><br>Several electrodes in this patient are either detached or with poor contact on the scalp. The EEG is recording changes in voltage that are artifactual and do not come from the brain: electrical noise, rapid movements of the electrodes in the air, etc. That is, non-physiological, non-brain voltage changes.<br><br>When several electrodes are detached, the EEG findings may not be reliable: real abnormalities may be obscured and findings that appear real may be artifactual.<br><br>Fix the electrodes as soon as possible to obtain a reliable EEG tracing again!<br><br>Examples of similar EEG segments with detached electrodes are presented below:";
		document.getElementById("after_submitQ5").style.background = "lightgreen";
		document.getElementById("answerQ5_picture").src = "EEG16_img/Q5.2.png";
		document.getElementById("answerQ5_picture2").src = "EEG16_img/Q5.3.png";
		document.getElementById("afterQ5_picture").innerHTML = "Great job!";


	} else {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Not correct.<br><br>See other examples of the same pattern below:";
		document.getElementById("after_submitQ5").style.background = "red";
		document.getElementById("answerQ5_picture").src = "EEG16_img/Q5.2.png";
		document.getElementById("answerQ5_picture2").src = "EEG16_img/Q5.3.png";
		document.getElementById("afterQ5_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ6() {

	if (document.getElementById("q6a").checked == false && document.getElementById("q6b").checked == false && document.getElementById("q6c").checked == true && document.getElementById("q6d").checked == false && document.getElementById("q6e").checked == true) {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "Exactly! <br><br>Prominent muscle artifact is seen in this EEG segment. There are also eyelid blinking artifacts.<br><br>Another example is presented below:";
		document.getElementById("after_submitQ6").style.background = "lightgreen";
		document.getElementById("answerQ6_picture").src = "EEG16_img/Q6.2.png";
		document.getElementById("afterQ6_picture").innerHTML = "Great job!";


	} else {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "Not correct.<br><br>See other example of the same pattern below:";
		document.getElementById("after_submitQ6").style.background = "red";
		document.getElementById("answerQ6_picture").src = "EEG16_img/Q6.2.png";
		document.getElementById("afterQ6_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ7() {

	if (document.question7.question.value == "e") {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "Correct!! <br><br>When the lateral rectus muscle of the eye contracts and moves the eye laterally, the EMG activity can be picked up by the anterior temporal electrodes. This appears on the EEG as a 'spike-looking' artifact. The lack of an electric field and the occurrence only with lateral eye movements helps distinguish it from a spike.<br><br>Another example is presented below:";
		document.getElementById("after_submitQ7").style.background = "lightgreen";
		document.getElementById("answerQ7_picture").src = "EEG16_img/Q7.2.png";
		document.getElementById("afterQ7_picture").innerHTML = "Great job!";

}	else {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "Another example below:";
		document.getElementById("after_submitQ7").style.background = "red";
		document.getElementById("answerQ7_picture").src = "EEG16_img/Q7.2.png";
		document.getElementById("afterQ7_picture").innerHTML = "Try again!";

}

}








function checkQ8() {

	if (document.question8.question.value == "c") {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "Correct!! <br><br>There is an abrupt onset and end of rhythmic waves at approximately 1-2 Hz. The whole episode lasts approximately 5 seconds.<br><br>This patient was just scratching his head on the video.<br><br>The best way to recognize this as of non-cerebral non-physiological origin is to realize that the electric fields are very high voltage in some channels with almost no field in neighboring channels. The abrupt onset and end also typically points to artifact.";
		document.getElementById("after_submitQ8").style.background = "lightgreen";
		document.getElementById("afterQ8_picture").innerHTML = "Great job!";

}	else {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "Maybe the rhythmicity and abrupt onset and end help you recognize this pattern.";
		document.getElementById("after_submitQ8").style.background = "red";
		document.getElementById("afterQ8_picture").innerHTML = "Try again!";

}

}








function checkQ9() {

	if (document.getElementById("q9a").checked == false && document.getElementById("q9b").checked == true && document.getElementById("q9c").checked == false && document.getElementById("q9d").checked == false && document.getElementById("q9e").checked == true) {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "Exactly! <br><br>When an electrode is close to an artery in the scalp, the pulse is picked up and appears as a synusoidal rhythm which has the same frequency as the heart beat.<br><br>The cardiobalistic artifact is different than the electrocardiogram artifact, which can be seen (although it is not particularly prominent) in F7-T7 and T7-P7. The electrocardiogram artifact represents the electrical activity from the heart conduction system catched by the electrodes on the scalp.<br><br>When the EKG channel is presented with the EEG channels, the relationship between the rhythms becomes more clear:";
		document.getElementById("after_submitQ9").style.background = "lightgreen";
		document.getElementById("answerQ9_picture").src = "EEG16_img/Q9.2.png";
		document.getElementById("answerQ9_picture2").src = "EEG16_img/Q9.3.png";
		document.getElementById("afterQ9_picture").innerHTML = "Great job!";


	} else {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "Not correct.<br><br>Compare the rhythms in the EEG channels and in the EKG channels:";
		document.getElementById("after_submitQ9").style.background = "red";
		document.getElementById("answerQ9_picture").src = "EEG16_img/Q9.2.png";
		document.getElementById("answerQ9_picture2").src = "EEG16_img/Q9.3.png";
		document.getElementById("afterQ9_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ10() {

	if (document.question10.question.value == "b") {
		document.getElementById("after_submitQ10").style.visibility = "visible";
		document.getElementById("answerQ10").innerHTML = "Correct!! <br><br>Slow undulating waves typically with a frequency of 1 Hz or even slower are suggestive of sweat artifact.<br><br>Sweat causes electrolytes form electrical bridges between adjacent electrodes.<br><br>Increase the low frequency filter to reduce sweating artifact. Or better still, reduce the room temperature so that your patient does not sweat so much.<br><br>Some more examples of sweat artifact below:";
		document.getElementById("after_submitQ10").style.background = "lightgreen";
		document.getElementById("answerQ10_picture").src = "EEG16_img/Q10.2.png";
		document.getElementById("answerQ10_picture2").src = "EEG16_img/Q10.3.png";
		document.getElementById("answerQ10_picture3").src = "EEG16_img/Q10.4.png";
		document.getElementById("afterQ10_picture").innerHTML = "Great job!";

}	else {
		document.getElementById("after_submitQ10").style.visibility = "visible";
		document.getElementById("answerQ10").innerHTML = "No. More examples below:";
		document.getElementById("after_submitQ10").style.background = "red";
		document.getElementById("answerQ10_picture").src = "EEG16_img/Q10.2.png";
		document.getElementById("answerQ10_picture2").src = "EEG16_img/Q10.3.png";
		document.getElementById("answerQ10_picture3").src = "EEG16_img/Q10.4.png";
		document.getElementById("afterQ10_picture").innerHTML = "Try again!";

}

}








function checkQ11() {

	if (document.question11.question.value == "d") {
		document.getElementById("after_submitQ11").style.visibility = "visible";
		document.getElementById("answerQ11").innerHTML = "Correct!!<br><br>A small amount of alternating current from electric plugs around the patient runs through the patient body. In this case, look at the P4-O2 and the P8-O2 channels. They look fuzzy.<br><br>In the USA, among other countries, alternating current has a frequency of 60 Hz, so it is also called 60 Hz artifact. In many other countries, the frequency of alternating current is 50 Hz, so it is also called 50 Hz artifact. The high-frequency (50 Hz or 60 Hz) of the artifact gives the fuzzy appearance to the affected channels as shown in a detail of the same figure below:";
		document.getElementById("after_submitQ11").style.background = "lightgreen";
		document.getElementById("answerQ11_picture").src = "EEG16_img/Q11.2.png";
		document.getElementById("afterQ11_picture").innerHTML = "Why does it affect only some channels (and not all channels)? All electrodes are exposed to approximately the same amount of this 50 Hz or 60 Hz electrical noise. If the exposure was exactly the same, the noise would cancel out. However, when there are some differences in impedance in the different electrodes this leads to the 50 Hz or 60 Hz artifact.<br><br>The affected electrodes (O2 in this case) are electrodes with typically increased impedance which are not as well fixed to the scalp as the other electrodes.<br><br>Below is another example in which the affected channels are Fp2-F4, Fp-F8, and F8-T8:";
		document.getElementById("answerQ11_picture2").src = "EEG16_img/Q11.3.png";
		document.getElementById("afterQ11_picture2").innerHTML = "Great job!";

}	else {
		document.getElementById("after_submitQ11").style.visibility = "visible";
		document.getElementById("answerQ11").innerHTML = "No. Pay attention to the fuzzy appearance of the P4-O2 and the P8-O2 channels in the detail of the same figure below:";
		document.getElementById("after_submitQ11").style.background = "red";
		document.getElementById("answerQ11_picture").src = "EEG16_img/Q11.2.png";
		document.getElementById("afterQ11_picture").innerHTML = "Below is another example in which the affected channels are Fp2-F4, Fp-F8, and F8-T8:";
		document.getElementById("answerQ11_picture2").src = "EEG16_img/Q10.3.png";
		document.getElementById("afterQ11_picture2").innerHTML = "Try again!";

}

}



