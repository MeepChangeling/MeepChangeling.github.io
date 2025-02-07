onload = function() {
    if ('speechSynthesis' in window) with(speechSynthesis) {


        var playEle = document.querySelector('#play');
        var pauseEle = document.querySelector('#pause');
        var stopEle = document.querySelector('#stop');
        var flag = false;


        playEle.addEventListener('click', onClickPlay);
        pauseEle.addEventListener('click', onClickPause);
        stopEle.addEventListener('click', onClickStop);

        function onClickPlay() {
            if(!flag){
                flag = true;
                utterance = new SpeechSynthesisUtterance(document.querySelector('article').textContent);
                utterance.voice = getVoices()[0];
                utterance.onend = function(){
                    flag = false;
                };
                
                
                speak(utterance);
            }
             if (paused) { /* unpause/resume narration */
                
                
                resume();
            }
		
			{
			var img = document.getElementById("vactube");
			img.src="../img/vacumetubelit.gif";
			return false;
}
			
        }

        function onClickPause() {
            if(speaking && !paused){ /* pause narration */
                
                
                pause();
            }
		var img = document.getElementById("vactube");
		img.src="../img/vacumetubelit.png";
		return false;
        }

        function onClickStop() {
            if(speaking){ /* stop narration */
                /* for safari */
                
                
                flag = false;
                cancel();

            }
			var img = document.getElementById("vactube");
			img.src="../img/vacumetube.png";
			return false;
        }

    }

    else { /* speech synthesis not supported */
        msg = document.createElement('h5');
        msg.textContent = "Detected no support for Speech Synthesis";
        msg.style.textAlign = 'center';
        msg.style.backgroundColor = 'red';
        msg.style.color = 'white';
        msg.style.marginTop = msg.style.marginBottom = 0;
        document.body.insertBefore(msg, document.querySelector('div'));
    }

}