class hero{
    constructor(nameHero, ageHero, typeHero ){
        this.nameHero = nameHero
        this.ageHero = ageHero
        this.typeHero = typeHero
    }

    attack(){
        let attackType = this.typeOfAttack()
        console.log("O " + this.nameHero + " atacou usando " + attackType)
    }

    
    typeOfAttack(){
        let typeAttack = ""
        if (this.typeHero === "mago")
            typeAttack = "magia"
            else if ( this.typeHero === "guerreiro")
                   typeAttack = "espada"
                else if (this.typeHero === "monge")
                       typeAttack = "artes marciais"
                    else if (this.typeHero === "ninja" )
                        typeAttack = "shuriken"
                        else ("um ataque desconhecido")
        return typeAttack
    }
}

let ninja = new hero("Henrique", 25, "ninja")
let mago = new hero("DarkMage", 45, "mago")
ninja.attack()
mago.attack()