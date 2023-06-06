AFRAME.registerComponent('box-collision', {
    dependencies: ['position'],

    tick: function() {
        var bulletEls = document.querySelectorAll('[bullet]');
        for (var i = 0; i < bulletEls.length; i++) {
            var bulletEl = bulletEls[i];
            var bulletPosition = bulletEl.object3D.position;
            var boxPosition = this.el.object3D.position;
            if (bulletPosition.distanceTo(boxPosition) < 1) { // Assuming the box has a size of 1.
                this.el.setAttribute('material', 'color', getRandomColor());
                bulletEl.parentNode.removeChild(bulletEl); // Remove the bullet.
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
