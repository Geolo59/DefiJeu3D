AFRAME.registerComponent('score', {
    init: function () {
        var score = 0;

        // Listen for colorChanged event
        this.el.addEventListener('colorChanged', function () {
            // Increase score
            score++;

            // Update score display
            document.querySelector('#score').innerText = "Score: " + score;
        });
    }
});