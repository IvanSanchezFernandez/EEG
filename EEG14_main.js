
function checkQ1() {

	if (document.getElementById("q1a").checked == false && document.getElementById("q1b").checked == true && document.getElementById("q1c").checked == false && document.getElementById("q1d").checked == false && document.getElementById("q1e").checked == false && document.getElementById("q1f").checked == false) {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Exactly! <br><br>The red arrows point to posterior slow waves of youth, which are like an underlying slow wave that make the posterior dominant rhythm appear sinusoidal. It is a normal variant.<br><br>Two other EEG segments from the same patient (the first EEG segment highlighted with red curves) are presented in the figures below:";
		document.getElementById("after_submitQ1").style.background = "lightgreen";
		document.getElementById("answerQ1_picture").src = "EEG14_img/Q1.2.png";
		document.getElementById("answerQ1_picture_2").src = "EEG14_img/Q1.3.png";		
                document.getElementById("answerQ1_picture_3").src = "EEG14_img/Q1.4.png";
		document.getElementById("afterQ1_picture").innerHTML = "The parts marked by the purple arrows are just muscle artifact. All EEG segments belong to wakefulness.<br><br>Of interest, the posterior dominant rhythm is of higher amplitude in the right hemisphere than in the left hemisphere, but this asymmetry is still within normal limits (the posterior dominant rhythm in the right hemisphere has to be of more than three times higher amplitude than in the left hemisphere to be abnormal).<br><br>Great job!";


	} else {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Not correct. <br><br>Try to figure out first what stage this EEG segment belongs to: wakefulness or sleep? Then try to think about elements which may appear in that state.";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("answerQ1_picture").src = "EEG14_img/Q1.2.png";
		document.getElementById("answerQ1_picture_2").src = "EEG14_img/Q1.3.png";
		document.getElementById("answerQ1_picture_3").src = "EEG14_img/Q1.4.png";
		document.getElementById("afterQ1_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ2() {

	if (document.getElementById("q2a").checked == false && document.getElementById("q2b").checked == true && document.getElementById("q2c").checked == false && document.getElementById("q2d").checked == false && document.getElementById("q2e").checked == true && document.getElementById("q2f").checked == false) {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Correct! <br><br>There are, at least, two EEG artifacts that you should easily recognize: eye blinking artifact and chewing artifact.<br><br>The eye blinking artifact appears frequently (as frequently as the patient blinks) during wakefulness.<br><br>The chewing artifact is just muscle artifact affecting predominantly the temporal regions (contraction of the temporalis muscles while chewing).";
		document.getElementById("after_submitQ2").style.background = "lightgreen";
		document.getElementById("afterQ2_picture").innerHTML = "Become familiar with these two artifacts. They appear very frequently and it is important to recognize them to avoid overcalling them as an abnormality. Convulsive seizures can have prominent muscle and movement artifact associated with them, but chewing artifact is rhythmic muscle artifact with no associated EEG changes suggestive of a seizure.<br><br>Great job!";

	} else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Not correct.";
		document.getElementById("after_submitQ2").style.background = "red";
		document.getElementById("afterQ2_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ3() {

	if (document.getElementById("q3a").checked == false && document.getElementById("q3b").checked == true && document.getElementById("q3c").checked == false && document.getElementById("q3d").checked == true && document.getElementById("q3e").checked == false && document.getElementById("q3f").checked == false) {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Correct! This was a tricky question. <br><br>These two EEG segments show a rhythmic pattern with some evolution in frequency, amplitude, morphology, and spread over time. In addition, there are appear to be some spike-wave complexes admixed into the rhythmic pattern. What else do you need to recognize a seizure on EEG?<br><br>Although a seizure is typically a rhythmic pattern with some evolution in frequency, amplitude, morphology, and spread, not all rhythmic patterns with evolution in frequency, amplitude, morphology, and spread are seizures.<br><br>A closer look at the morphology of the presumed epileptiform discharges shows that the presumed spike does not precede the presumed slow wave, but follows it or appears in the middle of it.<br><br>Further, the electric field does not make a lot of sense with high-voltage presumed spikes in P4-O2 channel with no field in the adjacent C4-P4 channel.<br><br>This was not a seizure, but if you had no video it could trick you into believing it was.";
		document.getElementById("after_submitQ3").style.background = "lightgreen";
		document.getElementById("afterQ3_picture").innerHTML = "With a video, you could see that this was a child jumping rhythmically on the crib.<br><br>Great job!";

	} else {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Not correct.";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("afterQ3_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ4() {

	if (document.getElementById("q4a").checked == true && document.getElementById("q4b").checked == true && document.getElementById("q4c").checked == true && document.getElementById("q4d").checked == false && document.getElementById("q4e").checked == false && document.getElementById("q4f").checked == false) {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Correct! <br><br>This EEG segment does not contain blinking artifact or posterior slow waves of youth (which are typically seen admixed with the posterior dominant rhythm).<br><br>There is intermittent focal slowing in the occipital regions. This can be occipital intermittent rhythmic delta activity (OIRDA), typically seen in childhood absence epilepsy. This can also just be intermittent focal slowing meaning a functional or structural lesion in the region of the slowing. Other examples from the same patient are shown below.";
		document.getElementById("after_submitQ4").style.background = "lightgreen";
		document.getElementById("answerQ4_picture").src = "EEG14_img/Q4.2.png";
		document.getElementById("answerQ4_picture2").src = "EEG14_img/Q4.3.png";
		document.getElementById("afterQ4_picture").innerHTML = "Great job!";

	} else {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Not correct.<br><br>More examples of the same below.";
		document.getElementById("after_submitQ4").style.background = "red";
		document.getElementById("answerQ4_picture").src = "EEG14_img/Q4.2.png";
		document.getElementById("answerQ4_picture2").src = "EEG14_img/Q4.3.png";
		document.getElementById("afterQ4_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ5() {

	if (document.getElementById("q5a").checked == false && document.getElementById("q5b").checked == false && document.getElementById("q5c").checked == false && document.getElementById("q5d").checked == false && document.getElementById("q5e").checked == true && document.getElementById("q5f").checked == false) {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Exactly! <br><br>OIRDA is classically associated with childhood absence epilepsy.<br><br>Associations that are worth remembering are:<br>temporal lobe epilepsy and focal temporal epileptiform discharges and focal temporal slowing;<br>occipital epilepsies and focal occipital epileptiform discharges;<br>juvenile myoclonic epilepsy and generalized polyspikes and photoparoxysmal response;<br>West syndrome and hypsharrhythmia.<br><br>Obviously, these associations are a simplification of reality, but are helpful to keep in mind because they may help you diagnose a particular disease or answer a question in an exam.<br><br>The patient in question 4 had intermittent rhythmic focal slowing in the occipital regions, which could be OIRDA and she also had absence seizures (like the one below).";
		document.getElementById("after_submitQ5").style.background = "lightgreen";
		document.getElementById("answerQ5_picture").src = "EEG14_img/Q5.1.png";
		document.getElementById("afterQ5_picture").innerHTML = "Great job!";

	} else {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Not correct.<br><br>This type of epilepsy has seizures like the one below.";
		document.getElementById("after_submitQ5").style.background = "red";
		document.getElementById("answerQ5_picture").src = "EEG14_img/Q5.1.png";
		document.getElementById("afterQ5_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ6() {

	if (document.getElementById("q6a").checked == true && document.getElementById("q6b").checked == false && document.getElementById("q6c").checked == false && document.getElementById("q6d").checked == false && document.getElementById("q6e").checked == false && document.getElementById("q6f").checked == true) {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "Yes! <br><br>This is a normal awake EEG with a 10 Hz posterior dominant rhythm.<br><br>The red arrows point to posterior slow waves of youth, a normal variant in which there are some 1-2 Hz waves superimposed on the posterior dominant rhythm. This is completely normal and occurs in youth.<br><br>Sometimes if they are sharply-contoured, posterior slow waves of youth can look like polyspikes, but do not get fooled, they do not break the rhythm, they are just the posterior dominant rhythm.";
		document.getElementById("after_submitQ6").style.background = "lightgreen";
		document.getElementById("afterQ6_picture").innerHTML = "Great job!";

	} else {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "Not correct.";
		document.getElementById("after_submitQ6").style.background = "red";
		document.getElementById("afterQ6_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ7() {

	if (document.getElementById("q7a").checked == true && document.getElementById("q7b").checked == false && document.getElementById("q7c").checked == false && document.getElementById("q7d").checked == false && document.getElementById("q7e").checked == false && document.getElementById("q7f").checked == true) {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "Correct! <br><br>This is a normal EEG segment during wakefulness (as indicated by the posterior dominant rhythm, eyelid blinking artifact and the muscle artifact).<br><br>It is relatively easy to find sharply-contoured elements in the EEG (actually, the red arrows were placed to mislead you into believing that these were epileptiform discharges). Inexperienced EEG readers tend to overcall all sharply-contoured elements epileptiform activity (frequently with important clinical consequences like putting a patient on antiseizure medication for several years). What will make you a better EEG reader is to know what is not a spike even if it looks like one.<br><br>In this case, the sharply-contoured elements marked by the red arrows do not break the rhythm, do not have a good morphology (a morphology typical of any of the epileptiform discharges), and do not have an electrical field. Importantly, in other montages (bipolar transverse and referential to Cz below), the supposed epileptiform discharges do not look as sharply-contoured.";
		document.getElementById("after_submitQ7").style.background = "lightgreen";
		document.getElementById("answerQ7_picture").src = "EEG14_img/Q7.3.png";
		document.getElementById("answerQ7_picture2").src = "EEG14_img/Q7.4.png";
		document.getElementById("afterQ7_picture").innerHTML = "When in doubt about an epileptiform discharge, do not overcall. Ask yourself: does it have a good morphology?, does it have a field?, does it break the rhythm?, and ask again the same questions looking at it in 2-3 other montages. Then, things will be much more clear.<br><br>Great job!";

	} else {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "Not correct.<br><br>Here you have details, a potential explanation of what you see, and the same segment in another montage (linked ears).";
		document.getElementById("after_submitQ7").style.background = "red";
		document.getElementById("answerQ7_picture").src = "EEG14_img/Q7.3.png";
		document.getElementById("answerQ7_picture2").src = "EEG14_img/Q7.4.png";
		document.getElementById("afterQ7_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ8() {

	if (document.getElementById("q8a").checked == false && document.getElementById("q8b").checked == false && document.getElementById("q8c").checked == true && document.getElementById("q8d").checked == false && document.getElementById("q8e").checked == true && document.getElementById("q8f").checked == false) {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "Correct! <br><br> This EEG segment belongs to wakefulness as shown by the muscle artifact.<br><br>In the right hemisphere you can see spike-wave complexes in the right centrotemporoparietal region. This patient also has semirrhythmic right centrotemporal slowing with some evolution in frequency and amplitude.";
		document.getElementById("after_submitQ8").style.background = "lightgreen";
		document.getElementById("answerQ8_picture").src = "EEG14_img/Q8.2.png";
		document.getElementById("afterQ8_picture").innerHTML = "Right centrotemporoparietal spike-wave complexes are suggestive of a decreased threshold for seizures in the right centrotemporoparietal region.<br><br>Semirhythmic slowing in the right centrotemporoparietal semirrhythmic slowing is suggestive of functional or structural lesion in the right centrotemporoparietal region.<br><br>This patient had a structural lesion in the righ centrotemporoparietal region, most prominent in the right mesial temporal region. He also had electroclinical seizures coming from the right temporal region.<br><br>Great job!";

	} else {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "Not correct. <br><br> See other findings from the same patient in case that it helps.";
		document.getElementById("after_submitQ8").style.background = "red";
		document.getElementById("answerQ8_picture").src = "EEG14_img/Q8.2.png";
		document.getElementById("afterQ8_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ9() {

	if (document.getElementById("q9a").checked == false && document.getElementById("q9b").checked == true && document.getElementById("q9c").checked == true && document.getElementById("q9d").checked == true && document.getElementById("q9e").checked == false && document.getElementById("q9f").checked == false) {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "Correct! <br><br> This is an EEG segment with a burst of irregular frontal-predominant generalized 3-4 Hz spike-wave complexes for approximately 4 seconds. Definitively abnormal.<br><br>This pattern can represent both an ictal or an interictal pattern.<br><br>In this particular 3 year-old girl, there was a seizure with head nod.<br><br>Similar seizures from the same patient below, some of them with polyspikes also.";
		document.getElementById("after_submitQ9").style.background = "lightgreen";
		document.getElementById("answerQ9_picture").src = "EEG14_img/Q9.2.png";
		document.getElementById("answerQ9_picture2").src = "EEG14_img/Q9.3.png";
		document.getElementById("afterQ9_picture").innerHTML = "Great job!";

	} else {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "Not correct.<br><br>Do the EEG findings below help?";
		document.getElementById("after_submitQ9").style.background = "red";
		document.getElementById("answerQ9_picture").src = "EEG14_img/Q9.2.png";
		document.getElementById("answerQ9_picture2").src = "EEG14_img/Q9.3.png";
		document.getElementById("afterQ9_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ10() {

	if (document.getElementById("q10a").checked == false && document.getElementById("q10b").checked == true && document.getElementById("q10c").checked == true && document.getElementById("q10d").checked == true && document.getElementById("q10e").checked == true && document.getElementById("q10f").checked == true) {
		document.getElementById("after_submitQ10").style.visibility = "visible";
		document.getElementById("answerQ10").innerHTML = "Correct! <br><br> This EEG segment contains a pattern with evolution in frequency, amplitude, wave morphology, and spatial spread.<br><br>The electric fields of the pattern make anatomical sense and this is a seizure.<br><br>In particular, a focal seizure.";
		document.getElementById("after_submitQ10").style.background = "lightgreen";
		document.getElementById("afterQ10_picture").innerHTML = "Main defining feature of most seizures? Evolution.<br><br>Great job!";

	} else {
		document.getElementById("after_submitQ10").style.visibility = "visible";
		document.getElementById("answerQ10").innerHTML = "Not correct.";
		document.getElementById("after_submitQ10").style.background = "red";
		document.getElementById("afterQ10_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}







