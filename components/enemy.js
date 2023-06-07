AFRAME.registerComponent('enemy', {
    schema: {
        speed: {type: 'number', default: 0.05}
    },

    init: function() {
        this.el.addEventListener('hit', this.onBulletHit.bind(this));
    },

    tick: function() {
        var cameraEl = this.el.sceneEl.camera.el;
        var direction = new THREE.Vector3().subVectors(cameraEl.object3D.position, this.el.object3D.position).normalize();

        this.el.object3D.position.add(direction.multiplyScalar(this.data.speed));

        // Collision detection
        var distance = this.el.object3D.position.distanceTo(cameraEl.object3D.position);

        if (distance < 1) { // adjust this value based on your needs
            // Decrease player's lives
            var livesEl = document.querySelector('#lives');
            var lives = Number(livesEl.getAttribute('value').split(' ')[1]);
            livesEl.setAttribute('value', `Lives: ${--lives}`);

            // Remove the enemy
            this.el.parentNode.removeChild(this.el);
        }
    },

    onBulletHit: function() {
        // Increase score
        var scoreEl = document.querySelector('#score');
        var score = Number(scoreEl.getAttribute('value').split(' ')[1]);
        scoreEl.setAttribute('value', `Score: ${++score}`);

        // Remove the enemy
        this.el.parentNode.removeChild(this.el);
    }
});
