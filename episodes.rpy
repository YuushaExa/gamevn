label Test:
label scene1:
    "You wake up in a strange place."
    menu:
        "Look around.":
            jump scene2
        "Go back to sleep.":
            jump scene3

label scene2:
    "You see a door."
    menu:
        "Open the door.":
            jump scene4
        "Ignore it.":
            jump scene5

label scene3:
    "You fall back asleep and miss the adventure."
    jump scene5

label scene4:
    "The door creaks open, revealing a dark hallway."
    jump episode2

label scene5:
    "You decide to stay put, wondering what lies beyond."
    jump episode2

label episode2:
    label scene1:
    "You step out of the door and into the unknown."
    menu:
        "Take a left turn.":
            jump scene6
        "Take a right turn.":
            jump scene7

label scene6:
    "You encounter a friendly traveler."
    menu:
        "Ask the traveler for help.":
            jump scene8
        "Continue on your own.":
            jump scene9

label scene7:
    "You find a hidden path leading to a beautiful garden."
    # End of this path, you can add more scenes or choices here.
    jump scene10

label scene8:
    "The traveler points you towards the nearest town."
    # End of this path, you can add more scenes or choices here.
    jump scene10

label scene9:
    "You venture deeper into the unknown, feeling a mix of excitement and fear."
    # End of this path, you can add more scenes or choices here.
    jump scene10

label scene10:
    "As you explore, you realize that every choice leads to new adventures."
    # You can continue the story from here or add more choices.
