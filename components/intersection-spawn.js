AFRAME.registerComponent('intersection-spawn', {
    init: function () {
        var el = this.el;

        document.body.addEventListener('click', function () {
            var cameraEl = document.querySelector('a-camera');
            var bulletEl = document.createElement('a-entity');

            bulletEl.setAttribute('position', cameraEl.getAttribute('position'));
            bulletEl.setAttribute('rotation', cameraEl.getAttribute('rotation'));
            bulletEl.setAttribute('geometry', 'primitive: sphere; radius: 0.05');
            bulletEl.setAttribute('material', 'color: #ff0000');
            bulletEl.setAttribute('bullet', 'speed: -0.5');

            el.sceneEl.appendChild(bulletEl);
        });
    }
});