
function checkQ1() {

	if (document.getElementById("q1a").checked == false && document.getElementById("q1b").checked == false && document.getElementById("q1c").checked == false && document.getElementById("q1d").checked == true && document.getElementById("q1e").checked == true && document.getElementById("q1f").checked == false) {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Exactly! <br><br> Although there are no eyeblink artifacts or muscle artifact (the patient is not blinking or moving during this short segment), there is a posterior dominant rhythm which can be identified on both hemispheres.<br><br>Also, intermittently, 2-3 Hz frequencies can be identified in the left posterior channels (especially, P7-O1): this is intermittent focal slowing. This may be easier to identify in the following tracings from the same patient:";
		document.getElementById("after_submitQ1").style.background = "lightgreen";
		document.getElementById("answerQ1_picture").src = "EEG13_img/Q1.2.png";
		document.getElementById("answerQ1_picture_2").src = "EEG13_img/Q1.3.png";
		document.getElementById("afterQ1_picture").innerHTML = "Compare the right and left posterior regions. Do you see the difference?<br><br>Focal slowing means a functional or structural lesion in the region with slow frequencies. Before the times of modern neuroimaging, EEG was one of the best tools to localize brain lesions.<br><br>This patient had a structural lesion in the context of posterior reversible encephalopathy syndrome as shown in the brain MRI below.<br><br>Great job!";
		document.getElementById("answerQ1_picture_3").src = "EEG13_img/Q1.4.png";

	} else {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Not correct. <br><br>Try to compare the right and left posterior regions in the EEG. Are the same or different? The EEG segments below are from the same patient.";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("answerQ1_picture").src = "EEG13_img/Q1.2.png";
		document.getElementById("answerQ1_picture_2").src = "EEG13_img/Q1.3.png";
		document.getElementById("afterQ1_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ2() {

	if (document.getElementById("q2a").checked == false && document.getElementById("q2b").checked == true && document.getElementById("q2c").checked == false && document.getElementById("q2d").checked == true && document.getElementById("q2e").checked == false && document.getElementById("q2f").checked == false) {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Correct! <br><br> There is intermittent focal slowing in the posterior regions, in particular in the occipital regions.<br><br>This occipital intermittent rhythmic delta activity is actually called occipital intermittent rhythmic delta activity (OIRDA) and is a typical feature of childhood absence epilepsy. If you see that, do not be surprised if a typical absence seizure (or more than one)  appears in that EEG.<br><br>In fact the following appeared in this patient's EEG:";
		document.getElementById("after_submitQ2").style.background = "lightgreen";
		document.getElementById("answerQ2_picture").src = "EEG13_img/Q2.3.png";
		document.getElementById("afterQ2_picture").innerHTML = "A typical absence seizure!<br><br>Great job!";

	} else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Not correct. <br><br>This question is quite specific. Try to find out what OIRDA stands for, how it looks like, and what epileptic syndrome it is associated with.";
		document.getElementById("after_submitQ2").style.background = "red";
		document.getElementById("answerQ2_picture").src = "";
		document.getElementById("afterQ2_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ3() {

	if (document.getElementById("q3a").checked == false && document.getElementById("q3b").checked == false && document.getElementById("q3c").checked == false && document.getElementById("q3d").checked == false && document.getElementById("q3e").checked == false && document.getElementById("q3f").checked == true) {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Correct! <br><br> There are spikes which are more prominent in the P4-O2 and the P8-O2 channels.<br><br>Because O2 is end of chain (it is the last electrode in the chain Fp2-F4-C4-P4-O2 and in the chain Fp2-F8-T8-P8-O2), it is difficult to see a fase reversal. Looking at a transverse montage where O2 is not the end of chain electrode, it is easy to see the negative fase reversal:";
		document.getElementById("after_submitQ3").style.background = "lightgreen";
		document.getElementById("answerQ3_picture").src = "EEG13_img/Q3.2.png";
		document.getElementById("afterQ3_picture").innerHTML = "Great job!";

	} else {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Not correct. <br><br>Maybe it is more clear on transverse montage:";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("answerQ3_picture").src = "EEG13_img/Q3.2.png";
		document.getElementById("afterQ3_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ4() {

	if (document.getElementById("q4a").checked == true && document.getElementById("q4b").checked == false && document.getElementById("q4c").checked == false && document.getElementById("q4d").checked == true && document.getElementById("q4e").checked == true && document.getElementById("q4f").checked == true) {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Correct! <br><br> This EEG segment shows blinking artifact and a posterior dominant rhythm at approximately 10 Hz, which makes for a normal EEG segment during wakefulness (not stage II sleep).<br><br>Posterior slow waves of youth are the undulating slow waves on which the posterior dominant rhythm is superimposed. As its names suggest, they occur mostly in youth (adolescents, young adults).";
		document.getElementById("after_submitQ4").style.background = "lightgreen";
		document.getElementById("answerQ4_picture").src = "EEG13_img/Q4.2.png";
		document.getElementById("afterQ4_picture").innerHTML = "Great job!";

	} else {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Not correct.<br><br>What are the elements marked in red?";
		document.getElementById("after_submitQ4").style.background = "red";
		document.getElementById("answerQ4_picture").src = "EEG13_img/Q4.2.png";
		document.getElementById("afterQ4_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ5() {

	if (document.getElementById("q5a").checked == false && document.getElementById("q5b").checked == false && document.getElementById("q5c").checked == false && document.getElementById("q5d").checked == true && document.getElementById("q5e").checked == true && document.getElementById("q5f").checked == true) {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Exactly! <br><br> This is epileptiform activity triggered by photic stimulation, which is called photoparoxysmal response.<br><br>No need to call the rapid response team for this because this is a brief epileptiform discharge, not a seizure.<br><br>The effect of photic stimulation used during EEG is not avoided closing the eyes because it is powerful enough to affect the eyes even with closed eyelids (which is great, because most patients close their eyes during photic stimulation).";
		document.getElementById("after_submitQ5").style.background = "lightgreen";
		document.getElementById("afterQ5_picture").innerHTML = "Great job!";

	} else {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Not correct.";
		document.getElementById("after_submitQ5").style.background = "red";
		document.getElementById("afterQ5_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ6() {

	if (document.getElementById("q6a").checked == true && document.getElementById("q6b").checked == false && document.getElementById("q6c").checked == false && document.getElementById("q6d").checked == true && document.getElementById("q6e").checked == true && document.getElementById("q6f").checked == true) {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "Yes! <br><br>In some patients, photoparoxysmal response might decrease or even disappear with color filters.<br><br>When you encounter a photoparoxysmal response, the first step is to repeat it to make sure that the finding is present quite consistently and not just because epileptiform activity happened to occur just at that moment.<br><br>Then, the second step is to test several color filters and see if the photoparoxysmal response disappears. Patients with photoparoxysmal response have an increased predisposition to seizures when exposed to repetitive lights. In these patients (not in every patient with epilepsy or in every patient with photoparoxysmal response) use of color-filtered glasses might help reduce the risk of seizures.<br><br>Not all patients with photoparoxysmal response improve with color filters and the sensitivity to different colors is different in different patients.";
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
		document.getElementById("answerQ7").innerHTML = "Correct! <br><br>This is a normal EEG segment. The slowing is a hypersynchrony, which is commonly seen during drowsiness in young children (this patient was 7 years-old).<br><br>There are a couple of elements which look suspicious and may look like a spike-wave complex (red arrows in the figure below). However, they are most likely the superimposition of benign looking elements (leftmost red arrow) on the slowing. A clue to recognize that this is a superimposition of benign elements giving the appeareance of a spike-wave complex is that the pseudospike does not always occur before the slow wave, but sometimes in the middle of it (as a hump).";
		document.getElementById("after_submitQ7").style.background = "lightgreen";
		document.getElementById("answerQ7_picture").src = "EEG13_img/Q7.2.png";
		document.getElementById("answerQ7_picture2").src = "EEG13_img/Q7.3.png";
		document.getElementById("answerQ7_picture3").src = "EEG13_img/Q7.4.png";
		document.getElementById("afterQ7_picture").innerHTML = "<br><br>There is no field of the spike-wave complex. When in doubt, look at the same segment in a different montage. Here if you look at the same segment in referential montage to linked ears, the suspicious spike-wave complex disappears.<br><br>There are no vertex waves or sleep spindles in this EEG tracing.<br><br>Great job!";

	} else {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "Not correct.<br><br>Here you have details, a potential explanation of what you see, and the same segment in another montage (linked ears).";
		document.getElementById("after_submitQ7").style.background = "red";
		document.getElementById("answerQ7_picture").src = "EEG13_img/Q7.2.png";
		document.getElementById("answerQ7_picture2").src = "EEG13_img/Q7.3.png";
		document.getElementById("answerQ7_picture3").src = "EEG13_img/Q7.4.png";
		document.getElementById("afterQ7_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ8() {

	if (document.getElementById("q8a").checked == false && document.getElementById("q8b").checked == false && document.getElementById("q8c").checked == true && document.getElementById("q8d").checked == false && document.getElementById("q8e").checked == true && document.getElementById("q8f").checked == false) {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "Correct! <br><br> This EEG segment belongs to wakefulness as shown by the muscle artifact in the frontal leads. Note: wakefulness can have no eyeblink artifacts, no posterior dominant rhythm, and no muscle artifact (at least, for some period: some segments of EEG in real life can be more complicated than in the prototypical cases you see when learning EEG, however, you will recognize them because they are not isolated, but surrounded by other wakefulness segments).<br><br>In the right hemisphere you can see sharp waves with a negative fase reversal at C4 and T8, meaning that they are centro-temporal. Some more examples from the same patient can be seen below (highlighted with red arrows).";
		document.getElementById("after_submitQ8").style.background = "lightgreen";
		document.getElementById("answerQ8_picture").src = "EEG13_img/Q8.2.png";
		document.getElementById("answerQ8_picture2").src = "EEG13_img/Q8.3.png";
		document.getElementById("afterQ8_picture").innerHTML = "These are centrotemporal sharp-waves. They appeared on the right and left centrotemporal regions. They were sleep-potentiated (that was not shown in the EEG segments above). You should think about...rolandic epilepsy (benign epilepsy with centrotemporal spikes, currently termed childhood epilepsy with centrotemporal spikes).<br><br>Great job!";

	} else {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "Not correct. <br><br> Some more examples (highlighted with red arrows) from the same patient in case that it helps.";
		document.getElementById("after_submitQ8").style.background = "red";
		document.getElementById("answerQ8_picture").src = "EEG13_img/Q8.2.png";
		document.getElementById("answerQ8_picture2").src = "EEG13_img/Q8.3.png";
		document.getElementById("afterQ8_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ9() {

	if (document.getElementById("q9a").checked == true && document.getElementById("q9b").checked == false && document.getElementById("q9c").checked == true && document.getElementById("q9d").checked == false && document.getElementById("q9e").checked == false && document.getElementById("q9f").checked == false) {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "Correct! <br><br> This is a normal EEG segment during wakefulness.<br><br>The deflections in the frontal leads are eyelid blinking artifacts.";
		document.getElementById("after_submitQ9").style.background = "lightgreen";
		document.getElementById("afterQ9_picture").innerHTML = "On occasions, some people blink their eyes very frequently, but that is still normal.<br><br>Great job!";

	} else {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "Not correct.";
		document.getElementById("after_submitQ9").style.background = "red";
		document.getElementById("afterQ9_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ10() {

	if (document.getElementById("q10a").checked == false && document.getElementById("q10b").checked == true && document.getElementById("q10c").checked == true && document.getElementById("q10d").checked == false && document.getElementById("q10e").checked == true && document.getElementById("q10f").checked == false) {
		document.getElementById("after_submitQ10").style.visibility = "visible";
		document.getElementById("answerQ10").innerHTML = "Correct! <br><br> This EEG segment belongs to wakefulness as shown by the muscle artifact in the temporal channels.<br><br>The rhythms in this EEG are slower than expected for a 9 year-old during wakefulness.<br><br>In particular, there is continuous generalized slowing in the theta/delta range and continuous bitemporal slowing in the delta range as shown in the figures below from the same patient.";
		document.getElementById("after_submitQ10").style.background = "lightgreen";
		document.getElementById("answerQ10_picture").src = "EEG13_img/Q10.2.png";
		document.getElementById("answerQ10_picture2").src = "EEG13_img/Q10.3.png";
		document.getElementById("answerQ10_picture3").src = "EEG13_img/Q10.4.png";
		document.getElementById("afterQ10_picture").innerHTML = "These findings are suggestive of a diffuse encephalopathy of non-specific etiology and of a functional or structural lesion in the temporal lobes bilaterally.<br><br>The patient had a bitemporal encephalitis as shown in the brain MRI.<br><br>Great job!";

	} else {
		document.getElementById("after_submitQ10").style.visibility = "visible";
		document.getElementById("answerQ10").innerHTML = "Not correct. <br><br> Some more examples and the brain MRI from the same patient in case that it helps.";
		document.getElementById("after_submitQ10").style.background = "red";
		document.getElementById("answerQ10_picture").src = "EEG13_img/Q10.2.png";
		document.getElementById("answerQ10_picture2").src = "EEG13_img/Q10.3.png";
		document.getElementById("answerQ10_picture3").src = "EEG13_img/Q10.4.png";
		document.getElementById("afterQ10_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}







