music.play(music.tonePlayable(988, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(988, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
basic.forever(function () {
    music.play(music.stringPlayable("C C5 C5 B C G G A ", 200), music.PlaybackMode.UntilDone)
})
