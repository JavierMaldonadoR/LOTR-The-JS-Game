function Player(name) {

    this.name = name;
    this.hp = 100;
    this.mp = 100;
    this.hpPotion = 2;
    this.mpPotion = 2

    this.heal = function(targetPlayer) {

        if (this.mp >= 40) {
            this.mp -= 40;
            targetPlayer.hp += 20;
        } else {
            console.info(this.name + " don't have enough MP");
        }

        this.status(targetPlayer);

    }

    this.throwArrow = function(targetPlayer) {

        if (targetPlayer.hp > 40) {
            targetPlayer.hp -= 40;
        }else {
            targetPlayer.hp = 0;
            console.error(targetPlayer.name + " die!");
        }

        this.status(targetPlayer);

    }

    this.useHpPotion = function() {
        if (this.hpPotion >= 1) {
            this.hpPotion -= 1;
            this.hp += 40;
        } else {
            console.error(this.name + " don't have HP potions.");
        }

        this.singleStatus(this);
    }

    this.useMpPotion = function() {
        if (this.mpPotion >= 1) {
            this.mpPotion -= 1;
            this.mp += 40;
        } else {
            console.error(this.name + " don't have MP potions.");
        }

        this.singleStatus(this);
    }

    this.giveHpPotion = function(targetPlayer) {
        if (this.hpPotion >= 1) {
            this.hpPotion -= 1;
            targetPlayer.hpPotion += 1;
            console.info(targetPlayer.name + " receives an HP potion.");
        } else {
            console.error(this.name + " don't have HP potions.");
        }

        this.status(targetPlayer);
    }

    this.giveMpPotion = function(targetPlayer) {
        if (this.mpPotion >= 1) {
            this.mpPotion -= 1;
            targetPlayer.mpPotion += 1;
            console.info(targetPlayer.name + " receives an MP potion.");
        } else {
            console.error(this.name + " don't have MP potions.");
        }

        this.status(targetPlayer);
    }

    this.singleStatus = function() {
        console.log(this);
    }

    this.status = function(targetPlayer) {
        console.log(this);
        console.log(targetPlayer);
    }

};

var gandalf = new Player("Gandalf");
var legolas = new Player("Legolas");

console.log(gandalf);
console.log(legolas);
