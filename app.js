const färger = ["♠️", "♥️", "♦️", "♣"]
const valörer = [
  "Ess",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Knekt",
  "Dam",
  "Kung",
]

// Klass för att skapa spelkort
class Kort {
  constructor(valör, färg) {
    this.valör = valör
    this.färg = färg
  }
}

// Klass för stack
class Kortlek {
  constructor() {
    this.stack = []
  }

  // Lägg ett kort överst i leken
  laggTillKort(item) {
    this.stack.push(item)
  }
  // Ta ett kort överst från leken
  draKort() {
    let draget_kort = this.stack.pop()
    console.log(`Du drar ${draget_kort.färg} ${draget_kort.valör}`)
    return draget_kort
  }

  // Visa korten som finns i leken (I ordning)
  visaLek() {
    this.stack.forEach((kort) => {
      console.log(kort.färg, kort.valör)
    })
  }

  // Visa hur många kort som finns
  visaLängd() {
    console.log(`Kortleken har ${this.stack.length} kort`)
  }

  // Blanda leken
  blanda() {
    for (let i = this.stack.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = this.stack[i]
      this.stack[i] = this.stack[j]
      this.stack[j] = temp
    }
  }
}

// 1. Skapa ett kortleks-objekt från klassen Kortlek
let kortlek = new Kortlek()
let kort = new Kort(valörer[0], färger[0]) // Lägger in ett kort i leken

kortlek.laggTillKort(kort)
kortlek.laggTillKort(new Kort(valörer[1], färger[0])) // Lägger ytterligare ett kort i leken.
kortlek.visaLek() // alla kort i leken visas i konsollen.

// 2. Skapa 52 kort som ni lägger till i erat kortleksobjekt.
//   a) Skapa en for-slinga som med variabeln i itererar genom alla färger.
//   b) Inuti den första for-slingan, skapa en ny for-slinga som med variabeln j itererar
//       genom alla valörer.
//   c) Nu kan ni i den nästlade for-slingan skapa ett nytt kort, och sedan pusha det till
//       kortleks-objektet.
//   d) Efter den nästlade for-slingan, testa att skriva ut alla kort med metoden visa_lek().

// 3. Testa att blanda kortleken med blanda() och visa kortleken igen.
// 4. Skapa en litet spel med hjälp av knapparna i sidan index.html

// Spelet ska låta användaren välja fem kort (Du skapar alltså en kortlek och 'poppar' fem kort)
// Lätt: Värdera hand ska gå igenom de fem korten och meddela om användaren har ett par.
// Medel: Värdera hand ska även kunna märka om användaren har triss eller kåk.
// Svår: Värdera hand ska meddela om användaren har någon giltig pokerhand.
// Här finns olika pokerhänder: https://sv.wikipedia.org/wiki/Pokerhand

/**
 * Eventhanterare kopplade till knapparna i sidan.
 */
function shuffle() {
  // Ska anropa metoden för att blanda kortleken
  console.log("Shuffla shuffla!")
}

function drawFiveCards() {
  // Ska dra fem kort, lägga dem i en array och visa dem med funktionen visaHand() nedan
  console.log("Read em and weep!")
}

function valueHand() {
  // Ska värdera handen enligt pokerregler och skriva ut resultatet med
  // visaResultat(). T.ex. visaResultat("Du fick ett par")
  console.log("Come on now!")
}

/**
 * Hjälpfunktioner
 * De här kommer hjälpa dig att visa saker på sidan.
 */

/**
 * visaHand tar en array med kort och visar dem i sidan.
 * @param {Kort[]} hand
 */
function visaHand(hand) {
  let html = ""
  for (let i = 0; i < hand.length; i++) {
    const kort = hand[i]
    html += kort.färg + " " + kort.valör + "<br>"
  }
  document.getElementById("handen").innerHTML = html
}

// visaHand anropas så här
visaHand([new Kort("Ess", "♥")])

function visaResultat(str) {
  document.getElementById("resultat").innerText = str
}
