function checkQ1() {

	if (document.question1.question.value == "a") {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Correct!! <br><br> Sleep deprivation is important before an EEG. It is arguably the best chance to trigger epileptiform activity in an EEG.<br>It could be a nuisance for the patient to find someone else to accompany them and transport them to the hospital, but it is worth it if one considers that it greatly increases the chance of capturing epileptiform discharges (and capturing epileptiform activity is one of the main reasons to get an EEG). If you are going to do an EEG, do it well (and that includes sleep deprivation the night prior to the EEG).";
		document.getElementById("after_submitQ1").style.background = "lightgreen";
		document.getElementById("afterQ1_picture").innerHTML = "After sleep deprivation there is an increased risk of the patient having a seizure. The risk is typically small, but not zero. It is best if the patient is accompanied by a family member or friend when they come to the hospital and when they go back home and catch up the lost sleep.<br><br> Great job!";

}

	if (document.question1.question.value == "b") {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "No! Definitively not!<br><br> Sleep-deprived driving is dangerous. <a href='https://drowsydriving.org/about/facts-and-stats/' target='_blank'> Very dangerous!</a> <a href='https://oem.bmj.com/content/oemed/57/10/649.full.pdf' target='_blank'> Sleep-deprived driving can be as dangerous as drunk driving.</a> Many people does drowsy driving, but that does not make it any better. <a href='https://pubmed.ncbi.nlm.nih.gov/16145022/' target='_blank'>If you think this might not affect you, look at this study.</a>";
		document.getElementById("after_submitQ1").style.background = "red";   
		document.getElementById("afterQ1_picture").innerHTML = "Apart from the dangers of sleep-deprived driving (slowed reaction times, risk of falling asleep while driving), a patient suspected of having epilepsy is at increased risk of having a seizure while sleep deprived while driving.<br><br> Try again!";

}

	if (document.question1.question.value == "c") {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "No, sorry! <br><br> Coming by public transportation is safer than the patient driving to the hospital himself.";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("afterQ1_picture").innerHTML = "However, there is still risk of the patient having a seizure on the way to the hospital. In that situation it would be easier if the patient had some family member or friend around him.<br><br> Try again!";

}

	if (document.question1.question.value == "d") {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "No, this answer is not right! <br><br> Sleep deprivation is part of the EEG the same way that hyperventilation or photic stimulation is part of the EEG.";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("afterQ1_picture").innerHTML = "An EEG without sleep deprivation is kind of incomplete. Sleep deprivation can be a nuisance for the patient and patient's family, but it is worth it.<br><br> Try again!";

}

}








function checkQ2() {

	if (document.getElementById("q2a").checked == true && document.getElementById("q2b").checked == false && document.getElementById("q2c").checked == false && document.getElementById("q2d").checked == false && document.getElementById("q2e").checked == false && document.getElementById("q2f").checked == true) {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Exactly! <br><br> This is normal and you should encourage the patient to do hyperventilation for a total of approximately 3 minutes.<br><br>Hyperventilation, especially in children, can provoke very prominent generalized slow waves in the EEG, but there is no limit in the amount of slowing or high-amplitude: it will be still normal during hyperventilation as long as it it symmetric. The pattern during hyperventilation will be abnormal only if it is persistently asymmetric. Or if there is epileptiform activity, of course!<br><br> In older children and adults, slowing during hyperventilation is less prominent as shown in the figure below (yes, the patient in the EEG segment below is hyperventilating as hard as the patient in the main figure for question 2, but the patient below is just older and there is less slowing with hyperventilation):";
		document.getElementById("after_submitQ2").style.background = "lightgreen";
		document.getElementById("answerQ2_picture").src = "EEG7_img/Q2.2.png";
		document.getElementById("afterQ2_picture").innerHTML = "There is no epileptiform activity in this EEG segment.<br><br>Hyperventilation is bothersome (it causes lightheadedness and sometimes tingling in the fingers), but in general it is very safe. <br><br> Great job!";

	} else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Not correct. <br><br> Make sure you checked all correct answers and unchecked all incorrect answers.";
		document.getElementById("after_submitQ2").style.background = "red";
		document.getElementById("answerQ2_picture").src = "";
		document.getElementById("afterQ2_picture").innerHTML = "<br><br> Try again!";

}


}









function checkQ3() {

	if (document.question3.question.value == "a") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "No. Sorry, this answer is not correct! <br><br> Although hyperventilation is very safe and typically only causes dizziness and paresthesias, hyperventilation can cause serious adverse effects in some patients.";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("afterQ3_picture").innerHTML = "Try again!";

}

	if (document.question3.question.value == "b") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Incorrect! <br><br> Hyperventilation does not cause hypoglycemia.";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("afterQ3_picture").innerHTML = "However, patients with relative hypoglycemia (for example, because their last meal was long before the EEG) have a higher probability to show epileptiform activity in the EEG during hyperventilation. <br><br> Try again!";

}

	if (document.question3.question.value == "c") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "No, sorry! <br><br> Hypertension by itself is not a contraindication to hyperventilation.";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("afterQ3_picture").innerHTML = "Try again!";

}

	if (document.question3.question.value == "d") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Correct! <br><br> Although hyperventilation is generally very safe, it causes hypocarbia and cerebral vasoconstriction.";
		document.getElementById("after_submitQ3").style.background = "lightgreen";
		document.getElementById("afterQ3_picture").innerHTML = "Do not do it in patients with a history of stroke or patients at high risk of having one.<br><br> Great job!";

}

	if (document.question3.question.value == "") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "You have not selected any answer. <br><br>Select one of the answers.";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("afterQ3_picture").innerHTML = "<br><br> Try again!";
}


}








function checkQ4() {

	if (document.question4.question.value == "c") {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Exactly!<br><br>Hyperventilation is particularly useful to bring epileptiform activity in generalized epilepsies, mostly in childhood absence epilepsy.";
		document.getElementById("after_submitQ4").style.background = "lightgreen";
		document.getElementById("afterQ4_picture").innerHTML = "Great job!";

} else {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Incorrect!";
		document.getElementById("after_submitQ4").style.background = "red";
		document.getElementById("afterQ4_picture").innerHTML = "Try again!";

}


}








function checkQ5() {

	if (document.question5.question.value == "c") {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Yes! <br><br> This is called 'driving'. If you pay attention, you will see that, as the photic stimulation starts, the waves in the posterior part of the EEG follow the frequency of the flashing lights: 12 Hz in the upper figure and 16 Hz in the lower figure.";
		document.getElementById("after_submitQ5").style.background = "lightgreen";
		document.getElementById("afterQ5_picture").innerHTML = "That is completely normal and it is thought to represent a visual evoked potential causing this wave in the occipital cortex.<br><br>To have driving during photic stimulation is normal.<br><br>To not have driving during photic stimulation is also normal.<br><br>So, it does not really matter if the EEG drives or not during photic stimulation. It has no practical consequence. Just make sure you do not inject antiseizure medications or call the response team for this!<br><br>Great job!";

} else {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "No.";
		document.getElementById("after_submitQ5").style.background = "red";
		document.getElementById("afterQ5_picture").innerHTML = "No need for special or heroic measures. <br><br> Try again!";

}


}








function checkQ6() {

	if (document.getElementById("q6a").checked == false && document.getElementById("q6b").checked == false && document.getElementById("q6c").checked == true && document.getElementById("q6d").checked == true && document.getElementById("q6e").checked == false && document.getElementById("q6f").checked == false) {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "Exactly! <br><br> There is epileptiform activity in this EEG segment (generalized spike-wave complexes to be precise) and the presence of epileptiform activity is abnormal. The meaning of epileptiform activity during activation procedures is the same as when epileptiform activity appears spontaneously.<br><br>When photic stimulation causes the appearance of epileptiform discharges (photoparoxysmal response) there is no need to perform any particular intervention. <br><br>Below there is another example of photoparoxysmal response:";
		document.getElementById("after_submitQ6").style.background = "lightgreen";
		document.getElementById("answerQ6_picture").src = "EEG7_img/Q6.2.png";
		document.getElementById("afterQ6_picture").innerHTML = "Rarely, photic stimulation (as any other activation procedure) can cause a seizure. Photoconvulsive response refers to the phenomenon of photic stimulation causing a seizure.<br><br> Great job!";

	} else {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "Not correct. <br><br> Make sure you checked all correct answers and unchecked all incorrect answers.";
		document.getElementById("after_submitQ6").style.background = "red";
		document.getElementById("answerQ6_picture").src = "";
		document.getElementById("afterQ6_picture").innerHTML = "Try again!";

}


}








function checkQ7() {

	if (document.question7.question.value == "a") {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "Exactly!<br><br>Photic stimulation is particularly useful to bring epileptiform activity in generalized epilepsies, mostly in juvenile myoclonic epilepsy.";
		document.getElementById("after_submitQ7").style.background = "lightgreen";
		document.getElementById("afterQ7_picture").innerHTML = "Great job!";

} else {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "Incorrect!";
		document.getElementById("after_submitQ7").style.background = "red";
		document.getElementById("afterQ7_picture").innerHTML = "Try again!";

}


}




