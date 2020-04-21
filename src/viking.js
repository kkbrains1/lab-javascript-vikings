// Soldier
debugger;

class Soldier {
  constructor (health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage (damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor (name, health, strength) {
    super (health, strength);
    this.name = name;
  }

  receiveDamage (damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry () {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage (damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}



// War
class War {
  constructor () {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking (viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon (saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack () {
    const randomInt = (array)  => Math.floor(Math.random() * array.length);
    const selectRandomSoldier = (soldiers) => soldiers[randomInt(soldiers)];
    //const selectRandomViking = (vikings) => vikings[randomInt(vikings)];
    const saxonDamage = selectRandomSoldier(this.saxonArmy).receiveDamage(selectRandomSoldier(this.vikingArmy).strength);
    if (saxonDamage.includes('died')) {
      this.saxonArmy = [];
      //.splice(0, this.saxonArmy.length)
    }
    return saxonDamage;    
  }

  saxonAttack () {
    const randomInt = (array)  => Math.floor(Math.random() * array.length);
    const selectRandomSoldier = (soldiers) => soldiers[randomInt(soldiers)];
    const vikingDamage = selectRandomSoldier(this.vikingArmy).receiveDamage(selectRandomSoldier(this.saxonArmy).strength);
    if (vikingDamage.includes('died')) {
      this.vikingArmy = [];      
    }
    return vikingDamage; 
  }
  
  
  showStatus () {
    if (!this.saxonArmy.length) {
      return `Vikings have won the war of the century!`;
    } else if (!this.vikingArmy.length) {
      return `Saxons have fought for their lives and survived another day...`;
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }

}
