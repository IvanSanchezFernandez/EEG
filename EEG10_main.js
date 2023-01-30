
function checkQ1() {

	if (document.getElementById("q1a").checked == false && document.getElementById("q1b").checked == true && document.getElementById("q1c").checked == false && document.getElementById("q1d").checked == false && document.getElementById("q1e").checked == true && document.getElementById("q1f").checked == false) {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Exactly! <br><br> Although this case is subtler than in the prior figures, this EEG is asymmetric. There are waves at approximately 3-5 Hz in the left temporal region which are not present in the right temporal region:";
		document.getElementById("after_submitQ1").style.background = "lightgreen";
		document.getElementById("answerQ1_picture").src = "EEG10_img/Q1.2.png";
		document.getElementById("afterQ1_picture").innerHTML = "This is focal slowing on the left temporal region, the EEG is asymmetric and abnormal.<br><br>Eyelid blinks and muscle artifact tell us that this EEG segment occurs during wakefulness.<br><br>Great job!";

	} else {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Not correct. <br><br>Compare the channels highlighted by the red rectangles. Are they symmetric?";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("answerQ1_picture").src = "EEG10_img/Q1.2.png";
		document.getElementById("afterQ1_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ2() {

	if (document.question2.question.value == "b") {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Correct!! <br><br>Focal slowing on an EEG means a functional or structural focal abnormality.<br><br>Structural abnormalities include tumors, malformations of cortical development, strokes, hemorrhages, etc. Functional abnormalities include focal areas of hypoperfusion, or areas of the brain that are slow after a focal seizure in that area.<br><br>These and other etiologies can be the reason for focal slowing. Therefore, focal slowing is quite localizing (tells us the area where something is dysfunctional), but quite unspecific in terms of etiology (does not tell us what is causing that brain dysfunction).";
		document.getElementById("after_submitQ2").style.background = "lightgreen";
		document.getElementById("afterQ2_picture").innerHTML = "Great job!";

}	else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Not quite! <br><br>Focal slowing tells us that there is something abnormal in that particular area, but does not tell us what exactly is the abnormality.";
		document.getElementById("after_submitQ2").style.background = "red";
		document.getElementById("afterQ2_picture").innerHTML = "Try again!";

}

}








function checkQ3() {

	if (document.getElementById("q3a").checked == true && document.getElementById("q3b").checked == false && document.getElementById("q3c").checked == false && document.getElementById("q3d").checked == true && document.getElementById("q3e").checked == false && document.getElementById("q3f").checked == false) {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Correct! <br><br> This EEG is clearly asymmetric with slowing (approximately 2 Hz) in the left hemisphere (predominantly in the left frontocentrotemporal regions) that is not present in the right hemisphere.<br><br>There are also T7/C3 sharp waves embedded in the slowing as marked by the red arrows.";
		document.getElementById("after_submitQ3").style.background = "lightgreen";
		document.getElementById("answerQ3_picture").src = "EEG10_img/Q3.2.png";
		document.getElementById("afterQ3_picture").innerHTML = "Epileptiform discharges can appear admixed with slowing in the EEG. Remember that focal slowing signals a dysfunctional area of the brain. Dysfunctional areas often, although not always, are a focus for seizures and epileptiform discharges.<br><br>When you see focal slowing, pay attention to see if there are epileptiform discharges embedded in the slowing.<br><br>Great job!";

	} else {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Not correct. <br><br>Are the rhythms in the left hemisphere (upper red bracket) and in the right hemisphere (lower red bracket) similar or different? Try to identify the elements marked by the red arrows.";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("answerQ3_picture").src = "EEG10_img/Q3.2.png";
		document.getElementById("afterQ3_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkCC1() {

	if (document.CC1.CC1q1.value == "e" && document.CC1.CC1q2.value == "c" && document.CC1.CC1q3.value == "b" && document.CC1.CC1q4.value == "d") {
		document.getElementById("after_submitCC1").style.visibility = "visible";
		document.getElementById("answerCC1").innerHTML = "Correct!! <br><br>The EEG shows left centrotemporal sharp waves with a classic triphasic morphology (three phases). These sharp waves in the centrotemporal regions are typical of childhood epilepsy with centrotemporal spikes. Childhood epilepsy with centrotemporal spikes is the most common epileptic syndrome in childhood, so it is good to be familiar with it.<br><br>On EEG, the sharp waves are typically centrotemporal and they can be bilateral synchronous (right and left at the same time), bilateral asynchronous (right and left at different times), or more rarely, unilateral (only right or only left sharp waves). Epileptiform discharges in childhood epilepsy with centrotemporal spikes is typically sleep potentiated.<br><br>The typical seizure semiology of childhood epilepsy with centrotemporal spikes is that of a child who wakes up at night with one side of the face twitching. The child may make gurgling noises because the throat may also be twitching and the child is trying to speak without being able to. Sometimes, it evolves causing convulsions in one side of the body or even both sides. The seizure semiology explained by this family is generally consistent with the findings on the EEG (remember that what the family describes is not necessarily perfectly accurate, but the description is grossly consistent with the typical semiology, maybe the eye deviation is not as typical, but it can happen).<br><br>It is extremely important to ask the question: are the findings on EEG the findings that are typically found in patients with that seizure semiology? Abnormalities on EEG may be an incidental finding that does not really explain the event and just misdirects in the wrong direction. This is particularly true of centrotemporal spikes, which are so common in childhood (<a href='https://pubmed.ncbi.nlm.nih.gov/17638587/' target='_blank'>1%</a>-<a href='https://pubmed.ncbi.nlm.nih.gov/6766393/' target='_blank'>3%</a> of the general population) which may be found as an incidental finding.<br><br><a href='https://pubmed.ncbi.nlm.nih.gov/24730690/' target='_blank'>One unprovoked seizure and epileptiform discharges consistent with the seizure semiology are enough to diagnose epilepsy</a>. Childhood epilepsy with centrotemporal spikes typically has infrequent seizures and resolves with age. Therefore, many times families decide even not to treat with any antiseizure medication.<br><br>Importantly, when epileptiform discharges are exclusively unilateral you should think that this may be a focal structural epilepsy mimicking childhood epilepsy with centrotemporal spikes. You should recommend a brain MRI to evaluate for a structural lesion in the left centrotemporal region. This is especially true when the patient has also focal slowing in the same area. This patient, apart from the epileptiform discharges, has left centrotemporal delta slowing, suggesting a functional or structural lesion in that area. Do a brain MRI to evaluate for a structural lesion in the left centrotemporal region.";
		document.getElementById("after_submitCC1").style.background = "lightgreen";
		document.getElementById("answerCC1_picture").src = "EEG10_img/CC1.5.png";
		document.getElementById("answerCC1_picture2").src = "EEG10_img/CC1.6.png";
		document.getElementById("afterCC1_picture").innerHTML = "Great job!";

}	else {
		document.getElementById("after_submitCC1").style.visibility = "visible";
		document.getElementById("answerCC1").innerHTML = "No! <br><br>Look well at the EEG. Is there anything else other than epileptiform discharges?";
		document.getElementById("after_submitCC1").style.background = "red";
		document.getElementById("answerCC1_picture").src = "EEG10_img/CC1.5.png";
		document.getElementById("answerCC1_picture2").src = "EEG10_img/CC1.6.png";
		document.getElementById("afterCC1_picture").innerHTML = "Try again!";

}

}








function checkQ4() {

	if (document.getElementById("q4a").checked == false && document.getElementById("q4b").checked == true && document.getElementById("q4c").checked == false && document.getElementById("q4d").checked == true && document.getElementById("q4e").checked == false && document.getElementById("q4f").checked == true) {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Correct! <br><br> This EEG segment shows rhythms of approximately 4 Hz.<br><br>The muscle artifact and the eyelid blinking artifact at the end of the EEG segment show that this EEG segment belongs to wakefulness.<br><br>Generalized waves at approximately 4 Hz would be abnormal during wakefulness...unless you are an infant.";
		document.getElementById("after_submitQ4").style.background = "lightgreen";
		document.getElementById("afterQ4_picture").innerHTML = "This is a normal EEG segment from a 4 month-old infant. The reason why the first and third answers are not right is because this EEG cannot be interpreted without more information: you need the age of this patient to interpret this EEG segment. Without knowing the age it can be abnormal (in an adult or older child) or normal (like in this 4 month-old infant).<br><br>Great job!";

	} else {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Not correct. <br><br>Is this EEG segment normal? Is this EEG segment abnormal? Could it be both? Is there any information that will help you decide?";
		document.getElementById("after_submitQ4").style.background = "red";
		document.getElementById("afterQ4_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ5() {

	if (document.getElementById("q5a").checked == false && document.getElementById("q5b").checked == false && document.getElementById("q5c").checked == true && document.getElementById("q5d").checked == false && document.getElementById("q5e").checked == false && document.getElementById("q5f").checked == false) {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Exactly! <br><br> This EEG segment shows generalized slowing in the 2-4 Hz range.<br><br>This could be abnormal generalized slowing (for example, during an encephalopathy). Is this always abnormal in an adult? It would be definitively abnormal during wakefulness in an adult, but what about during stage III sleep? What about during hyperventilation?";
		document.getElementById("after_submitQ5").style.background = "lightgreen";
		document.getElementById("afterQ5_picture").innerHTML = "This is a normal EEG tracing of an adult during stage III sleep.<br><br>Adults typically do not show as much slowing during hyperventilation as children, but still slowing during hyperventilation in an adult can (rarely) present with a lot of slowing like in this EEG segment.<br><br>Photic stimulation should not cause generalized slowing.<br><br>Great job!";
this 
	} else {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Not correct. <br><br>Is the patient awake or sleep? Is the patient hyperventilating? Make sure to know that before interpreting the EEG.";
		document.getElementById("after_submitQ5").style.background = "red";
		document.getElementById("afterQ5_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ6() {

	if (document.getElementById("q6a").checked == false && document.getElementById("q6b").checked == false && document.getElementById("q6c").checked == true && document.getElementById("q6d").checked == false && document.getElementById("q6e").checked == false && document.getElementById("q6f").checked == true) {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "Yes! <br><br> There are definitively rhythms in the 2-3 Hz range, slow for an adult who is awake. There is something that does not feel right about this slowing though: the slowing appears and disappears abruptly, and appears more pronounced on the right side than on the left side, which is unusual for a generalized slowing.<br><br>If you looked at the video of this patient, this is an intubated patient being suctioned and coughing at the time of this EEG segment.";
		document.getElementById("after_submitQ6").style.background = "lightgreen";
		document.getElementById("afterQ6_picture").innerHTML = "There are many artifacts that can mimic generalized or focal slowing, especially in an intensive care unit environment.<br><br>Always look at the video when you see something that does not feel right.<br><br>Always look at the video even if some abnormality feels right. Artifacts can look like real abnormalities.<br><br>Great job!";

	} else {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "Not correct. <br><br>There is something that does not feel right with this slowing. It starts and ends abruptly. It comes and goes in the middle of it. It is more prominent on the right side.";
		document.getElementById("after_submitQ6").style.background = "red";
		document.getElementById("afterQ6_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ7() {

	if (document.getElementById("q7a").checked == true && document.getElementById("q7b").checked == false && document.getElementById("q7c").checked == true && document.getElementById("q7d").checked == true && document.getElementById("q7e").checked == false) {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "Correct! <br><br> This EEG segment contains areas with high-amplitude 4-5 Hz generalized slowing during hyperventilation. Slowing during hyperventilation can look quite dramatic, especially in young children (see figure below from the same patient later during hyperventilation).";
		document.getElementById("after_submitQ7").style.background = "lightgreen";
		document.getElementById("answerQ7_picture").src = "EEG10_img/Q7.3.png";
		document.getElementById("afterQ7_picture").innerHTML = "In the generalized slowing during hyperventilation, look for admixed epileptiform discharges (none in this patient) and for persistent asymmetries in the slowing. If there is none of those, the slowing during hyperventilation is totally normal.<br><br>Opening the eyes make the posterior dominant rhythm dissappear, but the slowing during hyperventilation persists with eyes open. If the patient stops hyperventilating, the slowing dissappears progressively in a few seconds or minutes.<br><br>Great job!";

	} else {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "Not correct. <br><br>What activation procedure can cause generalized slowing of high-amplitude?.<br><br>This activation procedure can cause very prominent slowing like in the EEG segment below.";
		document.getElementById("after_submitQ7").style.background = "red";
		document.getElementById("answerQ7_picture").src = "EEG10_img/Q7.3.png";
		document.getElementById("afterQ7_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkCC2() {

	if (document.CC2.CC2q1.value == "a" && document.CC2.CC2q2.value == "b") {
		document.getElementById("after_submitCC2").style.visibility = "visible";
		document.getElementById("answerCC2").innerHTML = "Correct!!<br><br>This segment of EEG shows sharply-contoured elements in the temporal lobe (in the left temporal lobe in the first EEG segment and in the right temporal lobe in the second EEG segment). The morphology is not typical of sharp waves and it does not break the rhythm. It is actually a rhythm of 6 Hz or more which does not evolve, which is most consistent with some form of normal variant. Most likely this pattern represents either wicket spikes (a normal variant) or rhythmic temporal theta bursts (another rhythmic variant).<br><br>The semiology of seeing simple shapes and patches of color is typical of occipital seizures but also of migraine. When temporal lobe seizures have visual phenomena, they are typically more ellaborate shapes.";
		document.getElementById("after_submitCC2").style.background = "lightgreen";
		document.getElementById("afterCC2_picture").innerHTML = "Great job!";

}	else {
		document.getElementById("after_submitCC2").style.visibility = "visible";
		document.getElementById("answerCC2").innerHTML = "No!";
		document.getElementById("after_submitCC2").style.background = "red";
		document.getElementById("afterCC2_picture").innerHTML = "Try again!";

}

}

