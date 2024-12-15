class Ball {
    constructor(track, radius, speed, soundFrequency, hue) {
        this.track = track;
        this.radius = radius;
        this.speed = speed;
        this.hue = hue;
        this.soundFrequency = soundFrequency;
        this.offset = 0;
        this.round = 0;
        this.progress = 0;
        this.center = this.track.getPosition(this.offset);
    }

    update() {
        this.offset += this.speed;
        const result = this.track.getPosition(this.offset);
        this.center = { x: result.x, y: result.y };
        this.progress = result.progress;
        if (result.round != this.round) {
            playSound(this.soundFrequency);
            this.round = result.round;
        }
    }

    draw(context) {
            context.beginPath();
            context.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
            const lightness = Math.max(50, 100 - 500 * this.progress);
            context.fillStyle = `hsl(${-1*this.hue}, 100%, ${lightness}%)`;
            context.fill();
    }

}