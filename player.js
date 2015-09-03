var audioElement = document.getElementById('background_audio');
audioElement.volume = 0.4;
// Turn off the default controls
audioElement.controls = false;

//Alert that the audo is ready to start playing
$('audio#background_audio').bind('canplay', function() {

});
// detect audio playing
$('audio#background_audio').bind('play', function() {
    $('#totalduration, #time').fadeIn('slow');
    $("[id*=audioPlayButtom]").addClass('isPlaying');

});
// detect audio pause
$('audio#background_audio').bind('pause', function() {
    $("#audioPlayButtom").removeClass('playPause');

});
// detect audio end
$('audio#background_audio').bind('ended', function() {
    $('#totalduration, #time').fadeOut('slow');
    $("[id*=audioPlayButtom-2]").removeClass('isPlaying');
    var nxtplay = $('.nowPlaying').next();
    nxtplay.click();
});

// var audio = audioElement.get(0);
/*play only audio or video*/
$('audio,video').bind('play', function() {
    playing = this;
    $('audio,video').each(function() {
        if (this != playing)
            this.pause();
    });
});

//HTML5 Audio - Percentage Loaded
audioElement.addEventListener('progress', function() {
    var audioBuffered = ($(this).get(0).buffered.end(0) / $(this).get(0).duration) * 100 + '%';
    // Change the width of the progress bar 

    $('#audioBuffered').css({width: audioBuffered});

});

/*play/pause*/
$("[id*='audioPlayButtom']").bind('click', function( ) {
    audioElement.paused ? audioElement.play() : audioElement.pause();
    $("[id*=audioPlayButtom-2]").toggleClass('isPlaying');
});

/* stop playing */
$("[id*=audioStop]").bind('click', function( ) {
    $("#tutorials li").removeClass("timeInfoShow");
    audioElement.pause();
    audioElement.currentTime = 0;
    $("[id*=audioPlayButtom-2]").removeClass('isPlaying');
    $('#totalduration, #time').fadeOut('slow');
});
/* min and secs  */
audioElement.addEventListener("timeupdate", function() {

    var time = document.getElementById('time'),
            currentTime = audioElement.currentTime,
            minutes = parseInt(currentTime / 60),
            seconds = parseInt(currentTime - (minutes * 60)),
            totalduration = document.getElementById('totalduration'),
            duration = audioElement.duration,
            min = parseInt(duration / 60),
            sec = parseInt(duration - (min * 60)),
            // How far through the track are we as a percentage seekbar 230px
            seekbar = (currentTime / duration) * 100 + '%';
    // Change the width of the progress bar 
    $('#audioSeekbar').css({width: seekbar});
    // seekbar input
    var seekbar = document.getElementById('seekbar');
    function setupSeekbar() {
        seekbar.min = audioElement.startTime;
        seekbar.max = audioElement.startTime + audioElement.duration;
    }
    audioElement.ondurationchange = setupSeekbar;

    function seekAudio() {
        audioElement.currentTime = seekbar.value;
    }

    function updateUI() {
        var lastBuffered = audioElement.buffered.end(audioElement.buffered.length - 1);
        seekbar.min = audioElement.startTime;
        seekbar.max = lastBuffered;
        seekbar.value = audioElement.currentTime;
    }

    seekbar.onchange = seekAudio;
    audioElement.ontimeupdate = updateUI;


    audioElement.addEventListener('durationchange', setupSeekbar);
    audioElement.addEventListener('timeupdate', updateUI);

    // If the number of minutes is less than 10, add a '0'
    if (min < 10) {
        min = '0' + min;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    // If the number of seconds is less than 10, add a '0'
    if (sec < 10) {
        sec = '0' + sec;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    // Display the current time
    time.innerHTML = minutes + ':' + seconds;
    // Display the time(full)
    totalduration.innerHTML = min + ':' + sec;
}, false);

/*mute song toggle*/
$('#mute').bind('click', function( ) {
    audioElement.muted = !audioElement.muted;
    $(this).toggleClass("isMute");
});
/* volume slider*/
$('#volume').change(function() {
    audioElement.volume = $(this).val() / 100;
});
$('#volume').change(function() {
    $('video')[0].volume = $(this).val() / 100;
});

/* play the prev song on the list */
$('#prevSong').bind('click', function( ) {
    var prvplay = $('.nowPlaying').prev();
    prvplay.click();
});

/* play the next song on the list */
$('#nextSong').bind('click', function( ) {
    var nxtplay = $('.nowPlaying').next();
    nxtplay.click();
});

/* reset song while playing*/

$('#reset').bind('click', function( ) {
    audioElement.currentTime = 0;
    audioElement.load();
    audioElement.play();
});