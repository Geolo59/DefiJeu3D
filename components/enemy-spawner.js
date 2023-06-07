AFRAME.registerComponent('enemy-spawner', {
    schema: {
        maxEnemies: {type: 'number', default: 10},
        spawnInterval: {type: 'number', default: 2000} // in ms
    },

    init: function() {
        this.enemyCount = 0;
        this.spawnEnemy = this.spawnEnemy.bind(this);
        this.spawnIntervalID = setInterval(this.spawnEnemy, this.data.spawnInterval);
    },

    spawnEnemy: function() {
        if (this.enemyCount >= this.data.maxEnemies) return;

        var enemyEl = document.createElement('a-entity');
        enemyEl.setAttribute('geometry', 'primitive: box');
        enemyEl.setAttribute('material', 'color: blue');
        enemyEl.setAttribute('enemy', '');
        enemyEl.setAttribute('position', this.randomPosition());

        this.el.sceneEl.appendChild(enemyEl);
        this.enemyCount++;
    },

    randomPosition: function() {
        // generate random position within certain range
        var posX = Math.random() * 10 - 5;
        var posY = Math.random() * 10 - 5;
        var posZ = Math.random() * 10 - 5;

        return {x: posX, y: posY, z: posZ};
    },

    remove: function() {
        // clean up
        clearInterval(this.spawnIntervalID);
    }
});
