//Random Will Ferrell Quotes
const button = document.getElementById("button"); 
const quotes = [
    "He's an angry elf!” – Will Ferrell in Elf",
    "Well, um, actually a pretty nice little Saturday, we’re going to go to Home Depot. Yeah, buy some wallpaper, maybe get some flooring, stuff like that. Maybe Bed, Bath, & Beyond, I don’t know, I don’t know if we’ll have enough time. -Will Ferrell in Old School", 
    "I swear, I’m so pissed off at my mom. As soon as she’s of age, I’m putting her in a home. – Will Ferrell in Step Brothers",
    "Stay classy San Diego. – Will Ferrell in Anchorman", 
    "Absolutely ma-am, I would love to sign your baby. – Will Ferrell in Talladega Nights", 
    "HEY MOM! CAN WE GET SOME MEATLOAF? What is she doing back there? I never know what she’s doing. – Will Ferrell in Wedding Crashers", 
    "We elves try to stick to the four main food groups, candy, candy cane, candy corn, and syrup.” – Will Ferrell in Elf", 
    "Hey. They laughed at Louis Armstrong when he said he was gonna go to the moon. Now he’s up there, laughing at them. – Will Ferrell in Blades of Glory", 
    "I wanna say something. I’m gonna put it out there; if you like it, you can take it, if you don’t, send it right back…I want to be on you. – Will Ferrell in Anchorman", "The best way to spread Christmas cheer is singing loud for all to hear. – Will Ferrell in Elf",
    "You're my boy blue! You're my boy! – Will Ferrell in Old School",
    "Son of nutcracker – Will Ferrell in Elf",
    "I'm Ron Burgundy? -Will Ferrell in Ron Burgundy",
    ];


    randomizeQuotes = () => {
        let i, j, k;
          for (i = quotes.length -1; i > 0; i--) {
            j = Math.floor(Math.random() * i)
            k = quotes[i]
            quotes[i] = quotes[j]
            quotes[j] = k
          }
          document.getElementById("quote").innerHTML = quotes[0];
        }; 
    
        button.addEventListener("click", randomizeQuotes); 