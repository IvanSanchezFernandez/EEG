

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




function checkQ1() {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "The frequency of typical absence seizures in childhood absence epilepsy is around 3 Hz and their onset and end are abrupt and clearly differentiated from the background. Hyperventilation is the most effective trigger for typical absence seizures in childhood absence epilepsy (although most patients with childhood absence epilepsy will not have a seizure during hyperventilation).<br><br>Juvenile myoclonic epilepsy has absence seizures with a generalized spike-wave complexes at a frequency of around 4 Hz to 5 Hz. Polyspikes are typical of absences in juvenile myoclonic epilepsy. The onset and end of these seizures are abrupt and clearly differentiated from the background. Photic stimulation is the most typical trigger for seizures in juvenile myoclonic epilepsy (still, most patients with juvenile myoclonic epilepsy will not develop a seizure with photic stimulation).<br><br>Absence seizures in Lennox-Gastaut syndrome are atypical in that they are slower (1Hz to 2.5 Hz) and their onset and end are progressive, merging into the abnormally slow background.";
		document.getElementById("after_submitQ1").style.background = "lightgreen";	
}










function checkQ2() {

	if (document.question2.question.value == "a") {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Correct!! <br><br>Just to make it totally clear: typical absence seizures have a generalized onset.<br><br>However, rarely, seizures with a focal onset can have an almost indistinguishable appearance to typical absence seizures.<br><br>If you see a lead-in that consistently appears in the same side in several seizures, you should suspect that these seizures are not typical absence seizures, but focal seizures which quickly generalize. If you are interested on learning about the neural circuits which lead to seizure generalization you can find helpful information <a href='https://pubmed.ncbi.nlm.nih.gov/19524522/' target='_blank'>here</a> and <a href='https://pubmed.ncbi.nlm.nih.gov/23506484/' target='_blank'>here</a>.<br><br>Lead-ins can alternate side appearing sometimes on the right hemisphere and sometimes on the left hemisphere and this is not suspicious of a focal onset.<br><br>A typical absence seizure can have no lead-in and present with just the generalized onset.";
		document.getElementById("after_submitQ2").style.background = "lightgreen";
		document.getElementById("afterQ2_picture").innerHTML = "Great job!";

}	else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Not quite! <br><br>When would you be more suspicious of a focal onset for a seizure?";
		document.getElementById("after_submitQ2").style.background = "red";
		document.getElementById("afterQ2_picture").innerHTML = "Try again!";

}

}








function checkQ3() {

	if (document.getElementById("q3a").checked == false && document.getElementById("q3b").checked == true && document.getElementById("q3c").checked == false && document.getElementById("q3d").checked == false && document.getElementById("q3e").checked == false && document.getElementById("q3f").checked == false) {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Correct! <br><br> This is a seizure with generalized onset and a frequency that varies, but is around 10-20Hz.<br><br>The most common clinical correlate of generalized seizures with fast polyspikes is generalized tonic seizures.<br><br>There is evolution in frequency and amplitude in this seizure.";
		document.getElementById("after_submitQ3").style.background = "lightgreen";
		document.getElementById("answerQ3_picture").src = "EEG11_img/Q3.3.png";
		document.getElementById("afterQ3_picture").innerHTML = "Even if the spike frequency is very fast at all points during the seizure above, you can see some evolution with periods of speeding up and slowing down. There is also some evolution in amplitude. Compare the second marked by the first red bracket with the second marked by the second red bracket. In the first bracket the frequency is high and the amplitude relatively low. In the second bracket the frequency is low and the amplitude relatively high. Evolution in frequency and amplitude are major defining characteristics of a seizure.<br><br>Great job!";

	} else {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Not correct.<br><br>Remember that evolution in frequency and amplitude is one of the most characteristic features of a seizure.";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("answerQ3_picture").src = "EEG11_img/Q3.3.png";
		document.getElementById("afterQ3_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}



