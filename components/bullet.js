AFRAME.registerComponent('bullet', {
    schema: {
        speed: {default: -1},
    },

    tick: function (time, timeDelta) {
        var velocity = new THREE.Vector3();
        var direction = this.el.object3D.getWorldDirection(new THREE.Vector3());

        velocity.x = direction.x * this.data.speed;
        velocity.y = direction.y * this.data.speed;
        velocity.z = direction.z * this.data.speed;

        this.el.object3D.position.add(velocity);
    }
});