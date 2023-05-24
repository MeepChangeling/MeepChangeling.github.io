var ttsreader = `
<div class="mediacontrol">
	<script src="../scripts/tts.js"></script>
	<img style="width: 90%; margin-top: 20px; display: block; margin-left: auto; margin-right: auto; margin-bottom: 3px;" src="../img/speaker.png">
	<img id="vactube" style="width: 70%; display: block; margin-left: auto; margin-right: auto;" src="../img/vacumetube.png">
	<div style="margin: auto; padding-left: 16%;">
    <button class="mediacontrollbutton" id=play></button>
    <button class="mediacontrollbutton" id=pause></button>
    <button class="mediacontrollbutton" id=stop></button>
	</div>
	</div>`;

// inserting tts reader in beginning of body
document.body.insertAdjacentHTML("afterbegin", ttsreader);