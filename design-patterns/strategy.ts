interface WeaponBehavior {
    useWeapon();
}

class KnifeBehavior implements WeaponBehavior{
    useWeapon() {}
}

class AxeBehavior implements WeaponBehavior {
    useWeapon() {}
}

class BowAndArrowBehavior implements WeaponBehavior {
    useWeapon() {}
}

abstract class Character {
    behavior: WeaponBehavior;
    setWeapon(weapon: WeaponBehavior) {
        this.behavior = weapon;
    }
    abstract fight();
}

class King extends Character {
    fight() {}
}

class Queen extends Character {
    fight() {}
}

class Knight extends Character {
    fight() {};
}



class Application {
    main() {
        const king: Character = new King();
        const queen: Character = new Queen();
        const knight: Character = new Knight();

        king.setWeapon(new AxeBehavior());
        queen.setWeapon(new KnifeBehavior());
        knight.setWeapon(new BowAndArrowBehavior());

        king.fight(); // Fighting with Axe
        queen.fight(); // Fighting with Knife
        knight.fight(); // Fighting with Bow and arrow
    }
}