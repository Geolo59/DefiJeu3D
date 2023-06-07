AFRAME.registerComponent('box-collision', {
    dependencies: ['position'],

    tick: function() {
        var bulletEls = document.querySelectorAll('[bullet]');

        for (var i = 0; i < bulletEls.length; i++) {
            var bulletEl = bulletEls[i];

            // Skip this bullet if it has already collided.
            if (bulletEl.collided) {
                continue;
            }

            var bulletPosition = bulletEl.object3D.position;
            var boxPosition = this.el.object3D.position;
            if (bulletPosition.distanceTo(boxPosition) < 1) { // Assuming the box has a size of 1.
                this.el.setAttribute('material', 'color', getRandomColor());

                // Mark this bullet as collided.
                bulletEl.collided = true;

                // Score.
                let scoreEl = document.querySelector('#score');
                let score = parseInt(scoreEl.getAttribute('value').split(' ')[1]);
                score++;
                scoreEl.setAttribute('value', `Score: ${score}`);

                // Remove the bullet on the next frame.
                setTimeout(() => bulletEl.parentNode.removeChild(bulletEl), 0);
            }
        }
    }
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
