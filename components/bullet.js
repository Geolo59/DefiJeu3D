AFRAME.registerComponent('bullet', {
    schema: {
        speed: {default: -0.1}
    },

    tick: function () {
        var velocity = new THREE.Vector3();
        var direction = this.el.object3D.getWorldDirection(new THREE.Vector3());

        velocity.x = direction.x * this.data.speed;
        velocity.y = direction.y * this.data.speed;
        velocity.z = direction.z * this.data.speed;

        this.el.object3D.position.add(velocity);

        // Collision detection with enemies
        var enemyEls = document.querySelectorAll('[enemy]');

        for (var i = 0; i < enemyEls.length; i++) {
            var enemyEl = enemyEls[i];
            var enemyPosition = enemyEl.object3D.position;

            if (this.el.object3D.position.distanceTo(enemyPosition) < 1) {
                // Emit hit event
                enemyEl.emit('hit');

                // Remove the bullet
                this.el.parentNode.removeChild(this.el);
                break;
            }
        }
    }
});
