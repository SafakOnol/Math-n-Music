const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playSound(frequency = 440, duration = 1) {
    const osc = audioContext.createOscillator();
    const envelope = audioContext.createGain();
    osc.connect(envelope);
    envelope.connect(audioContext.destination);

    envelope.gain.setValueAtTime(0, audioContext.currentTime);
    envelope.gain.linearRampToValueAtTime(0.05, audioContext.currentTime + 0.05);
    envelope.gain.linearRampToValueAtTime(0, audioContext.currentTime + duration);
    osc.frequency.setValueAtTime(frequency, audioContext.currentTime);

    osc.start();
    osc.stop(audioContext.currentTime + duration);
}